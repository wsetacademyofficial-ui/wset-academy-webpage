import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flashcard } from '../types';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface FlashcardDeckProps {
  cards: Flashcard[];
}

export default function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const card = cards[currentIndex];

  if (!cards.length) return null;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Study Vault</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Focus on one concept at a time. Flip the card to reveal the answer, then move to the next.</p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <div className="relative w-full max-w-xl aspect-[4/3] perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-full h-full relative preserve-3d cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-12 flex flex-col justify-center items-center text-center card-shadow border border-slate-100">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Question</span>
                    <p className="text-2xl font-bold text-slate-800 leading-tight">{card.question}</p>
                    <div className="absolute bottom-10 flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <RotateCw size={16} />
                      Click to flip
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-accent rounded-3xl p-12 flex flex-col justify-center items-center text-center card-shadow rotate-y-180">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-8">Answer</span>
                    <p className="text-2xl font-bold text-white leading-tight">{card.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={prevCard}
              className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-accent transition-all active:scale-90 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              {currentIndex + 1} <span className="mx-1 text-slate-200">/</span> {cards.length}
            </div>

            <button
              onClick={nextCard}
              className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-accent transition-all active:scale-90 shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
