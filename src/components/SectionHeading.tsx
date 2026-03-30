"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span
          className="text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
          style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-serif italic leading-tight text-4xl md:text-5xl mb-4"
        style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)",
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
