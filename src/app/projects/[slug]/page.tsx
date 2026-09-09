import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { ProjectVisual } from "@/features/projects/project-visual";
import { profile } from "@/content/profile";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
    openGraph: { title: project?.title, description: project?.summary },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="project-page shell">
      <Link href="/#work" className="back-link">
        <ArrowLeft size={16} /> All systems
      </Link>
      <div className="project-page-heading">
        <p className="eyebrow">
          <span>PROJECT {project.number} /</span> {project.category}
        </p>
        <h1>
          {project.title}
          <span>.</span>
        </h1>
        <p>{project.subtitle}</p>
      </div>
      <div className="project-detail-meta">
        <div>
          <span className="mono">CONTRIBUTION</span>
          <p>{project.role}</p>
        </div>
        <div>
          <span className="mono">FOCUS</span>
          <p>{project.capabilities.join(" · ")}</p>
        </div>
      </div>
      <ProjectVisual project={project} />
      <div className="case-layout">
        <aside>
          <span className="mono">IN THIS PROJECT</span>
          <a href="#context">01 / Context</a>
          <a href="#contribution">02 / My contribution</a>
          <a href="#outcome">03 / Delivered capability</a>
          {project.technologies.length > 0 && (
            <a href="#technology">04 / Technologies</a>
          )}
        </aside>
        <div className="case-content">
          <section id="context">
            <p className="eyebrow">01 / CONTEXT</p>
            <h2>{project.subtitle}</h2>
            <p>{project.context}</p>
          </section>
          <section id="contribution">
            <p className="eyebrow">02 / MY CONTRIBUTION</p>
            <h2>Where I made an impact.</h2>
            <ul>
              {project.contribution.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section id="outcome">
            <p className="eyebrow">03 / DELIVERED CAPABILITY</p>
            <h2>From requirements to working software.</h2>
            <p>{project.outcome}</p>
          </section>
          {project.technologies.length > 0 && (
            <section id="technology">
              <p className="eyebrow">04 / TECHNOLOGIES</p>
              <div className="skill-chips">
                {project.technologies.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          )}
          <div className="case-conversation">
            <h3>Let’s get into the details.</h3>
            <p>
              I’m happy to discuss my contribution and the engineering behind
              this work.
            </p>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.title}`)}`}
              className="text-link"
            >
              Talk about this project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}/`}>
        <div>
          <span className="eyebrow">NEXT PROJECT</span>
          <h2>{next.title}</h2>
        </div>
        <ArrowRight size={30} />
      </Link>
    </main>
  );
}
