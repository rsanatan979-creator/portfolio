import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-btn transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none";
  
  const variantStyles = {
    primary: "bg-brand text-white hover:bg-brand-light shadow-sm hover:-translate-y-[2px] active:translate-y-0",
    secondary: "bg-surface-light text-primaryText-light border border-borderSubtle-light hover:bg-secondarySurface-light dark:bg-surface-dark dark:text-primaryText-dark dark:border-borderSubtle-dark dark:hover:bg-secondarySurface-dark hover:-translate-y-[2px] active:translate-y-0",
    outline: "border border-brand text-brand hover:bg-brand-soft dark:hover:bg-brand-dark/10 hover:-translate-y-[2px] active:translate-y-0",
    ghost: "text-secondaryText-light hover:text-primaryText-light hover:bg-secondarySurface-light dark:text-secondaryText-dark dark:hover:text-primaryText-dark dark:hover:bg-secondarySurface-dark",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const combinedClasses = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
