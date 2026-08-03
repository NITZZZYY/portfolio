import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 300);
          setTimeout(onDone, 1100);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[14vw] font-bold uppercase leading-none tracking-tight text-gradient sm:text-[10vw]"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Nitesh
            </motion.h1>
          </div>
          <motion.p
            className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Compiling founder profile
          </motion.p>

          <div className="mt-8 h-[2px] w-[220px] overflow-hidden rounded-full bg-white/10 sm:w-[280px]">
            <motion.div
              className="h-full bg-gradient-to-r from-electric via-violet to-cyan"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <motion.span className="mt-3 font-mono text-xs text-muted">
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
