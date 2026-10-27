import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(20, 184, 166, 0.15)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // Max tilt 10 deg
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="relative h-full w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
      >
        {/* Interactive Spotlight Glow */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-inherit opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
            }}
          />
        )}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-20 h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
