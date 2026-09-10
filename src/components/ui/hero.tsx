'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, MapPin, Download, Sparkles } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from './Button';

// Dynamically import MeshGradient with ssr: false to prevent WebGL hydration blocking in Next.js
const MeshGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#05070A]" />,
  }
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
  photoUrl?: string;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  name = profileData.name,
  role = profileData.role,
  description = profileData.bio,
  university = profileData.university,
  location = profileData.location,
  statusBadge = profileData.statusBadge,
  githubUrl = profileData.githubUrl,
  projectsHref = '#projects',
  resumeUrl = profileData.resumeUrl,
  photoUrl = profileData.photoUrl || '/images/sanatan-roy.png',
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

  // Motion variants for smooth, non-disruptive entrance (<1s total)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: prefersReducedMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#05070A] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Procedural Atmospheric Shader Layer (SSR Safe & Typed Correctly) */}
      {mounted && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen z-0">
          <MeshGradient
            colors={["#05070A", "#111827", "#1E3A5F", "#0E7490"]}
            speed={0.012}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      {/* Controlled Dark Backdrop Overlay for Guaranteed Contrast (4.5:1+) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/85 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070A]/90 via-[#05070A]/60 to-transparent pointer-events-none z-0" />

      {/* Main Two-Column Composition Container */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Hero Hierarchy */}
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {statusBadge}
              </div>
            </motion.div>

            {/* Hero Typography Stack */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
                HI, I'M
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase">
                {name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-sky-400">
                {role}
              </p>
            </motion.div>

            {/* Narrative Summary & Academic Note */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                {description}
              </p>
              
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 flex-wrap pt-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  {university}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {location}
                </span>
              </div>
            </motion.div>

            {/* Primary Action CTAs */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 flex-wrap">
              <Button
                size="lg"
                variant="primary"
                asLink
                href={projectsHref}
                className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-600/30"
              >
                View My Projects
                <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                asLink
                href={githubUrl}
                target="_blank"
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700"
              >
                <Github className="w-5 h-5 mr-1" />
                GitHub ↗
              </Button>

              {resumeUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  asLink
                  href={resumeUrl}
                  target="_blank"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800/50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Resume
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column: Sanatan's Authentic Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={photoVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px]"
            >
              {/* Subtle Radial Glow behind Portrait */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-indigo-600/25 via-sky-500/20 to-transparent blur-2xl -z-10" />

              {/* Portrait Frame Container */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/15 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-indigo-950/60 group">
                <Image
                  src={photoUrl}
                  alt="Sanatan Roy"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 440px"
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Bottom Frame Overlay & Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#05070A] via-[#05070A]/70 to-transparent flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white tracking-wide">{name}</p>
                    <p className="text-[10px] text-slate-300 font-medium">CSE • AI & ML</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-semibold">
                    GIET University
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom-Right Scroll Indicator Bar */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800/50">
        <span className="font-medium">AI/ML • Software Development</span>

        <a
          href={projectsHref}
          className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
        >
          <span className="uppercase tracking-widest text-[10px] font-semibold">Scroll to explore</span>
          <div className="p-2 rounded-full bg-slate-800/80 border border-slate-700 group-hover:border-indigo-500 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default PortfolioHero;
