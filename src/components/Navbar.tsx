import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Users, LayoutDashboard, Compass } from 'lucide-react';
import { cn } from '../lib/utils';
import AuthButton from './Auth/AuthButton';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/chat', label: 'Support Chat', icon: MessageCircle },
  { path: '/community', label: 'Community', icon: Users },
  { path: '/pathways', label: 'Pathways', icon: Compass },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 glass z-50 px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white"
          >
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </motion.div>
          <span className="font-display font-bold text-xl tracking-tight text-indigo-900">
            SerenityCircle
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors py-5 border-b-2",
                  isActive 
                    ? "text-indigo-600 border-indigo-600" 
                    : "text-slate-600 border-transparent hover:text-indigo-600"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
