"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

interface Programme {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  buttonColor: string;
  badgeColor: string;
}

const FunElements = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
  </div>
);

const PinkScallopFishGroup = () => (
  <g>
    <path d="M 20 50 L -10 20 C -5 40, -5 60, -10 80 Z" fill="#F498A7" />
    <path d="M 12 40 L -2 28 M 10 45 L -4 40 M 8 50 L -5 50 M 10 55 L -4 60 M 12 60 L -2 72" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M 30 30 C 40 0, 70 0, 85 30 Z" fill="#F498A7" />
    <path d="M 40 22 L 55 5 M 52 22 L 67 7 M 64 25 L 77 12 M 76 28 L 84 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M 35 70 C 45 95, 65 95, 75 70 Z" fill="#F498A7" />
    <path d="M 42 75 L 50 90 M 52 75 L 60 90 M 62 75 L 68 85" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path id="fishBody" d="M 15 50 C 15 15, 105 15, 105 50 C 105 85, 15 85, 15 50 Z" fill="#FFF29C" />
    <clipPath id="bodyClip">
      <use href="#fishBody" />
    </clipPath>
    <g clipPath="url(#bodyClip)">
      <path d="M 120 0 L 55 0 Q 40 12 55 25 Q 40 37 55 50 Q 40 62 55 75 Q 40 87 55 100 L 120 100 Z" fill="#99D5D6" />
      <path d="M 120 0 L 70 0 Q 55 12 70 25 Q 55 37 70 50 Q 55 62 70 75 Q 55 87 70 100 L 120 100 Z" fill="#FFF29C" />
      <path d="M 120 0 L 85 0 Q 70 12 85 25 Q 70 37 85 50 Q 70 62 85 75 Q 70 87 85 100 L 120 100 Z" fill="#F498A7" />
    </g>
    <circle cx="75" cy="64" r="8" fill="#FFF29C" />
    <circle cx="82" cy="42" r="9" fill="white" />
    <circle cx="85" cy="42" r="5" fill="#5D4037" />
    <circle cx="86" cy="40.5" r="2" fill="white" />
    <path d="M 78 30 Q 82 26 87 30" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M 85 54 Q 93 68 98 56 Z" fill="#D84315" />
    <path d="M 62 55 C 52 50, 52 65, 62 70 C 67 65, 67 55, 62 55 Z" fill="#F498A7" />
    <path d="M 58 58 L 54 55 M 58 62 L 53 62 M 59 66 L 55 68" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </g>
);

