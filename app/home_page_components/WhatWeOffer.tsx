"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
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

// 2 Fun Floating Elements (Top-Left & Bottom-Right)
const FunElements = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {/* 1. Shape 3 (Top Left) */}
    <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-12 left-10 lg:top-16 lg:left-16 opacity-90 w-16 h-16 hidden md:block">
      <Image src="/slider_shape03.png" alt="shape" fill className="object-contain" />
    </motion.div>

    {/* 2. Rainbow (Bottom Right Edge) */}
    <motion.div animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 right-10 lg:bottom-24 lg:right-16 opacity-90 hidden md:block">
      <svg width="70" height="35" viewBox="0 0 100 50">
        <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="#FF5252" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 20 50 A 30 30 0 0 1 80 50" stroke="#FF9800" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 30 50 A 20 20 0 0 1 70 50" stroke="#4CAF50" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 40 50 A 10 10 0 0 1 60 50" stroke="#03A9F4" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  </div>
);

const PinkScallopFishGroup = () => (
  <g>
    {/* Tail Fin */}
    <path d="M 20 50 L -10 20 C -5 40, -5 60, -10 80 Z" fill="#F498A7" />
    <path d="M 12 40 L -2 28 M 10 45 L -4 40 M 8 50 L -5 50 M 10 55 L -4 60 M 12 60 L -2 72" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Top Fin */}
    <path d="M 30 30 C 40 0, 70 0, 85 30 Z" fill="#F498A7" />
    <path d="M 40 22 L 55 5 M 52 22 L 67 7 M 64 25 L 77 12 M 76 28 L 84 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    
    {/* Bottom Fin */}
    <path d="M 35 70 C 45 95, 65 95, 75 70 Z" fill="#F498A7" />
    <path d="M 42 75 L 50 90 M 52 75 L 60 90 M 62 75 L 68 85" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Body Base & Wavy Scallop Bands */}
    <path id="fishBody" d="M 15 50 C 15 15, 105 15, 105 50 C 105 85, 15 85, 15 50 Z" fill="#FFF29C" />
    
    <clipPath id="bodyClip">
      <use href="#fishBody" />
    </clipPath>
    
    <g clipPath="url(#bodyClip)">
      {/* Cyan Layer */}
      <path d="M 120 0 L 55 0 Q 40 12 55 25 Q 40 37 55 50 Q 40 62 55 75 Q 40 87 55 100 L 120 100 Z" fill="#99D5D6" />
      {/* Yellow Layer */}
      <path d="M 120 0 L 70 0 Q 55 12 70 25 Q 55 37 70 50 Q 55 62 70 75 Q 55 87 70 100 L 120 100 Z" fill="#FFF29C" />
      {/* Pink Head Layer */}
      <path d="M 120 0 L 85 0 Q 70 12 85 25 Q 70 37 85 50 Q 70 62 85 75 Q 70 87 85 100 L 120 100 Z" fill="#F498A7" />
    </g>

    {/* Rosy Cheek */}
    <circle cx="75" cy="64" r="8" fill="#FFF29C" />

    {/* Big Eye */}
    <circle cx="82" cy="42" r="9" fill="white" />
    <circle cx="85" cy="42" r="5" fill="#5D4037" />
    <circle cx="86" cy="40.5" r="2" fill="white" />

    {/* Cute Eyebrow */}
    <path d="M 78 30 Q 82 26 87 30" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Happy Open Mouth Smile */}
    <path d="M 85 54 Q 93 68 98 56 Z" fill="#D84315" />

    {/* Side Fin */}
    <path d="M 62 55 C 52 50, 52 65, 62 70 C 67 65, 67 55, 62 55 Z" fill="#F498A7" />
    <path d="M 58 58 L 54 55 M 58 62 L 53 62 M 59 66 L 55 68" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </g>
);

