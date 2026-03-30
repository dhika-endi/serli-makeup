"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({ name, service, rating, quote }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex flex-col p-6 rounded-[12px] bg-white border"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="font-serif italic text-lg leading-relaxed mb-6 flex-1"
        style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{
            backgroundColor: "var(--accent-soft)",
            color: "var(--accent)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {initials}
        </div>
        <div>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
          >
            {name}
          </div>
          <div
            className="text-xs px-2 py-0.5 rounded-full inline-block mt-1"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {service}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
