import React from 'react';

interface HunarSangamLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  withHalo?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const HunarSangamLogo: React.FC<HunarSangamLogoProps> = ({
  size = 48,
  className = '',
  showText = false,
  withHalo = false,
  textColor = '#7C3F24',
  subtextColor = '#8C5338',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
        {withHalo && (
          <div
            className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#FF9800]/20 via-[#E91E63]/20 to-[#1565C0]/20 blur-xs animate-pulse pointer-events-none"
          />
        )}
        <img
          src="/Logo.png"
          alt="HunarSangam Official Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain filter drop-shadow-sm select-none"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className="font-extrabold tracking-tight leading-tight select-none"
            style={{ color: textColor, fontSize: size > 40 ? '1.15rem' : '0.95rem' }}
          >
            HunarSangam
          </span>
          <span
            className="font-serif font-black tracking-normal leading-none select-none"
            style={{ color: subtextColor, fontSize: size > 40 ? '0.75rem' : '0.65rem' }}
          >
            हुनर संगम
          </span>
        </div>
      )}
    </div>
  );
};

export default HunarSangamLogo;
