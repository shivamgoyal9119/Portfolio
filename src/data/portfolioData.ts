export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights?: {
    pattern: string;
    description: string;
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface AchievementStat {
  metric: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  context: string;
  platform: 'LeetCode' | 'CodeChef' | 'DSA' | 'Contest';
  accentColor: string;
  badge?: string;
}

export interface Honor {
  title: string;
  event: string;
  organizer: string;
  description: string;
  rank?: string;
  year?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  timeline: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  coursework?: string[];
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verified?: boolean;
  platform?: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  timeline: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shivam Goyal",
    monogram: "SG",
    headline: "Building Scalable Backend Systems & Intelligent Digital Experiences.",
    role: "Computer Science Engineering Student & Java Backend Developer",
    bioDescription:
      "I'm a Computer Science Engineering student passionate about backend development, distributed systems, system design and solving challenging algorithmic problems. I enjoy building scalable applications and transforming complex ideas into practical solutions.",
    aboutParagraphs: [
      "I'm Shivam Goyal, a Computer Science and Engineering student at JECRC University, Jaipur. My primary interest lies in backend engineering, particularly Java, Spring Boot, Microservices and scalable system architecture.",
      "I enjoy designing and developing applications that solve practical problems. From cloud storage platforms to movie ticket booking systems, I like exploring how software architecture, databases and distributed services work together.",
      "Beyond development, I actively participate in competitive programming and continuously improve my problem-solving skills through algorithmic challenges."
    ],
    labels: [
      "Java Backend Developer",
      "Spring Boot Developer",
      "Microservices Enthusiast",
      "Problem Solver"
    ],
    status: {
      indicator: "Available for SDE Internships",
      subtle: "Actively solving problems & building systems",
    },
    contact: {
      email: "shivamgoyal9119@gmail.com",
      phone: "+91 8107604726",
      location: "Neem ka Thana, Sikar, Rajasthan, India",
      resumeUrl: "/Shivam_Goyal_Resume.pdf",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/shivamgoyal9119",
        handle: "shivamgoyal9119",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/shivam-goyal-backend",
        handle: "Shivam Goyal",
        icon: "Linkedin",
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com/u/shivamgoyal9119",
        handle: "shivamgoyal9119",
        icon: "Code",
      },
      {
        platform: "CodeChef",
        url: "https://www.codechef.com/users/shivamgoyal9119",
        handle: "shivamgoyal9119",
        icon: "Terminal",
      },
    ],
  },

  aboutHighlights: [
    {
      title: "Backend Engineering",
      description: "Robust microservices, RESTful APIs, and resilient data layers built on Spring Boot & Java.",
      icon: "Server",
    },
    {
      title: "Distributed Systems",
      description: "Service discovery with Netflix Eureka, API Gateway orchestration, circuit breaking & fault tolerance.",
      icon: "Network",
    },
    {
      title: "System Design",
      description: "Crafting High-Level (HLD) and Low-Level (LLD) architectures with clean modular decoupling and schema optimization.",
      icon: "Layers",
    },
    {
      title: "Competitive Programming",
      description: "1500+ algorithmic problems solved with 1850+ LeetCode rating and 1600+ CodeChef rating.",
      icon: "Cpu",
    },
    {
      title: "Continuous Learning",
      description: "Relentless curiosity about modern cloud platforms, database internals, and concurrent programming.",
      icon: "Sparkles",
    },
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "Java" },
        { name: "C++" },
        { name: "C" },
        { name: "Python" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Backend Development",
      iconName: "Server",
      skills: [
        { name: "Spring Boot" },
        { name: "Spring Framework" },
        { name: "Microservices" },
        { name: "REST APIs" },
        { name: "Netflix Eureka" },
        { name: "API Gateway" },
        { name: "Load Balancing" },
        { name: "Circuit Breaker" },
        { name: "Spring Security" },
        { name: "JWT" },
        { name: "JPA" },
        { name: "JDBC" },
        { name: "Servlets" },
        { name: "JSP" },
        { name: "MVC" },
      ],
    },
    {
      title: "Frontend Development",
      iconName: "Layout",
      skills: [
        { name: "React.js" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Schema Design" },
      ],
    },
    {
      title: "System Design",
      iconName: "Boxes",
      skills: [
        { name: "High-Level Design (HLD)" },
        { name: "Low-Level Design (LLD)" },
      ],
    },
    {
      title: "DevOps & Tools",
      iconName: "Wrench",
      skills: [
        { name: "Docker" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Maven" },
        { name: "Antigravity" },
      ],
    },
    {
      title: "Soft Skills",
      iconName: "Users",
      skills: [
        { name: "Problem Solving" },
        { name: "Leadership" },
        { name: "Team Collaboration" },
        { name: "Communication" },
        { name: "Time Management" },
        { name: "Quick Learner" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Web Development Intern",
      company: "Corizo",
      location: "Remote",
      timeline: "June 2024 – August 2024",
      type: "Internship",
      bullets: [
        "Developed full-stack web applications using the MERN Stack.",
        "Contributed to two team projects covering frontend, backend and database integration.",
        "Designed MongoDB schemas and implemented efficient queries for fast data storage and retrieval.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "airx-drive",
      title: "AirX Drive",
      subtitle: "Scalable Cloud File Storage Platform",
      description:
        "An architecture-focused, Google Drive-inspired cloud storage platform built using Spring Boot and Microservices Architecture.",
      highlights: [
        "Architected independent microservices with Netflix Eureka for dynamic service discovery.",
        "Built React.js frontend integrated via RESTful APIs with API Gateway for secure request routing and orchestration.",
        "Engineered backend services using JPA and H2 Database.",
        "Implemented Load Balancing and Circuit Breaker resilience patterns to ensure high availability, fault tolerance and reliable execution across distributed services.",
      ],
      tags: [
        "Spring Boot",
        "Microservices",
        "React.js",
        "Netflix Eureka",
        "API Gateway",
        "REST APIs",
        "JPA",
        "H2 Database",
        "Resilience4j",
      ],
      featured: true,
      githubUrl: "https://github.com/shivamgoyal9119/airx-drive",
      liveUrl: undefined,
      architectureHighlights: [
        {
          pattern: "Service Registry & Discovery",
          description: "Netflix Eureka maintains active instances and handles dynamic node registration without manual config.",
        },
        {
          pattern: "API Gateway Routing",
          description: "Central entry point handling request routing, rate limiting headers, and security context pass-through.",
        },
        {
          pattern: "Resilience & Fallbacks",
          description: "Circuit Breakers prevent cascading failures when isolated storage microservices experience latency.",
        },
      ],
    },
    {
      id: "mycineverse",
      title: "MyCineVerse",
      subtitle: "Movie Ticket Booking Platform",
      description:
        "A BookMyShow-inspired movie ticket booking platform supporting movie browsing, show scheduling and ticket booking.",
      highlights: [
        "Architected a BookMyShow-inspired ticket booking platform using Spring Boot and RESTful APIs, enabling movie browsing, show scheduling and ticket booking.",
        "Developed a dynamic frontend using HTML, CSS, and JavaScript, integrating with backend via APIs.",
        "Implemented efficient Schema Design with JPA mappings on MySQL for structured and optimized data management.",
        "Engineered scalable backend using Maven with layered architecture for reliable data persistence.",
      ],
      tags: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "MySQL",
        "JPA",
        "Maven",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      featured: false,
      githubUrl: "https://github.com/shivamgoyal9119/mycineverse",
      liveUrl: undefined,
      architectureHighlights: [
        {
          pattern: "Layered Architecture",
          description: "Strict Controller-Service-Repository separation ensuring high cohesion and unit testability.",
        },
        {
          pattern: "Relational Schema Mapping",
          description: "Optimized relational constraints for theaters, shows, seats, and transactional ticket booking.",
        },
      ],
    },
    {
      id: "codenest",
      title: "CodeNest",
      subtitle: "Coding Contest Management Platform",
      description:
        "A full-stack contest management platform that allows institutions to create, schedule and manage coding competitions through a modular and scalable system design.",
      highlights: [
        "Built a full-stack contest management platform using Java, Servlets, and JSP.",
        "Built role-based Admin and User Panel enabling contest creation, scheduling and participant registration.",
        "Managed backend data operations using JDBC and MySQL with optimized Schema Design and responsive interfaces using HTML, CSS, JavaScript.",
      ],
      tags: [
        "Java",
        "Servlets",
        "JSP",
        "JDBC",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      featured: false,
      githubUrl: "https://github.com/shivamgoyal9119/codenest",
      liveUrl: undefined,
      architectureHighlights: [
        {
          pattern: "Role-Based Access Control",
          description: "Segregated session-based authorization for administrative organizers and contest participants.",
        },
        {
          pattern: "Direct JDBC Optimization",
          description: "Raw SQL query optimization and connection pooling for rapid contest leaderboard calculation.",
        },
      ],
    },
  ] as Project[],

  achievementStats: [
    {
      metric: "1850+",
      numericTarget: 1850,
      suffix: "+",
      value: "1850+",
      label: "LeetCode Contest Rating",
      context: "Top 6.34% globally across competitive programmers",
      platform: "LeetCode",
      accentColor: "#FFA116",
      badge: "Top 6.34% Globally",
    },
    {
      metric: "645",
      numericTarget: 645,
      suffix: "",
      value: "645",
      label: "Global Rank in Biweekly 182",
      context: "Achieved out of tens of thousands of global participants on LeetCode",
      platform: "LeetCode",
      accentColor: "#00D8F6",
      badge: "Biweekly Contest 182",
    },
    {
      metric: "1600+",
      numericTarget: 1600,
      suffix: "+",
      value: "1600+",
      label: "CodeChef Rating",
      context: "Consistent performance in weekly division contests",
      platform: "CodeChef",
      accentColor: "#0284C7",
      badge: "Division Competitor",
    },
    {
      metric: "82",
      numericTarget: 82,
      suffix: "",
      value: "82",
      label: "Global Rank in Starters 148",
      context: "Rank 82 globally on CodeChef Starters 148",
      platform: "CodeChef",
      accentColor: "#06B6D4",
      badge: "Starters 148",
    },
    {
      metric: "1500+",
      numericTarget: 1500,
      suffix: "+",
      value: "1500+",
      label: "DSA Problems Solved",
      context: "Mastery across LeetCode, CodeChef, GeeksforGeeks & Codeforces",
      platform: "DSA",
      accentColor: "#00DF8F",
      badge: "Algorithmic Problem Solver",
    },
  ] as AchievementStat[],

  honors: [
    {
      title: "1st Place Winner",
      event: "Code-O-Mania",
      organizer: "JECRC University Tech Fest",
      description: "Secured 1st position in university-wide competitive programming tournament featuring advanced algorithmic challenges.",
      rank: "Rank 1",
    },
    {
      title: "2nd Place Winner",
      event: "Code-A-thon",
      organizer: "JECRC University Tech Fest",
      description: "Secured 2nd position in intense time-constrained coding hackathon solving core problem sets.",
      rank: "Rank 2",
    },
    {
      title: "Advanced to Level 2 Qualifier",
      event: "GenW.AI Explorer Coding Competition",
      organizer: "Deloitte",
      description: "Successfully cleared Level 1 and advanced to Level 2 of Deloitte's flagship national coding contest.",
      rank: "Level 2 Qualifier",
    },
  ] as Honor[],

  education: [
    {
      institution: "JECRC University, Jaipur",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      timeline: "August 2023 – July 2027",
      grade: "8.6",
      gradeType: "CGPA",
      location: "Jaipur, Rajasthan",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "OOP (Object-Oriented Programming)",
        "Computer Networking",
        "Database Management Systems (DBMS)",
        "Artificial Intelligence",
        "Machine Learning",
        "Google Cloud Computing",
      ],
    },
    {
      institution: "Varda Smart School, Sikar",
      degree: "Senior Secondary (Class XII)",
      timeline: "2021 – 2022",
      grade: "70.6%",
      gradeType: "Percentage",
      location: "Sikar, Rajasthan",
    },
    {
      institution: "Varda Smart School, Sikar",
      degree: "Secondary (Class X)",
      timeline: "2019 – 2020",
      grade: "74.8%",
      gradeType: "Percentage",
      location: "Sikar, Rajasthan",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      verified: true,
      platform: "HackerRank",
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      verified: true,
      platform: "HackerRank",
    },
    {
      title: "Google Cloud Computing Fundamentals",
      issuer: "Google",
      verified: true,
      platform: "Verified on Credly",
    },
    {
      title: "Dynamic Programming",
      issuer: "CodeChef",
      verified: true,
      platform: "CodeChef",
    },
    {
      title: "GenW.AI Explorer (Level 1)",
      issuer: "Deloitte",
      verified: true,
      platform: "Deloitte",
    },
  ] as CertificationItem[],
};

