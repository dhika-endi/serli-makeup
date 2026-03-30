"use client";

import { Check, MessageCircle } from "lucide-react";
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
  const whatsappMessage = `Halo Serli, saya ingin booking ${name}. Boleh saya tanya-tanya dulu?`;
  const waUrl = `https://wa.me/6287890536491?text=${encodeURIComponent(whatsappMessage)}`;
  const featured = badge !== null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative flex flex-col rounded-[12px] p-8"
      style={{
        backgroundColor: featured ? "var(--accent)" : "white",
        border: featured ? "none" : "1px solid var(--border)",
        boxShadow: featured ? "0 8px 32px rgba(139,34,82,0.2)" : undefined,
      }}
    >
      {badge && (
        <span
          className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 whitespace-nowrap"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white",
            fontFamily: "var(--font-sans)",
          }}
        >
          {badge}
        </span>
      )}

      <h3
        className="font-serif italic text-2xl leading-snug mb-3"
        style={{ color: featured ? "white" : "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {name}
      </h3>

      <div
        className="text-3xl font-bold mb-5"
        style={{ color: featured ? "white" : "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        {formatPrice(price)}
      </div>

      {featured && <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />}

      <ul className="flex flex-col gap-2.5 mb-7 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: featured ? "rgba(255,255,255,0.9)" : "var(--text)", fontFamily: "var(--font-sans)" }}>
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: featured ? "rgba(255,255,255,0.2)" : "var(--accent-soft)" }}
            >
              <Check size={11} style={{ color: featured ? "white" : "var(--accent)" }} />
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
          backgroundColor: featured ? "white" : "transparent",
          color: featured ? "var(--accent)" : "var(--accent)",
          border: featured ? "none" : "2px solid var(--accent)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <MessageCircle size={15} />
        Amankan Tanggalmu
      </a>
    </motion.div>
  );
}
