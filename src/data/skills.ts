export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages used for software & AI building",
    iconName: "Code2",
    skills: ["Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Web Development",
    description: "Frontend layout, styling, and web fundamentals",
    iconName: "Globe",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Web Development"]
  },
  {
    title: "Backend & APIs",
    description: "Server architecture and API development",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
  },
  {
    title: "AI & ML",
    description: "Computer vision, LLM integration, and AI logic",
    iconName: "BrainCircuit",
    skills: ["AI/ML Fundamentals", "YOLOv8", "Gemini Integrations", "Prompt Engineering", "AI-Assisted Development"]
  },
  {
    title: "AI Tools & Workflows",
    description: "Modern AI development and creation tools",
    iconName: "Wand2",
    skills: ["ChatGPT", "Claude", "Gemini", "Cursor", "Google Flow", "MinMax"]
  },
  {
    title: "Design & Creative",
    description: "Visual design, branding, and asset creation",
    iconName: "Palette",
    skills: ["Canva", "Photoshop", "Logo Design", "Business Card Design", "Graphic Design"]
  }
];
