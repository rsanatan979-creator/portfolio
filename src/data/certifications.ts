export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "workshop" | "participation";
  category: "technical" | "activity";
  imageUrl?: string;
  pdfUrl?: string;
  credentialUrl?: string;
  badgeColor?: string;
  description?: string;
}

export const technicalCertifications: Certificate[] = [
  {
    id: "hbf",
    title: "Hedera Business Foundation (HBF)",
    issuer: "The Hashgraph Association",
    date: "7-AUG-2026",
    type: "certification",
    category: "technical",
    imageUrl: "/certificates/hedera-hbf.jpg",
    pdfUrl: "/certificates/hedera-hbf.pdf",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
    description: "Certified by The Hashgraph Association for completing the Hedera Business Foundation (HBF) credential course on Hedera distributed ledger technology."
  },
  {
    id: "hcda",
    title: "Hedera Certified Developer Associate (HCDA)",
    issuer: "The Hashgraph Association",
    date: "7 Aug 2026",
    type: "certification",
    category: "technical",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
    description: "Professional certification covering Hedera network fundamentals, smart contracts, and decentralized application development."
  },
  {
    id: "hcf",
    title: "Hedera Certified Foundation (HCF)",
    issuer: "The Hashgraph Association",
    date: "7 Aug 2026",
    type: "certification",
    category: "technical",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
    description: "Foundational certification on Hedera consensus mechanism, token service, and enterprise hashgraph architecture."
  },
  {
    id: "be10x-ai",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "December 21st, 2025",
    type: "workshop",
    category: "technical",
    imageUrl: "/certificates/be10x-ai.jpg",
    pdfUrl: "/certificates/be10x-ai.pdf",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800",
    description: "Verified completion certificate of AI Tools and ChatGPT workshop. Demonstrates practical capabilities in AI presentation generation, rapid data analysis, and AI-driven debugging."
  },
  {
    id: "vaultofcodes-security",
    title: "Ethical Hacking & Cybersecurity Workshop",
    issuer: "VaultofCodes",
    date: "2025",
    type: "workshop",
    category: "technical",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    description: "Practical workshop on web application vulnerability assessment, security fundamentals, and ethical hacking techniques."
  }
];

export const activitiesAndParticipation: Certificate[] = [
  {
    id: "projectathon",
    title: "Projectathon — Engineer's Day",
    issuer: "GIET University",
    date: "Engineer's Day 2025",
    type: "participation",
    category: "activity",
    imageUrl: "/certificates/projectathon.jpg",
    pdfUrl: "/certificates/projectathon.pdf",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    description: "Certificate of Participation awarded for competing in the 'Projectathon' organized by the IEI Students Chapter, ISTE Student Chapter, and SARS Club at GIET University on Engineer's Day."
  },
  {
    id: "sports-day",
    title: "National Sports Day 2025",
    issuer: "GIET University",
    date: "2025",
    type: "participation",
    category: "activity",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    description: "Event participation in campus sports activities organized during National Sports Day at GIET University."
  }
];
