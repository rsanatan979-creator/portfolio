# Design Guidelines Document (DESIGN.md)

**Project:** Sanatan Roy — Personal Portfolio  
**Design Version:** 1.0  
**Design Direction:** Gentle, Clean, Modern & Professional  

---

### 1. Design Goal
The portfolio should feel calm, approachable, professional, and student-friendly.

The design should **NOT** look like:
- A gaming website
- A cyberpunk interface
- An overly futuristic AI dashboard
- A template full of neon effects
- A website with constant animations
- An overly corporate business website

It should communicate:
> “I'm a student who enjoys technology, AI, software, and learning by building real projects.”

The work itself should attract attention more than visual effects.

---

### 2. Overall Visual Style
Use a modern minimal portfolio aesthetic with:
- Soft backgrounds
- Lots of breathing space
- Rounded cards
- Light borders
- Gentle shadows
- Simple typography
- Small amounts of color
- Clean project screenshots
- Subtle animations

Avoid excessive gradients and glassmorphism.

---

### 3. Primary Theme
**Default theme:** Light

- **Main background:** `#FAFAFA`
- **Primary surface:** `#FFFFFF`
- **Secondary surface:** `#F5F7FA`
- **Primary text:** `#18181B`
- **Secondary text:** `#64748B`
- **Border:** `#E5E7EB`
- **Primary brand color:** `#4F46E5`
- **Soft primary:** `#EEF2FF`
- **Secondary accent:** `#0EA5E9`
- **Success/accent:** `#10B981`

The main brand color should be Indigo/Blue.  
Do not use more than 2 strong accent colors on one screen.

---

### 4. Optional Dark Mode
Dark mode can be added, but it should remain gentle rather than becoming neon.

- **Background:** `#0F1115`
- **Surface:** `#17191F`
- **Secondary:** `#1D2027`
- **Primary text:** `#F4F4F5`
- **Secondary text:** `#A1A1AA`
- **Border:** `#292C33`
- **Primary:** `#818CF8`

Light mode should remain the default.

---

### 5. Typography
**Recommended font:** Inter (Alternative: Manrope)

Headings should be medium/bold rather than extremely heavy.

**Approximate scale:**
- **Hero Name:** 56–64px desktop / 38–44px mobile
- **Hero Role:** 24–28px desktop / 20–22px mobile
- **Section Heading:** 32–38px desktop / 27–30px mobile
- **Card Heading:** 19–22px
- **Body:** 16–18px
- **Small/Metadata:** 13–14px

Use comfortable line height. Large paragraphs should have a maximum readable width.

---

### 6. Page Width & Spacing
- **Maximum content width:** `max-width: 1200px;`
- **Horizontal padding:** Desktop: 32px | Tablet: 24px | Mobile: 18px
- **Vertical section spacing:** Desktop: 90–120px | Mobile: 65–80px

---

### 7. Navbar
Simple floating/sticky navbar.

**Desktop structure:**
```
SR.          About   Skills   Projects   Experience   Education    Contact
```
- **Left:** Simple personal wordmark (`Sanatan.` or `SR.`)
- **Right:** Navigation links + optional final button ("Let's Connect")
- **Style:** White/light with a subtle bottom border. On scroll: slight shadow, very subtle transparency/blur. Avoid excessive glass effects.

**Mobile:** Logo on left, simple hamburger button on right revealing a clean vertical navigation menu.

---

### 8. Hero Section
Personal and spacious layout.

**Desktop layout:**
```
--------------------------------------------------

 Hi, I'm Sanatan 👋                       [Photo]
                                                   
 Sanatan Roy                              subtle
                                         rounded
 CSE (AI & ML) Student                   portrait

 I enjoy building intelligent software
 and exploring how AI can solve
 practical problems.

 [View Projects] [GitHub]

 📍 Koraput, Odisha, India

--------------------------------------------------
```
**Suggested copy:**
```
Hi, I'm Sanatan 👋

CSE (AI & ML) Student

I enjoy building software, experimenting with AI,
and turning ideas into practical projects.

Currently studying at GIET University, Gunupur.

[View My Work]   [GitHub]
```
If a profile photograph isn't available yet, use a simple abstract illustration or initials block. Do not generate a fake portrait.

---

### 9. Small Status Badge
Above/below the hero title:
`● Open to learning & opportunities` (using a tiny green dot).

Do not claim “Available for hire” unless Sanatan specifically wants that later.

---

### 10. About Section
Concise personal story:
```
ABOUT ME
A little about me

[Short biography]

Quick Info
🎓 B.Tech CSE (AI & ML)
🏫 GIET University
📍 Koraput, Odisha
💻 AI + Software
```
Academic scores belong in Education, not dominating About.

---

### 11. Skills Section
Avoid percentage bars. Use grouped skill cards:

- **Programming:** Python, JavaScript, TypeScript
- **Web Development:** HTML, CSS, Node.js, Express
- **AI & ML:** YOLOv8, Gemini, Prompt Engineering, AI Tools
- **Tools & Creative:** GitHub, Cursor, Canva, Photoshop