export default function WhatWeOffer() {
  const { openModal } = useModal();
  const fishRef = useRef<SVGGElement>(null);
  const waterPathRef = useRef<SVGPathElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const programmes: Programme[] = [
    {
      id: 0,
      title: "Preschool",
      description: "Our preschool programme builds a strong foundation through play, exploration, and joyful learning experiences designed just for little learners.",
      image: "/galleryimg-10.jpeg",
      badge: "Age group : 2.5 - 4 years",
      buttonColor: "bg-[var(--color-primary)]",
      badgeColor: "bg-[var(--color-primary)]",
    },
    {
      id: 1,
      title: "Daycare",
      description: "Safe, loving daycare with nutritious meals, nap time and supervised play — perfect for working parents who want peace of mind.",
      image: "/galleryimg-18.jpeg",
      badge: "Age group : 2 - 8 years",
      buttonColor: "bg-[var(--color-accent-teal)]",
      badgeColor: "bg-[var(--color-accent-teal)]",
    },
    {
      id: 2,
      title: "NEP Curriculum",
      description: "A modern, forward-thinking curriculum aligned with National Education Policy 2020 guidelines for holistic early development.",
      image: "/galleryimg-7.jpeg",
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
      // Continuous fish animation along the path
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
      
      // Animate the line flowing continuously
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
    <section className="relative py-8 md:py-10 bg-[#FCFAEF] overflow-hidden flex flex-col items-center justify-center">
      
      <FunElements />

      {/* Header */}
      <div className="container-custom relative z-10 w-full mb-4 md:mb-8 text-center px-4">
        <h2 className="font-baloo text-[#E06820] text-4xl sm:text-5xl lg:text-[54px] leading-tight font-extrabold mb-4">
          Our Programs
        </h2>
        <p className="font-nunito text-[16px] sm:text-[18px] text-gray-700 italic max-w-xl mx-auto">
          Where learning feels like an adventure...
        </p>
      </div>

      {/* Desktop Layout (Hidden on Tablet/Mobile) */}
      <div className="hidden lg:flex relative justify-between items-start container-custom w-full pb-8">
        
        {/* Wavy Water Line Container */}
        <div className="absolute top-[40px] left-0 w-full h-[150px] z-0 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 150" className="overflow-visible">
            <defs>
              {/* Linear gradient mapped to the screen width (0 to 1000) so it smoothly fades out before touching the edges */}
              <linearGradient id="waterGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
                <stop offset="2%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="98%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* The visual flowing dashed line */}
            <path 
              ref={waterPathRef}
              d="M -100 75 Q 75 0 250 75 T 600 75 T 950 75 T 1300 75" 
              fill="none" 
              stroke="url(#waterGrad)" 
              strokeWidth="5" 
              strokeDasharray="20 20"
              strokeLinecap="round"
            />
            {/* Cute Pink Fish Mascot */}
            <g ref={fishRef}>
              <g transform="scale(0.95)">
                <PinkScallopFishGroup />
              </g>
            </g>
          </svg>
        </div>

        {/* 3 Horizontal Classifications */}
        {programmes.map((prog) => (
          <div key={prog.id} className="relative z-10 flex flex-col items-center w-1/3 px-4">
            <div className="relative w-64 h-64 rounded-full border-[6px] border-white shadow-xl mb-8 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Image src={prog.image} fill className="object-cover rounded-full p-1.5" alt={prog.title} />
              {/* Age Group Badge without white border */}
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-[14px] font-extrabold py-2 px-6 rounded-full shadow-lg ${prog.badgeColor}`}>
                {prog.badge}
              </div>
            </div>
            
            {prog.title === "NEP Curriculum" ? (
              <div 
                className="mt-2 mb-2 flex flex-col items-center cursor-pointer group/nep"
                onClick={() => setIsVideoOpen(true)}
              >
                <h3 className="text-[28px] font-extrabold text-[var(--color-secondary)] font-baloo text-center leading-tight group-hover/nep:text-[var(--color-primary)] group-hover/nep:underline decoration-2 underline-offset-4 transition-all">
                  {prog.title}
                </h3>
                <span className="text-xs text-[var(--color-primary)] font-bold font-nunito opacity-0 group-hover/nep:opacity-100 transition-opacity mt-0.5">
                  Click to know more
                </span>
              </div>
            ) : (
              <h3 className="text-[28px] font-extrabold text-[var(--color-secondary)] font-baloo mt-2 mb-2 text-center leading-tight">
                {prog.title}
              </h3>
            )}
            
            <p className="text-[15px] text-gray-700 font-nunito text-center mb-6 leading-relaxed max-w-[260px] font-medium">
              {prog.description}
            </p>
            
            <button 
              onClick={() => openModal("apply")} 
              className={`text-white text-[15px] font-extrabold py-3 px-8 rounded-full flex items-center gap-2 hover:opacity-90 transition-transform hover:-translate-y-1 shadow-lg ${prog.buttonColor}`}
            >
              JOIN THE FUN &rarr;
            </button>
          </div>
        ))}
      </div>

      {/* Tablet & Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-12 w-full max-w-4xl mx-auto px-6 relative z-10">
        {programmes.map((prog, idx) => {
          // Tab view alternating: show pic right and content left, alternate
          const isEven = idx % 2 === 0;
          const flexDirection = isEven ? 'md:flex-row-reverse' : 'md:flex-row';
          
          return (
            <div key={prog.id} className={`flex flex-col md:flex-row items-center gap-6 md:gap-4 lg:gap-10 ${flexDirection}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-[8px] border-white shadow-xl bg-white transition-transform duration-300 hover:scale-105">
                  <Image src={prog.image} fill className="object-cover rounded-full p-1.5" alt={prog.title} />
                  {/* Age Group Badge without white border */}
                  <div className={`absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-[13px] md:text-[17px] font-extrabold py-1.5 px-5 md:py-2 md:px-8 rounded-full shadow-lg ${prog.badgeColor}`}>
                    {prog.badge}
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0">
                {prog.title === "NEP Curriculum" ? (
                  <div 
                    className="mb-3 flex flex-col items-center md:items-start cursor-pointer group/nep"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <h3 className="text-3xl md:text-[40px] font-extrabold text-[var(--color-secondary)] font-baloo leading-tight group-hover/nep:text-[var(--color-primary)] group-hover/nep:underline decoration-2 underline-offset-4 transition-all">
                      {prog.title}
                    </h3>
                    <span className="text-sm text-[var(--color-primary)] font-bold font-nunito opacity-0 group-hover/nep:opacity-100 transition-opacity mt-1">
                      Click to know more
                    </span>
                  </div>
                ) : (
                  <h3 className="text-3xl md:text-[40px] font-extrabold text-[var(--color-secondary)] font-baloo mb-3 leading-tight">
                    {prog.title}
                  </h3>
                )}
                <p className="text-[16px] md:text-[17px] text-gray-700 font-nunito mb-8 leading-relaxed max-w-sm font-medium">
                  {prog.description}
                </p>
                <button 
                  onClick={() => openModal("apply")} 
                  className={`text-white text-[14px] md:text-[17px] font-extrabold py-2.5 px-6 md:py-3.5 md:px-10 rounded-full flex items-center gap-2 hover:opacity-90 transition-transform hover:-translate-y-1 shadow-lg ${prog.buttonColor}`}
                >
                  JOIN THE FUN &rarr;
                </button>
              </div>

            </div>
          );
        })}
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
