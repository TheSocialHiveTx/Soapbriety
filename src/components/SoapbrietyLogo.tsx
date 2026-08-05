import React from 'react';

interface LogoProps {
  variant?: 'emblem' | 'wordmark' | 'badge' | 'full';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SoapbrietyLogo: React.FC<LogoProps> = ({
  variant = 'emblem',
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-20',
    xl: 'h-32'
  };

  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        {/* Skull Icon Emblem */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1A221C] border border-[#3E5C46] shadow-inner text-[#4ADE80]">
          <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current">
            {/* Skull path */}
            <path d="M50 15 C30 15 20 30 20 48 C20 60 26 70 35 73 L35 82 L65 82 L65 73 C74 70 80 60 80 48 C80 30 70 15 50 15 Z M35 48 A6 6 0 1 1 35 47.9 M65 48 A6 6 0 1 1 65 47.9 M44 60 L56 60 L50 67 Z M40 76 L43 82 M50 76 L50 82 M60 76 L57 82" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* Dripping soap bubbles */}
            <circle cx="30" cy="20" r="4" fill="#4ADE80" opacity="0.9" />
            <circle cx="68" cy="18" r="5" fill="#4ADE80" opacity="0.9" />
            <circle cx="74" cy="28" r="3.5" fill="#4ADE80" opacity="0.8" />
            <path d="M25 40 Q23 55 25 65 Q27 75 24 85" stroke="#4ADE80" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.75" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-serif-heading font-black tracking-widest text-[#F5F2EB] text-xl leading-none">
            SOAPBRIETY
          </span>
          <span className="text-[10px] font-mono-num tracking-[0.25em] text-[#C87A4B] font-bold uppercase">
            FROTHY AF • FRESH START
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-[#1E2E23] to-[#0F1711] border border-[#3A5E44] shadow-xl ${className}`}>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 mb-1 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#4ADE80]">
              <path d="M50 12 C32 12 22 26 22 45 C22 57 28 66 36 70 L36 82 L64 82 L64 70 C72 66 78 57 78 45 C78 26 68 12 50 12 Z" fill="#14261B" stroke="#4ADE80" strokeWidth="4" />
              <circle cx="38" cy="42" r="7" fill="#0C0D0E" stroke="#4ADE80" strokeWidth="2" />
              <circle cx="62" cy="42" r="7" fill="#0C0D0E" stroke="#4ADE80" strokeWidth="2" />
              <path d="M46 54 L54 54 L50 62 Z" fill="#4ADE80" />
              {/* Teeth */}
              <line x1="42" y1="74" x2="42" y2="82" stroke="#4ADE80" strokeWidth="3" />
              <line x1="50" y1="74" x2="50" y2="82" stroke="#4ADE80" strokeWidth="3" />
              <line x1="58" y1="74" x2="58" y2="82" stroke="#4ADE80" strokeWidth="3" />
              {/* Dripping Slime Soap */}
              <path d="M30 30 Q28 45 32 58 M68 32 Q72 48 68 60 M50 12 Q52 4 44 2 M56 10 Q64 4 60 0" stroke="#4ADE80" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="44" cy="4" r="3" fill="#86EFAC" />
              <circle cx="60" cy="2" r="4" fill="#86EFAC" />
            </svg>
          </div>
          <span className="font-serif-heading text-xs font-bold text-[#F5F2EB] tracking-wider">SOAPBRIETY</span>
          <span className="text-[9px] font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">EST. 2023</span>
        </div>
      </div>
    );
  }

  // Full Vintage Emblem
  return (
    <div className={`relative flex flex-col items-center text-center ${sizeClasses[size]} ${className}`}>
      <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
        {/* Background Vintage Parchment Glow Ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#C87A4B]/20 via-[#4ADE80]/20 to-[#991B1B]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Vintage Tattoo Skull & Froth Emblem */}
        <div className="relative w-40 h-40 rounded-full bg-[#131C16] border-4 border-[#35523D] flex items-center justify-center p-3 shadow-2xl overflow-hidden">
          {/* Outer Ornamental Ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C87A4B]/40 pointer-events-none"></div>
          
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="skullGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86EFAC" />
                <stop offset="50%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#14532D" />
              </linearGradient>
              <linearGradient id="bannerGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5F2EB" />
                <stop offset="50%" stopColor="#E2D9C5" />
                <stop offset="100%" stopColor="#C87A4B" />
              </linearGradient>
            </defs>

            {/* Background Froth Aura */}
            <circle cx="60" cy="40" r="14" fill="#22C55E" opacity="0.3" />
            <circle cx="140" cy="35" r="18" fill="#22C55E" opacity="0.35" />
            <circle cx="155" cy="65" r="12" fill="#22C55E" opacity="0.25" />
            <circle cx="45" cy="70" r="16" fill="#22C55E" opacity="0.3" />

            {/* Dripping Soap Bubbles top */}
            <circle cx="90" cy="22" r="7" fill="#86EFAC" />
            <circle cx="106" cy="18" r="9" fill="#4ADE80" />
            <circle cx="122" cy="26" r="6" fill="#86EFAC" />
            <circle cx="78" cy="28" r="8" fill="#4ADE80" />

            {/* Skull Body */}
            <path 
              d="M100 35 C65 35 48 60 48 95 C48 120 58 138 74 145 L74 165 L126 165 L126 145 C142 138 152 120 152 95 C152 60 135 35 100 35 Z" 
              fill="url(#skullGreenGrad)" 
              stroke="#0C0D0E" 
              strokeWidth="5" 
            />

            {/* Skull Eye Sockets */}
            <ellipse cx="78" cy="88" rx="14" ry="18" fill="#0C0D0E" stroke="#166534" strokeWidth="3" />
            <ellipse cx="122" cy="88" rx="14" ry="18" fill="#0C0D0E" stroke="#166534" strokeWidth="3" />
            
            {/* Eye Glow */}
            <circle cx="78" cy="88" r="4" fill="#86EFAC" />
            <circle cx="122" cy="88" r="4" fill="#86EFAC" />

            {/* Nose Cavity */}
            <path d="M93 108 L107 108 L100 124 Z" fill="#0C0D0E" />

            {/* Teeth */}
            <path d="M78 145 L78 165 M89 145 L89 165 M100 145 L100 165 M111 145 L111 165 M122 145 L122 165" stroke="#0C0D0E" strokeWidth="4" />

            {/* Dripping Soap Slime Streams */}
            <path d="M60 85 Q54 115 58 140 Q62 160 55 180" stroke="#86EFAC" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M140 85 Q146 115 142 140 Q138 160 145 180" stroke="#86EFAC" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M100 124 Q98 148 102 175" stroke="#4ADE80" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>

          {/* Banner Ribbon Overlay */}
          <div className="absolute bottom-1 w-[90%] bg-gradient-to-r from-[#C87A4B] via-[#E2D9C5] to-[#C87A4B] text-[#0C0D0E] font-serif-heading font-black text-xs px-2 py-1 rounded shadow-lg transform -rotate-2 border border-[#0C0D0E]">
            SOAPBRIETY
          </div>
        </div>
      </div>
    </div>
  );
};
