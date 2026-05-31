"use client";

import { useState, useEffect, useRef } from "react";
import { X, Play, Sun, BookOpen, Utensils, Palette, Music, TreePine, Monitor, Star, Moon } from "lucide-react";

const schedule = [
  { time: "7:30 AM", activity: "Arrival & Morning Welcome", desc: "Children arrive, greet teachers and settle in with free play.", icon: <Sun size={26} />, iconSm: <Sun size={20} />, color: "#f5a623" },
  { time: "8:00 AM", activity: "Circle Time", desc: "Songs, rhymes, calendar, weather and sharing circle.", icon: <Star size={26} />, iconSm: <Star size={20} />, color: "#e05c5c" },
  { time: "8:30 AM", activity: "Snack & Nutrition Break", desc: "Healthy snacks, hygiene habits and social dining skills.", icon: <Utensils size={26} />, iconSm: <Utensils size={20} />, color: "#5cb85c" },
  { time: "9:30 AM", activity: "Structured Learning", desc: "Age-appropriate lessons in language, numbers and concepts.", icon: <BookOpen size={26} />, iconSm: <BookOpen size={20} />, color: "#00acc1" },
  { time: "10:00 AM", activity: "Art & Creative Play", desc: "Drawing, painting, craft and imaginative free expression.", icon: <Palette size={26} />, iconSm: <Palette size={20} />, color: "#7e57c2" },
  { time: "10:45 AM", activity: "Music & Movement", desc: "Dance, rhythm, action songs and musical instruments.", icon: <Music size={26} />, iconSm: <Music size={20} />, color: "#f5a623" },
  { time: "11:15 AM", activity: "Outdoor & Nature Play", desc: "Physical activity, garden exploration and sensory play.", icon: <TreePine size={26} />, iconSm: <TreePine size={20} />, color: "#5cb85c" },
  { time: "12:00 PM", activity: "Computer & STEM", desc: "Age-appropriate digital learning and problem solving.", icon: <Monitor size={26} />, iconSm: <Monitor size={20} />, color: "#00acc1" },
  { time: "12:30 PM", activity: "Rest & Story Time", desc: "Relaxation, guided imagery and bedtime story reading.", icon: <Moon size={26} />, iconSm: <Moon size={20} />, color: "#7b5ea7" },
];

