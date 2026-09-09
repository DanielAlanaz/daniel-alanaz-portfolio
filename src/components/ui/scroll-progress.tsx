"use client";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  );
}
