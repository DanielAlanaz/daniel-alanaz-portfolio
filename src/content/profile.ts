export const profile = {
  name: "Daniel Alanaz",
  email: "Daniel.alanaz99@gmail.com",
  linkedin: "https://linkedin.com/in/daniel-alanaz",
  location: "Beirut, Lebanon",
  cv: "/daniel-alanaz-cv.pdf",
};

export const experience = [
  {
    company: "Silicon Computer Systems",
    title: "Team Lead & Full-Stack Developer",
    date: "APR 2023 — ONWARD",
    type: "Enterprise engineering",
    description:
      "Architecture, APIs, and enterprise platforms. Leading technical delivery through sprint planning, code reviews, development standards, and mentorship.",
    tags: ["ASP.NET Core", "React / Next.js", "Cloud & CI/CD"],
  },
  {
    company: "RAION DIGITAL",
    title: "Full-Stack & Mobile Developer",
    date: "MAY 2022 — APR 2023",
    type: "Web & mobile",
    description:
      "Delivered responsive web applications and backend services, alongside Flutter mobile applications with API integration, authentication, and offline state management.",
    tags: ["React", "Laravel", "Flutter"],
  },
  {
    company: "Independent practice",
    title: "Freelance AI & Systems Engineer",
    date: "JAN 2023 — ONWARD",
    type: "Alongside employment",
    description:
      "Built AI-assisted workflows that connect Telegram, speech-to-text, summarization, and Google Drive to automate coaching session processing.",
    tags: ["Python", "AI integrations", "Automation"],
  },
];

export const skillGroups = [
  {
    name: "Architecture",
    description: "Designing the system and helping the team deliver it.",
    skills: [
      "System design",
      "Microservices",
      "Offline-first",
      "API design",
      "Code reviews",
      "Team leadership",
    ],
    evidence:
      "Enterprise architecture, sprint planning, development standards, and mentorship at Silicon Computer Systems.",
    href: "/projects/enterprise-systems/",
  },
  {
    name: "Backend & Data",
    description: "The foundations behind reliable applications.",
    skills: [
      "C# / .NET Core",
      "Python",
      "Flask",
      "SQL Server",
      "MySQL",
      "Laravel",
    ],
    evidence:
      "Backend services and REST APIs across enterprise, web, and mobile applications.",
    href: "/projects/enterprise-systems/",
  },
  {
    name: "Frontend & Mobile",
    description: "Interfaces that connect people to complex systems.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "React Native",
    ],
    evidence:
      "Responsive web interfaces and cross-platform mobile delivery, including offline state management at RAION DIGITAL.",
    href: "/#experience",
  },
  {
    name: "Cloud & DevOps",
    description: "From application code to a running system.",
    skills: [
      "AWS S3",
      "CloudFront",
      "GCP Cloud Run",
      "Docker",
      "CI/CD",
      "Windows Server",
    ],
    evidence:
      "Containerized deployments and delivery workflows across cloud and Windows Server environments.",
    href: "/#experience",
  },
  {
    name: "AI & Automation",
    description: "Connecting intelligence to practical workflows.",
    skills: [
      "Python agents",
      "LLM integrations",
      "Speech-to-text",
      "Telegram bots",
      "Google Drive API",
      "AI microservices",
    ],
    evidence:
      "A Telegram assistant that automates transcription, summarization, and session archiving.",
    href: "/projects/telegram-ai/",
  },
  {
    name: "3D & Games",
    description: "A creative practice in real-time interaction.",
    skills: [
      "Unity",
      "Blender",
      "3D modeling",
      "Texturing",
      "Animation",
      "Asset pipelines",
    ],
    evidence:
      "A multidisciplinary practice spanning 3D asset creation, animation, and mobile game projects.",
    href: "/#lab",
  },
];
