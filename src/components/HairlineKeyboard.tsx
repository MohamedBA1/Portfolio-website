import React from 'react';
import { Keyboard } from '@lucasmarkes/hairline/react';

interface HairlineKeyboardProps {
  className?: string;
  intensity?: number;
  play?: boolean;
}

const HairlineKeyboard: React.FC<HairlineKeyboardProps> = ({
  className = '',
  intensity = 0.85,
  play = true,
}) => {
  return (
    <div className={`w-full h-full flex items-center justify-center relative ${className}`}>
      {/* Ambient glow accent behind keyboard */}
      <div className="absolute w-80 h-80 rounded-full bg-accent-500/15 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      
      <div className="w-full max-w-[360px] md:max-w-[480px] aspect-square flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:drop-shadow-[0_12px_30px_rgba(20,184,166,0.25)]">
        <Keyboard 
          intensity={intensity} 
          play={play} 
          theme="dark"
          style={{
            width: '100%',
            height: '100%',
            color: '#14b8a6', // Neon Teal accent
          }} 
        />
      </div>
    </div>
  );
};

export default HairlineKeyboard;
