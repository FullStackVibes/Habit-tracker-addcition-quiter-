import { motion } from 'motion/react';
import { Compass, BookOpen, Clock, BarChart, CheckCircle2 } from 'lucide-react';

export default function Pathways() {
  const pathways = [
    {
      title: 'Mindfulness Basics',
      duration: '14 Days',
      lessons: 12,
      difficulty: 'Beginner',
      description: 'Master the art of being present. Perfect for those starting their journey toward emotional balance.',
      category: 'Mental Health'
    },
    {
      title: 'Breaking the Cycle',
      duration: '30 Days',
      lessons: 24,
      difficulty: 'Moderate',
      description: 'A deep dive into addiction control. Learn triggers, habits, and building a support network.',
      category: 'Addiction'
    },
    {
      title: 'Calm in the Storm',
      duration: '21 Days',
      lessons: 15,
      difficulty: 'Beginner',
      description: 'Specific techniques for managing panic attacks and social anxiety in real-world scenarios.',
      category: 'Anxiety'
    },
    {
      title: 'Restorative Sleep',
      duration: '7 Days',
      lessons: 7,
      difficulty: 'Easy',
      description: 'Reconnect with your circadian rhythm. Guided night routines and wind-down exercises.',
      category: 'Wellness'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 flex items-center gap-4">
            Guided Pathways
            <Compass className="text-indigo-600" size={32} />
          </h1>
          <p className="text-slate-500 italic leading-relaxed">
            Structured, step-by-step professional journeys designed by experts to help you reach specific well-being and recovery goals.
          </p>
        </div>
        <div className="flex gap-2">
          {['All', 'Addiction', 'Anxiety', 'Wellness'].map((cat) => (
            <button key={cat} className="px-5 py-2 rounded-full text-xs font-bold border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 transition-all bg-white shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {pathways.map((path, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white rounded-[2.5rem] p-1 border border-slate-100 card-shadow overflow-hidden"
          >
            <div className="flex flex-col md:flex-row min-h-[280px]">
              <div className="p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">{path.category}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <BarChart size={12} />
                      {path.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{path.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm">{path.description}</p>
                </div>

                <div className="flex items-center gap-6 mt-8 pb-4 border-b border-slate-50">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Clock size={16} />
                    {path.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <BookOpen size={16} />
                    {path.lessons} Lessons
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button className="btn-primary px-8">
                    Start Pathway
                  </button>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-slate-400">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    724 Started
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-32 bg-slate-50 border-l border-slate-100 relative overflow-hidden group-hover:bg-indigo-50 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center -rotate-90">
                    <span className="text-lg font-display font-black text-slate-100 group-hover:text-indigo-100 transition-colors tracking-[1rem] whitespace-nowrap uppercase">
                      GUIDED GROWTH
                    </span>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
