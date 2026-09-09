import {
  ArrowUpRight,
  ArrowDown,
  Layers3,
  Workflow,
  Box,
  GitBranch,
  Scan,
  Download,
  Globe2,
  Braces,
} from "lucide-react";
import { HeroArt } from "@/features/hero-scene/hero-art";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/features/projects/project-grid";
import { SkillsMatrix } from "@/features/skills/skills-matrix";
import { ContactTerminal } from "@/features/contact/contact-terminal";
import { projects, experiments } from "@/content/projects";
import { experience, profile } from "@/content/profile";

const approaches = [
  {
    icon: Layers3,
    title: "Architecture with intent.",
    text: "Translate business requirements into clear system boundaries, maintainable services, and APIs built for the application around them.",
    foot: "SYSTEM DESIGN / INTEGRATION",
  },
  {
    icon: Workflow,
    title: "Intelligence, integrated.",
    text: "Connect Python agents, language models, and external services to turn repeated tasks into practical, automated workflows.",
    foot: "AI SERVICES / AUTOMATION",
  },
  {
    icon: GitBranch,
    title: "Built to be delivered.",
    text: "Bring architecture into production through containerized deployments, CI/CD, thoughtful code reviews, and a shared engineering standard.",
    foot: "CLOUD / ENGINEERING LEADERSHIP",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="tiny-cross">+</span> FULL-STACK ARCHITECT &
            ENGINEERING TEAM LEAD
          </p>
          <span className="hero-edition mono">SELECTED WORK / 2026</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1 id="hero-heading">
              Engineering
              <br />
              systems.
              <br />
              <span className="muted-heading">Creating new</span>
              <br />
              <span className="accent-text">dimensions.</span>
            </h1>
            <p className="hero-description">
              I build enterprise platforms, connect intelligence to real
              workflows, and lead teams from architecture to delivery.
            </p>
            <div className="hero-actions">
              <MagneticLink href="#work" down>
                Explore systems
              </MagneticLink>
              <MagneticLink href="#contact" secondary>
                Get in touch
              </MagneticLink>
            </div>
          </div>
          <HeroArt />
        </div>
        <div className="hero-bottom">
          <p>
            <Globe2 size={14} /> BASED IN BEIRUT, LEBANON
          </p>
          <p>ENTERPRISE MINDSET. CREATIVE INSTINCT.</p>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={17} />
            <span>SCROLL TO EXPLORE</span>
          </a>
        </div>
      </section>

      <div className="expertise-strip">
        <div className="shell">
          <span>Architecture</span>
          <span className="strip-cross">+</span>
          <span>Engineering leadership</span>
          <span className="strip-cross">+</span>
          <span>AI & automation</span>
          <span className="strip-cross">+</span>
          <span>Real-time 3D</span>
        </div>
      </div>

      <section id="work" className="section shell">
        <SectionHeading
          number="01"
          label="SELECTED SYSTEMS"
          title="Complex problems. Clear solutions."
          description="A selection of enterprise platforms and intelligent workflows I’ve helped bring to life."
        />
        <ProjectGrid projects={projects} />
        <div className="work-note">
          <Braces size={16} />
          <p>
            Interested in the details? Let’s talk architecture, implementation,
            and the thinking behind the work.
          </p>
          <a href="#contact">
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section id="approach" className="section approach-section">
        <div className="shell">
          <SectionHeading
            number="02"
            label="ENGINEERING APPROACH"
            title="Beyond the implementation."
            description="Good engineering is as much about the decisions as it is about the code."
          />
          <div className="approach-grid">
            {approaches.map(({ icon: Icon, title, text, foot }, i) => (
              <article key={title} className="approach-card">
                <div className="approach-icon">
                  <Icon size={25} strokeWidth={1.3} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="approach-foot mono">{foot}</span>
              </article>
            ))}
          </div>
          <div className="approach-statement">
            <span className="mono">THE THROUGH LINE</span>
            <p>
              Understand the problem.
              <br />
              Make the complex <em>work simply.</em>
            </p>
            <div className="statement-icon" aria-hidden="true">
              <Scan size={76} strokeWidth={0.7} />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section shell">
        <SectionHeading
          number="03"
          label="EXPERIENCE"
          title="Building. Growing. Leading."
        />
        <div className="experience-list">
          {experience.map((job, i) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-date">
                <span className="timeline-dot" />
                <span>{job.date}</span>
                <p>{job.type}</p>
              </div>
              <div className="experience-main">
                <span className="experience-company">{job.company}</span>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="tag-list">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="experience-number mono">/ 0{i + 1}</span>
            </article>
          ))}
        </div>
        <a
          className="text-link cv-link"
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
        >
          The full story, on paper <Download size={16} />
        </a>
      </section>

      <section id="lab" className="section lab-section">
        <div className="shell">
          <SectionHeading
            number="04"
            label="THE CREATIVE LAB"
            title="A different kind of playground."
            description="The same curiosity, in another dimension. Exploring 3D, game development, and the craft of interaction."
          />
          <div className="lab-layout">
            <div className="lab-practice">
              <Box size={42} strokeWidth={1} />
              <h3>
                Logic meets
                <br />
                <span>imagination.</span>
              </h3>
              <p>
                My creative practice spans Blender, Unity, 3D modeling,
                texturing, and animation—extending software engineering into
                real-time experiences.
              </p>
              <div className="tag-list">
                <span>Unity</span>
                <span>Blender</span>
                <span>3D & motion</span>
              </div>
            </div>
            <div className="experiment-list">
              {experiments.map((item) => (
                <article key={item.title}>
                  <span className="mono">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                  <Box size={28} strokeWidth={1} />
                </article>
              ))}
              <a
                href={`mailto:${profile.email}?subject=Let%E2%80%99s%20talk%20games%20and%203D`}
                className="lab-link"
              >
                Let’s talk games & 3D <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <SectionHeading
          number="05"
          label="TECHNICAL TOOLKIT"
          title="Connected expertise."
          description="Across the stack, with a reason behind every tool."
        />
        <SkillsMatrix />
      </section>

      <section id="about" className="section shell about-section">
        <div>
          <p className="eyebrow">
            <span>06 /</span> THE PERSON BEHIND THE SYSTEMS
          </p>
          <h2>
            An architect’s perspective.
            <br />
            <span className="muted-heading">A maker’s curiosity.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Daniel, a full-stack architect and engineering team lead based
            in Beirut. Over 4+ years, I’ve worked across web, mobile, backend,
            and cloud systems—connecting technical decisions to the people and
            businesses they serve.
          </p>
          <p>
            I enjoy moving between disciplines: designing an API, reviewing a
            teammate’s code, integrating an AI service, or shaping a 3D asset.
            My background also includes a degree in archaeology from the
            Lebanese University.
          </p>
          <div className="about-facts">
            <span>
              <Globe2 size={16} /> Beirut, Lebanon
            </span>
            <span>English / Arabic</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="shell contact-layout">
          <div>
            <p className="eyebrow">
              <span>07 /</span> START A CONVERSATION
            </p>
            <h2>
              What can we
              <br />
              build <span className="accent-text">together?</span>
            </h2>
            <p className="contact-description">
              Have an engineering challenge, a team to grow, or an idea worth
              exploring? I’d love to hear about it.
            </p>
            <a className="text-link" href={`mailto:${profile.email}`}>
              Say hello <ArrowUpRight size={18} />
            </a>
          </div>
          <ContactTerminal />
        </div>
      </section>
    </main>
  );
}
