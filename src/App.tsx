/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Face = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 z-10"
    >
      {/* Cheeks */}
      <div className="absolute -left-3 top-2 w-2.5 h-1.5 bg-[#f43f5e] rounded-full opacity-70" />
      <div className="absolute -right-3 top-2 w-2.5 h-1.5 bg-[#f43f5e] rounded-full opacity-70" />

      {/* Left eye */}
      <div className="w-3 h-3 relative flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8, duration: 0.2, type: 'spring' }}
          className="w-[10px] h-[10px] bg-[#1e293b] rounded-full absolute flex items-start justify-start p-[1px]"
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
        <motion.svg 
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }} 
          transition={{ delay: 0.8, duration: 0.1 }}
          width="12" height="12" viewBox="0 0 12 12" className="absolute"
        >
          <path d="M 2 3 L 8 6 L 2 9" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>

      {/* Mouth */}
      <div className="w-3 h-2 border-b-[2.5px] border-[#1e293b] rounded-b-full translate-y-[-1px]" />

      {/* Right eye */}
      <div className="w-3 h-3 relative flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8, duration: 0.2, type: 'spring' }}
          className="w-[10px] h-[10px] bg-[#1e293b] rounded-full absolute flex items-start justify-start p-[1px]"
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
        <motion.svg 
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }} 
          transition={{ delay: 0.8, duration: 0.1 }}
          width="12" height="12" viewBox="0 0 12 12" className="absolute"
        >
          <path d="M 10 3 L 4 6 L 10 9" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>
    </motion.div>
  );
};

const Icing = () => (
  <motion.div 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
    className="absolute top-0 left-0 w-full h-[55%] bg-[#ff6b9d] rounded-t-[14px] z-20"
  >
    <Face />
    <svg viewBox="0 0 240 20" preserveAspectRatio="none" className="w-full h-[18px] absolute bottom-0 translate-y-[95%]">
      <path d="M 0 0 Q 12 20 24 0 Q 36 20 48 0 Q 60 20 72 0 Q 84 20 96 0 Q 108 20 120 0 Q 132 20 144 0 Q 156 20 168 0 Q 180 20 192 0 Q 204 20 216 0 Q 228 20 240 0 L 240 0 L 0 0 Z" fill="#ff6b9d" />
    </svg>
  </motion.div>
);

const Sprinkles = () => {
  const sprinkles = [
    { color: 'bg-amber-400', top: '70%', left: '15%', rotate: 'rotate-45' },
    { color: 'bg-blue-400', top: '80%', left: '30%', rotate: '-rotate-12' },
    { color: 'bg-emerald-400', top: '68%', left: '45%', rotate: 'rotate-90' },
    { color: 'bg-rose-400', top: '85%', left: '60%', rotate: 'rotate-45' },
    { color: 'bg-purple-400', top: '75%', left: '75%', rotate: '-rotate-45' },
    { color: 'bg-cyan-400', top: '65%', left: '90%', rotate: 'rotate-12' },
  ];

  return (
    <div className="absolute inset-0 rounded-[14px] overflow-hidden z-10 pointer-events-none">
      {sprinkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.05, type: 'spring' }}
          className={`absolute w-1.5 h-4 rounded-full ${s.color} ${s.rotate}`}
          style={{ top: s.top, left: s.left }}
        />
      ))}
    </div>
  );
};

const Candles = () => {
  const candles = [
    { left: '25%', delay: 0.3 },
    { left: '50%', delay: 0.4 },
    { left: '75%', delay: 0.35 },
  ];

  return (
    <>
      {candles.map((c, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -42, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.4, delay: c.delay, duration: 0.6 }}
          className="absolute z-10 flex flex-col items-center"
          style={{ left: c.left, top: 0, x: '-50%' }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
            className="mb-1 origin-bottom"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], skewX: [0, 3, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="w-2.5 h-4 bg-yellow-400 rounded-b-full rounded-t-full shadow-[0_0_12px_#facc15]"
            />
          </motion.div>
          <div className="w-3.5 h-12 bg-white rounded-t-sm overflow-hidden border-x border-t border-gray-200 relative shadow-sm">
            <div className="absolute top-0 -left-1 w-6 h-2 bg-pink-400 -rotate-45" />
            <div className="absolute top-4 -left-1 w-6 h-2 bg-pink-400 -rotate-45" />
            <div className="absolute top-8 -left-1 w-6 h-2 bg-pink-400 -rotate-45" />
          </div>
        </motion.div>
      ))}
    </>
  );
};

