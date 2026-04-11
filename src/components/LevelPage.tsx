import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WSETLevelData } from '../types';
import LearningSection from './LearningSection';
import FlashcardDeck from './FlashcardDeck';
import ExamSimulator from './ExamSimulator';
import { BookOpen, CreditCard, GraduationCap } from 'lucide-react';

interface LevelPageProps {
  data: WSETLevelData;
}

type SubTab = 'curriculum' | 'flashcards' | 'exam';

export default function LevelPage({ data }: LevelPageProps) {
  const [activeTab, setActiveTab] = useState<SubTab>('curriculum');

  const tabs = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', icon: CreditCard },
    { id: 'exam', label: 'Mock Exam', icon: GraduationCap },
  ] as const;

  const isComingSoon = data.id === 3;

  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-[95%] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wide mb-6 uppercase">
              WSET Certification
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              {data.title}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-12">
              {isComingSoon 
                ? "We are currently crafting the advanced curriculum for Level 3. Stay tuned for deep dives into viticulture and winemaking."
                : `${data.subtitle} Master the curriculum with our interactive study tools and pass your exam with confidence.`}
            </p>

            {/* Sub-Navigation */}
            {!isComingSoon && (
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 ${
                        isActive 
                          ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                          : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative">
        {isComingSoon ? (
          <section className="py-32 px-6 text-center">
            <div className="max-w-xl mx-auto">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpen size={40} className="text-slate-400" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-slate-500 text-lg mb-8">
                The Level 3 Award in Wines is a high-level qualification for professionals and enthusiasts. We're working hard to bring you the best study materials.
              </p>
              <div className="inline-flex items-center gap-2 text-accent font-bold">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Curriculum in Progress
              </div>
            </div>
          </section>
        ) : (
          <AnimatePresence mode="wait">
            {activeTab === 'curriculum' && (
              <motion.div
                key="curriculum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <LearningSection 
                  content={data.learning} 
                  grapes={data.grapes}
                  regions={data.regions}
                />
              </motion.div>
            )}
            {activeTab === 'flashcards' && (
              <motion.div
                key="flashcards"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FlashcardDeck cards={data.flashcards} />
              </motion.div>
            )}
            {activeTab === 'exam' && (
              <motion.div
                key="exam"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ExamSimulator questions={data.quiz} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
