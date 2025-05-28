import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">RS</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
      </div>
      <div className="hidden sm:block">
        <div className="font-semibold text-lg tracking-tight">Rahul Shah</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
          Full Stack Developer
        </div>
      </div>
    </div>
  );
};
