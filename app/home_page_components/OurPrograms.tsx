"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useModal } from "../context/ModalContext";

interface Program {
  title: string;
  ageBadge: string;
  description: string;
  image: string;
  themeColor: string; // Tailwind bg-class for badges
  btnColor: string; // Tailwind button class
  accentText: string;
}

export default function OurPrograms() {
  const router = useRouter();
  const { openModal } = useModal();

  const programs: Program[] = [
    {
      title: "Play Group",
      ageBadge: "Age group: 1.5 - 2.5 Years",
      description: "At the time of admission in Playgroup the age of the child should be 1 ½ years by June. Introduction to social interaction and basic motor skills.",
      image: "/individual_kids/galleryimg-11.jpeg",
      themeColor: "bg-[#e53935] text-white",
      btnColor: "bg-[#e53935] hover:bg-[#c62828] text-white shadow-red-200",
      accentText: "text-[#e53935]",
    },
    {
      title: "Nursery",
      ageBadge: "Age group: 2.5 - 3.5 Years",
      description: "At the time of admission in Nursery the age of the child should be 2 ½ years by June. Building foundation for language, numbers, and expression.",
      image: "/classrooms/galleryimg-12.jpeg",
      themeColor: "bg-[#FDB813] text-[var(--color-dark)]",
      btnColor: "bg-[#FDB813] hover:bg-[#e0a10b] text-[var(--color-dark)] shadow-amber-100 font-bold",
      accentText: "text-[#d89700]",
    },
    {
      title: "IK1 (LKG)",
      ageBadge: "Age group: 3.5 - 4.5 Years",
      description: "At the time of admission in Lower Kindergarten the age of the child should be 3 ½ years by June. Expanding from school to the world around - curious, interactive, and building strong foundations.",
      image: "/classrooms/galleryimg-13.jpeg",
      themeColor: "bg-[var(--color-primary)] text-white",
      btnColor: "bg-[var(--color-primary)] hover:bg-[#c45312] text-white shadow-orange-200",
      accentText: "text-[var(--color-primary)]",
    },
    {
      title: "IK2 (UKG)",
      ageBadge: "Age group: 4.5 - 5.5 Years",
      description: "At the time of admission in Upper Kindergarten the age of the child should be 4 ½ years by June. Confident learners ready for formal schooling - communication, independence, and core skills.",
      image: "/classrooms/galleryimg-14.jpeg",
      themeColor: "bg-[var(--color-secondary)] text-white",
      btnColor: "bg-[var(--color-secondary)] hover:bg-[var(--color-purple-deep)] text-white shadow-purple-200",
      accentText: "text-[var(--color-secondary)]",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-offwhite)] overflow-hidden">
      
      {/* Decorative background doodles */}
      <div className="absolute top-8 left-1/4 w-12 h-12 text-[var(--color-primary)] opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a4 4 0 0 0-4 4c0 1.2.5 2.3 1.4 3L8 12.5a3 3 0 0 0-3 3v2.5a3 3 0 0 0 6 0V15.5l1.6-1.6c.7.4 1.5.6 2.4.6 2.2 0 4-1.8 4-4s-1.8-4-4-4zm-4 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="section-label mb-4 inline-flex items-center gap-1.5">
            Our Learning Paths
          </span>
          <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-[46px] leading-tight font-extrabold mb-3">
            Our Programs
          </h2>
          <p className="font-nunito text-base sm:text-lg text-[var(--color-muted)] font-medium italic">
            Where learning feels like an adventure...
          </p>
        </div>

        {/* ── Curved Path & Cards Wrapper ── */}
        <div className="relative w-full">
          
          {/* Animated SVG Path for Fish (Desktop / Large Screens) */}
          <div className="absolute top-[80px] left-0 w-full h-[240px] pointer-events-none hidden xl:block z-0">
            <style>{`
              @keyframes flow-water {
                0% {
                  stroke-dashoffset: 0;
                }
                100% {
                  stroke-dashoffset: -40;
                }
              }
              .animate-water-flow {
                animation: flow-water 1.2s linear infinite;
              }
            `}</style>
            <svg viewBox="0 0 1440 240" className="w-full h-full fill-none overflow-visible">
              {/* Thicker, brand-matching dashed line representing moving water */}
              <path
                id="fish-track"
                d="M -50,110 C 200,20 400,200 720,110 C 1040,20 1240,200 1490,110"
                stroke="#FFE5A3"
                strokeWidth="5"
                strokeDasharray="12,12"
                strokeLinecap="round"
                className="animate-water-flow"
              />
              
              {/* Swimming Fish Group */}
              <g>
                <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#fish-track" />
                </animateMotion>
                
                {/* Cute Nemo-style Clownfish */}
                <g transform="scale(2.2) translate(-8, -4)">
                  {/* Back Dorsal Fin */}
                  <path
                    d="M -4,-8 C -1,-11 4,-11 3,-8 Z"
                    fill="var(--color-primary)"
                  />
                  {/* Tail Fin */}
                  <path
                    d="M -12,0 C -17,-5 -17,5 -12,0"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M -15,-2 C -16,-3.5 -16,3.5 -15,2"
                    fill="var(--color-dark)"
                  />
                  {/* Main Rounded Chubby Body */}
                  <ellipse cx="0" cy="0" rx="12" ry="8.5" fill="var(--color-primary)" />
                  {/* White Stripe (Middle) */}
                  <path
                    d="M -2,-8.2 C -0.8,-4 -0.8,4 -2,8.2 L 0.5,8 C 1.5,4 1.5,-4 0.5,-8 Z"
                    fill="white"
                  />
                  {/* White Stripe (Head) */}
                  <path
                    d="M 5,-7 C 6,-3 6,3 5,7 L 7.2,6 C 8.2,3 8.2,-3 7.2,-6 Z"
                    fill="white"
                  />
                  {/* Blush Cheeks */}
                  <circle cx="3.5" cy="1.5" r="1.5" fill="#ff8a80" opacity="0.8" />
                  {/* Big Cute Eye */}
                  <circle cx="7" cy="-2.5" r="2.6" fill="white" />
                  <circle cx="7.5" cy="-2.5" r="1.4" fill="black" />
                  <circle cx="6.8" cy="-3.1" r="0.6" fill="white" />
                  <circle cx="8" cy="-1.9" r="0.3" fill="white" />
                  {/* Smiling Mouth */}
                  <path
                    d="M 10,1.5 Q 8.2,3.8 6,2.2"
                    stroke="var(--color-purple-deep)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Pectoral Side Fin */}
                  <path
                    d="M -1,2 C 1.5,4.5 2,3.5 0,2 Z"
                    fill="var(--color-primary-dark)"
                  />
                  <path
                    d="M -0.5,2.5 C 1,4 1.5,3 0,2"
                    fill="var(--color-dark)"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* Cards Flex Container (Scrollable on small viewports) */}
          <div className="flex flex-row items-stretch gap-6 overflow-x-auto pb-8 xl:pb-4 px-4 -mx-4 scrollbar-hide xl:overflow-x-visible xl:px-0 xl:mx-0 xl:grid xl:grid-cols-4 xl:gap-6 z-10 relative">
            {programs.map((prog, index) => {
              // Alternating offsets mapping to the waves of the path
              const offsets = [
                "xl:-translate-y-6",
                "xl:translate-y-8",
                "xl:-translate-y-8",
                "xl:translate-y-6",
              ];

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[270px] sm:w-[290px] xl:w-auto bg-white rounded-3xl border border-[var(--color-border)] shadow-[0_10px_30px_rgba(107,63,160,0.05)] p-6 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${offsets[index]}`}
                >
                  <div className="flex flex-col items-center">
                    
                    {/* Circle Image Wrapper with Border */}
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-zinc-100 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Age Badge */}
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold font-nunito tracking-wide mb-4 ${prog.themeColor}`}>
                      {prog.ageBadge}
                    </span>

                    {/* Title */}
                    <h3 className={`font-baloo text-xl font-extrabold mb-3 transition-colors duration-200 ${prog.accentText}`}>
                      {prog.title}
                    </h3>

                    {/* Description */}
                    <p className="font-nunito text-xs text-[var(--color-body)] leading-relaxed font-medium mb-6">
                      {prog.description}
                    </p>

                  </div>

                  {/* Join Button */}
                  <button
                    onClick={() => openModal("apply")}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider font-nunito transition-all duration-300 shadow-sm active:translate-y-0.5 cursor-pointer ${prog.btnColor}`}
                  >
                    Join the Fun →
                  </button>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
