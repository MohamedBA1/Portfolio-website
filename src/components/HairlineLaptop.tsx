import React from 'react';
import { Laptop } from '@lucasmarkes/hairline/react';

interface HairlineLaptopProps {
  className?: string;
  intensity?: number;
  play?: boolean;
}

const HairlineLaptop: React.FC<HairlineLaptopProps> = ({
  className = '',
  intensity = 0.8,
  play = true,
}) => {
  return (
    <div className={`w-full h-full flex items-center justify-center relative ${className}`}>
      {/* Ambient glow accent behind laptop */}
      <div className="absolute w-72 h-72 rounded-full bg-accent-500/15 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      
      <div className="w-full max-w-[340px] md:max-w-[420px] aspect-square flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:drop-shadow-[0_10px_25px_rgba(20,184,166,0.2)]">
        <Laptop 
          intensity={intensity} 
          play={play} 
          theme="dark"
          style={{
            width: '100%',
            height: '100%',
            color: '#14b8a6', // Maps to accent
          }} 
        />
      </div>
    </div>
  );
};

export default HairlineLaptop;