export default function WhatWeOffer() {
  const { openModal } = useModal();
  const fishRef = useRef<SVGGElement>(null);
  const waterPathRef = useRef<SVGPathElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mobileIdx, setMobileIdx] = useState(0);

  const programmes: Programme[] = [
    {
      id: 0,
      title: "Preschool",
      description: "Our preschool programme builds a strong foundation through play, exploration, and joyful learning experiences designed just for little learners.",
      image: "/individual_kids/galleryimg-10.jpeg",
      badge: "Age group : 2 - 6 years",
      buttonColor: "bg-[var(--color-primary)]",
      badgeColor: "bg-[var(--color-primary)]",
    },
    {
      id: 1,
      title: "Daycare",
      description: "Safe, loving daycare with CCTV surveillance, nap time and supervised play — perfect for working parents who want peace of mind.",
      image: "/classrooms/galleryimg-18.jpeg",
      badge: "Age group : 1.5 - 9 years",
      buttonColor: "bg-[var(--color-accent-teal)]",
      badgeColor: "bg-[var(--color-accent-teal)]",
    },
    {
      id: 2,
      title: "NEP Curriculum",
      description: "A modern, forward-thinking curriculum aligned with National Education Policy 2020 guidelines for holistic early development.",
      image: "/NEP.webp",
      badge: "Age group : 4 - 6 years",
      buttonColor: "bg-[var(--color-accent-green)]",
      badgeColor: "bg-[var(--color-accent-green)]",
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const pathElem = waterPathRef.current;
    const fishElem = fishRef.current;
    if (!pathElem || !fishElem) return;
    gsap.registerPlugin(MotionPathPlugin);
    const ctx = gsap.context(() => {
      gsap.to(fishElem, {
        duration: 15,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: pathElem,
          align: pathElem,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        }
      });
      gsap.to(pathElem, {
        strokeDashoffset: -40,
        duration: 1.5,
        repeat: -1,
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative py-8 md:py-5 bg-[#FCFAEF] overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/graphics_and_icons/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/45 z-0 pointer-events-none" />
      <FunElements />

      {/* Header */}
      <div className="container-custom relative z-10 w-full mb-4 lg:mb-3 text-center px-4">
        <h2 className="font-baloo text-[#E06820] text-4xl md:text-3xl lg:text-[50px] leading-tight font-extrabold mb-2">
          Our Programs
        </h2>
        <p className="font-nunito text-[16px] md:text-[14px] lg:text-[18px] text-gray-700 italic max-w-xl mx-auto">
          Where learning feels like an adventure
        </p>
      </div>

      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex relative justify-between items-start container-custom w-full pb-4">

        {/* Wavy Water Line */}
        <div className="absolute top-[35px] left-0 w-full h-[130px] z-0 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 150" className="overflow-visible">
            <defs>
              <linearGradient id="waterGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
                <stop offset="2%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="98%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              ref={waterPathRef}
              d="M -100 75 Q 75 0 250 75 T 600 75 T 950 75 T 1300 75"
              fill="none"
              stroke="url(#waterGrad)"
              strokeWidth="5"
              strokeDasharray="20 20"
              strokeLinecap="round"
            />
            <g ref={fishRef}>
              <g transform="scale(0.95)">
                <PinkScallopFishGroup />
              </g>
            </g>
          </svg>
        </div>

        {/* Programme Cards */}
        {programmes.map((prog) => (
          <div key={prog.id} className="relative z-10 flex flex-col items-center w-1/3 px-2 md:px-2 lg:px-4">

            {/* Circle image */}
            <div className="relative w-44 h-44 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full border-[6px] border-white shadow-xl mb-5 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Image src={prog.image} fill className={`rounded-full p-1.5 ${prog.title === 'NEP Curriculum' ? 'object-contain' : 'object-cover object-top'}`} alt={prog.title} />
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-white md:text-[10px] lg:text-[13px] font-extrabold md:py-1 md:px-3 lg:py-1.5 lg:px-5 rounded-full shadow-lg ${prog.badgeColor}`}>
                {prog.badge}
              </div>
            </div>

            {prog.title === "NEP Curriculum" ? (
              <div
                className="mt-1 mb-1 flex flex-col items-center cursor-pointer group/nep"
                onClick={() => setIsVideoOpen(true)}
              >
                <h3 className="md:text-[16px] lg:text-[26px] font-extrabold text-[var(--color-secondary)] font-baloo text-center leading-tight group-hover/nep:text-[var(--color-primary)] group-hover/nep:underline decoration-2 underline-offset-4 transition-all">
                  {prog.title}
                </h3>
                <span className="text-xs text-[var(--color-primary)] font-bold font-nunito opacity-0 group-hover/nep:opacity-100 transition-opacity mt-0.5">
                  Click to know more
                </span>
              </div>
            ) : (
              <h3 className="md:text-[16px] lg:text-[26px] font-extrabold text-[var(--color-secondary)] font-baloo mt-1 mb-1 text-center leading-tight">
                {prog.title}
              </h3>
            )}

            <p className="md:text-[11px] lg:text-[14px] text-gray-700 font-nunito text-center mb-2 leading-relaxed md:max-w-[180px] lg:max-w-[260px] font-medium">
              {prog.description}
            </p>

          </div>
        ))}
      </div>

      {/* ── MOBILE LAYOUT ONLY: centered carousel with arrows ── */}
      <div className="md:hidden w-full relative z-10 px-4 pb-4">
        <div className="flex items-center justify-center gap-3">

          {/* Left Arrow */}
          <button
            onClick={() => setMobileIdx((i) => i - 1)}
            disabled={mobileIdx === 0}
            aria-label="Previous programme"
            className="flex-shrink-0 w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed bg-white text-[var(--color-primary)] hover:enabled:bg-[var(--color-primary)] hover:enabled:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="flex-1 max-w-[300px]">
            {programmes.map((prog, idx) => (
              <div
                key={prog.id}
                className={`flex flex-col items-center bg-transparent rounded-none shadow-none px-4 pt-8 pb-5 transition-all duration-300 ${idx === mobileIdx ? "block" : "hidden"
                  }`}
              >
                {/* Circle Image */}
                <div className="relative w-40 h-40 rounded-full border-[5px] border-white shadow-xl bg-transparent mb-8 flex-shrink-0">
                  <Image
                    src={prog.image}
                    fill
                    className={`rounded-full p-1 ${prog.title === 'NEP Curriculum' ? 'object-contain' : 'object-cover object-top'}`}
                    alt={prog.title}
                  />
                  <div
                    className={`absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-[9px] font-extrabold py-1 px-3 rounded-full shadow-lg ${prog.badgeColor}`}
                  >
                    {prog.badge}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col items-center text-center">
                  {prog.title === "NEP Curriculum" ? (
                    <div
                      className="mb-1 flex flex-col items-center cursor-pointer group/nep"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <h3 className="text-lg font-extrabold text-[var(--color-secondary)] font-baloo leading-tight group-hover/nep:text-[var(--color-primary)] transition-colors">
                        {prog.title}
                      </h3>
                      <span className="text-xs text-[var(--color-primary)] font-bold font-nunito mt-0.5">
                        Tap to know more
                      </span>
                    </div>
                  ) : (
                    <h3 className="text-lg font-extrabold text-[var(--color-secondary)] font-baloo mb-1 leading-tight">
                      {prog.title}
                    </h3>
                  )}

                  <p className="text-[12px] text-gray-700 font-nunito leading-relaxed font-medium mt-1">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setMobileIdx((i) => i + 1)}
            disabled={mobileIdx === programmes.length - 1}
            aria-label="Next programme"
            className="flex-shrink-0 w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed bg-white text-[var(--color-primary)] hover:enabled:bg-[var(--color-primary)] hover:enabled:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {programmes.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIdx(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === mobileIdx ? "bg-[var(--color-primary)] w-5" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Video Dialog for NEP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 text-white hover:bg-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors backdrop-blur-md"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uJYiO-7AXqU?autoplay=1"
              title="NEP Curriculum"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}