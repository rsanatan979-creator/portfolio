'use client';

import React, { useState } from 'react';
import { Project } from '@/data/projects';
import { Button } from './Button';
import { Modal } from './Modal';
import { Github, ExternalLink, Info, CheckCircle2, CircleDashed } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCategoryBadgeClass = (category: Project['category']) => {
    switch (category) {
      case 'hackathon':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800';
      case 'internship':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800';
      case 'personal':
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800';
    }
  };

  return (
    <>
      <div className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-8 items-center bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-card p-6 sm:p-8 shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300`}>
        {/* Project Visual / Thumbnail Placeholder */}
        <div className="w-full lg:w-1/2 aspect-video rounded-card bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark flex flex-col items-center justify-center p-6 text-center group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/40 to-transparent dark:from-brand-dark/10 pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3">
            <Info className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-lg text-primaryText-light dark:text-primaryText-dark">
            {project.title}
          </h4>
          <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark mt-1 max-w-xs">
            {project.subtitle || project.categoryLabel}
          </p>
        </div>

        {/* Project Information */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-tag border ${getCategoryBadgeClass(project.category)}`}>
              {project.categoryLabel}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primaryText-light dark:text-primaryText-dark">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-secondaryText-light dark:text-secondaryText-dark leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark border border-borderSubtle-light dark:border-borderSubtle-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 flex-wrap">
            <Button size="sm" variant="primary" onClick={() => setIsModalOpen(true)}>
              View Details
            </Button>

            {project.githubUrl && (
              <Button size="sm" variant="secondary" asLink href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            )}

            {project.liveUrl && (
              <Button size="sm" variant="outline" asLink href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Deep-Dive Window */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-tag border ${getCategoryBadgeClass(project.category)}`}>
              {project.categoryLabel}
            </span>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondaryText-light dark:text-secondaryText-dark mb-1">
              Overview
            </h4>
            <p className="text-base leading-relaxed">{project.fullDescription}</p>
          </div>

          {project.problemSolved && (
            <div className="p-4 rounded-card bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-brand mb-1">
                Problem Solved
              </h5>
              <p className="text-sm">{project.problemSolved}</p>
            </div>
          )}

          {/* Implemented Features */}
          <div>
            <h4 className="text-sm font-semibold text-primaryText-light dark:text-primaryText-dark mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accentEmerald" />
              Implemented Features
            </h4>
            <ul className="space-y-1.5 pl-6 list-disc text-sm text-secondaryText-light dark:text-secondaryText-dark">
              {project.implementedFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Architecture / Future Work (Explicitly Separated per Content Honesty Rule) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-primaryText-light dark:text-primaryText-dark mb-2 flex items-center gap-2">
                <CircleDashed className="w-4 h-4 text-accentSky" />
                Architecture & Planned Future Work
              </h4>
              <ul className="space-y-1.5 pl-6 list-disc text-sm text-secondaryText-light dark:text-secondaryText-dark">
                {project.plannedFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* AI Guidance Disclosure */}
          {project.aiGuidanceDisclosure && (
            <div className="p-3 rounded-tag bg-brand-soft/60 dark:bg-brand-dark/10 border border-brand/20 text-xs text-secondaryText-light dark:text-secondaryText-dark">
              <span className="font-semibold text-brand">Disclosure: </span>
              {project.aiGuidanceDisclosure}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
            {project.githubUrl && (
              <Button size="sm" variant="secondary" asLink href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                View Code on GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" variant="primary" asLink href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
                Open Live Application
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
