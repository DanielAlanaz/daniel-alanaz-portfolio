import Link from "next/link";
import { Cloud, Server, Network, ArrowUpRight } from "lucide-react";
const domains = [
  {
    icon: Cloud,
    title: "Client cloud environments",
    text: "Managing client servers on AWS Lightsail, with application delivery and services across AWS ECS, ECR, S3, CloudFront, and Google Cloud Run.",
    tags: ["AWS Lightsail", "AWS ECS / ECR", "S3 / CloudFront"],
  },
  {
    icon: Server,
    title: "Application delivery",
    text: "Containerized build, test, image, and deployment workflows that connect application development to staging, production, and Windows environments.",
    tags: ["Docker", "CI/CD", "Staging & production"],
  },
  {
    icon: Network,
    title: "IT foundations",
    text: "Infrastructure knowledge spanning networking, Active Directory, DNS, DHCP, backup and recovery, and hardware diagnostics.",
    tags: ["Networking", "Identity & DNS", "Backup & recovery"],
  },
];
export function CloudSection() {
  return (
    <section id="cloud" className="section cloud-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>OPERATIONS /</span> BEYOND THE APPLICATION
            </p>
            <h2>The system around the software.</h2>
          </div>
          <p className="section-description">
            Engineering continues after deployment. I work across the cloud
            environments and IT foundations that support business applications.
          </p>
        </div>
        <div className="cloud-grid">
          {domains.map(({ icon: Icon, title, text, tags }) => (
            <article key={title}>
              <Icon size={27} strokeWidth={1.3} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tag-list">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/projects/cloud-operations/">
          Explore cloud & infrastructure <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
