import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ChatRoom from './pages/ChatRoom';
import Community from './pages/Community';
import Pathways from './pages/Pathways';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/community" element={<Community />} />
            <Route path="/pathways" element={<Pathways />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="bg-surface-100 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 SerenityCircle. Your safe space for growth and recovery.</p>
        </div>
      </footer>
    </div>
  );
}
