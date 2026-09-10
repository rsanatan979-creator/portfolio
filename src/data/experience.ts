export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  confirmationNote?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "hal-internship",
    role: "Full-Stack Software Development Intern",
    organization: "HAL (Hindustan Aeronautics Limited)",
    location: "On-site",
    duration: "May 2025 – June 2025",
    type: "Internship",
    description: "Developed the HAL Meeting Management System, a web application designed to streamline internal meeting scheduling, attendee verification, attendance tracking, and multi-format administrative reporting.",
    responsibilities: [
      "Designed and implemented RESTful API endpoints using Node.js and Express.js",
      "Created meeting scheduling, employee attendance logging, and attendee CRUD workflows",
      "Integrated report generation utilities supporting PDF, CSV, and Excel file exports",
      "Structured Oracle database schema readiness and frontend-backend API integration layers"
    ],
    skills: ["Node.js", "Express.js", "JavaScript", "REST APIs", "Oracle DB Architecture", "Report Export Engine"],
    confirmationNote: "Specific organizational designation and formal documentation details configured per internship records."
  }
];
