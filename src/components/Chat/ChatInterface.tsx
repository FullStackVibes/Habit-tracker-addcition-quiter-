import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Send, User as UserIcon } from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName?: string;
  createdAt: any;
}

export default function ChatInterface({ circleId, circleName }: { circleId: string; circleName: string }) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleId) return;

    const messagesPath = `circles/${circleId}/messages`;
    const q = query(
      collection(db, 'circles', circleId, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(msgs);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, messagesPath);
    });

    return unsubscribe;
  }, [circleId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !user) return;

    const messagesPath = `circles/${circleId}/messages`;
    try {
      await addDoc(collection(db, 'circles', circleId, 'messages'), {
        text: inputValue,
        senderId: user.uid,
        senderName: user.displayName || 'Anonymous',
        createdAt: serverTimestamp(),
      });
      setInputValue('');
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, messagesPath);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
      <div className="bg-white px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-800">{circleName} Support</h3>
          <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">Active Now</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 text-sm italic">
            No messages yet. Be the first to reach out.
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.senderId === user?.uid;
            return (
              <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${isMe ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className="flex items-center gap-2 mb-1">
                    {!isMe && <span className="text-[10px] font-bold text-slate-500">{msg.senderName}</span>}
                    <span className="text-[9px] text-slate-300">
                      {msg.createdAt && format(msg.createdAt.toDate(), 'HH:mm')}
                    </span>
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm ${
                    isMe 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/20' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow bg-slate-50 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 transition-all active:scale-90 shadow-lg shadow-indigo-500/20"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
