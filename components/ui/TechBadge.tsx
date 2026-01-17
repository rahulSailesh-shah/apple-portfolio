
import React from 'react';

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default group">
      <span className="text-[10px] font-medium text-white/50 group-hover:text-white code-text tracking-tight uppercase">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;