Each skill should look like a small rounded tag with standard monochrome/color icons.

---

### 12. Projects Section
Visually strongest section. Feature 3–4 best projects in alternating desktop layout:
1. Lunar Mission Planner — AstroMinds (Hackathon)
2. HAL Meeting Management System (Internship)
3. MediSOS + MediQueue (Personal)
4. CivicLens-AI (Personal)

On mobile, standard vertical stack (Screenshot -> Title -> Description -> Tech -> Buttons).

---

### 13. Project Images
- Real screenshots prioritized.
- Ratio: ~16:9, `border-radius: 16px;`, thin border, light shadow.
- Simple placeholder with title if screenshots unavailable.

---

### 14. Project Labels
Subtle badges with soft colors:
- **Hackathon:** soft purple
- **Internship:** soft blue
- **Personal:** soft green

---

### 15. Individual Project Details
"View Project" opens detailed view/page covering: Problem, Idea, What I Built, How It Works, Tech Stack, What I Learned, Links.

---

### 16. Project Honesty
Visually separate implemented vs. planned features:
```
Implemented
✓ Complaint interface
✓ User workflows
✓ Analytics UI

Architecture / Future Work
○ PostgreSQL migration
○ FastAPI AI service
○ Cloud deployment
```

---

### 17. Internship Section
Timeline/card structure:
```
EXPERIENCE
Internship: HAL Meeting Management System [Pending confirmation of exact dates/title]
Software / Full-Stack Development
Node.js · Express · JavaScript · REST API
```

---

### 18. Education Section
Clean vertical timeline:
1. **2025 — 2029:** GIET University, Gunupur — B.Tech CSE (AI & ML) — CGPA: 8.1
2. **2025:** Saraswati Science H.S. School — +2 Science — 76.7%
3. **2023:** Saraswati Sisu Bidyamandir, Semiliguda — High School — 75.5%

---

### 19. Certifications
Title: "Learning & Certifications".
Grid of small cards (3 cols desktop, 2 tablet, 1 mobile) supporting "View Certificate →".

---

### 20. Certification Categories
Separate **Certifications & Learning** from **Activities & Participation** (e.g. Projectathon, National Sports Day).

---

### 21. Certificate Modal
Clicking "View Certificate" opens a modal (60% dark backdrop, centered preview, Close & Open Full Size buttons).

---

### 22. Creative Work ("Beyond Code")
Small section showcasing graphic design work (Logos, Business Cards, Canva, Photoshop) without overshadowing technical focus.

---

### 23. Contact Section
Welcoming & simple: Name, Email, Message, Send button, links to GitHub, LinkedIn, Email. No public phone number.

---

### 24. Footer
Minimal: Name, role, location, social links, copyright (© 2026).

---

### 25. Buttons & Hover Rules
- **Primary:** Background Indigo (`#4F46E5`), Text White, Radius 10px
- **Secondary:** Background White, Border Light Gray, Text Dark
- **Hover:** Slight color change, ~2px upward movement. No glowing neon.

---

### 26. Cards
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E5E7EB`
- **Radius:** `16px`
- **Shadow:** `0 4px 20px rgba(0, 0, 0, 0.04)`
- **Hover:** `translateY(-3px)`

---

### 27. Border Radius System
- Buttons: `10px`
- Tags: `8px`
- Cards / Images: `16px`
- Large panels / Avatar: `20px`

---

### 28. Animation Rules
Gentle motion (section entrance: fade + slide 15px up; card hover: 200ms translateY -3px).  
No cursor trails, particle explosions, constant text typing, 3D tilt, or long intro screens.

---

### 29. Icons
Lucide icons (thin and consistent): `MapPin`, `Github`, `Linkedin`, `Mail`, `ExternalLink`, `Download`, `GraduationCap`, `Code2`, `BrainCircuit`, `Briefcase`, `Award`.

---

### 30. Mobile Design
Mobile-first parity, single-column stack, full-width buttons, accessible navigation.

---

### 31. Empty/Missing Content
Use internal placeholders (`PROFILE_IMAGE`, `LINKEDIN_URL`, `CONTACT_EMAIL`, `RESUME_URL`, etc.). Hide unsupplied items rather than displaying "Lorem Ipsum" or "Coming Soon".

---

### 32. Homepage Order
1. Navbar
2. Hero
3. About
4. Featured Projects
5. Experience
6. Skills
7. Education
8. Certifications
9. Activities
10. Beyond Code (Creative Work)
11. Contact
12. Footer

---

### 33. Design Principles for AI Coding Agents
- Prefer simplicity over visual effects.
- Use whitespace instead of decorative elements.
- Projects > Certificates.
- Real project screenshots > AI-generated artwork.
- One consistent visual system.
- Subtle animations, no reduced readability.
- No random gradients, blobs, particles, or neon glowing effects.

---

*End of DESIGN.md*
