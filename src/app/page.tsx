"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Instagram,
  Check,
} from "lucide-react";
import { brand, services, addons, formatPrice } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TikTokCarousel from "@/components/TikTokCarousel";
import InstagramFeed from "@/components/InstagramFeed";
import TestimonialImageCarousel from "@/components/TestimonialImageCarousel";


export default function HomePage() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F5F0EC", minHeight: "100svh" }}
      >
        {/* Photo — right side desktop, full bg mobile */}
        <div className="absolute inset-0 md:left-[42%]">
          <Image
            src="/hero.jpeg"
            alt="Wedding Makeup by Serli Marselina"
            fill
            priority
            className="object-cover object-[50%_60%] md:object-[50%_10%]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          {/* Desktop: horizontal gradient left→transparent */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #F5F0EC 0%, #F5F0EC 5%, rgba(245,240,236,0.92) 18%, rgba(245,240,236,0.5) 38%, rgba(245,240,236,0.1) 58%, transparent 75%)",
            }}
          />
          {/* Mobile: bottom gradient so text is readable */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245,240,236,0.15) 0%, rgba(245,240,236,0.7) 55%, #F5F0EC 80%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 flex items-center"
          style={{ minHeight: "100svh" }}
        >
          <div className="w-full md:w-[50%] pt-[80vw] pb-16 md:pt-0 md:pb-0">

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-xs tracking-[0.28em] uppercase font-semibold block mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              ✦ Makeup Artist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="font-serif italic leading-tight mb-5"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              }}
            >
              {brand.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="text-base md:text-lg mb-8 leading-relaxed max-w-sm"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Jasa Makeup Artist Purwokerto & Sekitarnya
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-white font-medium text-sm flex items-center gap-2 transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                <MessageCircle size={15} />
                Book via WhatsApp
              </a>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full font-medium text-sm transition-colors duration-200 hover:bg-white"
                style={{
                  color: "var(--text)",
                  border: "1.5px solid var(--border)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Lihat Layanan
              </Link>
            </motion.div>


          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1.4, duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <ChevronDown size={26} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </section>

      {/* ─── SECTION 2: SERVICES PREVIEW ─────────────────────── */}
      <section className="py-24 md:py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Layanan Kami"
            title="Makeup untuk Setiap Momen"
            subtitle="Dari wisuda hingga hari pernikahan, Serli siap membuatmu tampil memukau."
            center
          />

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </motion.div>

          {/* Add-ons subsection */}
          <div className="mt-14">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-center"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Layanan Tambahan
            </p>
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {addons.map((addon, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="p-5 rounded-[12px] border bg-white"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h4
                    className="font-semibold text-base mb-1.5"
                    style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
                  >
                    {addon.name}
                  </h4>
                  <div
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                  >
                    {addon.price ? formatPrice(addon.price) : "Menyesuaikan"}
                  </div>
                  {addon.includes.length > 0 && (
                    <ul className="flex flex-col gap-1.5 mb-2">
                      {addon.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
                          <span
                            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: "var(--accent-soft)" }}
                          >
                            <Check size={9} style={{ color: "var(--accent)" }} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {addon.note && (
                    <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                      * {addon.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PORTFOLIO PREVIEW ─────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#F5F0EC" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Karya Terbaru"
            title="Hasil yang Bicara Sendiri"
            subtitle="Setiap makeup adalah karya yang mencerminkan keunikan kamu."
            center
          />
          <InstagramFeed />
        </div>
      </section>

      {/* ─── SECTION 3b: TIKTOK CAROUSEL ────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="TikTok"
            title="Video Terbaru di TikTok"
            subtitle="Tonton proses makeup dan hasil karya Serli langsung dari TikTok."
            center
          />
          <TikTokCarousel />
        </div>
      </section>

      {/* ─── SECTION 4: TESTIMONIALS ─────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Kata Mereka"
            title="Klien yang Bahagia"
            subtitle="Kepuasan klien adalah kebanggaan terbesar Serli."
            center
          />

          <TestimonialImageCarousel />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 text-sm font-medium group"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              Lihat Semua Testimoni
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ─── SECTION 5b: BRAND LOGOS ─────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Produk Pilihan"
            title="Brand yang Kami Gunakan"
            subtitle="Serli menggunakan produk-produk makeup berkualitas tinggi untuk hasil yang tahan lama dan memukau."
            center
          />

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              "/brand/quality_restoration_20260401081945467 1.png",
              "/brand/quality_restoration_20260401082139337 1.png",
              "/brand/quality_restoration_20260401082447678 1.png",
              "/brand/quality_restoration_20260401082544086 1.png",
              "/brand/quality_restoration_20260401082809209 1.png",
              "/brand/quality_restoration_20260401082955521 1.png",
              "/brand/quality_restoration_20260401083100917 1.png",
              "/brand/quality_restoration_20260401083252332 2.png",
              "/brand/quality_restoration_20260401083515353 1.png",
              "/brand/quality_restoration_20260401083623380 1.png",
              "/brand/quality_restoration_20260401083721841 1.png",
              "/brand/quality_restoration_20260401083837932 1.png",
              "/brand/quality_restoration_20260401084018070 1.png",
              "/brand/quality_restoration_20260401084157812 1.png",
              "/brand/quality_restoration_20260401084355452 1.png",
              "/brand/quality_restoration_20260401084520869 1.png",
              "/brand/quality_restoration_20260401084732292 1.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.35 }}
                className="flex items-center justify-center rounded-xl border bg-white p-5"
                style={{ borderColor: "var(--border)", minHeight: 110 }}
              >
                <Image
                  src={src}
                  alt={`Brand logo ${i + 1}`}
                  width={160}
                  height={80}
                  className="object-contain w-full h-auto"
                  style={{ maxHeight: 72 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 6: BOOKING CTA ──────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: "var(--accent)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif italic text-4xl md:text-5xl text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Siap Tampil Cantik?
            </h2>
            <p
              className="text-white/75 text-lg mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Hubungi Serli sekarang untuk booking dan konsultasi gratis. Jadikan momen spesialmu
              tak terlupakan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "white",
                  color: "var(--accent)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <MessageCircle size={16} />
                Chat via WhatsApp
              </a>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm border-2 border-white text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <Instagram size={16} />
                Kunjungi Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
