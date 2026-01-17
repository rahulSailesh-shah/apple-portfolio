import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center shadow-lg border-2 border-white/50">
          <span className="text-white font-bold text-sm tracking-[0.1em] code-text">RS</span>
        </div>
      </div>
    </div>
  );
};
