"use client";

import { useState, useEffect, useRef } from "react";
import { X, Play, Sun, BookOpen, Utensils, Palette, Music, TreePine, Monitor, Star, Moon } from "lucide-react";

const schedule = [
  { time: "7:30 AM", activity: "Arrival & Morning Welcome", desc: "Children arrive, greet teachers and settle in with free play.", icon: <Sun size={26} />, iconSm: <Sun size={14} />, color: "#f5a623" },
  { time: "8:00 AM", activity: "Circle Time", desc: "Songs, rhymes, calendar, weather and sharing circle.", icon: <Star size={26} />, iconSm: <Star size={14} />, color: "#e05c5c" },
  { time: "8:30 AM", activity: "Snack & Nutrition Break", desc: "Healthy snacks, hygiene habits and social dining skills.", icon: <Utensils size={26} />, iconSm: <Utensils size={14} />, color: "#5cb85c" },
  { time: "9:30 AM", activity: "Structured Learning", desc: "Age-appropriate lessons in language, numbers and concepts.", icon: <BookOpen size={26} />, iconSm: <BookOpen size={14} />, color: "#00acc1" },
  { time: "10:00 AM", activity: "Art & Creative Play", desc: "Drawing, painting, craft and imaginative free expression.", icon: <Palette size={26} />, iconSm: <Palette size={14} />, color: "#7e57c2" },
  { time: "10:45 AM", activity: "Music & Movement", desc: "Dance, rhythm, action songs and musical instruments.", icon: <Music size={26} />, iconSm: <Music size={14} />, color: "#f5a623" },
  { time: "11:15 AM", activity: "Outdoor & Nature Play", desc: "Physical activity, garden exploration and sensory play.", icon: <TreePine size={26} />, iconSm: <TreePine size={14} />, color: "#5cb85c" },
  { time: "12:00 PM", activity: "Computer & STEM", desc: "Age-appropriate digital learning and problem solving.", icon: <Monitor size={26} />, iconSm: <Monitor size={14} />, color: "#00acc1" },
  { time: "12:30 PM", activity: "Rest & Story Time", desc: "Relaxation, guided imagery and bedtime story reading.", icon: <Moon size={26} />, iconSm: <Moon size={14} />, color: "#7b5ea7" },
];

