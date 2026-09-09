import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { profile } from "@/content/profile";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link className="footer-name" href="/">
        Daniel Alanaz<span>© {new Date().getFullYear()}</span>
      </Link>
      <p>Thoughtfully engineered. Creatively built.</p>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn <ArrowUpRight size={14} />
      </a>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
