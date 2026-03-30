"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { brand } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/booking", label: "Booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
        setMobileOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="font-serif font-bold text-xl leading-tight"
              style={{ color: "var(--accent)", fontFamily: "var(--font-serif)" }}
            >
              Serli Marselina
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)", opacity: 0.8 }}
            >
              makeup
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: pathname === link.href ? "var(--accent)" : "var(--text)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] transition-all duration-200"
                  style={{
                    backgroundColor: "var(--accent)",
                    width: pathname === link.href ? "100%" : "0%",
                  }}
                />
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              <MessageCircle size={14} />
              Book Sekarang
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--text)" }}
            aria-label="Buka menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif font-bold text-lg" style={{ color: "var(--accent)" }}>
                  Serli Marselina
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg"
                  style={{ color: "var(--text)" }}
                  aria-label="Tutup menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 rounded-xl text-base font-medium transition-colors duration-200"
                    style={{
                      color: pathname === link.href ? "var(--accent)" : "var(--text)",
                      backgroundColor: pathname === link.href ? "var(--accent-soft)" : "transparent",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <MessageCircle size={18} />
                Chat via WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
