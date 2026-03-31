"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function ProjectsHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const translateY = scrollY * 0.15;
        img.style.transform = `scale(1.2) translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="h-[600px] overflow-hidden">
        <div
          ref={imgRef}
          className="relative h-[600px] scale-[1.2] transition-opacity duration-800"
        >
          <Image
            src="/images/ref/522781e.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
