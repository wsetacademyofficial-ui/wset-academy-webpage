import { motion } from 'motion/react';

interface HeaderProps {
  currentLevel: number;
  onLevelChange: (level: number) => void;
}

export default function Header({ currentLevel, onLevelChange }: HeaderProps) {
  const levels = [1, 2, 3];

  return (
    <header className="sticky top-0 z-50 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onLevelChange(1)}
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">W</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">WSET Academy</span>
        </motion.div>

        <nav className="flex items-center gap-1 sm:gap-4">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                currentLevel === level ? 'text-accent' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Level {level}
              {currentLevel === level && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
