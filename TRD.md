# Technical Requirements Document (TRD)

**Project:** Sanatan Roy — Personal Portfolio Website  
**Version:** 1.0  
**Date:** 10 September 2026  
**Owner:** Sanatan Roy  

---

### 1. Project Overview
Build a modern, responsive personal portfolio website for Sanatan Roy, a B.Tech CSE (AI & ML) student at GIET University, Gunupur.

The portfolio's primary objective is to help Sanatan secure internships and future job opportunities in:
- AI/ML
- Software Development
- Full-Stack/Web Development
- Generative AI

The website should prioritize technical projects, internship experience, skills, certifications, and contact information.

The portfolio should present Sanatan as a student developer who is actively building practical AI and software projects, without exaggerating project maturity or technical experience.

---

### 2. User Profile
- **Name:** Sanatan Roy
- **Location:** Koraput, Odisha, India
- **Current Role:** B.Tech CSE (AI & ML) Student
- **University:** GIET University, Gunupur
- **Academic Period:** 2025–2029
- **Current CGPA:** 8.1
- **Career Focus:** AI/ML + Software Development
- **GitHub:** https://github.com/rsanatan979-creator

**Suggested hero positioning:**
> “CSE (AI & ML) Student Building Intelligent Software”

Supporting text should highlight interests in AI/ML, software engineering, web development, and practical AI-powered applications.

---

### 3. Recommended Technology Stack
Use a modern frontend architecture:

**Frontend:**
- Next.js 15+ or latest stable Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion / Motion for animations
- Lucide Icons

**Development:**
- Node.js
- npm/pnpm
- ESLint
- Prettier

**Deployment:**
- Vercel

**Source Control:**
- Git
- GitHub

The first version should not require a database.

Portfolio content should be maintained through structured TypeScript/JSON data files rather than hardcoded throughout components.

Example:
```
src/data/
    profile.ts
    projects.ts
    experience.ts
    skills.ts
    education.ts
    certifications.ts
```

---

### 4. Application Architecture
Recommended structure:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── contact/
│           └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       ├── CertificateCard.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   └── certifications.ts
│
└── public/
    ├── projects/
    ├── certificates/
    ├── profile/
    └── resume/
