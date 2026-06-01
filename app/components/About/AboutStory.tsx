"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function AboutStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const leaders = [
    {
      src: "/Director.jpeg",
      alt: "Gayatri Singh - Director",
      name: "Gayatri Singh",
      role: "Director",
      bgColor: "var(--color-primary)",
    },
    {
      src: "/Jagdev-sir.png",
      alt: "Jagdev Singh Chauhan - Founder & Chairman",
      name: "Jagdev Singh Chauhan",
      role: "Founder & Chairman",
      bgColor: "var(--color-secondary)",
    },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left → next
        setActiveIndex((prev) => Math.min(prev + 1, leaders.length - 1));
      } else {
        // swipe right → prev
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <section
      className="relative py-8 md:py-5 bg-[#FCFAEF] overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/40 z-0 pointer-events-none" />
     
      
      {/* Paper airplane arrow */}
      <div className="absolute left-[1%] bottom-[-2%] w-36 h-86 z-10 pointer-events-none hidden md:block">
        <img
          src="/arrowig1.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Our Story Text */}
          <div className="lg:col-span-6 text-left animate-fade-in-left">
            <div className="w-16 h-1 bg-[#4CAF50] rounded-full mb-3" />
            <h2 className="text-[#1a237e] font-black text-3xl md:text-4xl font-['Baloo_2'] mb-4 leading-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-[#3d3d5c] text-sm md:text-base leading-relaxed font-['Nunito']">
              <p>
                Small Wonders International Play School was established with a dream to create a nurturing space
                where children can learn, play and grow happily. Our Founder & Chairman, Jagdev Singh Chauhan,
                envisioned a school that blends strong values with modern teaching to prepare children for life.
              </p>
              <p>
                Today, under the guidance of our Director, Gayatri Singh, we continue this journey with
                passion and commitment. We are dedicated to providing a safe, warm, and rich learning environment
                where every child&apos;s unique talents are recognized and celebrated.
              </p>
            </div>
          </div>

          {/* RIGHT: Leadership Cards */}
          <div className="lg:col-span-6 animate-fade-in-right">

            {/* ── MOBILE: Carousel ── */}
            <div className="block lg:hidden">
              <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Sliding track */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {leaders.map((leader, i) => (
                    <div
                      key={i}
                      className="min-w-full px-4"
                    >
                      <div className="flex flex-col bg-white/80 backdrop-blur-sm shadow-md overflow-hidden mx-auto max-w-[360px]">
                        <div className="aspect-[4/5] relative w-full overflow-hidden bg-zinc-100">
                          <Image
                            src={leader.src}
                            alt={leader.alt}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div
                          className="py-2 px-3 text-center"
                          style={{ backgroundColor: leader.bgColor }}
                        >
                          <h4 className="font-bold text-md font-['Baloo_2'] leading-tight text-white">
                            {leader.name}
                          </h4>
                          <p className="text-white/80 text-[10px] font-semibold font-['Nunito'] mt-0.5">
                            {leader.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {leaders.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-[#1a237e] scale-125"
                          : "bg-[#1a237e]/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Prev / Next arrow buttons */}
                <button
                  onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={activeIndex === 0}
                  aria-label="Previous"
                  className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center disabled:opacity-30 transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => Math.min(prev + 1, leaders.length - 1))}
                  disabled={activeIndex === leaders.length - 1}
                  aria-label="Next"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center disabled:opacity-30 transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── DESKTOP: Side-by-side grid ── */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {leaders.map((leader, i) => (
                <div
                  key={i}
                  className="flex flex-col bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[3/4] relative w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={leader.src}
                      alt={leader.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                    />
                  </div>
                  <div
                    className="py-2 px-3 text-center"
                    style={{ backgroundColor: leader.bgColor }}
                  >
                    <h4 className="font-bold text-md font-['Baloo_2'] leading-tight text-white">
                      {leader.name}
                    </h4>
                    <p className="text-white/80 text-[10px] font-semibold font-['Nunito'] mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}