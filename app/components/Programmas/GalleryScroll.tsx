"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const images = [
  { src: "/individual_kids/galleryimg-9.jpeg", alt: "Children playing" },
  { src: "/classrooms/galleryimg-17.jpeg", alt: "Art activity" },
  { src: "/classrooms/galleryimg-6.jpeg", alt: "Story time" },
  { src: "/classrooms/galleryimg-4.jpeg", alt: "Outdoor play" },
  { src: "/real_school/galleryimg-5-cropped.jpeg", alt: "Music class" },
  { src: "/classrooms/galleryimg-6.jpeg", alt: "Science activity" },
  { src: "/classrooms/galleryimg-7.jpeg", alt: "Dance class" },
  { src: "/individual_kids/galleryimg-8.jpeg", alt: "Group activity" },
  { src: "/individual_kids/galleryimg-9.jpeg", alt: "Lunch time" },
  { src: "/individual_kids/galleryimg-10.jpeg", alt: "Celebration" },
];

export default function GalleryScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      pos += speed;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(step); };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const allImages = [...images, ...images];

  return (
    <section className="w-full bg-white py-10 md:py-14" style={{ minHeight: "220px" }}>
      {/* Scrolling track wrapper — explicit height prevents collapse */}
      <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform absolute top-0 left-0"
          style={{ width: "max-content" }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: "260px", height: "200px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}