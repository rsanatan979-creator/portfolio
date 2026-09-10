import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { SkillBadge } from '../ui/SkillBadge';
import { Code2, Globe, Server, BrainCircuit, Wand2, Palette } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-brand" />;
      case 'Server':
        return <Server className="w-5 h-5 text-brand" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-brand" />;
      case 'Wand2':
        return <Wand2 className="w-5 h-5 text-brand" />;
      case 'Palette':
      default:
        return <Palette className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Capabilities"
          title="Technical proficiency & creative tools"
          subtitle="Grouped capabilities across programming languages, web technology, AI models, developer tools, and design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-tag bg-brand-soft dark:bg-brand-dark/20">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-lg text-primaryText-light dark:text-primaryText-dark">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark mb-4">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
