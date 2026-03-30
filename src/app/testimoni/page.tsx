"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { testimonials, brand } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";

const categories = ["Semua", "Wedding Makeup", "Graduation Makeup", "Engagement Makeup", "Prewedding Makeup"];

export default function TestimoniPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? testimonials
      : testimonials.filter((t) => t.service === activeFilter);

  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" className="hover:underline">Beranda</Link>
            <span>/</span>
            <span>Testimoni</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              Testimoni
            </span>
            <h1
              className="font-serif italic text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
            >
              Kata Klien Serli
            </h1>
            <p
              className="text-base max-w-xl"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Kepuasan setiap klien adalah motivasi terbesar untuk terus berkembang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeFilter === cat ? "var(--accent)" : "transparent",
                  color: activeFilter === cat ? "white" : "var(--text-muted)",
                  border: activeFilter === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeFilter}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div
              className="text-center py-16 text-base"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Belum ada testimoni untuk kategori ini.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "var(--accent-soft)" }}
      >
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-serif italic text-3xl mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-serif)" }}
            >
              Sudah pernah jadi klien Serli?
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Bagikan pengalamanmu! Review kamu sangat berarti bagi Serli dan calon klien lainnya.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              <MessageCircle size={16} />
              Bagikan Pengalamanmu
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
