"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/data";

interface ServiceCardProps {
  id: string;
  category: string;
  name: string;
  price: number;
  includes: string[];
  badge: string | null;
}

export default function ServiceCard({ id, category, name, price, includes, badge }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative flex flex-col rounded-[12px] border p-6 bg-white hover:shadow-md transition-shadow duration-300"
      style={{ borderColor: "var(--border)" }}
    >
      {badge && (
        <span
          className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
        >
          {badge}
        </span>
      )}

      <div className="mb-4">
        <h3
          className="font-serif italic text-2xl mt-1 leading-snug"
          style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
        >
          {name}
        </h3>
      </div>

      <div
        className="text-2xl font-semibold mb-4"
        style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        {formatPrice(price)}
      </div>

      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {includes.slice(0, 2).map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <Check size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/services"
        className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 group"
        style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        Book Sekarang
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </motion.div>
  );
}
