"use client";

import { School, Sparkles, Heart, Gamepad2, Bus, Users, Utensils } from "lucide-react";

interface SpecialItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  bg: string;
}

export default function AboutSpecial() {
  const items: SpecialItem[] = [
    { id: 1, title: "Colorful & Safe Classrooms", icon: <School size={42} strokeWidth={1.5} />, bg: "#5cb85c" },
    { id: 2, title: "Strong Parent Partnership", icon: <Users size={42} strokeWidth={1.5} />, bg: "#e05c5c" },
    { id: 3, title: "Play-Based Curriculum", icon: <Gamepad2 size={42} strokeWidth={1.5} />, bg: "#7e57c2" },
    { id: 4, title: "Experienced & Caring Teachers", icon: <Heart size={42} strokeWidth={1.5} />, bg: "#f5a623" },
    { id: 5, title: "Activity & Learning Zones", icon: <Sparkles size={42} strokeWidth={1.5} />, bg: "#00acc1" },
    { id: 6, title: "Transport Facility Available", icon: <Bus size={42} strokeWidth={1.5} />, bg: "#7b5ea7" },
    { id: 7, title: "Nutritious Meals & Snacks", icon: <Utensils size={42} strokeWidth={1.5} />, bg: "#e8735a" },
  ];

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
      <div className="absolute inset-0 bg-white/38 z-0 pointer-events-none" />


      {/* Floating Emojis */}
      <div className="absolute left-[3%] top-[30%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden lg:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden lg:block">
        <img src="/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
          <h2
            className="font-black text-3xl md:text-5xl font-['Baloo_2'] mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-sm md:text-base font-['Nunito'] mb-4"
            style={{ color: "var(--color-body)" }}
          >
            Where Curiosity Meets Creativity for a Brighter Future!
          </p>
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        {/* ── MOBILE & TABLET: Auto-scroll marquee in one row ── */}
        <div className="block lg:hidden overflow-hidden">
          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 18s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track">
            {[...items, ...items].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 px-5" style={{ minWidth: "120px" }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-extrabold text-sm leading-snug font-['Baloo_2'] max-w-[110px]"
                  style={{ color: "var(--color-dark)" }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: Grid ── */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-8 animate-fade-in-up">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center gap-4 group cursor-pointer">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:scale-105"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
              </div>
              <h3
                className="font-extrabold text-sm md:text-[15px] leading-snug font-['Baloo_2'] max-w-[130px] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-dark)" }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}