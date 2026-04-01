"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const ease = [0.22, 1, 0.36, 1];

const itemVariant = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
};

export default function SectionHeading({ label, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.13 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <motion.span
          variants={itemVariant}
          transition={{ duration: 0.55, ease }}
          className="text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
          style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariant}
        transition={{ duration: 0.65, ease }}
        className="font-serif italic leading-tight text-4xl md:text-5xl mb-4"
        style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease }}
          className="text-base leading-relaxed max-w-xl"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)",
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
