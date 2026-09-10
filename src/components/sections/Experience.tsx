import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondarySurface-light/50 dark:bg-secondarySurface-dark/30 border-y border-borderSubtle-light dark:border-borderSubtle-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work Experience"
          title="Internship & software development experience"
          subtitle="Practical contributions in software engineering, backend API development, and enterprise web solutions."
        />

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle hover:shadow-hover transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-borderSubtle-light dark:border-borderSubtle-dark">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-tag bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800 text-xs font-semibold mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryText-light dark:text-primaryText-dark">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-brand mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col md:items-end text-xs sm:text-sm text-secondaryText-light dark:text-secondaryText-dark space-y-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-brand" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-secondaryText-light" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-base text-secondaryText-light dark:text-secondaryText-dark leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-primaryText-light dark:text-primaryText-dark mb-3">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-secondaryText-light dark:text-secondaryText-dark">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accentEmerald shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark border border-borderSubtle-light dark:border-borderSubtle-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.confirmationNote && (
                  <div className="p-3 rounded-tag bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 text-xs text-secondaryText-light dark:text-secondaryText-dark flex items-center gap-2 mt-4">
                    <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                    <span>{exp.confirmationNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
