/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import LevelPage from './components/LevelPage';
import { WSET_DATA } from './constants';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">W</div>
            <span className="font-bold text-slate-900">WSET Digital Academy</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact Support</a>
          </div>
          <p className="text-sm text-slate-400">© 2026 WSET Digital Academy. All rights reserved.</p>
        </div>
      </footer>
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

