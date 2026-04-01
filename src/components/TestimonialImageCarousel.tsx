"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/testimonials/Testimonial 1.PNG", alt: "Testimoni klien 1" },
  { src: "/testimonials/Testimonial 2.PNG", alt: "Testimoni klien 2" },
  { src: "/testimonials/Testimonial 3.PNG", alt: "Testimoni klien 3" },
];

export default function TestimonialImageCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const getIndex = (offset: number) => (active + offset + total) % total;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Carousel track */}
      <div className="relative w-full flex items-center justify-center" style={{ height: "clamp(500px, 80vw, 860px)" }}>

        {/* Left image */}
        <div
          className="absolute cursor-pointer transition-all duration-500"
          style={{
            width: "clamp(240px, 40vw, 520px)",
            left: "clamp(0px, 0vw, 0px)",
            zIndex: 1,
            transform: "scale(0.78) translateX(6%)",
            transformOrigin: "right center",
            filter: "brightness(0.7)",
          }}
          onClick={prev}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "4/5" }}>
            <Image
              src={images[getIndex(-1)].src}
              alt={images[getIndex(-1)].alt}
              fill
              className="object-cover"
            />
            {/* Right fade */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, rgba(245,240,236,0.9) 0%, transparent 60%)" }}
            />
          </div>
        </div>

        {/* Center image */}
        <div
          className="relative transition-all duration-500"
          style={{ width: "clamp(300px, 52vw, 640px)", zIndex: 10 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right image */}
        <div
          className="absolute cursor-pointer transition-all duration-500"
          style={{
            width: "clamp(240px, 40vw, 520px)",
            right: "clamp(0px, 0vw, 0px)",
            zIndex: 1,
            transform: "scale(0.78) translateX(-6%)",
            transformOrigin: "left center",
            filter: "brightness(0.7)",
          }}
          onClick={next}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "4/5" }}>
            <Image
              src={images[getIndex(1)].src}
              alt={images[getIndex(1)].alt}
              fill
              className="object-cover"
            />
            {/* Left fade */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(245,240,236,0.9) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                backgroundColor: i === active ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
