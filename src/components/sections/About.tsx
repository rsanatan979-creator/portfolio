import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '@/data/profile';
import { GraduationCap, MapPin, Code2, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondarySurface-light/50 dark:bg-secondarySurface-dark/30 border-y border-borderSubtle-light dark:border-borderSubtle-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A little about who I am and what I build"
          subtitle="Combining computer science fundamentals, artificial intelligence, and practical software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Biography Narrative */}
          <div className="lg:col-span-2 space-y-4 text-base text-secondaryText-light dark:text-secondaryText-dark leading-relaxed">
            <p>
              I am <strong className="text-primaryText-light dark:text-primaryText-dark">Sanatan Roy</strong>, an undergraduate student from Koraput, Odisha, currently pursuing a Bachelor of Technology in Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning at GIET University, Gunupur (2025–2029).
            </p>
            <p>
              My primary focus is at the intersection of <strong className="text-primaryText-light dark:text-primaryText-dark">AI/ML and Software Engineering</strong>. Rather than focusing solely on theoretical models, I enjoy building functional applications that solve real-world problems—from lunar hazard computer vision systems to full-stack management tools.
            </p>
            <p>
              Beyond coding, I have creative interests in graphic design (branding, posters, visual design), prompt engineering, modern AI workflows, writing, and video creation. I approach software development as a continuous learning process.
            </p>
          </div>

          {/* Quick Info Grid Cards */}
          <div className="space-y-4">
            <div className="p-4 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle flex items-start gap-3">
              <div className="p-2 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                  Degree & Major
                </h4>
                <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark mt-0.5">
                  B.Tech CSE (AI & ML)
                </p>
                <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark">
                  CGPA: 8.1 / 10.0
                </p>
              </div>
            </div>

            <div className="p-4 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle flex items-start gap-3">
              <div className="p-2 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                  University
                </h4>
                <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark mt-0.5">
                  GIET University
                </p>
                <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark">
                  Gunupur, Odisha
                </p>
              </div>
            </div>

            <div className="p-4 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle flex items-start gap-3">
              <div className="p-2 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                  Location
                </h4>
                <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark mt-0.5">
                  {profileData.location}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle flex items-start gap-3">
              <div className="p-2 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                  Focus Areas
                </h4>
                <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark mt-0.5">
                  AI/ML + Full-Stack Software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
