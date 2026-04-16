import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-heading tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer"
}) => {
  return (
    <div className={className}>
      <img 
        src="/logo.png" 
        alt="RiseManager Logo" 
        className={`${iconClassName} object-contain`}
      />
      {showText && <span className={textClassName}>RiseManager</span>}
    </div>
  );
};

export default Logo;