const ConfettiText = () => {
  const text = "Happy Birthday!";
  const letters = text.split('');
  const colors = ['#f43f5e', '#ec4899', '#a855f7', '#3b82f6', '#0ea5e9', '#10b981', '#eab308', '#f97316'];
  
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
      {letters.map((char, i) => {
        if (char === ' ') return <span key={i} className="w-2" />;
        
        const xOffset = (i - letters.length / 2) * 14; 
        const angle = (Math.random() * 80 + 230) * (Math.PI / 180); 
        const velocity = 150 + Math.random() * 200;
        const xTarget = xOffset + Math.cos(angle) * velocity;
        const yTarget = Math.sin(angle) * velocity - 80; 
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.span
            key={i}
            initial={{ x: xOffset, y: 0, opacity: 1, scale: 0.5 }}
            animate={{
              x: xTarget,
              y: [0, yTarget, yTarget + 400],
              opacity: [1, 1, 0],
              rotate: (Math.random() - 0.5) * 720,
              scale: 1.2
            }}
            transition={{ 
              delay: 0.8,
              duration: 2.5, 
              times: [0, 0.3, 1],
              ease: "easeOut"
            }}
            className="absolute text-[26px] font-black font-sans drop-shadow-md"
            style={{ color }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

const Particles = () => {
  const colors = ['#f43f5e', '#a855f7', '#3b82f6', '#10b981', '#eab308', '#f97316'];
  const particles = Array.from({ length: 40 });
  
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-40">
      {particles.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 80 + Math.random() * 200;
        const xTarget = Math.cos(angle) * velocity;
        const yTarget = Math.sin(angle) * velocity;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isCircle = Math.random() > 0.5;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: Math.random() * 0.5 + 0.5 }}
            animate={{
              x: xTarget,
              y: [0, yTarget, yTarget + 300],
              opacity: [1, 1, 0],
              rotate: Math.random() * 720,
            }}
            transition={{ 
              delay: 0.8,
              duration: 1.5 + Math.random(), 
              times: [0, 0.4, 1],
              ease: "easeOut"
            }}
            className={`absolute w-2.5 h-2.5 ${isCircle ? 'rounded-full' : 'rounded-sm'}`}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

const GreetingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-[280px] h-[180px] cursor-pointer z-20"
      style={{ perspective: 1200 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative shadow-xl rounded-[14px] ring-1 ring-black/5"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        whileHover={!isFlipped ? { scale: 1.02, y: -4 } : {}}
        whileTap={!isFlipped ? { scale: 0.98 } : {}}
      >
        {/* Front of Card (Envelope) */}
        <div 
          className="absolute inset-0 bg-[#fdf2f8] rounded-[14px] flex flex-col items-center justify-center overflow-hidden border-2 border-pink-100 shadow-[inset_0_0_20px_rgba(255,192,203,0.2)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Envelope Graphic */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 180" preserveAspectRatio="none">
            {/* Base */}
            <rect width="280" height="180" fill="#fdf2f8" />
            {/* Side Flaps */}
            <polygon points="0,0 140,90 0,180" fill="#fce7f3" />
            <polygon points="280,0 140,90 280,180" fill="#fce7f3" />
            {/* Bottom Flap */}
            <polygon points="0,180 140,85 280,180" fill="#fbcfe8" />
            {/* Top Flap */}
            <polygon points="0,0 140,95 280,0" fill="#f9a8d4" className="drop-shadow-sm" />
          </svg>
          
          <div className="absolute top-[45%] text-4xl z-10 drop-shadow-md">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ❤️
            </motion.div>
          </div>
          <div className="absolute bottom-4 text-pink-600/90 text-[11px] font-black tracking-[0.2em] z-10">
            TAP TO OPEN
          </div>
        </div>

        {/* Back of Card (Message) */}
        <div 
          className="absolute inset-0 bg-white rounded-[14px] flex flex-col items-center justify-center p-6 text-center border-4 border-pink-100 shadow-inner"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-70" />
          
          <motion.div 
            animate={isFlipped ? { scale: [0, 1.2, 1], rotate: [0, -15, 15, 0] } : { scale: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl mb-3"
          >
            🎉
          </motion.div>

          <h3 className="text-[22px] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-2 leading-tight drop-shadow-sm">
            Happy Birthday!
          </h3>
          <p className="text-gray-700 font-semibold leading-snug text-[15px]">
            I hope your birthday was absolutely amazing and filled with joy! ✨
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Firework = ({ x, y, color, id, onComplete }: any) => {
  const particles = Array.from({ length: 24 });
  
  useEffect(() => {
    const timer = setTimeout(() => onComplete(id), 2000);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y }}>
      {/* Explosion flash */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full blur-md"
        style={{ backgroundColor: color }}
      />
      {/* Particles */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const velocity = 50 + Math.random() * 80;
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: Math.cos(angle) * velocity,
              y: Math.sin(angle) * velocity + 40, // Gravity effect
              scale: 0,
              opacity: 0
            }}
            transition={{ duration: 1.2 + Math.random() * 0.4, ease: "easeOut" }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`
            }}
          />
        );
      })}
    </div>
  );
};

const FireworksManager = () => {
  const [fireworks, setFireworks] = useState<any[]>([]);
  const colors = ['#facc15', '#f43f5e', '#a855f7', '#38bdf8', '#10b981', '#fb923c'];

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setTimeout>;

    // Wait for the main cake animation to finish before starting fireworks
    timeoutId = setTimeout(() => {
      let count = 0;
      
      const spawnFirework = () => {
        setFireworks(prev => [...prev, {
          id: count++,
          x: Math.random() * 80 + 10 + '%',
          y: Math.random() * 45 + 5 + '%', // Keep mainly in the top half
          color: colors[Math.floor(Math.random() * colors.length)]
        }]);
        
        // Randomize next spawn time between 800ms and 2300ms
        intervalId = setTimeout(spawnFirework, 800 + Math.random() * 1500);
      };
      
      spawnFirework();
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(intervalId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleComplete = useCallback((id: number) => {
    setFireworks(prev => prev.filter(f => f.id !== id));
  }, []);

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {fireworks.map(f => (
        <Firework key={f.id} {...f} onComplete={handleComplete} />
      ))}
    </div>
  );
};

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#38bdf8] flex flex-col items-center justify-center gap-14 overflow-hidden font-sans pb-8 w-full max-w-full">
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute inset-0 bg-[#0f172a] z-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {isClicked && <FireworksManager />}

      {/* CAKE BUTTON */}
      <div className="relative z-10 mt-6">
        {isClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/20 blur-[60px] rounded-full z-0 pointer-events-none"
          />
        )}
        {isClicked && <Candles />}
        <motion.button
          onClick={() => !isClicked && setIsClicked(true)}
          className="relative w-[240px] h-[100px] bg-white rounded-[14px] shadow-xl flex items-center justify-center z-30"
          animate={
            isClicked 
              ? { 
                  scaleX: [1, 1.15, 0.95, 1],
                  scaleY: [1, 0.75, 1.1, 1],
                  transition: { duration: 0.6, times: [0, 0.3, 0.7, 1], ease: 'easeInOut' } 
                } 
              : { scaleX: 1, scaleY: 1 }
          }
          whileHover={!isClicked ? { scale: 1.03 } : {}}
          whileTap={!isClicked ? { scale: 0.95 } : {}}
        >
          <AnimatePresence>
            {!isClicked && (
              <motion.div 
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
              >
                <div className="text-[21px] font-bold tracking-wide flex">
                  {"Happy Birthday!".split('').map((char, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        color: char !== ' ' 
                          ? ['#f43f5e', '#ec4899', '#a855f7', '#3b82f6', '#0ea5e9', '#10b981', '#eab308', '#f97316'][i % 8] 
                          : 'transparent',
                        marginRight: char === ' ' ? '6px' : '0'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isClicked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [10, 0, 10] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                className="absolute -bottom-10 flex flex-col items-center justify-center text-white/90 pointer-events-none"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Tap to celebrate</span>
              </motion.div>
            )}
          </AnimatePresence>

          {isClicked && (
            <>
              <Icing />
              <Sprinkles />
            </>
          )}
        </motion.button>
        
        {isClicked && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <ConfettiText />
            <Particles />
          </div>
        )}
      </div>

      {/* GREETING CARD */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", damping: 14 }}
          >
            <GreetingCard />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isClicked && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 3 }}
            onClick={() => setIsClicked(false)}
            className="absolute bottom-10 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-medium z-50 backdrop-blur-sm transition-colors"
          >
            Reset
          </motion.button>
        )}
      </AnimatePresence>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-[11px] font-medium tracking-wide z-40 pointer-events-none">
        Made by Ma'R
      </div>
    </div>
  );
}
