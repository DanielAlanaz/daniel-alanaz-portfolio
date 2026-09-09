import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import "@/features/projects/project.css";
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
  const contributionNumber = project.perspectives ? "03" : "02";
  const outcomeNumber = project.perspectives ? "04" : "03";
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
          <span className="mono">ROLE</span>
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
          {project.perspectives && (
            <a href="#perspectives">02 / Product lens</a>
          )}
          <a href="#contribution">
            {contributionNumber} /{" "}
            {project.contributionTitle ? "Leadership" : "My contribution"}
          </a>
          <a href="#outcome">{outcomeNumber} / Delivered capability</a>
          {project.technologies.length > 0 && (
            <a href="#technology">04 / Technologies</a>
          )}
          {project.flows && <a href="#workflows">Workflows</a>}
          {project.evidence && <a href="#evidence">Evidence</a>}
          {project.leadershipScope && <a href="#leadership">Leadership</a>}
        </aside>
        <div className="case-content">
          <section id="context">
            <p className="eyebrow">01 / CONTEXT</p>
            <h2>{project.subtitle}</h2>
            <p>{project.context}</p>
          </section>
          {project.perspectives && (
            <section id="perspectives">
              <p className="eyebrow">02 / PRODUCT DECISION LENS</p>
              <h2>One product. Three realities.</h2>
              <p>
                A strong decision has to work for the person using the product,
                the team building it, and the business investing in it.
              </p>
              <div className="perspective-grid">
                {project.perspectives.map((perspective, index) => (
                  <article key={perspective.audience}>
                    <span className="mono">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {perspective.audience}
                    </span>
                    <h3>{perspective.title}</h3>
                    <p className="perspective-question">
                      {perspective.question}
                    </p>
                    <p>{perspective.focus}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section id="contribution">
            <p className="eyebrow">
              {contributionNumber} /{" "}
              {project.contributionTitle
                ? "PRODUCT & TECHNICAL LEADERSHIP"
                : "MY CONTRIBUTION"}
            </p>
            <h2>{project.contributionTitle ?? "What I personally owned."}</h2>
            <ul>
              {project.contribution.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {project.scopeNote && (
              <p className="scope-note">
                <span className="mono">SCOPE NOTE</span>
                {project.scopeNote}
              </p>
            )}
          </section>
          <section id="outcome">
            <p className="eyebrow">{outcomeNumber} / DELIVERED CAPABILITY</p>
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
          {project.flows && (
            <section id="workflows">
              <p className="eyebrow">WORKFLOW BREAKDOWN</p>
              <h2>How the pieces connect.</h2>
              <div className="case-flows">
                {project.flows.map((flow) => (
                  <article key={flow.title}>
                    <h3>{flow.title}</h3>
                    <ol>
                      {flow.steps.map((step, index) => (
                        <li key={step}>
                          <span className="flow-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p>{flow.note}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
          {project.evidence && (
            <section id="evidence">
              <p className="eyebrow">ENGINEERING EVIDENCE</p>
              <h2>
                {project.evidenceTitle ?? "From problem to delivered result."}
              </h2>
              <div className="case-evidence">
                {project.evidence.map((item, index) => (
                  <article key={item.title}>
                    <div className="evidence-heading">
                      <span className="mono">
                        CASE {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <dl>
                      <div>
                        <dt>THE PROBLEM</dt>
                        <dd>{item.problem}</dd>
                      </div>
                      <div>
                        <dt>
                          {project.evidenceContributionLabel ??
                            "MY CONTRIBUTION"}
                        </dt>
                        <dd>{item.contribution}</dd>
                      </div>
                      <div>
                        <dt>THE APPROACH</dt>
                        <dd>{item.approach}</dd>
                      </div>
                      <div>
                        <dt>THE TRADEOFF</dt>
                        <dd>{item.tradeoff}</dd>
                      </div>
                      <div className="evidence-result">
                        <dt>THE RESULT</dt>
                        <dd>{item.result}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          )}
          {project.leadershipScope && (
            <section id="leadership">
              <p className="eyebrow">LEADERSHIP IN PRACTICE</p>
              <h2>Direction, standards, and delivery.</h2>
              <p>
                These are the leadership responsibilities I personally own.
                Product delivery remains a collective team effort.
              </p>
              <ol className="leadership-scope">
                {project.leadershipScope.map((item, index) => (
                  <li key={item}>
                    <span className="mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <div className="case-conversation">
            <h3>Let’s get into the details.</h3>
            <p>
              {project.contributionTitle
                ? "I’m happy to discuss the product decisions, team leadership, and engineering behind this work."
                : "I’m happy to discuss my contribution and the engineering behind this work."}
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
