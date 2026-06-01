"use client";

import { useState, useRef } from "react";

export default function AboutAimMission() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const missionPillars = [
    {
      title: "Holistic Development",
      description:
        "Our programs go beyond academics, focusing on the emotional, social, and ethical growth of every child. We connect children to the community, nature, and global values, shaping them into compassionate, responsible citizens.",
      bg: "#fff3eb",
      titleColor: "var(--color-primary)",
      textColor: "var(--color-body)",
      border: "var(--color-primary)",
    },
    {
      title: "Positive Relationships",
      description:
        "We place families at the heart of everything we do, tailoring our approach to individual needs, fostering self-discovery, and helping children develop a strong sense of identity, belonging, and purpose.",
      bg: "#f3eeff",
      titleColor: "var(--color-secondary)",
      textColor: "var(--color-body)",
      border: "var(--color-secondary)",
    },
    {
      title: "Value-Based Learning",
      description:
        "Children learn best through play, and we integrate play-based methods to spark curiosity, creativity, and a lifelong love for learning — building confidence and courage every single day.",
      bg: "#e8f8f0",
      titleColor: "var(--color-accent-green)",
      textColor: "var(--color-body)",
      border: "var(--color-accent-green)",
    },
    {
      title: "Global Citizens",
      description:
        "We cultivate critical thinking and innovation by engaging children in problem-solving activities that develop cognitive and emotional skills, preparing them for the challenges and opportunities of tomorrow.",
      bg: "#e8f6fa",
      titleColor: "var(--color-accent-teal)",
      textColor: "var(--color-body)",
      border: "var(--color-accent-teal)",
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
        setActiveIndex((prev) => Math.min(prev + 1, missionPillars.length - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
      <section className="relative py-8 md:py-5 bg-[#FCFAEF]"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/40 z-0 pointer-events-none" />
      {/* Floating Emojis */}
      <div className="absolute left-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2
            className="font-black text-4xl md:text-5xl font-['Baloo_2'] mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Our Mission
          </h2>
          <p
            className="text-base md:text-[17px] font-['Nunito'] max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-body)" }}
          >
            Empowering Young Minds for a Bright Future
            <br />
            At Small Wonders, we are committed to providing a nurturing and holistic learning environment
            that brings out the best in every child. Our mission is to empower children with the confidence,
            creativity, and compassion they need to become future-ready individuals.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        {/* Pillars subheading */}
        <div className="text-center mb-10">
          <h2
            className="font-black text-4xl md:text-5xl font-['Baloo_2']"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Pillars of Excellence
          </h2>
        </div>

        {/* ── MOBILE: Carousel ── */}
      {/* ── MOBILE: One Card Carousel ── */}
<div className="block sm:hidden w-full overflow-hidden">
  <div
    className="relative w-full"
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  >
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * 100}%)`,
      }}
    >
      {missionPillars.map((item, idx) => (
        <div
          key={idx}
          className="w-full flex-shrink-0 px-5"
        >
          <div
            className="flex flex-col p-6 shadow-md border-t-4"
            style={{
              backgroundColor: item.bg,
              borderRadius: "32px",
              minHeight: "320px",
              borderTopColor: item.border,
            }}
          >
            <h4
              className="font-black text-2xl font-['Baloo_2'] leading-snug mb-4 text-center"
              style={{ color: item.titleColor }}
            >
              {item.title}
            </h4>

            <p
              className="text-base font-['Nunito'] leading-relaxed text-center"
              style={{ color: item.textColor }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Left Arrow */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === 0 ? missionPillars.length - 1 : prev - 1
        )
      }
      className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === missionPillars.length - 1 ? 0 : prev + 1
        )
      }
      className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 mt-4">
    {missionPillars.map((_, i) => (
      <button
        key={i}
        onClick={() => setActiveIndex(i)}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          activeIndex === i ? "scale-125" : "opacity-30"
        }`}
        style={{
          backgroundColor: missionPillars[i].border,
        }}
      />
    ))}
  </div>
</div>

        {/* ── TABLET: Horizontal scroll, 2 visible, scroll reveals next ── */}
<div className="hidden sm:block lg:hidden">
  <div className="relative">
    {/* Left Arrow */}
    <button
      onClick={() => {
        const el = document.getElementById("pillars-scroll");
        if (el) el.scrollBy({ left: -el.offsetWidth / 2, behavior: "smooth" });
      }}
      aria-label="Scroll left"
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    {/* Scrollable track */}
    <div
      id="pillars-scroll"
      className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4"
      style={{ scrollbarWidth: "none" }}
    >
      {missionPillars.map((item, idx) => (
        <div
          key={idx}
          className="snap-start flex-shrink-0"
          style={{ width: "calc(50% - 12px)" }}
        >
          <div
            className="flex flex-col p-7 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default border-t-4"
            style={{
              backgroundColor: item.bg,
              borderRadius: "32px",
              minHeight: "380px",
              borderTopColor: item.border,
            }}
          >
            <h4
              className="font-black text-xl md:text-2xl font-['Baloo_2'] leading-snug mb-4 text-center"
              style={{ color: item.titleColor }}
            >
              {item.title}
            </h4>
            <p
              className="text-sm md:text-base font-['Nunito'] leading-relaxed text-center"
              style={{ color: item.textColor }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => {
        const el = document.getElementById("pillars-scroll");
        if (el) el.scrollBy({ left: el.offsetWidth / 2, behavior: "smooth" });
      }}
      aria-label="Scroll right"
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</div>

      </div>
    </section>
  );
}