export default function ProgramsDaySchedule() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => {
            let width = 0;
            const lineInterval = setInterval(() => {
              width += 1;
              setLineWidth(Math.min(width, 100));
              if (width >= 100) clearInterval(lineInterval);
            }, 20);
            schedule.forEach((_, i) => {
              setTimeout(() => setVisibleCount(i + 1), 600 + i * 350);
            });
          }, 200);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full pt-16 pb-8 md:py-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/graphics_and_icons/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/45 z-0 pointer-events-none" />
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0) translateY(20px); opacity: 0; }
          70%  { transform: scale(1.1) translateY(-2px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes expandCard {
          0%   { transform: scaleY(0) translateY(-10px); opacity: 0; }
          100% { transform: scaleY(1) translateY(0);     opacity: 1; }
        }
        .icon-pop   { animation: popIn 0.9s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; }
        .icon-float { animation: floatIcon 4s ease-in-out infinite; }
        .card-expand {
          animation: expandCard 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
          transform-origin: top center;
        }
      `}</style>

      {/* Floating shapes */}
      <div className="absolute left-[3%] top-[20%] w-16 h-16 z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/graphics_and_icons/slider_shape01.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/graphics_and_icons/slider_shape03.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Video Popup */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 rounded-[24px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>
            <video src="/school-day.mp4" controls autoPlay className="w-full aspect-video object-cover" />
          </div>
        </div>
      )}

      <div className="container-custom relative z-10">

        {/* TOP: heading + text + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-2 md:mb-10 lg:mb-20">
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest uppercase font-['Nunito'] mb-3 block" style={{ color: "var(--color-secondary)" }}>
              — EVERY DAY IS AN ADVENTURE
            </span>
            <h2 className="font-black text-3xl md:text-5xl font-['Baloo_2'] leading-tight mb-6" style={{ color: "var(--color-dark)" }}>
              A Day at <span style={{ color: "var(--color-primary)" }}>Small Wonders</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6 mx-auto lg:mx-0" style={{ backgroundColor: "var(--color-primary)" }} />
            <p className="text-base md:text-lg leading-relaxed font-['Nunito'] mb-4" style={{ color: "var(--color-body)" }}>
              Every day at Small Wonders is thoughtfully structured to balance learning, play, creativity
              and rest — nurturing cognitive, motor, language and socio-emotional development at every child's own pace.
            </p>
            <p className="text-base leading-relaxed font-['Nunito']" style={{ color: "var(--color-body)" }}>
              <span className="font-extrabold" style={{ color: "var(--color-dark)" }}>A Joyous Commencement: </span>
              Our meticulously tailored curriculum emphasizes executive functional skills that empower children
              to learn, play and engage within a delightful, play-centred setting.
            </p>
          </div>

          {/* Video blob — hidden on mobile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative cursor-pointer group" onClick={() => setVideoOpen(true)}>
              <div
                className="relative overflow-hidden shadow-2xl w-full max-w-[460px] aspect-[4/3]"
                style={{ borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%", border: "6px solid white" }}
              >
                <video src="/school-day.mp4" className="w-full h-full object-cover" muted playsInline />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Play size={28} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full" style={{ backgroundColor: "var(--color-accent-teal)" }} />
              <div className="absolute top-[40%] -left-4 w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-secondary)" }} />
            </div>
          </div>
        </div>

        {/* ── HORIZONTAL TRAIL — tablet and desktop only ── */}
        <div ref={sectionRef} className="relative px-4 hidden md:block">

          {/* Dotted line — mobile: top 18px, desktop: top 27px */}
          <div
            className="absolute left-0 right-0 overflow-hidden rounded-full lg:hidden"
            style={{ top: "18px", height: "2px" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${lineWidth}%`,
                background: `repeating-linear-gradient(90deg, #d0c8e8 0px, #d0c8e8 6px, transparent 6px, transparent 11px)`,
                transition: "width 0.05s linear",
              }}
            />
          </div>
          <div
            className="absolute left-0 right-0 overflow-hidden rounded-full hidden lg:block"
            style={{ top: "27px", height: "3px" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${lineWidth}%`,
                background: `repeating-linear-gradient(90deg, #d0c8e8 0px, #d0c8e8 10px, transparent 10px, transparent 18px)`,
                transition: "width 0.05s linear",
              }}
            />
          </div>

          {/* 9-column icon grid */}
          <div className="grid grid-cols-9">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 cursor-pointer"
                style={{ opacity: visibleCount > idx ? 1 : 0 }}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                {/* Icon circle */}
                <div
                  className={`
                    relative z-10 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0
                    w-9 h-9 lg:w-14 lg:h-14
                    ${visibleCount > idx ? "icon-pop" : ""}
                    ${visibleCount > idx && activeIdx !== idx ? "icon-float" : ""}
                  `}
                  style={{
                    backgroundColor: item.color,
                    animationDelay: activeIdx !== idx ? `${idx * 0.3}s` : "0s",
                    outline: activeIdx === idx ? `2px solid ${item.color}` : "none",
                    outlineOffset: "2px",
                    transform: activeIdx === idx ? "scale(1.15)" : undefined,
                    transition: "transform 0.2s, outline 0.2s",
                  }}
                >
                  <span className="lg:hidden">{item.iconSm}</span>
                  <span className="hidden lg:block">{item.icon}</span>
                </div>

                {/* Time */}
                <span
                  className="font-black font-['Nunito'] tracking-wide text-center leading-none
                    text-[6px] md:text-[8px] lg:text-[10px]"
                  style={{
                    color: item.color,
                    opacity: visibleCount > idx ? 1 : 0,
                    transition: `opacity 0.3s ${idx * 0.18 + 0.3}s`,
                  }}
                >
                  {item.time}
                </span>

                {/* Activity label */}
                <span
                  className="font-extrabold font-['Baloo_2'] text-center leading-tight
                    text-[5.5px] md:text-[9px] lg:text-[11px]
                    max-w-[34px] md:max-w-[60px] lg:max-w-[80px]"
                  style={{
                    color: "var(--color-dark)",
                    opacity: visibleCount > idx ? 1 : 0,
                    transition: `opacity 0.3s ${idx * 0.18 + 0.4}s`,
                  }}
                >
                  {item.activity}
                </span>
              </div>
            ))}
          </div>

          {/* Expanded detail card on tap/click */}
          {activeIdx !== null && (
            <div
              key={activeIdx}
              className="card-expand mt-6 mx-auto max-w-sm rounded-[24px] p-6 shadow-2xl text-center"
              style={{ backgroundColor: schedule[activeIdx].color }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 text-white">
                {schedule[activeIdx].icon}
              </div>
              <h4 className="font-black text-lg font-['Baloo_2'] text-white mb-2">
                {schedule[activeIdx].activity}
              </h4>
              <p className="text-sm font-['Nunito'] text-white/90 leading-relaxed mb-3">
                {schedule[activeIdx].desc}
              </p>
              <span className="inline-block text-xs font-bold bg-white/25 rounded-full px-4 py-1 font-['Nunito'] text-white">
                {schedule[activeIdx].time}
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}