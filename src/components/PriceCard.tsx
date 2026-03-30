"use client";

import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/data";

interface PriceCardProps {
  id: string;
  category: string;
  name: string;
  price: number;
  includes: string[];
  badge: string | null;
  featured?: boolean;
}

export default function PriceCard({
  id,
  category,
  name,
  price,
  includes,
  badge,
  featured = false,
}: PriceCardProps) {
  const whatsappMessage = `Halo Serli, saya ingin booking ${name}. Boleh saya tanya-tanya dulu?`;
  const waUrl = `https://wa.me/6287890536491?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative flex flex-col rounded-[12px] p-8 bg-white"
      style={{
        border: featured ? "2px solid var(--accent)" : "1px solid var(--border)",
        boxShadow: featured ? "0 4px 24px rgba(139,34,82,0.12)" : undefined,
      }}
    >
      {badge && (
        <span
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1.5 rounded-full text-white whitespace-nowrap"
          style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
        >
          {badge}
        </span>
      )}

      <div className="mb-2">
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
        >
          {category}
        </span>
      </div>

      <h3
        className="font-serif italic text-3xl leading-snug mb-3"
        style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {name}
      </h3>

      <div
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        {formatPrice(price)}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "var(--accent-soft)" }}
            >
              <Check size={11} style={{ color: "var(--accent)" }} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
        style={{
          backgroundColor: featured ? "var(--accent)" : "transparent",
          color: featured ? "white" : "var(--accent)",
          border: featured ? "none" : "2px solid var(--accent)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <MessageCircle size={16} />
        Amankan Tanggalmu
      </a>
    </motion.div>
  );
}
