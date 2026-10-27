import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-500 via-teal-300 to-emerald-400 origin-left shadow-[0_0_12px_rgba(20,184,166,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.round((scrolled / totalHeight) * 100));
      }
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 20 }}
      whileHover={{ scale: 1.12, y: -4 }}
      whileTap={{ scale: 0.92 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[90] p-3.5 rounded-2xl bg-zinc-950/80 hover:bg-zinc-900 border border-accent-500/30 hover:border-accent-400 text-accent-400 shadow-[0_0_25px_rgba(20,184,166,0.3)] backdrop-blur-xl group flex items-center gap-2 transition-all cursor-pointer"
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center">
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
      <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 group-hover:text-accent-300 transition-colors hidden sm:inline">
        {scrollPercent}%
      </span>
    </motion.button>
  );
};
