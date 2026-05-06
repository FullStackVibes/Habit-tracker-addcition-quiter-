import { useAuth } from '../../contexts/AuthContext';
import { signInWithGoogle, logout } from '../../lib/firebase';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';

export default function AuthButton() {
  const { user, loading } = useAuth();

  if (loading) return <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />;

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-right">
          <p className="text-xs font-bold text-slate-800">{user.displayName}</p>
          <button 
            onClick={logout}
            className="text-[10px] text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest font-bold"
          >
            Logout
          </button>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-primary-100 p-0.5">
          <img 
            src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center gap-2"
    >
      <LogIn size={16} />
      Sign In
    </button>
  );
}
