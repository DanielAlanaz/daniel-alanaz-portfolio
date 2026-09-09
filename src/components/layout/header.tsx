"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { BrandMark } from "@/components/ui/brand-mark";

const links = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["Experience", "experience"],
  ["About", "about"],
];

const trackedSections = [...links.map(([, id]) => id), "contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);

  const navigateWithinHome = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    setOpen(false);

    const isModifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (isModifiedClick || window.location.pathname !== "/") return;

    const target = sectionId
      ? document.getElementById(sectionId)
      : document.documentElement;

    if (!target) return;

    event.preventDefault();

    const hash = sectionId ? `#${sectionId}` : "";
    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.pushState(window.history.state, "", nextUrl);
    }

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  useEffect(() => {
    let frame: number | null = null;

    const updateHeader = () => {
      const scrollY = window.scrollY;

      setCompact(scrollY > 32);

      if (window.location.pathname === "/") {
        const marker = scrollY + Math.min(window.innerHeight * 0.28, 240);
        let current = "";

        for (const sectionId of trackedSections) {
          const section = document.getElementById(sectionId);
          if (
            section &&
            section.getBoundingClientRect().top + scrollY <= marker
          ) {
            current = sectionId;
          }
        }

        setActiveSection(current);
      } else {
        setActiveSection("");
      }

      frame = null;
    };

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`site-header${compact ? " is-compact" : ""}`}>
      <div className="header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Daniel Alanaz home"
          onClick={(event) => navigateWithinHome(event)}
        >
          <BrandMark className="brand-mark" />
          <span className="wordmark-name">DANIEL ALANAZ</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={`/#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={(event) => navigateWithinHome(event, id)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className="header-contact"
          href="/#contact"
          aria-current={activeSection === "contact" ? "location" : undefined}
          onClick={(event) => navigateWithinHome(event, "contact")}
        >
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {[...links, ["Contact", "contact"]].map(([label, id]) => (
          <Link
            key={id}
            href={`/#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={(event) => navigateWithinHome(event, id)}
          >
            {label}
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
