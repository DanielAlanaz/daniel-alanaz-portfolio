"use client";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function MagneticLink({
  href,
  children,
  secondary = false,
  down = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  down?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          x.set((event.clientX - rect.left - rect.width / 2) * 0.07);
          y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
        }
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.span style={{ x: springX, y: springY }}>
        {children}
        {down ? <ArrowDown size={17} /> : <ArrowUpRight size={17} />}
      </motion.span>
    </a>
  );
}
