export const clusters = [
  { id: "ai", label: "AI & automation", color: "#bea6ff" },
  { id: "enterprise", label: "Enterprise", color: "#74e5d0" },
  { id: "cloud", label: "Cloud & IT", color: "#79bcff" },
  { id: "web", label: "Web & mobile", color: "#efc284" },
  { id: "creative", label: "3D & games", color: "#ee9fcc" },
] as const;
export type ClusterId = (typeof clusters)[number]["id"];
export type NetworkNode = {
  id: string;
  title: string;
  cluster: ClusterId;
  kind: "Project" | "Capability" | "Practice";
  summary: string;
  relationship: string;
  details: string[];
  href: string;
  position: [number, number, number];
  primary: boolean;
};
const node = (
  id: string,
  title: string,
  cluster: ClusterId,
  kind: NetworkNode["kind"],
  position: NetworkNode["position"],
  summary: string,
  details: string[],
  href: string,
  primary = false,
  relationship = "Domain knowledge",
): NetworkNode => ({
  id,
  title,
  cluster,
  kind,
  position,
  summary,
  details,
  href,
  primary,
  relationship,
});
export const networkNodes: NetworkNode[] = [
  node(
    "quanta-ai",
    "Quanta AI",
    "ai",
    "Project",
    [-3.5, 2.3, 0.5],
    "Conversation, documents, and spreadsheets become reviewed business workflows.",
    [
      "Specialized agents and hybrid intent routing",
      "Invoice drafts, amendments, and supported write confirmations",
      "Reports and retrieval-grounded product guidance",
    ],
    "/projects/quanta-ai/",
    true,
    "AI engineering & integration",
  ),
  node(
    "coaching",
    "Coaching intelligence",
    "ai",
    "Project",
    [-0.1, 3, 0],
    "Session understanding and continuity, shaped by the coach's own practice.",
    [
      "Transcription and cross-session context",
      "Coach-configured prompts and reference methods",
      "Audio, reflections, and progress in Google Drive",
    ],
    "/projects/telegram-ai/",
    true,
    "AI product development",
  ),
  node(
    "erp",
    "Enterprise systems",
    "enterprise",
    "Practice",
    [3.7, 1.6, 0.2],
    "Connected business operations, from finance and retail to production.",
    [
      "Architecture and application maintenance",
      "Business-domain knowledge across ERP modules",
      "Reusable customization strategy and team leadership",
    ],
    "/projects/enterprise-systems/",
    true,
    "Architecture, development & leadership",
  ),
  node(
    "quantabooks",
    "QuantaBooks",
    "enterprise",
    "Project",
    [5.2, -0.2, -0.3],
    "A multi-tenant accounting product led across business, architecture, delivery, AI, and operation.",
    [
      "User, engineering, and business perspectives",
      "Accounting, inventory, permissions, tenants, and reporting",
      "Quanta AI, e-invoicing, background jobs, and cloud operations",
    ],
    "/projects/quantabooks/",
    true,
    "Product & technical leadership",
  ),
  node(
    "cloud",
    "Cloud & infrastructure",
    "cloud",
    "Practice",
    [2.7, -2.1, 0.5],
    "The environments that keep business applications running.",
    [
      "Client server management on AWS Lightsail",
      "AWS ECS/ECR, Google Cloud, Docker, and CI/CD",
      "Windows Server and IT infrastructure",
    ],
    "/projects/cloud-operations/",
    true,
    "Cloud operations & deployment",
  ),
  node(
    "web",
    "Web & mobile",
    "web",
    "Practice",
    [-0.8, -2.8, 0],
    "Interfaces and APIs across web and mobile platforms.",
    [
      "React and Next.js web applications",
      "Flutter, React Native, and Expo mobile development",
      "SQLite data, synchronization, barcode capture, and reports",
    ],
    "/#experience",
    true,
    "Full-stack delivery",
  ),
  node(
    "creative",
    "3D & games",
    "creative",
    "Practice",
    [-4, -0.9, 0.4],
    "Software craft expressed through real-time experiences.",
    [
      "Unity and Blender practice",
      "Modeling, texturing, and animation",
      "Mobile game projects",
    ],
    "/#lab",
    true,
    "Creative development",
  ),
  node(
    "actions",
    "Business actions",
    "ai",
    "Capability",
    [-5.2, 3.6, -0.4],
    "Structured tools connect user requests to accounting operations.",
    [
      "Invoices, items, units, customers, payments, and transactions",
      "Supported actions use review and confirmation",
    ],
    "/projects/quanta-ai/",
  ),
  node(
    "documents",
    "Document & Excel intake",
    "ai",
    "Capability",
    [-3.2, 4.3, 0],
    "Uploaded information becomes structured, reviewable drafts.",
    [
      "Document parsing and review",
      "Spreadsheet column mapping and row-level intake",
      "Expense and sales batch preparation",
    ],
    "/projects/quanta-ai/",
  ),
  node(
    "rag",
    "Documentation RAG",
    "ai",
    "Capability",
    [-1.2, 4.5, -0.6],
    "Product documentation provides context for user guidance.",
    ["Document retrieval and query expansion", "Chroma and model integration"],
    "/projects/quanta-ai/",
  ),
  node(
    "continuity",
    "Session continuity",
    "ai",
    "Capability",
    [1.8, 4.1, -0.1],
    "Earlier sessions inform future reflections and suggestions.",
    [
      "Follow-up context for the same client",
      "Coach-defined methods and instructions",
    ],
    "/projects/telegram-ai/",
  ),
  node(
    "finance",
    "Accounting & audit",
    "enterprise",
    "Capability",
    [4.2, 3.7, -0.3],
    "Knowledge of finance, reporting, audit tools, and approvals.",
    ["Accounting workflows and reporting tools", "Audit and approval systems"],
    "/projects/enterprise-systems/",
  ),
  node(
    "retail",
    "POS & inventory",
    "enterprise",
    "Capability",
    [6.0, 2.4, -0.6],
    "Retail operations connect stock, the cashier, and physical devices.",
    ["Inventory and cashier workflows", "Barcodes and printer integration"],
    "/projects/enterprise-systems/",
  ),
  node(
    "workforce",
    "Payroll & attendance",
    "enterprise",
    "Capability",
    [6.0, 0.8, 0],
    "Workforce knowledge spanning payroll and attendance devices.",
    ["Payroll systems", "Attendance-machine integration"],
    "/projects/enterprise-systems/",
  ),
  node(
    "production",
    "Manufacturing",
    "enterprise",
    "Capability",
    [5.7, -0.7, -0.5],
    "Production processes supported by enterprise applications.",
    ["Production workflows", "Manufacturing systems"],
    "/projects/enterprise-systems/",
  ),
  node(
    "platform",
    "Licensing & services",
    "enterprise",
    "Capability",
    [3.9, -0.1, -0.8],
    "Shared product capabilities around enterprise applications.",
    [
      "Reusable, dynamic customization for recurring client needs",
      "Licensing, Windows Services, background jobs, and integrations",
    ],
    "/projects/enterprise-systems/#evidence",
  ),
  node(
    "crm",
    "CRM & approvals",
    "enterprise",
    "Capability",
    [2.6, 3.1, -0.8],
    "Customer operations and controlled business workflows.",
    ["CRM knowledge", "Approval systems and customization"],
    "/projects/enterprise-systems/",
  ),
  node(
    "lightsail",
    "AWS Lightsail",
    "cloud",
    "Capability",
    [4.8, -3.1, -0.4],
    "Managing cloud servers for clients.",
    ["Client server management", "Application hosting environments"],
    "/projects/cloud-operations/",
    false,
    "Client cloud operations",
  ),
  node(
    "delivery",
    "Docker & CI/CD",
    "cloud",
    "Capability",
    [3.0, -4.1, -0.6],
    "Container packaging and application delivery workflows.",
    [
      "Build, test, Docker image, and deployment pipelines",
      "AWS ECR/ECS, cloud, and Windows Server delivery",
    ],
    "/projects/cloud-operations/",
    false,
    "Deployment engineering",
  ),
  node(
    "gcp",
    "Google Cloud",
    "cloud",
    "Capability",
    [1.0, -4.3, -0.5],
    "Cloud platform experience including Cloud Run.",
    ["Google Cloud Run", "Container-based application delivery"],
    "/projects/cloud-operations/",
    false,
    "Cloud experience",
  ),
  node(
    "it",
    "IT & networking",
    "cloud",
    "Capability",
    [0.3, -0.8, -0.9],
    "Infrastructure knowledge around connected business software.",
    [
      "LAN/WAN, routing, DNS, and DHCP",
      "Active Directory and Windows Server",
      "Backup, recovery, and diagnostics",
    ],
    "/projects/cloud-operations/",
  ),
  node(
    "frontend",
    "React & Next.js",
    "web",
    "Capability",
    [-2.3, -4.2, -0.4],
    "Reusable web interfaces and application structures.",
    ["TypeScript and responsive UI", "Full-stack web delivery"],
    "/#experience",
    false,
    "Web development",
  ),
  node(
    "mobile",
    "Cross-platform mobile",
    "web",
    "Capability",
    [-0.9, -0.6, -0.7],
    "Mobile business workflows connected to APIs and local device capabilities.",
    [
      "SQLite-backed invoices, items, accounts, and visits",
      "Synchronization, camera barcode capture, and PDF reports",
    ],
    "/#experience",
    false,
    "Mobile development",
  ),
  node(
    "synapse",
    "Synapse Drifter",
    "creative",
    "Project",
    [-5.6, -2.9, -0.1],
    "A 3D mobile game project.",
    ["Part of my game-development practice"],
    "/#lab",
    false,
    "Game project",
  ),
  node(
    "wormzilla",
    "Wormzilla",
    "creative",
    "Project",
    [-6, 0.4, -0.4],
    "A 3D mobile game project.",
    ["Part of my game-development practice"],
    "/#lab",
    false,
    "Game project",
  ),
  node(
    "blender",
    "Blender & Unity",
    "creative",
    "Capability",
    [-3.8, -3.7, -0.7],
    "A creative practice across asset creation and real-time interaction.",
    [
      "3D modeling and texturing",
      "Character/object animation and asset workflows",
    ],
    "/#lab",
    false,
    "3D practice",
  ),
];
export const networkEdges = networkNodes
  .filter((n) => !n.primary)
  .map((n) => ({
    from:
      n.cluster === "ai" && n.id === "continuity"
        ? "coaching"
        : (
            {
              ai: "quanta-ai",
              enterprise: "erp",
              cloud: "cloud",
              web: "web",
              creative: "creative",
            } as const
          )[n.cluster],
    to: n.id,
  }));
networkEdges.push(
  { from: "quanta-ai", to: "quantabooks" },
  { from: "quantabooks", to: "erp" },
  { from: "cloud", to: "erp" },
);

export function selectNodes(cluster: string, query: string, expanded: boolean) {
  const term = query.trim().toLowerCase();
  return networkNodes.filter(
    (n) =>
      (cluster === "all" || n.cluster === cluster) &&
      (expanded || cluster !== "all" || !!term || n.primary) &&
      (!term ||
        `${n.title} ${n.summary} ${n.details.join(" ")}`
          .toLowerCase()
          .includes(term)),
  );
}
export function validateNetwork() {
  const ids = new Set(networkNodes.map((n) => n.id));
  if (ids.size !== networkNodes.length)
    throw new Error("Duplicate network node ID");
  for (const edge of networkEdges)
    if (!ids.has(edge.from) || !ids.has(edge.to))
      throw new Error("Network edge references a missing node");
  for (const n of networkNodes)
    if (
      !n.title ||
      !n.summary ||
      !n.href ||
      !clusters.some((c) => c.id === n.cluster)
    )
      throw new Error(`Incomplete network node: ${n.id}`);
}
validateNetwork();
