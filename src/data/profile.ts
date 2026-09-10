export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  university: string;
  studyPeriod: string;
  cgpa: number;
  careerFocus: string[];
  statusBadge: string;
  githubUrl: string;
  linkedinUrl?: string;
  email?: string;
  resumeUrl?: string;
  photoUrl?: string;
}

export const profileData: ProfileData = {
  name: "Sanatan Roy",
  role: "CSE (AI & ML) Student",
  tagline: "Building practical solutions with AI, software, and curiosity.",
  bio: "I am a Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at GIET University, Gunupur. Based in Koraput, Odisha, I enjoy building software, experimenting with AI models, and turning ideas into functional, practical applications.",
  location: "Koraput, Odisha, India",
  university: "GIET University, Gunupur",
  studyPeriod: "2025–2029",
  cgpa: 8.1,
  careerFocus: [
    "AI/ML Development",
    "Software Engineering",
    "Full-Stack Web Development",
    "Generative AI Applications"
  ],
  statusBadge: "Open to learning & opportunities",
  githubUrl: "https://github.com/rsanatan979-creator",
  email: "rsanatan311@gmail.com",
  photoUrl: "/images/sanatan-roy.png",
  // Placeholders intentionally left undefined per TRD/PRD guidelines until supplied
  linkedinUrl: undefined,
  resumeUrl: undefined,
};