```
Components must remain reusable and content should remain separated from presentation logic.

---

### 5. Site Architecture
Version 1 should use a single-page portfolio with anchored navigation.

**Navigation:**
Home | About | Skills | Projects | Experience | Education | Certifications | Contact

Desktop should use a sticky navigation bar.
Mobile should use a compact responsive navigation menu.

---

### 6. Hero Section
Hero must immediately communicate:
- Sanatan Roy
- CSE (AI & ML) Student
- AI/ML + Software Developer
- Location: Koraput, Odisha, India

**Primary CTA:** “View My Projects”  
**Secondary CTAs:** “GitHub”, “Download Resume” (Resume CTA should remain hidden or marked unavailable until the resume file is supplied).

A subtle animated AI/software visual can appear in the hero background. Avoid excessive typewriter animations.

---

### 7. About Section
Professional summary should communicate:
Sanatan is a CSE-AIML undergraduate interested in creating intelligent software combining AI, practical problem solving, and modern web technologies.

The section may mention:
- AI/ML
- Software development
- Python
- Web development
- AI tools
- Graphic design
- Continuous learning

Do not describe Sanatan as an AI/ML Engineer yet. Use accurate phrases such as:
- “AI/ML Student”
- “Aspiring AI/ML & Software Developer”
- “Student Developer”

---

### 8. Skills System
Skills should be grouped instead of presented as one large list.

**Programming:**
- Python
- JavaScript
- TypeScript

**Web:**
- HTML
- CSS
- JavaScript
- Web development

**AI/ML:**
- AI/ML fundamentals
- YOLOv8
- AI-assisted application development
- Prompt engineering

**Backend/Architecture skills (demonstrated through projects):**
- FastAPI
- Node.js
- Express
- REST APIs

**AI Tools:**
- ChatGPT
- Claude
- Gemini
- Cursor
- Google Flow
- MinMax
- Other creative AI tools

**Design:**
- Canva
- Photoshop
- Logo design
- Business-card design

Do not use fake percentage skill bars such as “Python 90%.”

---

### 9. Featured Projects
Projects are the most important portfolio section.

#### Project 1 — Lunar Mission Planner: AstroMinds
- **Classification:** Hackathon Project
- **Description:** AI-powered lunar surface analysis platform that processes uploaded lunar imagery to identify terrain hazards, analyze landing safety, plan rover routes, and provide an AI mission assistant.
- **Technical capabilities:** YOLOv8 crater/boulder detection, terrain analysis, slope/roughness/elevation analysis, hazard fusion, landing-site selection, A* route planning, genetic algorithm experimentation, Gemini 1.5 Flash integration, local fallback assistant, generated mission visualization, FastAPI API.
- **Backend:** Python + FastAPI
- **Important disclosure:** Developed with AI guidance. Portfolio wording must represent actual contribution and not imply every algorithm or model was built entirely from scratch.

#### Project 2 — HAL Meeting Management System
- **Classification:** Internship Project
- **Description:** Full-stack meeting administration system supporting meeting scheduling, participant management, attendance tracking, reports, and export workflows.
- **Technical capabilities:** Node.js, Express, JavaScript, REST APIs, authentication, protected frontend pages, Meeting CRUD, Schedule CRUD, employee/attendee management, attendance management, analytics/report APIs, Excel export, CSV export, PDF export, Oracle database integration architecture.
- **Important:** Exact organization, title, and dates must be confirmed before public deployment.

#### Project 3 — MediSOS + MediQueue
- **Classification:** Personal Project
- **Description:** Unified healthcare application combining emergency SOS functionality and healthcare queue/operations management.
- **Features:** Landing system, authentication, protected routes, hospital selection, emergency SOS interface, emergency map, queue dashboard, patient management, scheduling, doctor management, healthcare analytics. Do not claim real emergency dispatch capability unless confirmed.

#### Project 4 — CivicLens-AI / AI Civic Agent
- **Classification:** Personal Project
- **Purpose:** AI-oriented civic issue reporting platform designed for citizens and municipal workflows.
- **Concepts/features include:** Civic complaint reporting, image-based issue classification, citizen/official/admin roles, community verification, complaint tracking, analytics, hotspot prediction architecture, React Query architecture, REST API design, PostgreSQL/Prisma data architecture, security/RBAC design, FastAPI AI-service design.
- **Important:** Explicitly distinguish “Implemented Features” from “Designed/Planned Architecture”.

---

### 10. GitHub Projects
Additional GitHub repositories currently include:
- `deep_guard`
- `lunar_ai`
- `lunar_ai1.1`
- `CivicLens-AI`
- `meeting-system-04`
- `DSA_SEC_C_24CSEAIML112`

**GitHub profile:** https://github.com/rsanatan979-creator  
Only projects with sufficient descriptions/screenshots should become featured portfolio cards. Other repositories can be linked through “Explore More on GitHub”.

---

### 11. Project Card Requirements
Every featured project card should support:
- Project image/thumbnail
- Project title
- Category
- Short problem statement
- Solution summary
- Technology badges
- GitHub button
- Live demo button when available
- “View Details” capability

Do not display non-working demo buttons.

---

### 12. Internship Experience
Include an Experience section prominently.

**Current known item:**
- HAL Meeting Management System (Internship Project)

**Missing before final publication:**
- Organization confirmation
- Internship title
- Start/end dates
- Location/remote status
- Exact responsibilities

Use placeholders in development rather than inventing these values.

---

### 13. Education
- **GIET University, Gunupur:** B.Tech in Computer Science & Engineering — Artificial Intelligence & Machine Learning (2025–2029). Current CGPA: 8.1
- **Saraswati Science H.S. School, Link Road:** Higher Secondary / +2 Science, Council of Higher Secondary Education, Odisha (2025). Score: approx. 76.7%
- **Saraswati Sisu Bidyamandir, Semiliguda:** High School Certificate, Board of Secondary Education, Odisha (2023). Score: 453/600 = 75.5%

Do not publish uploaded marksheets on the website.

---

### 14. Certifications
Separate categories for professional/technical learning vs. participation.

**Technical learning/certification:**
- Hedera Certified Developer Associate (HCDA), The Hashgraph Association — 7 Aug 2026
- Hedera Certified Foundation (HCF), The Hashgraph Association — 7 Aug 2026
- Hedera Business Foundation (HBF), The Hashgraph Association — 7 Aug 2026
- AI Tools & ChatGPT Workshop, be10x — 21 Dec 2025
- Ethical Hacking & Cybersecurity Workshop, VaultofCodes

**Activities/Participation:**
- Projectathon — Engineer's Day
- National Sports Day 2025 — Participation

Do not visually present participation certificates as equivalent to technical certifications.

---

### 15. Certificate Viewer
Certificate cards should contain: Title, Issuer, Date, Type. Optional: “View Credential” modal/lightbox. Use optimized copies rather than loading full original images on initial page load.

---

### 16. Contact Section
Eventually support: Email, GitHub, LinkedIn, Contact form. (GitHub currently confirmed).
Contact form fields: Name, Email, Subject, Message.
Validation: Valid email, max input lengths, empty-field rejection, server-side validation, spam/rate-limit protection.

---

### 17. Visual Design
Dark-first premium AI/software aesthetic.

**Suggested colors:**
- Background: `#080B12`
- Surface: `#111827`
- Primary: `#6366F1`
- Secondary: `#8B5CF6`
- Accent: `#22D3EE`
- Primary Text: `#F8FAFC`
- Secondary Text: `#94A3B8`

