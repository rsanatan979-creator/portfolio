import React from 'react';
import { profileData } from '@/data/profile';
import { Github, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-borderSubtle-light dark:border-borderSubtle-dark py-12 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-bold text-primaryText-light dark:text-primaryText-dark">
            {profileData.name}
          </h3>
          <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark flex items-center justify-center md:justify-start gap-1.5">
            <span>{profileData.role}</span>
            <span>•</span>
            <MapPin className="w-3 h-3 text-brand inline" />
            <span>{profileData.location}</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark hover:text-brand hover:border-brand/40 border border-borderSubtle-light dark:border-borderSubtle-dark transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {profileData.email && (
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark hover:text-brand hover:border-brand/40 border border-borderSubtle-light dark:border-borderSubtle-dark transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-xs text-secondaryText-light dark:text-secondaryText-dark space-y-1">
          <p>Designed & built by {profileData.name}</p>
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
