'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, MapPin, Download, Sparkles, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from './Button';

// Dynamically import MeshGradient & PulsingBorder with ssr: false for Next.js WebGL compatibility
const MeshGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.MeshGradient as React.ComponentType<any>),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#05070A]" />,
  }
);

const PulsingBorder = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.PulsingBorder as React.ComponentType<any>),
  { ssr: false }
);

export interface PortfolioHeroProps {
  name?: string;
  role?: string;
  description?: string;
  university?: string;
  location?: string;
  statusBadge?: string;
  githubUrl?: string;
  projectsHref?: string;
  resumeUrl?: string;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  name = profileData.name,
  role = profileData.role,
  description = "I enjoy building software, experimenting with AI, and turning ideas into practical projects.",
  university = profileData.university,
  location = profileData.location,
  statusBadge = profileData.statusBadge,
  githubUrl = profileData.githubUrl,
  projectsHref = '#projects',
  resumeUrl = profileData.resumeUrl,
}) => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Motion variants for smooth, restrained entrance (< 1 sec total)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#05070A] text-white pt-28 pb-12 px-5 sm:px-6 lg:px-8">
      {/* Calm, Premium Atmospheric Shader Background */}
      {mounted && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen z-0">
          <MeshGradient
            colors={["#05070A", "#111827", "#1E3A5F", "#0E7490", "#4F46E5"]}
            speed={0.015}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      {/* Controlled Dark Overlay Masks Guaranteeing 4.5:1+ Contrast Ratio */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/85 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070A]/95 via-[#05070A]/70 to-transparent pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto my-auto py-6 sm:py-10">
        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate="visible"
          className="max-w-2xl text-left space-y-6"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {statusBadge}
            </div>
          </motion.div>

          {/* Typography Hierarchy */}
          <motion.div variants={itemVariants} className="space-y-1">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 block">
              HI, I'M
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-md">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-400 tracking-wide pt-1">
              {role}
            </p>
          </motion.div>

          {/* Supporting Narrative Description */}
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              {description}
            </p>
            
            <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Currently pursuing B.Tech in CSE (AI & ML) at {university}.</span>
            </p>
          </motion.div>

          {/* Career Focus & Location Bar */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 flex-wrap">
            <span className="px-3 py-1 rounded-md bg-indigo-950/50 border border-indigo-500/20 text-indigo-300 font-medium">
              AI/ML · Software Development
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-400" />
              {location}
            </span>
          </motion.div>

          {/* Primary Action Call-To-Actions (CTAs) */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2 flex-wrap">
            <Button
              size="lg"
              variant="primary"
              asLink
              href={projectsHref}
              className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-600/30"
            >
              View My Projects
              <ArrowDown className="w-4 h-4 ml-1.5 animate-bounce" />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              asLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700 backdrop-blur-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-400" />
            </Button>

            {resumeUrl && (
              <Button
                size="lg"
                variant="outline"
                asLink
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-slate-700 text-slate-300 hover:bg-slate-800/50"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Tasteful Bottom-Right Scroll Indicator with PulsingBorder & Circular Text */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800/40">
        <span className="text-slate-400 font-medium text-xs sm:text-sm">
          Sanatan Roy · Portfolio 2026
        </span>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={projectsHref}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
            aria-label="Scroll to projects"
          >
            <span className="uppercase tracking-widest text-[10px] font-semibold text-slate-400 group-hover:text-indigo-400 transition-colors">
              Scroll to explore
            </span>

            {/* Repurposed Tasteful PulsingBorder Badge */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              {mounted && !prefersReducedMotion && (
                <PulsingBorder
                  colors={["#4F46E5", "#0EA5E9", "#FFFFFF"]}
                  colorBack="#00000000"
                  speed={1.0}
                  roundness={1}
                  thickness={0.08}
                  softness={0.2}
                  intensity={3}
                  pulse={0.1}
                  scale={0.8}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                  }}
                />
              )}

              {/* Rotating Circular Text Ring around Arrow */}
              {!prefersReducedMotion && (
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <defs>
                    <path id="scroll-circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text className="text-[10px] fill-slate-300 font-medium tracking-widest">
                    <textPath href="#scroll-circle" startOffset="0%">
                      SCROLL TO EXPLORE • SANATAN ROY •
                    </textPath>
                  </text>
                </motion.svg>
              )}

              <ArrowDown className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform relative z-10" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
