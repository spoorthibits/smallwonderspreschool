"use client";

import Image from "next/image";

export default function GalleryBanner() {
  return (
    <section className="w-full bg-[#fdf9f3] relative overflow-visible">
      <style jsx global>{`
        @keyframes drawPath {
          from { stroke-dashoffset: 350; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes flyAirplane {
          0%   { offset-distance: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 1; }
        }
        @keyframes pulseStar {
          0%, 100% { transform: scale(1);    opacity: 0.8; }
          50%       { transform: scale(1.15); opacity: 1;   }
        }
        @keyframes floatStar {
          0%, 100% { transform: translateY(0)   rotate(0deg);  }
          50%       { transform: translateY(-6px) rotate(10deg); }
        }

        .path-mask-anim {
          stroke-dasharray: 350;
          stroke-dashoffset: 350;
          animation: drawPath 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .airplane-anim {
          offset-path: path('M 140 80 Q 80 20 10 60');
          offset-rotate: auto;
          animation: flyAirplane 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .star-pulse { animation: pulseStar 3s ease-in-out infinite; }
        .star-float { animation: floatStar 4s ease-in-out infinite; }
      `}</style>

      {/* ── MOBILE ONLY: full-width banner image ── */}
      <div className="block lg:hidden w-full">
        <Image
          src="/programsmobile.png"
          alt="Programmes banner"
          width={800}
          height={500}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ── DESKTOP GRID (lg+) ── */}
      <div className="hidden lg:grid grid-cols-2 items-stretch">

        {/* LEFT CONTENT */}
        <div
          className="relative overflow-visible py-25 text-left"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))",
            paddingRight: "2rem",
          }}
        >

          {/* 1. Pink Outline Star — top left area, subtle */}
          <div
            className="absolute top-[20px] left-[60%] w-8 h-8 text-[#FF7096] star-float z-10 pointer-events-none"
            style={{ animationDelay: "0.5s" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          {/* 2. Flight Path + Paper Airplane */}
          <div className="absolute top-[10px] right-[10px] w-[130px] h-[100px] z-20 pointer-events-none overflow-visible">
            <svg viewBox="0 0 160 110" className="w-full h-full overflow-visible">
              <defs>
                <mask id="airplane-path-mask">
                  <path
                    d="M 140 80 Q 80 20 10 60"
                    fill="none"
                    stroke="white"
                    strokeWidth="6"
                    className="path-mask-anim"
                  />
                </mask>
              </defs>
              <path
                d="M 140 80 Q 80 20 10 60"
                fill="none"
                stroke="#E06820"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5,5"
                mask="url(#airplane-path-mask)"
              />
              <g className="airplane-anim"
                style={{ offsetPath: "path('M 140 80 Q 80 20 10 60')" }}
              >
                <path
                  d="M 12 0 L -8 -8 L -3 0 L -8 8 Z"
                  fill="none"
                  stroke="#E06820"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <line x1="-3" y1="0" x2="10" y2="0"
                  stroke="#E06820" strokeWidth="1.5" strokeLinecap="round"
                />
                <line x1="-8" y1="8" x2="-3" y2="3"
                  stroke="#E06820" strokeWidth="1.5" strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          {/* 3. Yellow Solid Star */}
          <div
            className="absolute bottom-[60px] right-[100px] w-4 h-4 text-[#FDB813] fill-[#FDB813] star-float z-10 pointer-events-none"
            style={{ animationDelay: "1s" }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FDB813">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          {/* 4. Green Solid Star */}
          <div
            className="absolute bottom-[140px] left-[55%] w-5 h-5 star-float z-10 pointer-events-none"
            style={{ animationDelay: "1.5s" }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="#4CAF50">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          {/* TEXT CONTENT — desktop only */}
          <h2 className="text-[#2E2E2E] font-extrabold leading-none text-[52px] font-['Baloo_2']">
            Our
          </h2>
          <h1 className="text-[#E06820] font-extrabold leading-none text-[90px] lg:text-[105px] mt-1 font-['Baloo_2']">
            Programmes
          </h1>

          {/* Decorative line */}
          <div className="flex items-center gap-2 mt-3 mb-4 justify-start">
            <div className="w-32 h-1.5 rounded-full bg-[#E06820]" />
          </div>

          <p className="text-black text-[17px] leading-[1.85] font-['Nunito'] max-w-[520px]">
            Age-appropriate programmes designed to nurture curiosity, creativity and confidence.
            Every activity encourages joyful learning through play and exploration.
            Helping little minds grow, discover and shine every single day.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[500px]">
          {/* Wave blend on left edge */}
          <div className="absolute left-0 top-0 h-full w-[1px] z-10 pointer-events-none">
            <svg viewBox="0 0 70 300" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 0 Q55 150 0 300 L0 0Z" fill="var(--color-offwhite)" />
            </svg>
          </div>

          <Image
            src="/bannerprogram-2.png"
            alt="Children learning together"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% center" }}
          />
        </div>

      </div>
    </section>
  );
}