"use client";

import Image from "next/image";

export default function GalleryBanner() {
  return (
    <section className="w-full bg-[#ffffff] py-12 relative overflow-visible">
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

        /*
          Path: starts right side, curves gently in the MIDDLE,
          ends pointing LEFT toward the text "Our Happy Gallery".
          Q control point pushed UP to create mid-arc bow.
        */
        .airplane-anim {
          offset-path: path('M 160 100 Q 90 30 10 80');
          offset-rotate: auto;
          animation: flyAirplane 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .star-pulse { animation: pulseStar 3s ease-in-out infinite; }
        .star-float { animation: floatStar 4s ease-in-out infinite; }
      `}</style>

      <div className="container-custom relative">
        <div className="bg-white rounded-[30px] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="relative overflow-visible pr-4">

              {/* 1. Pink Outline Star (Top Right) */}
              <div
                className="absolute top-[-30px] right-[40px] w-14 h-14 text-[#FF7096] star-float z-10 pointer-events-none"
                style={{ animationDelay: "0.5s" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 2. Flight Path + Paper Airplane */}
              {/*    Positioned to the RIGHT of the text, airplane flies LEFT toward text */}
              <div className="absolute top-[-7px] right-[-90px] w-[220px] h-[180px] z-20 pointer-events-none overflow-visible hidden md:block">
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

                  {/* Dashed flight path — right to left, bowing upward in middle */}
                  <path
                    d="M 160 100 Q 90 30 10 80"
                    fill="none"
                    stroke="#FDB813"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6,6"
                    mask="url(#airplane-path-mask)"
                  />

                  {/*
                    Paper airplane — nose points RIGHT (+x).
                    offset-rotate:auto will rotate it so nose faces
                    the direction of travel (leftward along the arc).
                    Shape matches reference image 2: outline style, fold crease + wing.
                  */}
                  <g className="airplane-anim">
                    {/* Main body */}
                    <path
                      d="M 12 0 L -8 -8 L -3 0 L -8 8 Z"
                      fill="none"
                      stroke="#FDB813"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Center fold crease */}
                    <line x1="-3" y1="0" x2="10" y2="0"
                      stroke="#FDB813" strokeWidth="1.5" strokeLinecap="round"
                    />
                    {/* Bottom wing fold */}
                    <line x1="-8" y1="8" x2="-3" y2="3"
                      stroke="#FDB813" strokeWidth="1.5" strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>

              {/* 3. Yellow Solid Star */}
              <div
                className="absolute bottom-[90px] right-[80px] w-5 h-5 text-[#FDB813] fill-[#FDB813] star-float z-10 pointer-events-none"
                style={{ animationDelay: "1s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 4. Green Solid Star */}
              <div
                className="absolute bottom-[-20px] right-[130px] w-7 h-7 text-[#4CAF50] fill-[#4CAF50] star-float z-10 pointer-events-none"
                style={{ animationDelay: "1.5s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 5. Purple Solid Star */}
              <div
                className="absolute bottom-[-35px] left-[150px] w-5 h-5 text-[#6B3FA0] fill-[#6B3FA0] star-pulse z-10 pointer-events-none"
                style={{ animationDelay: "2s" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* TEXT CONTENT */}
              
              <h2 className="text-[#2E2E2E] font-extrabold leading-none text-[48px] md:text-[58px] font-['Baloo_2']">
                Our Happy
              </h2>
              <h1 className="text-[#4B2CA0] font-extrabold leading-none text-[72px] md:text-[88px] mt-1 font-['Baloo_2']">
                Gallery
              </h1>

              {/* Decorative line */}
              <div className="flex items-center gap-2 mt-5 mb-6">
                <div className="w-39 h-1.5 rounded-full bg-[#FDB813]" />
                
              </div>

              <p className="text-[#555] text-[18px] leading-[1.9] font-['Nunito']">
                A glimpse of joyful moments, exciting activities and beautiful
                memories created every single day.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end lg:pr-6">
              <Image
                src="/gallerybannerimg.png"
                alt="Gallery Banner"
                width={760}
                height={420}
                priority
                className="w-full max-w-[760px] h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}