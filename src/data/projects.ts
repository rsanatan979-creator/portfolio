export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: "hackathon" | "internship" | "personal" | "academic";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved?: string;
  technologies: string[];
  implementedFeatures: string[];
  plannedFeatures?: string[];
  aiGuidanceDisclosure?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const featuredProjects: Project[] = [
  {
    id: "lunar-mission-planner",
    title: "Lunar Mission Planner — AstroMinds",
    subtitle: "Lunar Surface Analysis & Rover Route Planning",
    category: "hackathon",
    categoryLabel: "Hackathon Project",
    shortDescription: "An AI-powered lunar surface analysis platform that processes uploaded lunar imagery to identify hazards, assess landing safety, and plan optimal rover paths.",
    fullDescription: "AstroMinds processes lunar imagery to detect craters and boulders using YOLOv8, evaluates slope, roughness, and elevation for hazard scoring, and plans rover routes using A* and genetic algorithms. It features an integrated Gemini 1.5 Flash mission assistant with local fallback capability for offline environments.",
    problemSolved: "Assisting lunar lander safety and rover navigation by automating computer-vision hazard detection and terrain analysis.",
    technologies: ["Python", "FastAPI", "YOLOv8", "Gemini 1.5", "A* Algorithm", "Genetic Algorithms"],
    implementedFeatures: [
      "YOLOv8 crater & boulder detection on uploaded lunar imagery",
      "Terrain slope, roughness & elevation hazard assessment",
      "Automated landing-zone safety scoring",
      "A* pathfinding and genetic algorithm rover route planning",
      "Gemini 1.5 Flash mission assistant with local offline fallback",
      "Generated mission visualization outputs & FastAPI REST endpoints"
    ],
    aiGuidanceDisclosure: "Developed with AI guidance and tooling assistance during hackathon experimentation.",
    githubUrl: "https://github.com/rsanatan979-creator/lunar_ai",
    featured: true,
  },
  {
    id: "hal-meeting-management",
    title: "HAL Meeting Management System",
    subtitle: "Full-Stack Organizational Meeting Administration",
    category: "internship",
    categoryLabel: "Internship Project",
    shortDescription: "A comprehensive meeting management system engineered to streamline organizational meeting scheduling, attendee tracking, and analytics reporting.",
    fullDescription: "Built during an internship project, this platform handles meeting CRUD operations, employee attendee management, automated attendance logging, and export capabilities. Designed with Node.js/Express REST backend and Oracle database integration readiness.",
    problemSolved: "Eliminating manual meeting coordination, improving attendance transparency, and producing instant administrative reports.",
    technologies: ["JavaScript", "Node.js", "Express.js", "REST APIs", "Oracle DB Architecture", "HTML/CSS"],
    implementedFeatures: [
      "Meeting CRUD & recurring schedule management",
      "Attendee management & digital attendance tracking",
      "Protected session authentication & role workflows",
      "Analytics reporting engine with Excel, CSV & PDF export capabilities",
      "Oracle database integration architecture & clean REST API service layer"
    ],
    aiGuidanceDisclosure: "Internship project focused on full-stack web architecture and database readiness.",
    githubUrl: "https://github.com/rsanatan979-creator/meeting-system-04",
    featured: true,
  },
  {
    id: "medisos-mediqueue",
    title: "MediSOS + MediQueue",
    subtitle: "Healthcare Emergency & Hospital Queue Platform",
    category: "personal",
    categoryLabel: "Personal Project",
    shortDescription: "A unified healthcare prototype combining rapid emergency SOS interfaces with hospital queue operational management.",
    fullDescription: "MediSOS + MediQueue bridges patient emergency requests with hospital capacity workflows. It includes hospital selection, emergency mapping concepts, real-time queue dashboards, patient record management, and doctor scheduling interfaces.",
    problemSolved: "Reducing hospital overcrowding and streamlining emergency patient routing through integrated queue analytics.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web APIs", "UI/UX Design"],
    implementedFeatures: [
      "Emergency SOS triggering interface & hospital map view prototype",
      "Hospital selection & queue management dashboard",
      "Protected patient record & doctor appointment scheduling views",
      "Department analytics & queue estimation UI"
    ],
    plannedFeatures: [
      "Real-world emergency dispatch API integration",
      "SMS notification gateway for queue position updates"
    ],
    aiGuidanceDisclosure: "UI/UX and frontend workflow prototype.",
    githubUrl: "https://github.com/rsanatan979-creator",
    featured: true,
  },
  {
    id: "civiclens-ai",
    title: "CivicLens-AI / AI Civic Agent",
    subtitle: "AI-Assisted Civic Issue Reporting & Management",
    category: "personal",
    categoryLabel: "Personal Project",
    shortDescription: "An AI-oriented civic platform enabling citizens to report community issues with automated classification and municipal tracking.",
    fullDescription: "CivicLens-AI explores citizen complaint workflows, community upvoting, and administrative resolution tracking. Designed with a microservice architecture pairing React/TypeScript frontend with FastAPI AI diagnostics and PostgreSQL data modeling.",
    problemSolved: "Simplifying citizen complaint submissions and helping municipal bodies prioritize infrastructure repairs through automated categorization.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "FastAPI (Planned)", "PostgreSQL/Prisma (Planned)"],
    implementedFeatures: [
      "Citizen complaint reporting & image submission interface",
      "Role-based view structure (Citizen, Official, Administrator)",
      "Community verification & issue upvoting UI",
      "Complaint resolution status tracking dashboard"
    ],
    plannedFeatures: [
      "FastAPI automated image diagnostic & severity classification service",
      "PostgreSQL + Prisma spatial indexing for civic hotspot prediction",
      "React Query cached state management architecture"
    ],
    aiGuidanceDisclosure: "Combines functional frontend prototype with designed architectural blueprint for full-stack AI deployment.",
    githubUrl: "https://github.com/rsanatan979-creator/CivicLens-AI",
    featured: true,
  }
];

export interface AdditionalRepo {
  name: string;
  description: string;
  tech: string[];
  url: string;
}

export const additionalRepositories: AdditionalRepo[] = [
  {
    name: "deep_guard",
    description: "Deep learning experimentation repository exploring security and anomaly detection patterns.",
    tech: ["Python", "Deep Learning"],
    url: "https://github.com/rsanatan979-creator/deep_guard"
  },
  {
    name: "lunar_ai1.1",
    description: "Iterative enhancements and algorithms for lunar surface computer vision analysis.",
    tech: ["Python", "YOLOv8", "Computer Vision"],
    url: "https://github.com/rsanatan979-creator/lunar_ai1.1"
  },
  {
    name: "DSA_SEC_C_24CSEAIML112",
    description: "Data Structures & Algorithms coursework repository containing core algorithm implementations.",
    tech: ["Python", "C++", "DSA"],
    url: "https://github.com/rsanatan979-creator/DSA_SEC_C_24CSEAIML112"
  }
];
