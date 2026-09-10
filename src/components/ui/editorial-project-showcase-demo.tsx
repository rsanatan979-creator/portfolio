import React from 'react';
import EditorialProjectShowcase from './editorial-project-showcase';

export default function EditorialProjectShowcaseDemo() {
  return (
    <EditorialProjectShowcase
      projectNumber="01"
      eyebrow="Featured Project"
      title="Lunar Mission Planner — AstroMinds"
      subtitle="AI-Powered Lunar Surface Analysis & Rover Planning"
      category="Hackathon Project"
      categoryLabel="Hackathon Project"
      description="An AI-powered lunar surface analysis platform that processes uploaded lunar imagery to detect crater/boulder hazards using YOLOv8, analyze terrain elevation and slope, select safe landing zones, and compute optimal rover paths using A* and genetic algorithms."
      technologies={["Python", "FastAPI", "YOLOv8", "Gemini 1.5", "A* Algorithm", "Genetic Algorithms"]}
      implementedFeatures={[
        "YOLOv8 crater & boulder detection on uploaded lunar imagery",
        "Terrain slope, roughness & elevation hazard assessment",
        "Automated landing-zone safety scoring",
        "A* pathfinding and genetic algorithm rover route planning",
        "Gemini 1.5 Flash mission assistant with local offline fallback"
      ]}
      aiGuidanceDisclosure="Developed with AI guidance and tooling assistance during hackathon experimentation."
      githubUrl="https://github.com/rsanatan979-creator/lunar_ai"
      year="2026"
    />
  );
}
