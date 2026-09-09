import type { Project } from "@/content/projects";
export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.accent}`}
      aria-label={`${project.title} capability map`}
    >
      <div className="visual-top">
        <span>CAPABILITY MAP</span>
        <span>SYS / {project.number}</span>
      </div>
      {project.slug === "enterprise-systems" ? (
        <svg
          viewBox="0 0 560 240"
          role="img"
          aria-label="ERP connects manufacturing, inventory, and payroll capabilities"
        >
          <g className="diagram-lines">
            <path d="M280 98V54H100V110M280 54H460V110M280 143V192H140M280 192H420" />
            <circle cx="100" cy="110" r="4" />
            <circle cx="460" cy="110" r="4" />
            <circle cx="140" cy="192" r="4" />
            <circle cx="420" cy="192" r="4" />
          </g>
          <rect
            className="diagram-box"
            x="213"
            y="88"
            width="134"
            height="54"
            rx="6"
          />
          <text className="diagram-core" x="280" y="120">
            ERP CORE
          </text>
          <text x="100" y="140">
            MANUFACTURING
          </text>
          <text x="460" y="140">
            INVENTORY
          </text>
          <text x="140" y="222">
            PAYROLL
          </text>
          <text x="420" y="222">
            OPERATIONS
          </text>
        </svg>
      ) : project.slug === "quantabooks" ? (
        <svg
          viewBox="0 0 560 240"
          role="img"
          aria-label="QuantaBooks combines accounting, AI integration, and business systems"
        >
          <g className="diagram-lines">
            <circle cx="280" cy="120" r="77" />
            <circle cx="280" cy="120" r="100" strokeDasharray="2 9" />
            <path d="M66 120H199M361 120H494" />
          </g>
          <rect
            className="diagram-box"
            x="218"
            y="91"
            width="124"
            height="58"
            rx="8"
          />
          <text className="diagram-core" x="280" y="125">
            Q / AI
          </text>
          <text x="86" y="148">
            ACCOUNTING
          </text>
          <text x="465" y="148">
            BUSINESS
          </text>
          <text x="280" y="31">
            INTELLIGENCE
          </text>
          <circle className="diagram-dot" cx="280" cy="197" r="4" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 560 240"
          role="img"
          aria-label="Assistant capabilities: transcription, summarization, and session archiving"
        >
          <g className="diagram-lines">
            <path
              d="M99 100H280M280 100H460M99 140V169H460V140"
              strokeDasharray="4 5"
            />
          </g>
          {[
            { x: 99, title: "TRANSCRIBE", icon: "~" },
            { x: 280, title: "SUMMARIZE", icon: "≡" },
            { x: 460, title: "ARCHIVE", icon: "↓" },
          ].map(({ x, title, icon }) => (
            <g key={title}>
              <rect
                className="diagram-box"
                x={x - 34}
                y="67"
                width="68"
                height="68"
                rx="12"
              />
              <text className="diagram-icon" x={x} y="112">
                {icon}
              </text>
              <text x={x} y="198">
                {title}
              </text>
            </g>
          ))}
        </svg>
      )}
      <div className="visual-bottom">
        <span className="visual-dash" />
        {project.slug === "telegram-ai"
          ? "WORKFLOW CAPABILITIES"
          : "DOMAIN OVERVIEW"}
        <span>+ + +</span>
      </div>
    </div>
  );
}
