'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { Github, ExternalLink, Info, CheckCircle2, CircleDashed } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

export type EditorialProjectShowcaseProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryLabel?: string;
  description: string;
  problemSolved?: string;
  technologies: string[];
  implementedFeatures?: string[];
  plannedFeatures?: string[];
  aiGuidanceDisclosure?: string;
  imageSrc?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  projectNumber?: string;
  year?: string;
  status?: string;
  theme?: 'light' | 'dark';
  height?: string; // e.g. "180vh"
  forceProgress?: number;
  preview?: boolean;
  className?: string;
};

export const EditorialProjectShowcase: React.FC<EditorialProjectShowcaseProps> = ({
  eyebrow = 'Featured Project',
  title,
  subtitle,
  category,
  categoryLabel,
  description,
  problemSolved,
  technologies = [],
  implementedFeatures = [],
  plannedFeatures = [],
  aiGuidanceDisclosure,
  imageSrc,
  imageAlt = 'Project screenshot',
  githubUrl,
  liveUrl,
  projectNumber = '01',
  year = '2026',
  height = '175vh',
  forceProgress,
  preview = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const titleTextRef = useRef<HTMLHeadingElement>(null);

  const [progress, setProgress] = useState(forceProgress ?? 0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<number>(64);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update progress from forceProgress prop if present
  useEffect(() => {
    if (forceProgress !== undefined) {
      setProgress(forceProgress);
    }
  }, [forceProgress]);

  // Scroll Progress Calculation using RequestAnimationFrame
  useEffect(() => {
    if (forceProgress !== undefined || preview || prefersReducedMotion) return;

    let animationFrameId: number;

    const updateScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress relative to container sticky section
      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) {
        setProgress(1);
        return;
      }

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollableDistance;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [forceProgress, preview, prefersReducedMotion]);

  // Responsive Title Fitting via ResizeObserver
  useEffect(() => {
    if (!titleContainerRef.current || !titleTextRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!titleContainerRef.current || !titleTextRef.current) return;
      const containerWidth = titleContainerRef.current.clientWidth;
      if (containerWidth <= 0) return;

      // Fit title width dynamically within container bounds
      const calculatedFontSize = Math.min(Math.max(containerWidth / (title.length * 0.55), 28), 72);
      setFontSize(calculatedFontSize);
    });

    resizeObserver.observe(titleContainerRef.current);
    return () => resizeObserver.disconnect();
  }, [title]);

  // Effective progress for animations (full 1.0 if reduced motion enabled)
  const effectiveProgress = prefersReducedMotion ? 1 : progress;

  // Category Badge Colors
  const getBadgeStyle = (cat: string) => {
    if (cat.toLowerCase().includes('hackathon')) {
      return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800';
    }
    if (cat.toLowerCase().includes('internship')) {
      return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800';
    }
    return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800';
  };

  // Stage-based progress reveals
  // Stage 1: Image scaling (0.00 -> 0.25)
  // Stage 2: Title reveal (0.15 -> 0.50)
  // Stage 3: Meta & Description reveal (0.45 -> 0.80)
  // Stage 4: Tech stack & CTAs (0.70 -> 1.00)
  const titleOpacity = prefersReducedMotion ? 1 : Math.min(Math.max((effectiveProgress - 0.1) * 3, 0), 1);
  const titleTranslateY = prefersReducedMotion ? 0 : (1 - titleOpacity) * 20;

  const contentOpacity = prefersReducedMotion ? 1 : Math.min(Math.max((effectiveProgress - 0.35) * 3, 0), 1);
  const contentTranslateY = prefersReducedMotion ? 0 : (1 - contentOpacity) * 25;

  const imageScale = prefersReducedMotion ? 1 : 1 + (1 - effectiveProgress) * 0.05;

  return (
    <>
      <div
        ref={containerRef}
        className={clsx('relative w-full', className)}
        style={{ height: preview ? 'auto' : height }}
      >
        {/* Sticky Container for Desktop / Tablet */}
        <div className={clsx('w-full', preview ? 'relative' : 'sticky top-16 md:top-20 min-h-[85vh] flex flex-col justify-center')}>
          <div className="bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-card p-6 sm:p-8 md:p-10 shadow-subtle hover:shadow-hover transition-all duration-300 overflow-hidden relative">
            
            {/* Background Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/30 via-transparent to-transparent dark:from-brand-dark/10 pointer-events-none" />

            {/* Header Row: Project Number & Category Badge */}
            <div className="flex items-center justify-between gap-4 mb-6 relative z-10 pb-4 border-b border-borderSubtle-light dark:border-borderSubtle-dark">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-brand tracking-tighter">
                  {projectNumber}
                </span>
                <span className="h-4 w-px bg-borderSubtle-light dark:bg-borderSubtle-dark" />
                <span className="text-xs font-semibold uppercase tracking-wider text-secondaryText-light dark:text-secondaryText-dark">
                  {eyebrow}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className={clsx('px-3 py-1 text-xs font-semibold rounded-tag border', getBadgeStyle(category))}>
                  {categoryLabel || category}
                </span>
                <span className="text-xs font-medium text-secondaryText-light dark:text-secondaryText-dark hidden sm:inline-block">
                  {year}
                </span>
              </div>
            </div>

            {/* Main Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Visual Frame / Project Image (Stage 1) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative w-full aspect-video rounded-card overflow-hidden bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark group">
                  {imageSrc ? (
                    <div
                      className="w-full h-full relative transition-transform duration-500 ease-out"
                      style={{ transform: `scale(${imageScale})` }}
                    >
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3">
                        <Info className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-base text-primaryText-light dark:text-primaryText-dark">
                        {title}
                      </h4>
                      <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark mt-1">
                        {subtitle || category}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Copy & Interaction Panel (Stage 2 - 5) */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Dynamically Scaled Large Title (Stage 2) */}
                <div ref={titleContainerRef} className="overflow-hidden">
                  <h3
                    ref={titleTextRef}
                    className="font-bold tracking-tight text-primaryText-light dark:text-primaryText-dark transition-all duration-300 leading-tight"
                    style={{
                      fontSize: `${fontSize}px`,
                      opacity: titleOpacity,
                      transform: `translateY(${titleTranslateY}px)`,
                    }}
                  >
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-sm sm:text-base font-semibold text-brand mt-1">
                      {subtitle}
                    </p>
                  )}
                </div>

                {/* Description & Details (Stage 3 & 4) */}
                <div
                  className="space-y-4 transition-all duration-300"
                  style={{
                    opacity: contentOpacity,
                    transform: `translateY(${contentTranslateY}px)`,
                  }}
                >
                  <p className="text-sm sm:text-base text-secondaryText-light dark:text-secondaryText-dark leading-relaxed">
                    {description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-tag bg-secondarySurface-light dark:bg-secondarySurface-dark text-secondaryText-light dark:text-secondaryText-dark border border-borderSubtle-light dark:border-borderSubtle-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-3 pt-3 flex-wrap">
                    <Button size="sm" variant="primary" onClick={() => setIsModalOpen(true)}>
                      View Full Details
                    </Button>

                    {githubUrl && (
                      <Button size="sm" variant="secondary" asLink href={githubUrl} target="_blank">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}

                    {liveUrl && (
                      <Button size="sm" variant="outline" asLink href={liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Deep-Dive Window */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-borderSubtle-light dark:border-borderSubtle-dark">
            <span className={clsx('px-3 py-1 text-xs font-semibold rounded-tag border', getBadgeStyle(category))}>
              {categoryLabel || category}
            </span>
            <span className="text-xs font-medium text-secondaryText-light dark:text-secondaryText-dark">
              Project #{projectNumber} • {year}
            </span>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondaryText-light dark:text-secondaryText-dark mb-1">
              Overview
            </h4>
            <p className="text-base leading-relaxed">{description}</p>
          </div>

          {problemSolved && (
            <div className="p-4 rounded-card bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-brand mb-1">
                Problem Solved
              </h5>
              <p className="text-sm">{problemSolved}</p>
            </div>
          )}

          {/* Implemented Features */}
          {implementedFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-primaryText-light dark:text-primaryText-dark mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accentEmerald" />
                Implemented Features
              </h4>
              <ul className="space-y-1.5 pl-6 list-disc text-sm text-secondaryText-light dark:text-secondaryText-dark">
                {implementedFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Planned Features */}
          {plannedFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-primaryText-light dark:text-primaryText-dark mb-2 flex items-center gap-2">
                <CircleDashed className="w-4 h-4 text-accentSky" />
                Architecture & Planned Future Work
              </h4>
              <ul className="space-y-1.5 pl-6 list-disc text-sm text-secondaryText-light dark:text-secondaryText-dark">
                {plannedFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* AI Guidance Disclosure */}
          {aiGuidanceDisclosure && (
            <div className="p-3 rounded-tag bg-brand-soft/60 dark:bg-brand-dark/10 border border-brand/20 text-xs text-secondaryText-light dark:text-secondaryText-dark">
              <span className="font-semibold text-brand">Disclosure: </span>
              {aiGuidanceDisclosure}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-borderSubtle-light dark:border-borderSubtle-dark">
            {githubUrl && (
              <Button size="sm" variant="secondary" asLink href={githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                View Code on GitHub
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" variant="primary" asLink href={liveUrl} target="_blank">
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

export default EditorialProjectShowcase;
