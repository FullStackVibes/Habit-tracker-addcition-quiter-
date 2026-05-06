import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Heart, Shield, Sparkles, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { user, profile } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Your Journey Awaits</h1>
        <p className="text-slate-500">Sign in to track your progress and manage your growth pathways.</p>
      </div>
    );
  }

  const stats = [
    { label: 'Days Active', value: '12', icon: Calendar, color: 'text-blue-500' },
    { label: 'Supportive Chats', value: '48', icon: Heart, color: 'text-pink-500' },
    { label: 'Milestones', value: '3', icon: Sparkles, color: 'text-amber-500' },
    { label: 'Safety Score', value: '98%', icon: Shield, color: 'text-green-500' },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-slate-50">
      {/* Sidebar Left */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 p-8 flex-col gap-8 flex-shrink-0">
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Growth Progress</h3>
          <div className="space-y-6">
            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <div className="flex justify-between text-xs font-bold text-indigo-900 mb-2">
                <span>Anxiety Relief</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-indigo-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[65%]" />
              </div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex justify-between text-xs font-bold text-emerald-900 mb-2">
                <span>Sobriety Streak</span>
                <span>12 Days</span>
              </div>
              <div className="w-full bg-emerald-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[100%]" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Quick Tools</h3>
          <div className="grid grid-cols-2 gap-3">
             {['🧘 Breath', '📓 Journal', '💊 Meds', '🆘 SOS'].map(tool => (
               <button key={tool} className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl text-[11px] font-bold border border-slate-200 transition-colors">
                 {tool}
               </button>
             ))}
          </div>
        </div>

        <div className="mt-auto p-5 bg-indigo-900 rounded-2xl text-white">
          <p className="text-xs font-medium opacity-80 mb-3 text-center">Want to help the community?</p>
          <button className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-xs font-bold shadow-lg shadow-indigo-900/40 transition-all">
            Become a Listener
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user.displayName?.split(' ')[0]}.</h1>
            <p className="text-slate-500 mt-1">How are you feeling this afternoon?</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {['😊 Good', '😐 Neutral', '😔 Struggling'].map(mood => (
              <button key={mood} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold shadow-sm hover:border-indigo-500 transition-all">
                {mood}
              </button>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-[2.5rem] card-shadow p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-4xl mb-6">
              💬
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 text-center">Instant Support</h2>
            <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">Connect with a trained listener for 24/7 high-quality peer support.</p>
            <button className="w-full btn-primary text-lg py-4">Start Chat Session</button>
          </section>

          <div className="flex flex-col gap-8">
            <section className="bg-white rounded-[2.5rem] card-shadow p-8">
              <h2 className="font-bold text-lg mb-6">Active Circles</h2>
              <div className="space-y-4">
                {[
                  { icon: '🚭', name: 'Quitting Smoking', active: 12 },
                  { icon: '🍷', name: 'Alcohol-Free Life', active: 45 },
                  { icon: '📱', name: 'Digital Detox', active: 28 }
                ].map(circle => (
                  <div key={circle.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{circle.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{circle.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{circle.active} Active Now</p>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-indigo-600 hover:underline">Join</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-indigo-50 rounded-[2.5rem] border border-indigo-100 p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl italic font-serif text-indigo-600">Ps</div>
                <div>
                  <h3 className="font-bold text-indigo-900 border-none!">Professional Therapy</h3>
                  <p className="text-xs text-indigo-700/70 leading-tight">Licensed counselors available.</p>
                </div>
              </div>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-xs font-bold border border-indigo-200 shadow-sm hover:bg-slate-50 transition-all">View</button>
            </section>
          </div>
        </div>

        <section>
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Recent Growth Logs</h3>
           <div className="space-y-4">
              {[
                { title: 'Path Complete: Morning Breath', time: 'Yesterday' },
                { title: 'Chat Session: Anxiety Circle', time: '2 days ago' }
              ].map(log => (
                <div key={log.title} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    <span className="text-sm font-bold text-slate-700">{log.title}</span>
                  </div>
                  <span className="text-xs text-slate-400">{log.time}</span>
                </div>
              ))}
           </div>
        </section>
      </main>
    </div>
  );
}
