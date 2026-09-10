export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  boardOrUniversity: string;
  score: string;
  scoreLabel: string;
  location: string;
  isCurrent?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: "giet-btech",
    institution: "GIET University",
    degree: "B.Tech in Computer Science & Engineering",
    field: "Artificial Intelligence & Machine Learning",
    duration: "2025 – 2029",
    boardOrUniversity: "GIET University, Gunupur",
    score: "8.1",
    scoreLabel: "Current CGPA",
    location: "Gunupur, Odisha, India",
    isCurrent: true
  },
  {
    id: "higher-secondary",
    institution: "Saraswati Science H.S. School",
    degree: "Higher Secondary (+2 Science)",
    field: "Science Stream",
    duration: "2023 – 2025",
    boardOrUniversity: "Council of Higher Secondary Education (CHSE), Odisha",
    score: "76.7%",
    scoreLabel: "Final Score (460/600)",
    location: "Link Road, Cuttack, Odisha, India"
  },
  {
    id: "high-school",
    institution: "Saraswati Sisu Bidyamandir",
    degree: "High School Certificate (10th)",
    field: "General Secondary Education",
    duration: "2023",
    boardOrUniversity: "Board of Secondary Education (BSE), Odisha",
    score: "75.5%",
    scoreLabel: "Final Score (453/600)",
    location: "Semiliguda, Koraput, Odisha, India"
  }
];
