export type ProjectCategory =
  "Enterprise" | "AI & Automation" | "Cloud & Infrastructure" | "3D & Games";

export type EvidenceCase = {
  title: string;
  problem: string;
  contribution: string;
  approach: string;
  tradeoff: string;
  result: string;
};

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
  scopeNote?: string;
  evidence?: EvidenceCase[];
  leadershipScope?: string[];
  flows?: { title: string; steps: string[]; note: string }[];
  perspectives?: {
    audience: string;
    title: string;
    question: string;
    focus: string;
  }[];
  contributionTitle?: string;
  evidenceTitle?: string;
  evidenceContributionLabel?: string;
};
export const projects: Project[] = [
  {
    slug: "quanta-ai",
    number: "01",
    title: "Quanta AI",
    subtitle: "From conversation to business action.",
    category: "AI & Automation",
    accent: "violet",
    summary:
      "An accounting assistant that connects conversation, documents, and spreadsheets to reviewed business workflows, reports, and product guidance.",
    role: "AI engineering · Workflow integration",
    context:
      "Quanta AI is the assistant layer for Quanta Books. It helps users work with accounting records through conversation and document intake, connecting specialized agents to business APIs. The engineering challenge is turning flexible requests into structured actions while keeping review and application rules in the workflow.",
    contribution: [
      "Built an assistant with specialized task, reporting, documentation, and general agents.",
      "Connected invoice, item, customer, payment, and transaction tools to business APIs, with review and confirmation flows for supported writes.",
      "Support item and unit management alongside the assistant's broader accounting workflows.",
      "Implemented document review and spreadsheet intake with row-level drafts and batch preparation.",
      "Integrated product-document retrieval and accounting reports, including statements of account, aging, and quantity on hand.",
    ],
    capabilities: [
      "Business actions",
      "Document intake",
      "Guided workflows",
      "Reports",
      "Documentation RAG",
    ],
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "Gemini",
      "Pydantic",
      "Chroma",
      "openpyxl",
      "Docker",
      "ASP.NET API integration",
    ],
    outcome:
      "An assistant that brings accounting tasks, document processing, reporting, and product guidance into a conversational workflow.",
    evidence: [
      {
        title: "Protect business writes with a review boundary",
        problem:
          "A flexible conversation can produce a valid-looking action that the user did not intend to execute.",
        contribution:
          "I connected supported accounting tools to a draft-and-confirm workflow and implemented the confirmation boundary around those writes.",
        approach:
          "The assistant prepares a concrete action for review. Signed, expiring confirmation tokens bind the approved action, arguments, and authentication context before the supported tool dispatches it.",
        tradeoff:
          "The extra confirmation step slows the shortest possible path, but gives the user a specific operation to inspect before execution.",
        result:
          "Supported business writes proceed through an explicit review and confirmation path, while reporting and documentation requests remain separate.",
      },
      {
        title: "Turn spreadsheets into reviewable batch drafts",
        problem:
          "Uploaded spreadsheets can vary in column names and contain incomplete or invalid rows, making direct import difficult to inspect.",
        contribution:
          "I implemented the spreadsheet intake path, including deterministic column mapping, row-level drafts, and batch preparation.",
        approach:
          "Supported column aliases map into structured records. The intake records row issues and assumptions before it prepares a batch for review.",
        tradeoff:
          "Known layouts stay predictable; unfamiliar formats still require clarification or an explicit mapping update.",
        result:
          "Supported spreadsheets become reviewable batch drafts with row-level issues and assumptions visible before confirmation.",
      },
      {
        title: "Use deterministic routing where intent is explicit",
        problem:
          "Sending every request through model-based routing adds an avoidable model call and can rewrite details the user already supplied.",
        contribution:
          "I built a hybrid router that recognizes supported explicit requests and reserves model-based selection for ambiguous ones.",
        approach:
          "Known task, report, and documentation patterns take a deterministic path; less explicit requests use the model to select the appropriate agent.",
        tradeoff:
          "The explicit-routing rules need maintenance as the assistant's supported intents expand.",
        result:
          "Recognizable requests avoid an extra routing call and keep already supplied invoice facts intact on their path into the workflow.",
      },
    ],
    flows: [
      {
        title: "Conversational actions",
        steps: [
          "User request",
          "Intent routing",
          "Task / workflow",
          "Review & confirm",
          "Business API",
        ],
        note: "Simplified view of supported action paths. Reporting and documentation requests follow separate paths.",
      },
      {
        title: "Spreadsheet intake",
        steps: [
          "Upload",
          "Map & validate rows",
          "Batch draft",
          "User review",
          "Backend confirmation",
        ],
        note: "A capability flow for supported spreadsheet imports; not every input format maps to every transaction type.",
      },
      {
        title: "Product guidance",
        steps: [
          "Question",
          "Retrieve documentation",
          "Relevant context",
          "Generated answer",
        ],
        note: "Retrieval provides source context; it does not guarantee answer accuracy.",
      },
    ],
  },
  {
    slug: "telegram-ai",
    number: "02",
    title: "Coaching session intelligence",
    subtitle: "Every session builds on the last.",
    category: "AI & Automation",
    accent: "green",
    summary:
      "A Telegram assistant that connects session transcription, cross-session context, coach-configured methods, and Google Drive archiving.",
    role: "Freelance AI & Systems Engineer",
    context:
      "A coaching session is part of a longer conversation. I created an assistant that captures recorded sessions, analyzes themes, and carries relevant context forward. Coaches can adjust the prompt and add reference methods to shape future suggestions for the same client.",
    contribution: [
      "Built Telegram-based intake and transcription for recorded coaching sessions.",
      "Connected session analysis with follow-up context and suggestions for the coach to review.",
      "Organized audio, generated reflections, and progress in the coach's Google Drive.",
      "Added configurable instructions and reference methods so coaches can adapt the assistant to their own practice.",
    ],
    capabilities: [
      "Transcription",
      "Session continuity",
      "Coach configuration",
      "Reference methods",
      "Drive archiving",
    ],
    technologies: ["Python", "Telegram", "Speech-to-text", "Google Drive API"],
    outcome:
      "A connected workspace for session records, contextual follow-up, and coach-reviewed suggestions. Generated interpretations support the coach's judgment.",
    flows: [
      {
        title: "A connected session lifecycle",
        steps: [
          "Session recording",
          "Transcript & analysis",
          "Coach review",
          "Drive archive",
          "Future-session context",
        ],
        note: "Capability overview. Suggestions and interpretations are for coach review, rather than autonomous clinical decisions.",
      },
      {
        title: "A configurable practice",
        steps: [
          "Coach instructions",
          "Reference methods",
          "Session context",
          "Future suggestions",
        ],
        note: "Prompt and reference configuration; this does not imply model fine-tuning.",
      },
    ],
  },
  {
    slug: "enterprise-systems",
    number: "03",
    title: "Enterprise systems",
    subtitle: "Business knowledge, connected through software.",
    category: "Enterprise",
    accent: "cyan",
    summary:
      "Enterprise architecture and deep domain knowledge across finance, retail, workforce, manufacturing, CRM, and platform integrations.",
    role: "Architecture · Development · Team leadership",
    context:
      "My enterprise work spans both the software and the business processes around it. At Silicon Computer Systems, I architect and maintain operational applications and coordinate technical delivery. My domain knowledge extends from accounting and audit tools to cashier workflows, physical devices, production, and background services.",
    contribution: [
      "Architect and maintain enterprise applications across manufacturing, stock management, payroll, and business operations.",
      "Translate business requirements into system structures and coordinate implementation with the team.",
      "Bring domain knowledge across accounting, audit tools, reporting, approvals, POS, cashier workflows, barcodes, and printers.",
      "Work across the wider enterprise landscape of attendance devices, CRM, licensing, Windows Services, background jobs, dynamic integrations, and customization.",
      "Review code, establish development standards, and mentor developers.",
    ],
    contributionTitle: "How I guide enterprise delivery.",
    evidenceTitle: "How leadership turns client needs into product value.",
    evidenceContributionLabel: "LEADERSHIP ROLE",
    capabilities: [
      "Accounting & audit",
      "POS & inventory",
      "Payroll & attendance",
      "Production & manufacturing",
      "CRM & projects",
      "Documents & reporting",
      "Mobile & offline",
      "Licensing & integrations",
    ],
    technologies: [
      ".NET",
      "VB.NET",
      "Windows Forms",
      "SQL Server",
      "Crystal Reports",
      "React Native",
      "Expo",
      "SQLite",
      "Windows Services",
    ],
    outcome:
      "Delivered and maintained enterprise software with responsibilities extending from architecture to team delivery, supported by broad business-domain knowledge. Individual module contributions vary by project.",
    scopeNote:
      "The domain map shows the business areas I lead and work across. The evidence below describes a product and architectural direction I established; delivery remains a team effort and does not imply sole ownership of every listed module.",
    evidence: [
      {
        title: "Turn client customization into reusable product capability",
        problem:
          "Client customizations were commonly implemented for one customer at a time, without considering whether the same need would appear for future clients. Similar requests could therefore create repeated work and isolated behavior.",
        contribution:
          "I established a broader way to evaluate and design customization requests, looking beyond the immediate client to identify requirements that could become shared capabilities.",
        approach:
          "When a requirement had broader value, I designed it to be as dynamic and reusable as the business rules allowed, so the same foundation could serve similar clients and mature into the main product.",
        tradeoff:
          "This required more analysis and design effort up front than the fastest one-off modification, and judgment about which behavior belonged in the shared system.",
        result:
          "The team could deliver similar paid customizations from work that already existed, reducing repeat implementation time. Several modifications became product features that were adopted and appreciated by multiple clients.",
      },
    ],
    leadershipScope: [
      "Translate business requirements into architectural direction and system structures for implementation.",
      "Review code and establish development standards across ongoing delivery.",
      "Mentor developers and coordinate sprint planning, estimation, and technical execution.",
    ],
  },
  {
    slug: "cloud-operations",
    number: "04",
    title: "Cloud & infrastructure",
    subtitle: "Beyond deployment. Into daily operation.",
    category: "Cloud & Infrastructure",
    accent: "cyan",
    summary:
      "Client cloud-server management, containerized delivery, and IT infrastructure across AWS, Google Cloud, and Windows Server.",
    role: "Cloud operations · Deployment · IT infrastructure",
    context:
      "My work extends into the environments that keep business applications running. I manage client servers on AWS Lightsail and work across cloud deployments, delivery workflows, Windows Server, and the IT infrastructure surrounding business software.",
    contribution: [
      "Manage client cloud servers on AWS Lightsail.",
      "Design and manage containerized build, test, image, and deployment workflows for staging and production.",
      "Work with AWS ECS, ECR, S3, CloudFront, Google Cloud Run, Docker, and Windows Server.",
      "Bring IT knowledge spanning LAN/WAN, routing and switching, Active Directory, DNS, DHCP, backup and disaster recovery, and hardware diagnostics.",
    ],
    capabilities: [
      "Client servers",
      "Containerized delivery",
      "Cloud services",
      "Windows infrastructure",
      "Networking & recovery",
    ],
    technologies: [
      "AWS Lightsail",
      "AWS ECS / ECR",
      "AWS S3",
      "CloudFront",
      "Google Cloud Run",
      "Docker",
      "CI/CD",
      "Windows Server",
    ],
    outcome:
      "Engineering responsibilities that connect application development with cloud-server management and the infrastructure businesses depend on.",
  },
  {
    slug: "quantabooks",
    number: "05",
    title: "QuantaBooks",
    subtitle: "A business platform shaped from every side of the decision.",
    category: "Enterprise",
    accent: "violet",
    summary:
      "A multi-tenant accounting platform connecting operational workflows, financial control, inventory, reporting, AI, integrations, and cloud delivery.",
    role: "Product & technical leadership · Full-stack architecture",
    context:
      "QuantaBooks is a business platform developed at Silicon Computer Systems, spanning the web experience, .NET services, tenant data, background processing, cloud operations, external integrations, and Quanta AI. My role as team lead is to understand the complete product: how accountants and business users work, what clients need, how the architecture should evolve, how the team can deliver it, and whether each idea creates enough value to justify its cost and long-term responsibility.",
    perspectives: [
      {
        audience: "USER",
        title: "Make complex work feel simple.",
        question:
          "Does this reduce friction and fit the way people actually work?",
        focus:
          "Clearer workflows, fewer unnecessary steps, useful automation, understandable feedback, and features that solve the real operational problem.",
      },
      {
        audience: "ENGINEERING",
        title: "Turn the idea into a system.",
        question:
          "Can the team build, test, operate, and extend this responsibly?",
        focus:
          "Defined boundaries, reusable components, explicit business rules, delivery sequencing, review standards, and an architecture that can keep evolving.",
      },
      {
        audience: "BUSINESS",
        title: "Understand the impact before the cost.",
        question:
          "Who benefits, what does it unlock, and what will it cost to own?",
        focus:
          "Customer value, product reuse, delivery effort, operational risk, support cost, commercial potential, and the effect on the wider platform.",
      },
    ],
    contributionTitle: "How I lead the platform from idea to operation.",
    evidenceTitle: "How product judgment becomes architecture.",
    evidenceContributionLabel: "LEADERSHIP ROLE",
    contribution: [
      "Understand client operations and accounting requirements before translating them into product direction, workflows, and technical boundaries.",
      "Evaluate ideas through the user, engineering, and business lenses so delivery effort creates lasting product value.",
      "Guide architecture across the Next.js application, .NET services, data model, tenant lifecycle, background jobs, integrations, AI services, and cloud delivery.",
      "Break ideas into deliverable work, help the team reason through implementation, review quality, and keep the complete workflow coherent across layers.",
      "Work directly with clients and support real operational use, bringing production feedback back into product and engineering decisions.",
      "Turn recurring client needs into configurable, reusable capabilities when they belong in the shared product.",
      "Balance new features with accounting correctness, authorization, migration safety, operational reliability, support cost, and future maintenance.",
      "Lead the lifecycle from discovery and architecture through implementation, release, operation, and continued improvement.",
    ],
    capabilities: [
      "Accounting & audit",
      "Sales & purchasing",
      "Inventory & valuation",
      "Assets & depreciation",
      "Cash, banks & receivables",
      "Payroll & employees",
      "Reports & accounting health",
      "Dynamic permissions",
      "Multi-tenant data",
      "Subscriptions & licensing",
      "AI-assisted workflows",
      "E-invoicing & public APIs",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      ".NET 10",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "OpenIddict / OAuth",
      "Hangfire",
      "Docker",
      "AWS S3 / SES / ECS",
      "Tailwind CSS",
      "Material UI",
      "OpenAPI",
      "Recharts",
      "i18next",
      "SheetJS",
    ],
    outcome:
      "A connected product that supports day-to-day accounting and commercial operations while also addressing the architecture around them: tenant isolation, authorization, historical correctness, background processing, migration, external compliance, AI-assisted work, deployment, and support.",
    scopeNote:
      "QuantaBooks is built and delivered by a team. My leadership responsibility is the understanding, direction, coordination, technical judgment, quality, and delivery of the product across disciplines—not claiming every implementation as individual work. No usage, revenue, or performance metric is stated without supplied evidence.",
    evidence: [
      {
        title: "Find the common ground between three stakeholders",
        problem:
          "A feature can be convenient for one user, expensive for the business, or difficult for the team to maintain. Solving only one side creates friction somewhere else.",
        contribution:
          "I lead discovery and decision-making across the user, development, and ownership viewpoints before turning an idea into committed work.",
        approach:
          "Clarify the real workflow, define the value and affected users, estimate technical and operational cost, identify reusable product value, and shape a solution the team can deliver and support.",
        tradeoff:
          "This asks for more product and technical thinking before implementation than accepting the first requested solution.",
        result:
          "The chosen direction has a clearer user benefit, a realistic engineering path, and a business reason to exist beyond a single request.",
      },
      {
        title: "Treat accounting correctness as a product experience",
        problem:
          "Accounting and inventory problems can come from imbalanced vouchers, missing rates, tax differences, unmatched payments, stock-value discrepancies, or incomplete historical data. Automatic correction can be more dangerous than the original issue.",
        contribution:
          "I guide the team in connecting accounting rules, system diagnostics, background processing, and the user review experience into one understandable workflow.",
        approach:
          "Preserve historical unit and currency inputs, separate posted from draft effects, surface findings without silently mutating records, link issues back to their documents, and run controlled recalculation jobs with visible progress and reviewable exceptions.",
        tradeoff:
          "Traceability and cautious review add workflow and implementation complexity, but reduce the risk of hiding or compounding financial inconsistencies.",
        result:
          "Accounting health becomes a guided investigation process with explicit limits and human judgment, rather than a misleading pass/fail indicator.",
      },
      {
        title: "Let the product grow beyond fixed categories",
        problem:
          "Different companies need their own transaction categories, item types, ledgers, roles, and permissions. Hardcoded authorization cannot safely follow that level of product customization.",
        contribution:
          "I help define the boundaries between configurable business behavior, permission administration, interface visibility, and backend enforcement.",
        approach:
          "Represent transaction groups, tenant-defined categories, and item types as stable resources. Resolve explicit allow or deny choices through inherited group defaults, while keeping the backend authoritative and the interface capability-aware.",
        tradeoff:
          "A dynamic access model requires synchronization, migration, and careful handling of renamed, moved, or deleted business definitions.",
        result:
          "Companies can adapt the product to their structure without tying access control to a fixed list of accounting categories.",
      },
      {
        title: "Design tenancy as an operational lifecycle",
        problem:
          "A database-per-company architecture improves separation, but provisioning, migrations, backups, inactivity, restoration, and provider changes become part of the product's operational responsibility.",
        contribution:
          "I lead across application architecture and operations so tenant data decisions account for release safety, support, migration, recovery, and long-term hosting cost.",
        approach:
          "Separate system identity and routing data from tenant business data, provision one PostgreSQL database per company, use migration journals and reconciliation during provider transition, and treat archival and restoration as verified background workflows.",
        tradeoff:
          "Database-level tenant separation carries more infrastructure and automation overhead than a shared-schema design.",
        result:
          "The platform has explicit tooling and operational procedures for tenant creation, migration, backup, archival, verification, and controlled restoration.",
      },
      {
        title: "Connect AI to business work with a review boundary",
        problem:
          "An assistant can understand flexible language and documents, but accounting actions still need structured data, product rules, authorization, and deliberate user approval.",
        contribution:
          "I shape the product boundary between QuantaBooks and Quanta AI, aligning the user experience, workflow contracts, business APIs, error handling, and team delivery across both systems.",
        approach:
          "Route requests to specialized agents, prepare structured drafts, expose assumptions and row issues, use product documentation for guidance, and require review and confirmation for supported writes before the business API executes them.",
        tradeoff:
          "The confirmation boundary adds a step and requires shared contracts between the AI service and accounting platform, but keeps flexible AI input separate from committed business state.",
        result:
          "Conversation, documents, spreadsheets, reports, and product guidance can live inside the accounting workflow without treating model output as an unchecked transaction.",
      },
      {
        title: "Bridge cloud software with external compliance",
        problem:
          "Electronic invoicing combines cloud APIs, company credentials, local certificate signing, asynchronous government status, retries, incoming documents, and support diagnostics.",
        contribution:
          "I help coordinate the product, API, desktop bridge, deployment, and operational viewpoints so the integration can be configured, understood, and supported as one lifecycle.",
        approach:
          "Separate configuration and credential verification from local signing, persist document and submission identities, synchronize status in background jobs, avoid blind resubmission after uncertain responses, and ingest inbound documents through authenticated callbacks and scheduled reconciliation.",
        tradeoff:
          "A local signing bridge and asynchronous recovery model add installation and support responsibilities, while meeting requirements that cannot be handled by a browser-only workflow.",
        result:
          "The platform can represent e-invoicing as a complete operational process: setup, signing, submission, status, recovery, cancellation, inbound document handling, and support visibility.",
      },
    ],
    flows: [
      {
        title: "Idea to product capability",
        steps: [
          "User and client need",
          "Business impact & cost",
          "Product decision",
          "Architecture & team delivery",
          "Operation, feedback & reuse",
        ],
        note: "The leadership loop used to find a solution that serves the user, the engineering team, and the business together.",
      },
      {
        title: "Commercial operation to financial view",
        steps: [
          "Customer / vendor",
          "Items, units & warehouse",
          "Invoice or order",
          "Payment / receipt",
          "Ledger & financial reports",
        ],
        note: "A simplified platform flow. The exact accounting entries depend on document type, transaction category, company configuration, tax, and payment state.",
      },
      {
        title: "Inventory movement, costing, and review",
        steps: [
          "Opening stock",
          "In / out or transfer document",
          "Base-unit warehouse movement",
          "Average-cost valuation",
          "Quantity & item reports",
        ],
        note: "Posted stock movements preserve historical unit and currency inputs for valuation and replay. Accounting health surfaces missing or inconsistent valuation data for review.",
      },
      {
        title: "Tenant and access lifecycle",
        steps: [
          "Company provisioning",
          "System & tenant databases",
          "Users, periods & permissions",
          "Background jobs & backups",
          "Migration or restoration",
        ],
        note: "The platform separates global identity and routing data from each company's accounting data and carries that separation into migration and recovery operations.",
      },
      {
        title: "AI-assisted business workflow",
        steps: [
          "Conversation or document",
          "Specialized interpretation",
          "Structured draft",
          "Review & confirmation",
          "QuantaBooks API",
        ],
        note: "Reporting and documentation can remain read-oriented; supported changes cross an explicit review boundary before execution.",
      },
      {
        title: "External e-invoicing lifecycle",
        steps: [
          "Company configuration",
          "Credential verification",
          "Signing bridge",
          "Prepare, sign & submit",
          "Status, recovery or cancellation",
        ],
        note: "The platform connects cloud workflows to a local signing bridge and background status synchronization for Egyptian Tax Authority documents.",
      },
    ],
  },
];
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
export const experiments = [
  { title: "Synapse Drifter", label: "3D mobile game", number: "EXP. 01" },
  { title: "Wormzilla", label: "3D mobile game", number: "EXP. 02" },
];
