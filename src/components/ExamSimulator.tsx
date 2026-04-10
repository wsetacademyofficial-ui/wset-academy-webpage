import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion } from '../types';
import { Check, X, ArrowRight, RotateCcw } from 'lucide-react';

interface ExamSimulatorProps {
  questions: QuizQuestion[];
}

export default function ExamSimulator({ questions }: ExamSimulatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-12 rounded-3xl card-shadow border border-slate-100"
          >
            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Exam Complete!</h2>
            <p className="text-slate-500 mb-8">You've finished the mock exam for this level.</p>
            
            <div className="text-5xl font-bold text-slate-900 mb-2">{score} / {questions.length}</div>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-12">Final Score</p>

            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95"
            >
              <RotateCcw size={20} />
              Try Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Exam Simulator</h2>
          <p className="text-slate-500">Test your knowledge with realistic exam questions.</p>
        </div>

        <div className="bg-white rounded-3xl card-shadow border border-slate-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 bg-slate-100 w-full">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Score: {score}</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-10 leading-tight">
              {currentQuestion.question}
            </h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectOption = index === currentQuestion.correctAnswer;
                
                let buttonClass = "w-full p-6 text-left rounded-2xl border-2 transition-all flex items-center justify-between group ";
                
                if (selectedAnswer === null) {
                  buttonClass += "border-slate-100 hover:border-accent hover:bg-accent/5 bg-white";
                } else if (isSelected) {
                  buttonClass += isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 bg-rose-50 text-rose-900";
                } else if (isCorrectOption && selectedAnswer !== null) {
                  buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-900";
                } else {
                  buttonClass += "border-slate-50 bg-slate-50 text-slate-400 opacity-50";
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={selectedAnswer === null ? { x: 4 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <span className="font-medium">{option}</span>
                    {selectedAnswer !== null && isCorrectOption && <Check size={20} className="text-emerald-600" />}
                    {selectedAnswer !== null && isSelected && !isCorrect && <X size={20} className="text-rose-600" />}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 pt-10 border-t border-slate-100"
                >
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Explanation</h4>
                    <p className="text-slate-600 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                  
                  <button
                    onClick={nextQuestion}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95"
                  >
                    {currentIndex === questions.length - 1 ? 'Finish Exam' : 'Next Question'}
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
