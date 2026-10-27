import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for fluid, magnetic lag effect
  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const dotConfig = { damping: 40, stiffness: 800 };
  const dotX = useSpring(cursorX, dotConfig);
  const dotY = useSpring(cursorY, dotConfig);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktops/mice)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Halo / Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-400/60 bg-accent-500/10 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 54 : 32,
          height: isPointer ? 54 : 32,
          borderColor: isPointer ? 'rgba(45, 212, 191, 0.9)' : 'rgba(20, 184, 166, 0.4)',
          backgroundColor: isPointer ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.04)',
          boxShadow: isPointer ? '0 0 20px rgba(20, 184, 166, 0.4)' : '0 0 10px rgba(20, 184, 166, 0.15)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_8px_#2dd4bf]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0.4 : 1,
          opacity: isPointer ? 0.3 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
