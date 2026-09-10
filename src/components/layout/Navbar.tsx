'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from '../ui/Button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-primaryText-light dark:text-primaryText-dark hover:text-brand transition-colors"
        >
          {profileData.name.split(' ')[0]}.
          <span className="text-brand text-xs font-normal ml-1 hidden sm:inline-block">
            CSE (AI & ML)
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-secondaryText-light dark:text-secondaryText-dark hover:text-brand dark:hover:text-brand-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-tag text-secondaryText-light dark:text-secondaryText-dark hover:text-primaryText-light dark:hover:text-primaryText-dark hover:bg-secondarySurface-light dark:hover:bg-secondarySurface-dark transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Button size="sm" variant="primary" asLink href="#contact">
            Let's Connect
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-tag text-secondaryText-light dark:text-secondaryText-dark"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-tag text-primaryText-light dark:text-primaryText-dark hover:bg-secondarySurface-light dark:hover:bg-secondarySurface-dark"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-borderSubtle-light dark:border-borderSubtle-dark px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-primaryText-light dark:text-primaryText-dark hover:text-brand transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
            <Button
              size="md"
              variant="primary"
              asLink
              href="#contact"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
