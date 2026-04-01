"use client";

import { useState } from "react";
import { Check, MessageCircle, Info, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "@/lib/data";

interface ExpandablePackage {
  name: string;
  price: number;
  includes: string[];
  includes2?: { label: string; items: string[] };
  notes?: string[];
}

interface ServiceCardProps {
  id: string;
  category: string;
  name: string;
  price: number;
  includes: string[];
  includes2?: { label: string; items: string[] };
  notes?: string[];
  expandablePackage?: ExpandablePackage;
  badge: string | null;
  fullHeight?: boolean;
}

function CheckItem({ item, featured }: { item: string; featured: boolean }) {
  return (
    <li className="flex items-start gap-3 text-sm" style={{ color: featured ? "rgba(255,255,255,0.9)" : "var(--text)", fontFamily: "var(--font-sans)" }}>
      <span
        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: featured ? "rgba(255,255,255,0.2)" : "var(--accent-soft)" }}
      >
        <Check size={11} style={{ color: featured ? "white" : "var(--accent)" }} />
      </span>
      {item}
    </li>
  );
}

export default function ServiceCard({ id, category, name, price, includes, includes2, notes, expandablePackage, badge }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const whatsappMessage = `Halo Serli, saya ingin booking ${expanded && expandablePackage ? expandablePackage.name : name}. Boleh saya tanya-tanya dulu?`;
  const waUrl = `https://wa.me/6287890536491?text=${encodeURIComponent(whatsappMessage)}`;
  const featured = badge !== null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`relative flex flex-col rounded-[12px] p-8${featured ? " sm:col-span-2" : ""}`}
      style={{
        backgroundColor: featured ? "var(--accent)" : "white",
        border: featured ? "none" : "1px solid var(--border)",
        boxShadow: featured ? "0 8px 32px rgba(139,34,82,0.2)" : undefined,
      }}
    >
      {badge && (
        <span
          className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 whitespace-nowrap"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", fontFamily: "var(--font-sans)" }}
        >
          {badge}
        </span>
      )}

      <h3
        className="font-serif italic text-2xl leading-snug mb-2"
        style={{ color: featured ? "white" : "var(--text)", fontFamily: "var(--font-serif)" }}
      >
        {name}
      </h3>

      {category && (
        <span
          className="self-start text-xs font-medium px-2.5 py-1 rounded-full mb-3 inline-block"
          style={{
            backgroundColor: featured ? "rgba(255,255,255,0.15)" : "var(--accent-soft)",
            color: featured ? "rgba(255,255,255,0.85)" : "var(--accent)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {category}
        </span>
      )}

      <div
        className="text-3xl font-bold mb-5"
        style={{ color: featured ? "white" : "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        {formatPrice(price)}
      </div>

      <ul className="flex flex-col gap-2.5 flex-1" style={{ marginBottom: expandablePackage ? "1rem" : "1.75rem" }}>
        {includes.map((item, i) => (
          <CheckItem key={i} item={item} featured={featured} />
        ))}
      </ul>

      {/* Lihat Paket toggle */}
      {expandablePackage && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-semibold mb-5 transition-opacity hover:opacity-70 self-start"
            style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
          >
            {expanded ? "Sembunyikan Paket" : "Lihat Paket"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={15} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  className="rounded-xl p-5 mb-5"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      className="font-serif italic text-lg"
                      style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
                    >
                      {expandablePackage.name}
                    </h4>
                    <span
                      className="text-xl font-bold"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                    >
                      {formatPrice(expandablePackage.price)}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {expandablePackage.includes.map((item, i) => (
                      <CheckItem key={i} item={item} featured={false} />
                    ))}
                  </ul>

                  {expandablePackage.includes2 && (
                    <div className="mb-4">
                      <p
                        className="text-xs font-semibold tracking-wide uppercase mb-2"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
                      >
                        {expandablePackage.includes2.label}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {expandablePackage.includes2.items.map((item, i) => (
                          <CheckItem key={i} item={item} featured={false} />
                        ))}
                      </ul>
                    </div>
                  )}

                  {expandablePackage.notes && (
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: "var(--accent-soft)" }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                      >
                        <Info size={11} />
                        Catatan
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {expandablePackage.notes.map((note, i) => (
                          <li key={i} className="text-xs leading-relaxed" style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                            • {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Main notes */}
      {notes && notes.length > 0 && (
        <div className="mb-5 p-3 rounded-lg" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Info size={11} />
            Catatan
          </p>
          <ul className="flex flex-col gap-1.5">
            {notes.map((note, i) => (
              <li key={i} className="text-xs leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                • {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
        style={{
          backgroundColor: featured ? "white" : "transparent",
          color: "var(--accent)",
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
