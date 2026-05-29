"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { id: 1, image: "/galleryimg-16.jpeg" },
  { id: 2, image: "/galleryimg-5.jpeg" },
  { id: 3, image: "/galleryimg-21.jpeg" },
  { id: 4, image: "/galleryimg-7.jpeg" },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [busDirection, setBusDirection] = useState<"slide-right" | "slide-left">("slide-right");
  const intervalLeftRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRightRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  };

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Bus animation: mirrors the reference code exactly
  // to_left fires every 10s, to_right fires every 20s
  useEffect(() => {
    intervalLeftRef.current = setInterval(() => {
      setBusDirection("slide-left");
    }, 10000);

    intervalRightRef.current = setInterval(() => {
      setBusDirection("slide-right");
    }, 20000);

    return () => {
      if (intervalLeftRef.current) clearInterval(intervalLeftRef.current);
      if (intervalRightRef.current) clearInterval(intervalRightRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(110vw); }
        }
        @keyframes slideInLeft {
          0%   { transform: translateX(110vw); }
          100% { transform: translateX(-120%); }
        }
        .bus-slide-right {
          animation: slideInRight 8s linear forwards;
        }
        .bus-slide-left {
          animation: slideInLeft 8s linear forwards;
        }
      `}</style>

      <section className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[520px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Bus animation layer — sits above slides, below controls */}
        <div
          className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
          style={{ height: "80px" }}
        >
          <div
            key={busDirection} // remount on direction change to restart animation
            className={busDirection === "slide-right" ? "bus-slide-right" : "bus-slide-left"}
            style={{ display: "inline-block", position: "absolute", bottom: "8px" }}
          >
            <Image
              src="/school-bus.png"
              alt="School bus"
              width={180}
              height={90}
              style={{
                display: "block",
                transform: busDirection === "slide-right" ? "scaleX(-1)" : "scaleX(1)",
              }}
            />
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#FDB813" : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-6 right-6 md:right-10 z-30 text-white/70 font-['Nunito'] text-[13px] font-semibold">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </section>
    </>
  );
}