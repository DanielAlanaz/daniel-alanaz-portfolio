"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "./project-visual";
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All systems");
  const categories = [
    "All systems",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filtered = projects.filter(
    (p) => filter === "All systems" || p.category === filter,
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filter-list" aria-label="Filter projects">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All systems" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <span className="mono result-count" aria-live="polite">
          {String(filtered.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <Link
            href={`/projects/${project.slug}/`}
            className={`project-card project-${project.accent}`}
            key={project.slug}
          >
            <ProjectVisual project={project} />
            <div className="project-card-content">
              <div className="project-category">
                <span>{project.category}</span>
                <span>{project.number} /</span>
              </div>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <span className="project-arrow">
                  <ArrowUpRight size={21} />
                </span>
              </div>
              <p>{project.summary}</p>
              <div className="project-card-footer">
                <span>
                  {project.technologies.length
                    ? project.technologies.slice(0, 2).join(" / ")
                    : "Architecture / Engineering"}
                </span>
                <span>Explore project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
