import type { Project } from "@/content/projects";
export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.accent}`}
      aria-label={`${project.title} capability overview`}
    >
      <div className="visual-top">
        <span>CAPABILITY OVERVIEW</span>
        <span>SYS / {project.number}</span>
      </div>
      <div className="capability-overview">
        <span className="capability-root">{project.title}</span>
        <span className="capability-connector" aria-hidden="true" />
        <ul>
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
      <div className="visual-bottom">
        <span className="visual-dash" />
        WORK & DOMAIN SCOPE<span>+ + +</span>
      </div>
    </div>
  );
}
