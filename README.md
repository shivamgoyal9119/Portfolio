# Shivam Goyal — Personal Portfolio

> A high-performance, modern personal portfolio engineered for **Shivam Goyal**, Computer Science and Engineering student specializing in **Java Backend Development**, **Spring Boot**, **Microservices**, **System Design**, and **Competitive Programming**.

---

## 🎨 Design System & Palette

- **Main Background**: `#050507` (Deep, pure dark canvas)
- **Secondary Surface**: `#0B0B10`
- **Card Background**: `#111116`
- **Elevated Surface**: `#171720`
- **Electric Blue**: `#4169FF`
- **Vibrant Violet**: `#9747FF`
- **Subtle Borders**: `rgba(255, 255, 255, 0.08)`
- **Typography**: Space Grotesk (Headings), Inter (Body), Geist Mono (Code/Metrics)

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Social Icons

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── Shivam_Goyal_Resume.pdf   # Downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── globals.css           # Global design tokens & styling
│   │   ├── layout.tsx            # Metadata, SEO tags & spotlight cursor
│   │   └── page.tsx              # Assembled single-page application
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky navigation with active tracking
│   │   ├── Hero.tsx              # Asymmetrical hero with bio & CTAs
│   │   ├── HeroVisual.tsx        # Spring Cloud / Microservice architecture HUD
│   │   ├── About.tsx             # Editorial narrative & 5 core engineering pillars
│   │   ├── Skills.tsx            # Categorized skills matrix with filter tabs
│   │   ├── Experience.tsx        # Career timeline (Corizo Web Dev Intern)
│   │   ├── Projects.tsx          # Flagship AirX Drive + MyCineVerse + CodeNest
│   │   ├── ProjectVisuals/       # Custom architecture mockups for each project
│   │   ├── Achievements.tsx      # LeetCode 1850+, CodeChef 1600+, DSA stats
│   │   ├── Education.tsx         # JECRC University B.Tech (CGPA 8.6) + Schooling
│   │   ├── Certifications.tsx    # HackerRank, Google Cloud, CodeChef, Deloitte
│   │   ├── Contact.tsx           # Copy email, direct mailto inquiry, socials
│   │   ├── Footer.tsx            # Footer copyright & smooth back-to-top
│   │   ├── SpotlightCursor.tsx   # Desktop-only subtle ambient cursor light
│   │   └── SocialIcons.tsx       # Crisp SVG icons for GitHub, LinkedIn, etc.
│   └── data/
│       └── portfolioData.ts      # Centralized single source of truth
├── package.json
└── tailwind.config.ts
```

---

## 🛠️ Local Development & Build

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 2. Build for Production
```bash
npm run build
```

### 3. Run Production Server
```bash
npm start
```

---

## ⚙️ Updating Content & Links

All portfolio content is centralized in **`src/data/portfolioData.ts`**:
- Personal details, bio, and resume download link
- GitHub, LinkedIn, LeetCode, and CodeChef handles
- Skills and categorization
- Project descriptions, technical highlights, and repository URLs
- Contest rankings, rating metrics, and tournament achievements

