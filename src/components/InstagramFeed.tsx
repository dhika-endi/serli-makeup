"use client";

import { useEffect, useRef } from "react";

export default function InstagramFeed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Insert custom element after mount to avoid hydration mismatch
    ref.current.innerHTML = '<behold-widget feed-id="ZXd74NhMGwV4Iof1eyU6"></behold-widget>';

    // Load Behold script once
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      document.head.appendChild(s);
    }
  }, []);

  return <div ref={ref} />;
}
