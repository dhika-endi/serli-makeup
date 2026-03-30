"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Instagram,
  Clock,
  Users,
  MapPin,
  Check,
} from "lucide-react";
import { brand, services, addons, portfolioImages, testimonials, formatPrice } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import TikTokCarousel from "@/components/TikTokCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

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
            className="object-cover"
            style={{ objectPosition: "50% 10%" }}
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
          <div className="w-full md:w-[50%] pt-[65vw] pb-16 md:pt-0 md:pb-0">

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
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {portfolioImages.slice(0, 6).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative break-inside-avoid rounded-xl overflow-hidden mb-4 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 2 === 0 ? 700 : 500}
                  className="w-full h-auto object-cover block"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 60%)" }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              Lihat Semua Karya
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
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

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>

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

      {/* ─── SECTION 5: ABOUT PREVIEW (hidden) ──────────────── */}
      {false && <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] md:h-[560px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.jpg"
                alt="Serli Marselina MUA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
                style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                Tentang Serli
              </span>
              <h2
                className="font-serif italic text-3xl md:text-4xl leading-tight mb-5"
                style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
              >
                MUA Lokal Purwokerto yang Berpengalaman
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {/* TODO: replace with real bio */}
                Serli Marselina adalah makeup artist profesional yang berbasis di Purwokerto, Banyumas.
                Dengan pengalaman lebih dari 4 tahun dan ratusan klien yang telah dilayani, Serli
                menghadirkan makeup berkualitas tinggi dengan sentuhan personal yang hangat.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Clock, value: "4+", label: "Tahun Pengalaman" },
                  { icon: Users, value: "500+", label: "Klien Puas" },
                  { icon: MapPin, value: "✓", label: "Homeservice Tersedia" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon
                      size={22}
                      className="mx-auto mb-2"
                      style={{ color: "var(--accent)" }}
                    />
                    <div
                      className="font-bold text-xl"
                      style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium group"
                style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                Kenali Saya Lebih Dekat
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>}

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
