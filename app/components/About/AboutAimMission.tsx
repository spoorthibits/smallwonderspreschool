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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((prev) =>
          Math.min(prev + 1, missionPillars.length - 1)
        );
      } else {
        setActiveIndex((prev) =>
          Math.max(prev - 1, 0)
        );
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative py-10 md:py-16 bg-[#FCFAEF] overflow-hidden"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/40 z-0" />

      {/* Floating Decorations */}
      <div className="absolute left-[3%] top-[35%] w-16 h-16 hidden lg:block z-10">
        <img
          src="/slider_shape01.png"
          alt="Sun"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 hidden lg:block z-10">
        <img
          src="/slider_shape03.png"
          alt="Balloon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6 lg:px-8">
        {/* Mission Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="font-black text-4xl md:text-5xl mb-4 font-['Baloo_2']"
            style={{ color: "var(--color-primary)" }}
          >
            Our Mission
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed font-['Nunito']"
            style={{ color: "var(--color-body)" }}
          >
            Empowering Young Minds for a Bright Future
            <br />
            At Small Wonders, we are committed to providing a nurturing and
            holistic learning environment that brings out the best in every
            child. Our mission is to empower children with the confidence,
            creativity, and compassion they need to become future-ready
            individuals.
          </p>

          <div className="flex justify-center mt-6 mb-10">
            <div
              className="w-24 h-1 rounded-full"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            />
          </div>

          <h2
            className="font-black text-4xl md:text-5xl mb-10 font-['Baloo_2']"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Pillars of Excellence
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div
            className="relative overflow-hidden"
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
                <div key={idx} className="min-w-full px-4">
                  <div
                    className="p-8 shadow-lg border-t-4 min-h-[360px] flex flex-col justify-center"
                    style={{
                      backgroundColor: item.bg,
                      borderTopColor: item.border,
                      borderRadius: "28px",
                    }}
                  >
                    <h4
                      className="text-2xl font-black text-center mb-4 font-['Baloo_2']"
                      style={{ color: item.titleColor }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-base text-center leading-relaxed font-['Nunito']"
                      style={{ color: item.textColor }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setActiveIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={activeIndex === 0}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  Math.min(prev + 1, missionPillars.length - 1)
                )
              }
              disabled={activeIndex === missionPillars.length - 1}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {missionPillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "scale-125"
                  : "opacity-40"
                  }`}
                style={{
                  backgroundColor:
                    missionPillars[index].border,
                }}
              />
            ))}
          </div>
        </div>

        {/* Tablet & Desktop */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {missionPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 min-h-[300px] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4"
              style={{
                backgroundColor: item.bg,
                borderTopColor: item.border,
                borderRadius: "32px",
              }}
            >
              <h4
                className="text-2xl font-black text-center mb-5 font-['Baloo_2']"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </h4>

              <p
                className="text-base leading-relaxed text-center font-['Nunito']"
                style={{ color: item.textColor }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}