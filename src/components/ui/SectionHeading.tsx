import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 ${alignmentClasses}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-brand bg-brand-soft rounded-tag dark:bg-brand-dark/10 dark:text-brand-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primaryText-light dark:text-primaryText-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-secondaryText-light dark:text-secondaryText-dark leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
