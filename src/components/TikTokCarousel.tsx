"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { tiktokVideos } from "@/lib/data";

export default function TikTokCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  const activeVideo = tiktokVideos.find((v) => v.id === activeEmbed);

  return (
    <>
      <div className="relative">
        {/* Prev arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Sebelumnya"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors duration-200 hidden md:flex"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tiktokVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.07, 0.5) }}
              className="shrink-0 w-[200px] md:w-[220px] cursor-pointer group"
              onClick={() => setActiveEmbed(video.id)}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={video.thumb}
                  alt={video.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="220px"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(44,24,16,0.45)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                  >
                    <Play size={22} fill="var(--accent)" style={{ color: "var(--accent)", marginLeft: 2 }} />
                  </div>
                </div>
                {/* TikTok badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                  >
                    <TikTokIcon size={11} />
                    TikTok
                  </span>
                </div>
              </div>

              {/* Caption */}
              <p
                className="mt-2 text-xs leading-snug line-clamp-2 px-0.5"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Selanjutnya"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors duration-200 hidden md:flex"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* View on TikTok link */}
      <div className="mt-6 flex justify-center">
        <a
          href={`https://www.tiktok.com/@serliiim_`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
        >
          <TikTokIcon size={15} />
          @serliiim_ di TikTok
        </a>
      </div>

      {/* Embed Modal */}
      <AnimatePresence>
        {activeEmbed && activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={() => setActiveEmbed(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
              style={{ width: 340, maxWidth: "95vw" }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveEmbed(null)}
                className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                aria-label="Tutup"
              >
                <X size={16} />
              </button>

              {/* TikTok embed */}
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "9/16", width: "100%" }}>
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${activeEmbed}`}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.description}
                />
              </div>

              {/* Open in TikTok */}
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                <TikTokIcon size={14} />
                Buka di TikTok
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.19 8.19 0 0 0 4.79 1.52V6.79a4.85 4.85 0 0 1-1.02-.1z" />
    </svg>
  );
}
