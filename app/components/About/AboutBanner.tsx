"use client";

import Image from "next/image";

export default function AboutBanner() {
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
          50%       { transform: translateY(-8px) rotate(15deg); }
        }

        .path-mask-anim {
          stroke-dasharray: 350;
          stroke-dashoffset: 350;
          animation: drawPath 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .airplane-anim {
          offset-path: path('M 160 100 Q 90 30 10 80');
          offset-rotate: auto;
          animation: flyAirplane 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .star-pulse { animation: pulseStar 3s ease-in-out infinite; }
        .star-float { animation: floatStar 4s ease-in-out infinite; }
      `}</style>

      {/* ── MOBILE ONLY: full-width banner image ── */}
      <div className="block lg:hidden w-full">
        <Image
          src="/graphics_and_icons/aboutmobile.png"
          alt="About us banner"
          width={800}
          height={500}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ── DESKTOP (lg+): original layout ── */}
      <div className="hidden lg:block">

        {/* Absolute full-bleed image on the right half */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/real_school/kids-music-activity.png"
            alt="About Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* container-custom holds only the left content */}
        <div className="container-custom relative">
          <div className="grid grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="relative overflow-visible pr-2 text-left py-28">

              {/* 1. Pink Outline Star */}
              <div
                className="absolute top-[30px] right-[40px] w-14 h-14 text-[#FF7096] star-float z-10 pointer-events-none"
                style={{ animationDelay: "0.5s" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 2. Flight Path + Paper Airplane */}
              <div className="absolute top-[50px] right-[-55px] w-[180px] h-[180px] z-20 pointer-events-none overflow-visible">
                <svg viewBox="0 0 180 140" className="w-full h-full overflow-visible">
                  <defs>
                    <mask id="airplane-path-mask">
                      <path d="M 160 100 Q 90 30 10 80" fill="none" stroke="white" strokeWidth="6" className="path-mask-anim" />
                    </mask>
                  </defs>
                  <path d="M 160 100 Q 90 30 10 80" fill="none" stroke="#E06820" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6,6" mask="url(#airplane-path-mask)" />
                  <g className="airplane-anim">
                    <path d="M 12 0 L -8 -8 L -3 0 L -8 8 Z" fill="none" stroke="#E06820" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                    <line x1="-3" y1="0" x2="10" y2="0" stroke="#E06820" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="-8" y1="8" x2="-3" y2="3" stroke="#E06820" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {/* 3. Yellow Solid Star */}
              <div className="absolute bottom-[90px] right-[80px] w-5 h-5 text-[#FDB813] fill-[#FDB813] star-float z-10 pointer-events-none" style={{ animationDelay: "1s" }}>
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* Desktop heading */}
              <h2 className="text-[#2E2E2E] font-bold leading-none text-[18px] font-['Baloo_2']">
                Get to know us better!
              </h2>
              <h1 className="text-[#E06820] font-extrabold leading-none text-[108px] mt-1 font-['Baloo_2']">
                About Us
              </h1>

              {/* Decorative line */}
              <div className="flex items-center gap-2 mt-4 mb-5 justify-start">
                <div className="w-39 h-1.5 rounded-full bg-[#E06820]" />
              </div>

              <p className="text-black text-[18px] leading-[1.9] font-['Nunito'] max-w-[560px]">
                A glimpse of joyful moments, exciting activities and beautiful memories created every single day — where little ones learn, laugh, and grow together. Because every little moment is a memory worth keeping forever.
              </p>
            </div>

            {/* RIGHT: empty column — image is absolutely positioned behind */}
            <div />

          </div>
        </div>
      </div>

    </section>
  );
}