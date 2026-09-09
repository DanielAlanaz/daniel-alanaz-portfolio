export const profile = {
  name: "Daniel Alanaz",
  email: "Daniel.alanaz99@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-alanaz-958b8a190",
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
      "Lead product and technical delivery across enterprise platforms: client discovery, business workflows, architecture, team direction, code quality, cloud operations, releases, and ongoing support.",
    tags: [
      "Product leadership",
      "Full-stack architecture",
      "Enterprise systems",
    ],
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
      "Built a Telegram assistant for transcription, cross-session context, coach-configured reference methods, and archiving audio, reflections, and progress in Google Drive.",
    tags: ["Python", "AI integrations", "Automation"],
  },
];

export const skillGroups = [
  {
    name: "Architecture",
    description:
      "Connecting product decisions to a system the team can deliver.",
    skills: [
      "System design",
      "Product discovery",
      "Microservices",
      "Multi-tenancy",
      "Offline-first",
      "API design",
      "Code reviews",
      "Team leadership",
    ],
    evidence:
      "Leading ideas from client and business discovery through architecture, planning, engineering standards, delivery, and support.",
    href: "/projects/enterprise-systems/",
  },
  {
    name: "Backend & Data",
    description: "The foundations behind reliable applications.",
    skills: [
      "C# / .NET Core",
      "Entity Framework Core",
      "Python",
      "PostgreSQL",
      "SQL Server",
      "Hangfire",
      "OpenIddict / OAuth",
    ],
    evidence:
      "Multi-tenant .NET services, business APIs, background processing, database migration, accounting workflows, and AI integrations across QuantaBooks and enterprise products.",
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
      "Expo",
      "SQLite",
    ],
    evidence:
      "Web platforms and cross-platform mobile workflows, including SQLite-backed business data, synchronization, barcode capture, reports, and secure local preferences.",
    href: "/#experience",
  },
  {
    name: "Cloud & DevOps",
    description: "From application code to a running system.",
    skills: [
      "AWS Lightsail",
      "AWS S3",
      "AWS ECS / ECR",
      "CloudFront",
      "GCP Cloud Run",
      "Docker",
      "CI/CD",
      "Windows Server",
    ],
    evidence:
      "Client server management on AWS Lightsail, plus Docker delivery pipelines to AWS ECR/ECS and application operations across cloud and Windows Server environments.",
    href: "/projects/cloud-operations/",
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
      "Quanta AI connects conversation and document intake to reviewed business workflows. A separate coaching assistant carries session context into future follow-up.",
    href: "/projects/quanta-ai/",
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
