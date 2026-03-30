"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check, MessageCircle } from "lucide-react";
import { services, addons, terms, formatPrice, brand } from "@/lib/data";
import PriceCard from "@/components/PriceCard";
import SectionHeading from "@/components/SectionHeading";

function FeaturedPriceCard({ name, category, price, includes, badge }: { name: string; category: string; price: number; includes: string[]; badge: string | null }) {
  const whatsappMessage = `Halo Serli, saya ingin booking ${name}. Boleh saya tanya-tanya dulu?`;
  const waUrl = `https://wa.me/6287890536491?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div
      className="rounded-[16px] p-8 flex flex-col"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {badge && (
        <span
          className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", fontFamily: "var(--font-sans)" }}
        >
          {badge}
        </span>
      )}
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase mb-1"
        style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}
      >
        {category}
      </span>
      <h3
        className="font-serif italic text-3xl leading-snug mb-3 text-white"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {name}
      </h3>
      <div
        className="text-4xl font-bold mb-6 text-white"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {formatPrice(price)}
      </div>

      <div className="w-full h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white" style={{ fontFamily: "var(--font-sans)" }}>
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <Check size={11} color="white" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: "white", color: "var(--accent)", fontFamily: "var(--font-sans)" }}
      >
        <MessageCircle size={16} />
        Amankan Tanggalmu
      </a>
    </div>
  );
}

function AccordionItem({ text, index }: { text: string; index: number }) {
  const [open, setOpen] = useState(false);
  const title = text.split(":")[0] || text;
  const hasColon = text.includes(":");

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
          >
            {index + 1}
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
          >
            {hasColon ? title : text}
          </span>
        </div>
        {hasColon && (
          <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        )}
      </button>
      {hasColon && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p
                className="pb-4 pl-9 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {text.split(":").slice(1).join(":").trim()}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      {/* Page Hero */}
      <section
        className="pt-28 pb-16 px-6"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" className="hover:underline">Beranda</Link>
            <span>/</span>
            <span>Layanan</span>
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
              Layanan & Harga
            </span>
            <h1
              className="font-serif italic text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
            >
              Pilih Paket yang Tepat Untukmu
            </h1>
            <p
              className="text-base max-w-xl"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Semua paket termasuk konsultasi dan hasil makeup terbaik dengan produk premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* Left: regular packages */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {services.filter((s) => s.badge === null).map((service) => (
                <PriceCard key={service.id} {...service} featured={false} />
              ))}
            </motion.div>

            {/* Right: featured package (Paket Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24 w-full lg:w-[340px] shrink-0"
            >
              {services.filter((s) => s.badge !== null).map((service) => (
                <FeaturedPriceCard key={service.id} {...service} />
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Tambahan"
            title="Layanan Tambahan"
            subtitle="Tingkatkan pengalaman makeup-mu dengan layanan add-on berikut."
          />

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="p-6 rounded-[12px] border bg-white"
                style={{ borderColor: "var(--border)" }}
              >
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
                >
                  {addon.name}
                </h3>
                <div
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                >
                  {addon.price ? formatPrice(addon.price) : "Menyesuaikan"}
                </div>
                {addon.includes.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-3">
                    {addon.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
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
                )}
                {addon.note && (
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
                  >
                    * {addon.note}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[760px] mx-auto">
          <SectionHeading
            label="Ketentuan"
            title="Ketentuan Booking"
            subtitle="Harap dibaca sebelum melakukan pemesanan."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[12px] border px-6"
            style={{ borderColor: "var(--border)" }}
          >
            {terms.map((term, i) => (
              <AccordionItem key={i} text={term} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--accent)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-serif italic text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ada Pertanyaan tentang Paket?
          </h2>
          <p className="text-white/75 mb-8 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Hubungi Serli langsung via WhatsApp untuk konsultasi gratis.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "white", color: "var(--accent)", fontFamily: "var(--font-sans)" }}
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
