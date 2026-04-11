/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import LevelPage from './components/LevelPage';
import { WSET_DATA } from './constants';
import { X } from 'lucide-react';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLegalTab, setActiveLegalTab] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  useEffect(() => {
    // Simulate initial loading for a polished feel
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLevelChange = (level: number) => {
    if (level === currentLevel) return;
    setIsLoading(true);
    setTimeout(() => {
      setCurrentLevel(level);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const currentData = WSET_DATA.find(d => d.id === currentLevel) || WSET_DATA[0];

  return (
    <div className="min-h-screen bg-canvas selection:bg-accent/20 selection:text-accent">
      <Header currentLevel={currentLevel} onLevelChange={handleLevelChange} />
      
      <main>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div key="loading">
              <LoadingState />
            </div>
          ) : (
            <div key={currentLevel}>
              <LevelPage data={currentData} />
            </div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">W</div>
            <span className="font-bold text-slate-900">WSET Digital Academy</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <button onClick={() => setActiveLegalTab('privacy')} className="hover:text-accent transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveLegalTab('terms')} className="hover:text-accent transition-colors">Terms of Service</button>
            <button onClick={() => setActiveLegalTab('contact')} className="hover:text-accent transition-colors">Contact Support</button>
          </div>
          <p className="text-sm text-slate-400">© 2026 WSET Digital Academy. All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeLegalTab && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLegalTab(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                  {activeLegalTab === 'privacy' && 'Privacy Policy'}
                  {activeLegalTab === 'terms' && 'Terms of Service'}
                  {activeLegalTab === 'contact' && 'Contact Support'}
                </h2>
                <button 
                  onClick={() => setActiveLegalTab(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed space-y-4">
                {activeLegalTab === 'privacy' && (
                  <>
                    <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use the WSET Digital Academy.</p>
                    <h3 className="font-bold text-slate-900">1. Information Collection</h3>
                    <p>We collect minimal information required to provide our educational services. This may include your email address if you choose to contact us or sign up for updates.</p>
                    <h3 className="font-bold text-slate-900">2. Data Usage</h3>
                    <p>We use your data solely to improve your learning experience and provide support. We do not sell your personal information to third parties.</p>
                    <h3 className="font-bold text-slate-900">3. Security</h3>
                    <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
                  </>
                )}
                {activeLegalTab === 'terms' && (
                  <>
                    <p>By using the WSET Digital Academy, you agree to comply with and be bound by the following terms and conditions.</p>
                    <h3 className="font-bold text-slate-900">1. Educational Content</h3>
                    <p>The content provided on this platform is for educational purposes only. While we strive for accuracy, we are not responsible for any errors or omissions.</p>
                    <h3 className="font-bold text-slate-900">2. Intellectual Property</h3>
                    <p>All materials, including text, graphics, and logos, are the property of WSET Digital Academy and are protected by copyright laws.</p>
                    <h3 className="font-bold text-slate-900">3. User Conduct</h3>
                    <p>Users are expected to use the platform in a respectful and lawful manner. Any abuse or unauthorized use may result in termination of access.</p>
                  </>
                )}
                {activeLegalTab === 'contact' && (
                  <div className="text-center py-8">
                    <p className="mb-6 text-lg">Need help or have questions about our curriculum?</p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email us at</p>
                      <a href="mailto:jason@wsetacademy.com" className="text-2xl font-bold text-accent hover:underline transition-all">
                        jason@wsetacademy.com
                      </a>
                    </div>
                    <p className="mt-8 text-sm text-slate-400">We typically respond within 24-48 hours.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="fixed inset-0 z-40 bg-canvas flex flex-col items-center justify-center">
      <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent animate-[loading_1s_ease-in-out_infinite]" />
      </div>
      <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest animate-pulse">
        Loading Curriculum...
      </p>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

