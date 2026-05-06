import React, { useState } from 'react';
import ChatInterface from '../components/Chat/ChatInterface';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Shield, ArrowLeft } from 'lucide-react';

const availableCircles = [
  { id: 'anxiety', name: 'Anxiety Control', icon: Shield, members: '1.2k' },
  { id: 'depression', name: 'Safe Space', icon: MessageCircle, members: '800' },
  { id: 'addiction', name: 'Recovery Path', icon: Shield, members: '2.5k' },
];

export default function ChatRoom() {
  const { user } = useAuth();
  const [selectedCircle, setSelectedCircle] = useState<null | typeof availableCircles[0]>(null);

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Chat is Anonymous, but Secure</h1>
        <p className="text-slate-500 mb-8">Please sign in to join our support circles and start chatting.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 h-[calc(100vh-8rem)]">
      <AnimatePresence mode="wait">
        {!selectedCircle ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full"
          >
            <h1 className="text-3xl font-display font-bold mb-2">Support Circles</h1>
            <p className="text-slate-500 mb-12">Select a community to start sharing and listening.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {availableCircles.map((circle) => {
                const Icon = circle.icon;
                return (
                  <button
                    key={circle.id}
                    onClick={() => setSelectedCircle(circle)}
                    className="bg-white p-8 rounded-[2.5rem] card-shadow hover:border-indigo-200 transition-all text-left group"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{circle.name}</h3>
                    <p className="text-sm text-slate-500 mb-6">Dedicated space for peer support and shared growth.</p>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between border-t border-slate-50 pt-4">
                      <span>{circle.members} Active Members</span>
                      <span className="text-indigo-600">Join Circle</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <button
              onClick={() => setSelectedCircle(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-6 transition-colors font-medium text-sm"
            >
              <ArrowLeft size={16} />
              Back to Circles
            </button>
            <div className="flex-grow min-h-0">
              <ChatInterface circleId={selectedCircle.id} circleName={selectedCircle.name} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
