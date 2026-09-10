import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-tag bg-secondarySurface-light text-primaryText-light border border-borderSubtle-light dark:bg-secondarySurface-dark dark:text-primaryText-dark dark:border-borderSubtle-dark hover:border-brand/40 transition-colors duration-150">
      <span className="w-1.5 h-1.5 rounded-full bg-brand mr-2" />
      {name}
    </span>
  );
};
