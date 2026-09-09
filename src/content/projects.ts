export type ProjectCategory = "Enterprise" | "AI & Automation" | "3D & Games";
export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  context: string;
  contribution: string[];
  capabilities: string[];
  technologies: string[];
  accent: "cyan" | "violet" | "green";
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "enterprise-systems",
    number: "01",
    title: "Enterprise systems",
    subtitle: "The software behind daily operations.",
    category: "Enterprise",
    accent: "cyan",
    summary:
      "Architecture and development across ERP, manufacturing, inventory, and payroll workflows.",
    role: "Architecture · Development · Team leadership",
    context:
      "Enterprise software connects the day-to-day work of a business. At Silicon Computer Systems, my work spans the design and maintenance of ERP and operational applications, translating business requirements into maintainable software.",
    contribution: [
      "Architect and maintain enterprise applications across manufacturing, stock management, and payroll.",
      "Translate business requirements into software structures and coordinate technical delivery.",
      "Review code, establish development standards, and mentor developers throughout implementation.",
    ],
    capabilities: ["ERP", "Manufacturing", "Inventory", "Payroll"],
    technologies: [],
    outcome:
      "Delivered and maintained software supporting core business operations, with responsibilities extending from architecture to team delivery.",
  },
  {
    slug: "quantabooks",
    number: "02",
    title: "QuantaBooks",
    subtitle: "AI meets accounting.",
    category: "AI & Automation",
    accent: "violet",
    summary:
      "Architecture and development work on an AI-powered accounting platform.",
    role: "Architecture · Development",
    context:
      "QuantaBooks brings AI into an accounting product. My work on the platform sits within a broader practice of building enterprise business systems at Silicon Computer Systems.",
    contribution: [
      "Contribute to the architecture and development of the accounting platform.",
      "Work across enterprise software requirements and AI-powered application development.",
    ],
    capabilities: ["Accounting", "AI integration", "Business systems"],
    technologies: [],
    outcome:
      "Architecture and development contributions to an AI-powered accounting platform.",
  },
  {
    slug: "telegram-ai",
    number: "03",
    title: "Telegram AI assistant",
    subtitle: "Conversations become organized knowledge.",
    category: "AI & Automation",
    accent: "green",
    summary:
      "An automated coaching assistant for transcription, summarization, and cloud session archiving.",
    role: "Freelance AI & Systems Engineer",
    context:
      "Coaching sessions create information that needs to be captured and organized. I built a Telegram assistant that connects speech-to-text and AI services with cloud archiving, reducing the manual steps around session processing.",
    contribution: [
      "Architected the Telegram assistant using Python, speech-to-text, and Google Drive APIs.",
      "Developed workflows for transcription, summarization, and data processing.",
      "Integrated external APIs and AI services into a low-overhead automation system with cloud session archiving.",
    ],
    capabilities: ["Transcription", "Summarization", "Session archiving"],
    technologies: ["Python", "Telegram", "Speech-to-text", "Google Drive API"],
    outcome:
      "A connected workflow for transcribing, summarizing, and archiving coaching sessions.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const experiments = [
  { title: "Synapse Drifter", label: "3D mobile game", number: "EXP. 01" },
  { title: "Wormzilla", label: "3D mobile game", number: "EXP. 02" },
];
