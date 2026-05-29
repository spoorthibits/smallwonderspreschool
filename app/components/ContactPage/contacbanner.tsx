"use client";

import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="w-full bg-[var(--offwhite-color)] py-8 md:py-12 relative overflow-hidden">
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

      <div className="container-custom relative">
        <div className="bg-[var(--offwhite-color)] rounded-[30px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="relative overflow-visible pr-2 md:pr-4 text-center lg:text-left">

              {/* 1. Pink Outline Star */}
              <div
                className="hidden sm:block absolute top-[-30px] right-[40px] w-10 h-10 md:w-14 md:h-14 text-[#FF7096] star-float z-10 pointer-events-none"
                style={{ animationDelay: "0.5s" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 2. Flight Path + Paper Airplane */}
              <div className="absolute top-[-7px] right-[-50px] lg:right-[-90px] w-[160px] md:w-[190px] h-[140px] md:h-[180px] z-20 pointer-events-none overflow-visible hidden md:block">
                <svg viewBox="0 0 180 140" className="w-full h-full overflow-visible">
                  <defs>
                    <mask id="airplane-path-mask">
                      <path
                        d="M 160 100 Q 90 30 10 80"
                        fill="none"
                        stroke="white"
                        strokeWidth="6"
                        className="path-mask-anim"
                      />
                    </mask>
                  </defs>
                  <path
                    d="M 160 100 Q 90 30 10 80"
                    fill="none"
                    stroke="#E06820"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6,6"
                    mask="url(#airplane-path-mask)"
                  />
                  <g className="airplane-anim">
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
                className="hidden sm:block absolute bottom-[90px] right-[80px] w-4 h-4 md:w-5 md:h-5 text-[#FDB813] fill-[#FDB813] star-float z-10 pointer-events-none"
                style={{ animationDelay: "1s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 4. Green Solid Star */}
              <div
                className="hidden sm:block absolute bottom-[-20px] right-[130px] w-5 h-5 md:w-7 md:h-7 text-[#4CAF50] fill-[#4CAF50] star-float z-10 pointer-events-none"
                style={{ animationDelay: "1.5s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 5. Purple Solid Star */}
              <div
                className="hidden sm:block absolute bottom-[-35px] left-[150px] w-4 h-4 md:w-5 md:h-5 text-[#6B3FA0] fill-[#6B3FA0] star-pulse z-10 pointer-events-none"
                style={{ animationDelay: "2s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* TEXT CONTENT */}
              <h1 className="block md:hidden font-extrabold leading-none whitespace-nowrap font-['Baloo_2'] text-[9vw]">
                <span className="text-[#2E2E2E]">Our Happy </span>
                <span className="text-[#E06820]">Gallery</span>
              </h1>

              <h1 className="hidden md:block lg:hidden font-extrabold leading-none whitespace-nowrap font-['Baloo_2'] text-[7vw]">
                <span className="text-[#2E2E2E]">Our Happy </span>
                <span className="text-[#E06820]">Gallery</span>
              </h1>

              <div className="hidden lg:block">
                <h2 className="text-[#2E2E2E] font-extrabold leading-none text-[58px] font-['Baloo_2']">
                  We'd Love to
                </h2>
                <h1 className="text-[#E06820] font-extrabold leading-none text-[100px] lg:text-[70px] mt-1 font-['Baloo_2']">
                  Hear From You
                </h1>
              </div>

              <div className="flex items-center gap-2 mt-4 mb-5 justify-center lg:justify-start">
                <div className="w-32 md:w-39 h-1.5 rounded-full bg-[#E06820]" />
              </div>

              <p className="text-black text-[15px] md:text-[18px] leading-[1.9] font-['Nunito'] max-w-[560px] mx-auto lg:mx-0">
                A glimpse of joyful moments, exciting activities and beautiful memories created every single day — where little ones learn, laugh, and grow together. Because every little moment is a memory worth keeping forever.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
              <Image
                src="/contact.png"
                alt="Gallery Banner"
                width={1200}
                height={800}
                priority
                className="w-full max-w-[650px] sm:max-w-[750px] md:max-w-[900px] lg:max-w-[1000px] h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}