Use gradients sparingly. Feels technical and modern without looking like a gaming website.

---

### 18. Motion
Moderate animation level (fade/slide section entrance, subtle card hover, navbar transitions, image hover, background glow, smooth scrolling). Respect `prefers-reduced-motion`.

---

### 19. Responsive Requirements
Must work at 320px+, 375px, 768px, 1024px, 1440px+. No horizontal scrolling.

---

### 20. Performance Requirements
Target Lighthouse: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.

---

### 21. SEO
Metadata (Title, Description, Keywords), OpenGraph metadata, Twitter/social cards, sitemap.xml, robots.txt, canonical URL, JSON-LD Person schema.

---

### 22. Accessibility
Keyboard accessible, semantic HTML, alt text, heading hierarchy, visible focus states, ARIA, WCAG-compliant contrast, reduced-motion support.

---

### 23. Security & Privacy
No secrets, API keys, or private IDs. Only publish institution, qualification, year, percentage/CGPA.

---

### 24. Content Accuracy Rules
Never upgrade "Designed" to "Built", "Prototype" to "Production", "Workshop Participation" to "Professional Certification", or "AI-assisted development" to "Built entirely from scratch".

---

### 25. Data Model
TypeScript models for `Project` and `Certificate`.

---

### 26. Analytics
Vercel Web Analytics (privacy-conscious).

---

### 27. Version 1 Acceptance Criteria
Responsive, clean identity, at least 3 major projects, education verified, certifications separated, GitHub connected, contact works, SEO/social metadata configured, Vercel ready.

---

### 28. Information Still Required
LinkedIn URL, contact email, resume PDF, portrait photo, HAL dates/title, project live URLs, project screenshots, visual theme choice.

---

### 29. Development Priority
Foundation → Navigation → Hero → About → Projects → Internship → Skills → Education → Certifications → Contact → SEO → Accessibility → Performance → Deployment.

---

*End of TRD*
