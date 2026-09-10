import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { educationData } from '@/data/education';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-secondarySurface-light/50 dark:bg-secondarySurface-dark/30 border-y border-borderSubtle-light dark:border-borderSubtle-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Journey"
          title="Education & academic qualifications"
          subtitle="A timeline of my academic journey from high school to computer science degree specialization."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand/30 space-y-10">
          {educationData.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand border-4 border-surface-light dark:border-surface-dark group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle hover:shadow-hover transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>

                  {edu.isCurrent && (
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-tag bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800 self-start sm:self-auto">
                      Currently Pursuing
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-primaryText-light dark:text-primaryText-dark">
                  {edu.institution}
                </h3>

                <p className="text-base font-semibold text-brand mt-0.5">
                  {edu.degree}
                </p>

                <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark mt-1">
                  {edu.boardOrUniversity} • {edu.location}
                </p>

                <div className="mt-4 pt-3 border-t border-borderSubtle-light dark:border-borderSubtle-dark flex items-center justify-between">
                  <span className="text-xs text-secondaryText-light dark:text-secondaryText-dark">
                    {edu.scoreLabel}
                  </span>
                  <span className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark flex items-center gap-1">
                    <Award className="w-4 h-4 text-brand" />
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
