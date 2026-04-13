import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-heading tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer"
}) => {
  return (
    <div className={className}>
      <svg className={iconClassName} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gradient Background */}
        <rect width="100" height="100" rx="22" fill="url(#logo_gradient)"/>
        
        {/* Bars */}
        <rect x="22" y="62" width="14" height="20" rx="4" fill="#0B1A28"/>
        <rect x="43" y="52" width="14" height="30" rx="4" fill="#0B1A28"/>
        <rect x="64" y="42" width="14" height="40" rx="4" fill="#0B1A28"/>
        
        {/* Line Graph */}
        <path d="M 18 58 L 38 36 L 52 48 L 74 24" stroke="#0B1A28" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Arrow Head */}
        <path d="M 58 23 L 77 23 L 77 42 Z" fill="#0B1A28" stroke="#0B1A28" strokeWidth="4" strokeLinejoin="round"/>

        <defs>
          <linearGradient id="logo_gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1DC8F2"/>
            <stop offset="1" stopColor="#0B79F2"/>
          </linearGradient>
        </defs>
      </svg>
      {showText && <span className={textClassName}>RiseManager</span>}
    </div>
  );
};

export default Logo;
