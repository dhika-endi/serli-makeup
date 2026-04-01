"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Info } from "lucide-react";
import { brand, terms } from "@/lib/data";
import BookingSteps from "@/components/BookingSteps";
import SectionHeading from "@/components/SectionHeading";

export default function BookingPage() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" className="hover:underline">Beranda</Link>
            <span>/</span>
            <span>Booking</span>
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
              Cara Booking
            </span>
            <h1
              className="font-serif italic text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
            >
              Mudah & Cepat dalam 4 Langkah
            </h1>
            <p
              className="text-base max-w-xl"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Proses booking Serli sangat simpel. Ikuti langkah-langkah berikut untuk mengamankan jadwalmu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Alur Booking"
            title="Langkah-langkah Booking"
            center
          />
          <BookingSteps />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            label="Hubungi Kami"
            title="Mulai dari Sini"
            subtitle="Pilih cara yang paling nyaman untukmu."
            center
          />

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {/* WhatsApp Card */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="p-8 rounded-[12px] border bg-white flex flex-col items-center text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                <MessageCircle size={28} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="font-semibold text-lg mb-1"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                WhatsApp
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {brand.whatsappDisplay}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-white text-sm font-medium text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                Chat Sekarang
              </a>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="p-8 rounded-[12px] border bg-white flex flex-col items-center text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                <Instagram size={28} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="font-semibold text-lg mb-1"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                Instagram
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                @{brand.instagram}
              </p>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-sm font-medium text-center transition-colors hover:bg-[#8B2252] hover:text-white"
                style={{
                  border: "2px solid var(--accent)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Kunjungi IG
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[760px] mx-auto">
          <SectionHeading
            label="Ketentuan"
            title="Syarat & Ketentuan"
            subtitle="Harap dibaca sebelum melakukan pemesanan."
            center
          />
          <motion.ul
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
          >
            {[
              "Durasi pengerjaan makeup maksimal 120 menit.",
              "Apabila homeservice, mohon dibantu sediakan minimal 1 kursi, 1 meja untuk cermin & lighting.",
              "Non homeservice, client wajib datang on time.",
              "Free transport untuk wilayah Purwokerto Kota.",
              "Fee transport mengikuti tarif ojek online.",
              "Client dalam kondisi wajah bareface (tidak menggunakan apapun saat hari H) karena skinprep dari kami.",
              "H-1 hindari penggunaan skincare/cream dokter.",
              "Apabila hairdo, client boleh keramas tanpa menggunakan conditioner, hairmask/vitamin rambut lainnya. Usahakan rambut dalam keadaan kering saat makeup.",
              "Keep tanggal = DP. Apabila client belum melakukan DP, tanggal masih dianggap available & kami berhak memberikan slot kepada calon client yang lain.",
              "Apabila cancel dari client, DP hangus tidak dapat dikembalikan.",
              "Pelunasan H-1 atau maksimal hari H setelah makeup selesai.",
              "Reschedule maksimal 2 kali.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 text-sm leading-relaxed"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
                >
                  {i + 1}
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-[12px] border bg-white"
              style={{ borderColor: "var(--border)" }}
            >
              <h3
                className="font-semibold text-lg mb-6 flex items-center gap-2"
                style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                <Info size={18} style={{ color: "var(--accent)" }} />
                Informasi Penting
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>Lokasi</div>
                    <div className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
                      {brand.location}
                    </div>
                  </div>
                </div>

                <div
                  className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                >
                  <p className="font-medium mb-1">Kebijakan Reschedule & DP</p>
                  <p className="opacity-80">{terms[2]}</p>
                  <p className="opacity-80 mt-1">{terms[3]}</p>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* TODO: Replace with actual Google Maps embed */}
              <div
                className="w-full h-full min-h-64 rounded-[12px] border flex flex-col items-center justify-center gap-3 text-center p-8"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <MapPin size={32} style={{ color: "var(--accent)", opacity: 0.5 }} />
                <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  Perum Emerald Village 2, Ciberem, Sumbang, Banyumas
                </p>
                <p className="text-xs opacity-60">
                  {/* TODO: Replace with actual Google Maps embed */}
                  Google Maps akan ditampilkan di sini
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