export default function ProgramsDaySchedule() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [mobileVisible, setMobileVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const hasMobileAnimated = useRef(false);

  // Desktop trail animation
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Mobile stagger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasMobileAnimated.current) {
          hasMobileAnimated.current = true;
          setTimeout(() => setMobileVisible(true), 100);
        }
      },
      { threshold: 0.1 }
    );
    if (mobileRef.current) observer.observe(mobileRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full py-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/45 z-0 pointer-events-none" />

      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0) translateY(30px); opacity: 0; }
          70%  { transform: scale(1.1) translateY(-3px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes expandCard {
          0%   { transform: scaleY(0) translateY(-10px); opacity: 0; }
          100% { transform: scaleY(1) translateY(0);     opacity: 1; }
        }
        @keyframes slideInLeft {
          0%   { transform: translateX(-24px); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        @keyframes growLine {
          0%   { height: 0; }
          100% { height: 100%; }
        }
        .icon-pop   { animation: popIn 0.9s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; }
        .icon-float { animation: floatIcon 4s ease-in-out infinite; }
        .card-expand { animation: expandCard 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; transform-origin: top center; }
        .slide-in   { animation: slideInLeft 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; }
        .grow-line  { animation: growLine 2s ease-out forwards; }
      `}</style>

      {/* Floating shapes */}
      <div className="absolute left-[3%] top-[20%] w-16 h-16 z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="" className="w-full h-full object-contain" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase font-['Nunito'] mb-3 block" style={{ color: "var(--color-secondary)" }}>
              — EVERY DAY IS AN ADVENTURE
            </span>
            <h2 className="font-black text-3xl md:text-5xl font-['Baloo_2'] leading-tight mb-6" style={{ color: "var(--color-dark)" }}>
              A Day at <span style={{ color: "var(--color-primary)" }}>Small Wonders</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: "var(--color-primary)" }} />
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

          {/* Video blob */}
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

        {/* ── MOBILE TIMELINE (< md) ── */}
        <div ref={mobileRef} className="block md:hidden">
          <div className="relative pl-10">
            {/* Vertical rail */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[3px] rounded-full overflow-hidden" style={{ backgroundColor: "#e8e0f7" }}>
              <div
                className={`w-full rounded-full ${mobileVisible ? "grow-line" : ""}`}
                style={{ height: mobileVisible ? "100%" : "0%", backgroundColor: "#d0c8e8", transition: "height 2s ease-out" }}
              />
            </div>

            <div className="flex flex-col gap-0">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 pb-7 ${mobileVisible ? "slide-in" : "opacity-0"}`}
                  style={{ animationDelay: mobileVisible ? `${idx * 0.12}s` : "0s" }}
                >
                  {/* Icon dot on rail */}
                  <div
                    className="absolute -left-[26px] w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0 z-10"
                    style={{ backgroundColor: item.color, top: "0px" }}
                  >
                    {item.iconSm}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm px-4 py-3 border-l-4"
                    style={{ borderLeftColor: item.color }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className="font-black text-[13px] font-['Baloo_2'] leading-tight"
                        style={{ color: "var(--color-dark)" }}
                      >
                        {item.activity}
                      </span>
                      <span
                        className="text-[10px] font-bold font-['Nunito'] whitespace-nowrap rounded-full px-2 py-0.5"
                        style={{ color: item.color, backgroundColor: `${item.color}18` }}
                      >
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[12px] font-['Nunito'] leading-relaxed" style={{ color: "var(--color-body)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TABLET GRID (md – lg) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
              style={{ border: `2px solid ${item.color}28` }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              <div className="px-4 pt-4 pb-3 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: item.color }}
                >
                  {item.iconSm}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-black text-[13px] font-['Baloo_2'] leading-tight"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {item.activity}
                  </p>
                  <span
                    className="text-[10px] font-bold font-['Nunito']"
                    style={{ color: item.color }}
                  >
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Expandable desc */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: activeIdx === idx ? "120px" : "0px" }}
              >
                <p
                  className="px-4 pb-4 text-[12px] font-['Nunito'] leading-relaxed"
                  style={{ color: "var(--color-body)" }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: item.color }} />
            </div>
          ))}
        </div>

        {/* ── DESKTOP HORIZONTAL TRAIL (lg+) ── */}
        <div ref={sectionRef} className="relative px-4 hidden lg:block">
          {/* Animated dotted line */}
          <div className="absolute top-[27px] left-0 right-0 h-[3px] overflow-hidden rounded-full" style={{ backgroundColor: "transparent" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${lineWidth}%`,
                background: `repeating-linear-gradient(90deg, #d0c8e8 0px, #d0c8e8 10px, transparent 10px, transparent 18px)`,
                transition: "width 0.05s linear",
              }}
            />
          </div>

          {/* Icons row */}
          <div className="grid grid-cols-9 gap-20">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 cursor-pointer"
                style={{ opacity: visibleCount > idx ? 1 : 0 }}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                <div
                  className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md
                    ${visibleCount > idx ? "icon-pop" : ""}
                    ${visibleCount > idx && activeIdx !== idx ? "icon-float" : ""}
                  `}
                  style={{
                    backgroundColor: item.color,
                    animationDelay: activeIdx !== idx ? `${idx * 0.3}s` : "0s",
                    outline: activeIdx === idx ? `3px solid ${item.color}` : "none",
                    outlineOffset: "3px",
                    transform: activeIdx === idx ? "scale(1.15)" : undefined,
                    transition: "transform 0.2s, outline 0.2s",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[10px] font-black font-['Nunito'] tracking-wide text-center"
                  style={{
                    color: item.color,
                    opacity: visibleCount > idx ? 1 : 0,
                    transition: `opacity 0.3s ${idx * 0.18 + 0.3}s`,
                  }}
                >
                  {item.time}
                </span>
                <span
                  className="text-[11px] font-extrabold font-['Baloo_2'] text-center leading-tight max-w-[80px]"
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

          {/* Expanded detail card */}
          {activeIdx !== null && (
            <div
              key={activeIdx}
              className="card-expand mt-8 mx-auto max-w-sm rounded-[24px] p-6 shadow-2xl text-center"
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