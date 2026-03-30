"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioImages } from "@/lib/data";
import PortfolioGrid from "@/components/PortfolioGrid";

const categories = ["Semua", "Wedding", "Prewedding", "Engagement", "Graduation"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" className="hover:underline">Beranda</Link>
            <span>/</span>
            <span>Portofolio</span>
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
              Portofolio
            </span>
            <h1
              className="font-serif italic text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
            >
              Galeri Karya Serli
            </h1>
            <p
              className="text-base max-w-xl"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Kumpulan karya makeup terbaik dari berbagai momen spesial klien Serli.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
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

          <PortfolioGrid images={portfolioImages} filter={activeFilter} />
        </div>
      </section>
    </>
  );
}
