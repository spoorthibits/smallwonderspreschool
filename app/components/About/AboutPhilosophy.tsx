"use client";

import React from "react";

interface PhilosophyItem {
  title: string;
  icon: React.ReactNode;
}

export default function AboutPhilosophy() {
  const items: PhilosophyItem[] = [
    {
      title: "Nurture\nIndividuality",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
          {/* Hand Supporting */}
          <path d="M12 42 C12 42, 16 38, 22 38 H38 C42 38, 48 40, 52 43 C54 45, 54 48, 48 50 C42 52, 30 52, 22 49 L14 44" />
          <path d="M18 42 C20 46, 26 48, 34 48 C42 48, 46 45, 48 42" strokeWidth="2" />
          {/* Thumb */}
          <path d="M20 38 C22 32, 26 30, 28 32 C30 34, 26 38, 24 38" />
          {/* Sprout Stem */}
          <path d="M32 38 V21" />
          {/* Leaves */}
          <path d="M32 29 C26 28, 24 22, 28 18 C32 18, 32 25, 32 29 Z" fill="none" />
          <path d="M32 25 C38 24, 40 18, 36 14 C32 14, 32 21, 32 25 Z" fill="none" />
          {/* Little top bud leaf */}
          <path d="M32 21 C30 19, 30 16, 32 14 C34 16, 34 19, 32 21 Z" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Encourage\nCuriosity",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
          {/* Lightbulb outline */}
          <path d="M32 12 C21 12, 19 20, 19 30 C19 36, 22 40, 25 44 C26 46, 26 48, 26 50 H38 C38 48, 38 46, 39 44 C42 40, 45 36, 45 30 C45 20, 43 12, 32 12 Z" />
          {/* Question mark inside bulb */}
          <path d="M29 23 C29 19.5, 35 19.5, 35 23 C 35 26, 32 27, 32 30 V32" />
          <circle cx="32" cy="36" r="1.5" fill="currentColor" stroke="none" />
          {/* Bulb base */}
          <path d="M26 50 H38" />
          <path d="M27 54 H37" />
          <path d="M29 58 C29 60, 35 60, 35 58 Z" />
          {/* Rays */}
          <path d="M32 4 V7" />
          <path d="M12 30 H15" />
          <path d="M52 30 H49" />
          <path d="M18 16 L20 18" />
          <path d="M46 16 L44 18" />
        </svg>
      ),
    },
    {
      title: "Build\nConfidence",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
          {/* Head */}
          <circle cx="32" cy="15" r="5" />
          {/* Body outline shape - cookie cutter style kid */}
          <path d="M24 48 L27 33 C22 30, 17 24, 17 18 C17 15, 20 15, 22 18 L29 27 V23 C29 21, 35 21, 35 23 V27 L42 18 C44 15, 47 15, 47 18 C47 24, 42 30, 37 33 L40 48 Z" />
          {/* Sparkles / motion lines */}
          <path d="M10 24 L13 26 M8 32 H12 M10 40 L13 38" />
          <path d="M54 24 L51 26 M56 32 H52 M54 40 L51 38" />
        </svg>
      ),
    },
    {
      title: "Inculcate\nValues",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
          {/* Shield */}
          <path d="M32 7 C 38 7, 48 5, 48 5 C 48 5, 50 25, 44 39 C 39 49, 32 55, 32 55 C 32 55, 25 49, 20 39 C 14 25, 16 5, 16 5 C 16 5, 26 7, 32 7 Z" />
          {/* Heart */}
          <path d="M32 37 C 32 37, 25 31, 25 25 C 25 20, 28 17.5, 30.5 20 L 32 21.5 L 33.5 20 C 36 17.5, 39 20, 39 25 C 39 31, 32 37, 32 37 Z" />
          {/* Checkmark inside heart */}
          <path d="M29 25.5 L 31.5 28 L 35.5 22.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pb-10 md:pb-14 relative overflow-hidden">
      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[30%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom">
        <div className="bg-gradient-to-br from-[#4b2ca0] to-[#30166b] rounded-[35px] p-6 sm:p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
          
          {/* Faint Decorative Hand-Drawn Background Doodles */}
          <svg className="absolute left-[38%] top-[-10%] w-48 h-48 opacity-[0.06] pointer-events-none z-0 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Cloud & Stars */}
            <path d="M20 50 Q30 35 45 42 Q60 30 70 48 Q85 52 75 68 H25 Q15 62 20 50 Z" strokeLinecap="round" />
            <path d="M15 25 L17 28 L20 29 L17 30 L15 33 L13 30 L10 29 L13 28 Z" fill="currentColor" />
            <path d="M85 30 L86 32 L89 33 L86 34 L85 37 L84 34 L81 33 L84 32 Z" fill="currentColor" />
          </svg>

          <svg className="absolute right-[5%] bottom-[-5%] w-72 h-44 opacity-[0.06] pointer-events-none z-0 text-white hidden md:block" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Flower Doodle */}
            <path d="M150 70 C140 60, 135 75, 142 82 C135 90, 150 95, 155 86 C165 92, 168 78, 160 74 C165 62, 150 58, 150 70 Z" strokeLinecap="round" />
            <path d="M152 79 A 3 3 0 1 0 153 79" strokeWidth="3" />
            <path d="M152 86 C150 95, 145 105, 140 110" strokeLinecap="round" strokeDasharray="3 3" />
            
            {/* Little Star sparkles */}
            <path d="M30 40 L32 43 L35 44 L32 45 L30 48 L28 45 L25 44 L28 43 Z" fill="currentColor" />
            <path d="M80 80 L81 82 L84 83 L81 84 L80 87 L79 84 L76 83 L79 82 Z" fill="currentColor" />
            
            {/* Pencil Doodle */}
            <path d="M40 25 L85 70 L75 80 L30 35 Z" />
            <path d="M30 35 L25 45 L40 25" />
            <path d="M25 45 L22 48 L26 46 Z" fill="currentColor" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* LEFT: Philosophy Statement */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left pr-4 animate-fade-in-left relative">
              {/* Decorative Quotes in Background */}
              <span className="absolute -left-6 top-[-10px] text-[150px] font-bold text-white/[0.08] font-serif select-none pointer-events-none leading-none z-0">
                “
              </span>
              <span className="absolute right-4 bottom-[-40px] text-[150px] font-bold text-white/[0.08] font-serif select-none pointer-events-none leading-none z-0">
                ”
              </span>
              
              <h3 className="text-white font-extrabold text-3xl md:text-[38px] font-['Baloo_2'] mb-4 relative inline-block z-10">
                Our Philosophy
                <div className="w-14 h-1 bg-[#FDB813] mt-2 rounded-full" />
              </h3>
              <p className="text-white/95 text-[16px] md:text-[18px] leading-relaxed font-['Nunito'] mt-4 z-10 relative">
                We believe every child is born with inherent talent and potential.
                Our role is to provide the right environment and opportunities to help them shine.
              </p>
            </div>

            {/* RIGHT: Horizontal Row of 4 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch animate-fade-in-right">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 cursor-default justify-between group min-h-[140px] sm:h-auto"
                >
                  <div className="text-[#FDB813] transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-[6deg] mb-3 flex items-center justify-center flex-grow">
                    {item.icon}
                  </div>
                  <h4 className="!text-white font-bold text-xs sm:text-sm md:text-base leading-snug font-['Baloo_2'] group-hover:text-[#FDB813] transition-colors duration-300 whitespace-pre-line">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
