"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Smile, Tent, BookOpen } from "lucide-react";
import { useModal } from "../context/ModalContext";

interface Offering {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function WhatWeOffer() {
  const router = useRouter();
  const { openModal } = useModal();

  const offerings: Offering[] = [
    {
      title: "Preschool",
      description: "Structured early learning for ages 2.5–6 with phonics, numeracy, art, music and lots of play-based discovery.",
      image: "/galleryimg-10.jpeg",
      icon: <Smile className="w-6 h-6 text-white" />,
    },
    {
      title: "Full-Day Daycare",
      description: "Safe, loving daycare with nutritious meals, nap time and supervised play — perfect for working parents.",
      image: "/galleryimg-18.jpeg",
      icon: <Tent className="w-6 h-6 text-white" />,
    },
    {
      title: "NEP Curriculum",
      description: "A modern, forward-thinking curriculum aligned with National Education Policy 2020 guidelines for holistic early development.",
      image: "/galleryimg-16.jpeg",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-[var(--color-border)]">
      
      {/* Decorative background doodles (Drum on left, Toy Car on right) */}
      <div className="absolute top-10 left-[4%] w-16 h-16 text-[#FF8B9C] opacity-40 pointer-events-none hidden xl:block z-0">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <ellipse cx="32" cy="24" rx="20" ry="8" />
          <path d="M12 24v16c0 4.42 8.95 8 20 8s20-3.58 20-8V24" />
          <path d="M12 24l10 16 10-16 10 16 10-16" />
          <line x1="8" y1="12" x2="22" y2="20" />
          <circle cx="7" cy="11.5" r="1.5" fill="currentColor" />
          <line x1="56" y1="12" x2="42" y2="20" />
          <circle cx="57" cy="11.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-10 right-[4%] w-16 h-16 text-[#75C4FF] opacity-40 pointer-events-none hidden xl:block z-0">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M8 38h48v8H8z" />
          <path d="M16 38l6-14h20l6 14" />
          <circle cx="20" cy="46" r="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="46" r="2" fill="currentColor" />
          <circle cx="44" cy="46" r="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="44" cy="46" r="2" fill="currentColor" />
          <line x1="32" y1="24" x2="32" y2="38" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase mb-2 font-nunito block">
            — WHAT WE OFFER
          </span>
          <h2 className="font-baloo text-[var(--color-secondary)] text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold mb-3">
            Programmes For Every Little One
          </h2>
        </div>

        {/* ── Curved Path & Cards Wrapper ── */}
        <div className="relative w-full">
          
          {/* Animated SVG Path for Fish (Desktop / Large Screens) */}
          <div className="absolute top-[100px] left-0 w-full h-[220px] pointer-events-none hidden xl:block z-0">
            <style>{`
              @keyframes flow-water-offer {
                0% {
                  stroke-dashoffset: 0;
                }
                100% {
                  stroke-dashoffset: -40;
                }
              }
              .animate-water-flow-offer {
                animation: flow-water-offer 1.2s linear infinite;
              }
            `}</style>
            <svg viewBox="0 0 1440 220" className="w-full h-full fill-none overflow-visible">
              {/* Dashed line representing moving water */}
              <path
                id="fish-track-offer"
                d="M -50,110 C 250,20 450,180 720,110 C 990,40 1200,180 1490,110"
                stroke="#FFE5A3"
                strokeWidth="5"
                strokeDasharray="12,12"
                strokeLinecap="round"
                className="animate-water-flow-offer"
              />
              
              {/* Swimming Fish Group */}
              <g>
                <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#fish-track-offer" />
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

          {/* Offering Cards Grid */}
          <div className="flex flex-row items-stretch justify-start xl:justify-center gap-6 xl:gap-10 overflow-x-auto pb-8 xl:pb-4 px-4 -mx-4 scrollbar-hide xl:overflow-x-visible xl:px-0 xl:mx-0 max-w-7xl mx-auto z-10 relative">
            {offerings.map((off, index) => {
              // Alternating heights to match path waves
              const offsets = [
                "xl:-translate-y-6",
                "xl:translate-y-8",
                "xl:-translate-y-6",
              ];

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[290px] sm:w-[320px] xl:w-[340px] bg-white rounded-[32px] border border-gray-100 shadow-[0_12px_36px_rgba(107,63,160,0.04)] p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group ${offsets[index]}`}
                >
                  <div className="flex flex-col">
                    {/* Image Area with Overlay Badge */}
                    <div className="relative mb-6">
                      <div className="relative w-full aspect-[1.3] rounded-3xl overflow-hidden bg-zinc-100 shadow-inner">
                        <Image
                          src={off.image}
                          alt={off.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Round Orange Badge overlapping bottom-left of image */}
                      <div className="absolute -bottom-4 left-6 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-md border-2 border-white z-10">
                        {off.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 pt-2">
                      <h3 className="font-baloo text-xl font-extrabold text-[var(--color-secondary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                        {off.title}
                      </h3>
                      <p className="font-nunito text-xs sm:text-sm text-[var(--color-body)] leading-relaxed font-medium mb-6">
                        {off.description}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="px-2 pb-2">
                    <button
                      onClick={() => openModal("apply")}
                      className="font-baloo text-sm font-extrabold text-[var(--color-primary)] hover:text-[#c45312] transition-colors duration-200 flex items-center gap-1 group/btn cursor-pointer"
                    >
                      LEARN MORE
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
