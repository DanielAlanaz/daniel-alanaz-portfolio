"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["Experience", "experience"],
  ["About", "about"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
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
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Daniel Alanaz home">
          da<span>.</span>
          <span className="wordmark-name">DANIEL ALANAZ</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([label, id]) => (
            <Link key={id} href={`/#${id}`}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/#contact">
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
          <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
