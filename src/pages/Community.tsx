import { motion } from 'motion/react';
import { Users, Search, MessageSquare, Heart, ShieldCheck } from 'lucide-react';

export default function Community() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Together is Better</h1>
        <p className="text-slate-500 italic max-w-2xl mx-auto">
          Join thousands of people in moderated support circles. Share your story, listen to others, and find the strength in community.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16 relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search for a topic (e.g. 'Social Anxiety', 'Grief', 'Recovery')" 
          className="w-full bg-white border border-slate-200 rounded-full py-4 pl-14 pr-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none shadow-sm transition-all text-sm"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
            <Users size={20} className="text-indigo-600" />
            Trending Circles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Anxiety Warriors', members: '14.2k', topic: 'Anxiety', active: 42 },
              { title: 'Morning Light', members: '8.4k', topic: 'Depression', active: 12 },
              { title: 'The Clean Path', members: '22.1k', topic: 'Addiction', active: 156 },
              { title: 'New Beginnings', members: '5.2k', topic: 'Relationships', active: 8 },
              { title: 'Student Support', members: '12.8k', topic: 'Stress', active: 88 },
              { title: 'Grief Haven', members: '3.1k', topic: 'Loss', active: 5 }
            ].map((circle, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-[2rem] card-shadow border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-widest">{circle.topic}</span>
                    <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                       {circle.active} Online
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{circle.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">A safe environment to discuss daily challenges and wins with peers.</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
                  <span className="text-xs text-slate-400 font-bold">{circle.members} members</span>
                  <button className="text-indigo-600 text-xs font-bold hover:underline">Join Circle</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
             <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
               <ShieldCheck size={28} className="text-white" />
             </div>
             <h3 className="text-xl font-bold mb-2">Become a Listener</h3>
             <p className="text-slate-400 text-xs leading-relaxed mb-6">Want to give back? Join our group of trained active listeners. Complete the free training to start helping others.</p>
             <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40">Start Training</button>
          </div>

          <div className="bg-white p-8 rounded-[2rem] card-shadow border border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Heart size={16} className="text-pink-500" />
              Community Guidelines
            </h3>
            <ul className="space-y-4">
              {[
                { title: 'Be Respectful', desc: 'Kindness is our currency.' },
                { title: 'Stay Anonymous', desc: 'Keep personal info private.' },
                { title: 'No Judgment', desc: 'Every struggle is valid.' }
              ].map((rule, i) => (
                <li key={i} className="flex gap-4">
                  <div className="text-xs font-bold text-indigo-600">0{i+1}</div>
                  <div>
                    <p className="text-xs font-bold text-slate-700">{rule.title}</p>
                    <p className="text-[11px] text-slate-400">{rule.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
