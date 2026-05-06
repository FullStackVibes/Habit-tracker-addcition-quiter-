import { motion } from 'motion/react';
import { Heart, MessageCircle, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 uppercase tracking-wider">
              <Sparkles size={14} />
              Professional Growth & Support
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Empowering your path to <span className="text-indigo-600">well-being.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Access 24/7 emotional support, trained peer listeners, and guided recovery paths in a secure, professional environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/chat"
                className="btn-primary flex items-center gap-2 group px-8"
              >
                Chat with a Listener
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/community"
                className="bg-white text-slate-700 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                Browse Circles
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] bg-slate-200 overflow-hidden shadow-2xl relative border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                alt="Support and peace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-slate-100"
            >
              <div className="flex items-center gap-2 text-indigo-600 mb-2 font-bold text-sm">
                <Shield size={16} />
                Secure Support
              </div>
              <p className="text-xs text-slate-500 font-medium">14,281 Listeners online now to help you.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">How Serenity Helps</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              Designed to support you through every stage of your emotional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Anonymous Chat",
                desc: "Connect 24/7 with trained active listeners or our AI companion for judgment-free conversation."
              },
              {
                icon: Shield,
                title: "Safe Circles",
                desc: "Moderated peer support groups focused on anxiety, depression, and addiction recovery."
              },
              {
                icon: Sparkles,
                title: "Growth Paths",
                desc: "Step-by-step guided exercises and check-ins tailored to your personal goals and needs."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2.5rem] card-shadow"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 text-2xl">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
