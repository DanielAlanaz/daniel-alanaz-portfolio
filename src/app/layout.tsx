import type { Metadata } from "next";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Alanaz — Full-Stack Architect & Engineering Team Lead",
    template: "%s — Daniel Alanaz",
  },
  description:
    "Enterprise systems, AI-powered workflows, and real-time 3D. Explore the engineering work and creative practice of Daniel Alanaz, based in Beirut, Lebanon.",
  openGraph: {
    title: "Daniel Alanaz — Engineering systems. Creating new dimensions.",
    description:
      "Full-Stack Architect & Engineering Team Lead. Enterprise software, AI automation, and real-time 3D.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Daniel Alanaz — Full-Stack Architect",
    description: "Engineering systems. Leading teams. Creating new dimensions.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
