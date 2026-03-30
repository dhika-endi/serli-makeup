"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Award } from "lucide-react";
import { brand } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const whyCards = [
  {
    icon: Sparkles,
    title: "Produk Premium",
    desc: "Menggunakan produk makeup berkualitas tinggi yang aman, tahan lama, dan cocok untuk semua jenis kulit.",
  },
  {
    icon: MapPin,
    title: "Homeservice Tersedia",
    desc: "Tidak perlu repot keluar rumah. Serli siap datang ke lokasi Anda dengan peralatan lengkap.",
  },
  {
    icon: Award,
    title: "Pengalaman 4+ Tahun",
    desc: "Dengan lebih dari 4 tahun pengalaman dan ratusan klien puas, kualitas adalah prioritas utama.",
  },
];

export default function AboutPage() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      {/* Hero Split */}
      <section className="pt-20 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-xs pt-8 mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" className="hover:underline">Beranda</Link>
            <span>/</span>
            <span>Tentang</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.jpg"
                alt="Serli Marselina"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
                style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                Tentang Saya
              </span>
              <h1
                className="font-serif italic text-4xl md:text-5xl leading-tight mb-5"
                style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
              >
                {brand.name}
              </h1>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {/* TODO: replace with real bio */}
                Halo! Saya Serli Marselina, seorang Makeup Artist profesional yang berbasis di
                Purwokerto, Banyumas, Jawa Tengah. Saya memulai karir sebagai MUA lebih dari 4
                tahun lalu dengan passion yang besar terhadap dunia kecantikan.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {/* TODO: replace with real bio */}
                Bagi saya, setiap klien adalah unik dan istimewa. Saya berkomitmen untuk memahami
                keinginan dan kebutuhan setiap klien sehingga hasil makeup benar-benar mencerminkan
                kepribadian mereka di momen terbaik hidupnya.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                Konsultasi Gratis via WA
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Mengapa Serli?"
            title="Keunggulan yang Membedakan"
            center
          />

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="p-8 rounded-[12px] border bg-white text-center"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "var(--accent-soft)" }}
                >
                  <card.icon size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-semibold text-lg mb-3"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Jangkauan"
            title="Area Layanan"
            subtitle="Serli melayani klien di berbagai kota berikut."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {brand.areas.map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {area}
              </span>
            ))}
          </motion.div>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
          >
            Kota lain di luar list? Hubungi Serli untuk konfirmasi ketersediaan dan biaya transport.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-serif italic text-3xl md:text-4xl leading-tight mb-6"
                style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Setiap perempuan berhak tampil cantik di momen terbaiknya&rdquo;
              </h2>
              <div
                className="w-12 h-0.5 mb-6"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {/* TODO: replace with real content */}
                Filosofi ini yang mendasari setiap pekerjaan Serli. Setiap klien mendapatkan
                perhatian penuh, mulai dari konsultasi hingga hasil akhir yang memastikan
                kepercayaan diri di hari spesial mereka.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                Dengan pendekatan yang personal dan hangat, Serli tidak hanya bekerja sebagai
                MUA — tetapi juga sebagai teman yang menemani perjalanan cantikmu.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
