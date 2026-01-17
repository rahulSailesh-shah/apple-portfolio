
import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, icon }) => {
  return (
    <div className={`glass-card p-8 flex flex-col group relative ${className}`}>
      {/* Decorative inner glow on hover */}
      <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
      
      {(title || icon) && (
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4">
            {icon && <div className="text-white/40 group-hover:text-white transition-colors">{icon}</div>}
            {title && <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">{title}</h3>}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-white/20 transition-colors" />
        </div>
      )}
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BentoCard;
