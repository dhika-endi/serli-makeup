"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, CreditCard, Sparkles } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Chat WA / DM Instagram",
    description: "Hubungi Serli melalui WhatsApp atau DM Instagram untuk tanya-tanya dan cek ketersediaan jadwal.",
  },
  {
    number: 2,
    icon: CalendarCheck,
    title: "Konfirmasi Tanggal & Layanan",
    description: "Diskusikan tanggal, jenis makeup yang diinginkan, dan detail lainnya seperti lokasi & waktu.",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Bayar DP untuk Lock Tanggal",
    description: "Transfer DP untuk mengamankan jadwal Anda. DP tidak dapat dikembalikan jika pembatalan sepihak.",
  },
  {
    number: 4,
    icon: Sparkles,
    title: "Hari H — Pelunasan Setelah Selesai",
    description: "Nikmati proses makeup oleh Serli. Pelunasan dilakukan setelah pekerjaan selesai.",
  },
];

export default function BookingSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {/* Connecting line (desktop) */}
      <div
        className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="flex flex-col items-center text-center relative"
        >
          {/* Circle */}
          <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5 z-10"
            style={{ backgroundColor: "var(--accent-soft)", border: "2px solid var(--accent)" }}
          >
            <step.icon size={24} style={{ color: "var(--accent)" }} />
            <span
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              {step.number}
            </span>
          </div>

          <h3
            className="font-semibold text-base mb-2"
            style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
          >
            {step.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
          >
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
