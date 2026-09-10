import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { featuredProjects, additionalRepositories } from '@/data/projects';
import { EditorialProjectShowcase } from '../ui/editorial-project-showcase';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { Github, FolderGit2 } from 'lucide-react';
import { profileData } from '@/data/profile';

export const Projects: React.FC = () => {
  const editorialProjects = featuredProjects.slice(0, 2);
  const secondaryProjects = featuredProjects.slice(2);

  return (
    <section id="projects" className="py-24 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected technical projects & AI experimentation"
          subtitle="A showcase of practical applications built across hackathons, internship experience, and personal software projects."
        />

        {/* Editorial Scroll Storytelling Showcase for Top Featured Projects (Projects 01 & 02) */}
        <div className="space-y-16">
          {editorialProjects.map((project, idx) => (
            <EditorialProjectShowcase
              key={project.id}
              projectNumber={`0${idx + 1}`}
              eyebrow={project.categoryLabel}
              title={project.title}
              subtitle={project.subtitle}
              category={project.category}
              categoryLabel={project.categoryLabel}
              description={project.fullDescription}
              problemSolved={project.problemSolved}
              technologies={project.technologies}
              implementedFeatures={project.implementedFeatures}
              plannedFeatures={project.plannedFeatures}
              aiGuidanceDisclosure={project.aiGuidanceDisclosure}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              year="2026"
            />
          ))}
        </div>

        {/* Standard Project Cards for Secondary Projects (Projects 03 & 04) */}
        <div className="space-y-10 pt-8 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
          <h3 className="text-xl font-bold text-primaryText-light dark:text-primaryText-dark">
            Additional Featured Software Work
          </h3>

          <div className="space-y-8">
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isReversed={index % 2 !== 0} />
            ))}
          </div>
        </div>

        {/* Additional GitHub Repositories */}
        <div className="pt-12 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
          <div className="text-left mb-8">
            <h3 className="text-xl font-bold text-primaryText-light dark:text-primaryText-dark flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-brand" />
              More Repositories on GitHub
            </h3>
            <p className="text-sm text-secondaryText-light dark:text-secondaryText-dark mt-1">
              Explore additional codebases, course work, and computer vision experimentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalRepositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-200 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-base text-primaryText-light dark:text-primaryText-dark group-hover:text-brand transition-colors">
                    {repo.name}
                  </h4>
                  <Github className="w-4 h-4 text-secondaryText-light dark:text-secondaryText-dark group-hover:text-brand" />
                </div>
                <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark line-clamp-2 mb-3">
                  {repo.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-10">
            <Button size="lg" variant="secondary" asLink href={profileData.githubUrl} target="_blank">
              <Github className="w-5 h-5" />
              Explore More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
