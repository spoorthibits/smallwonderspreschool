"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Smile, Tent, BookOpen, Heart, Sparkles, GraduationCap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useModal } from "../context/ModalContext";

interface Programme {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: { icon: React.ReactNode; title: string; desc: string }[];
  color: string;
  bgColor: string;
  borderColor: string;
  badge: string;
  boxShape: { borderRadius: string };
  imageShape: { borderRadius: string };
}

const ClownfishSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
    <g>
      {/* Top Fin */}
      <path d="M 45 40 Q 55 15 65 40" fill="#FF5722" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      {/* Bottom Fin */}
      <path d="M 45 60 Q 55 85 65 60" fill="#FF5722" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      {/* Tail Fin */}
      <path d="M 25 50 L 5 25 Q 15 50 5 75 Z" fill="#FF5722" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 15 50 L 8 35 Q 20 50 8 65 Z" fill="white" />

      {/* Main Body */}
      <path d="M 20 50 C 20 25, 95 25, 95 50 C 95 75, 20 75, 20 50 Z" fill="#FF5722" />
      
      {/* Stripes (White with slight curve) */}
      <path d="M 75 30 Q 82 50 75 70 Q 68 50 75 30" fill="white" />
      <path d="M 52 26 Q 59 50 52 74 Q 45 50 52 26" fill="white" />
      <path d="M 32 31 Q 38 50 32 69 Q 26 50 32 31" fill="white" />
      
      {/* Eye */}
      <circle cx="82" cy="42" r="6" fill="white" />
      <circle cx="83" cy="42" r="3" fill="black" />
      
      {/* Smile */}
      <path d="M 85 58 Q 80 62 75 58" stroke="#D84315" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Side Fin */}
      <path d="M 48 50 Q 38 65 58 60 Z" fill="#FF5722" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </g>
  </svg>
);

export default function WhatWeOffer() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const riverPathRef = useRef<SVGPathElement>(null);
  const fishRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressProxy = useRef({ val: 0.15 }); 
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const programmes: Programme[] = [
    {
      id: 0,
      title: "Preschool",
      tagline: "Where curiosity takes the first step",
      description: "Our preschool programme builds a strong foundation through play, exploration, and joyful learning experiences designed just for little learners.",
      image: "/galleryimg-10.jpeg",
      icon: <Smile className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
      features: [
        { icon: <Smile className="w-4 h-4 md:w-5 md:h-5"/>, title: "Play-based learning", desc: "Hands-on activities that make learning joyful." },
        { icon: <Heart className="w-4 h-4 md:w-5 md:h-5"/>, title: "Social & emotional", desc: "Encouraging confidence, sharing, and kindness." },
        { icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5"/>, title: "Skills development", desc: "Building creativity, motor & cognitive skills." },
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
      badge: "Ages 2.5 - 4 Years",
      boxShape: { borderRadius: "60px 140px 60px 140px" },
      imageShape: { borderRadius: "40px 100px 40px 100px" },
    },
    {
      id: 1,
      title: "Full-Day Daycare",
      tagline: "A safe, loving home away from home",
      description: "Safe, loving daycare with nutritious meals, nap time and supervised play — perfect for working parents who want peace of mind.",
      image: "/galleryimg-18.jpeg",
      icon: <Tent className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
      features: [
        { icon: <Heart className="w-4 h-4 md:w-5 md:h-5"/>, title: "Nutritious Meals", desc: "Healthy, fresh food prepared daily." },
        { icon: <Tent className="w-4 h-4 md:w-5 md:h-5"/>, title: "Safe & Supervised", desc: "Constant care and secure environment." },
        { icon: <Smile className="w-4 h-4 md:w-5 md:h-5"/>, title: "Rest & Play", desc: "Balanced schedule for active and quiet time." },
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
      badge: "Ages 2 - 8 Years",
      boxShape: { borderRadius: "140px 60px 140px 60px" },
      imageShape: { borderRadius: "100px 40px 100px 40px" },
    },
    {
      id: 2,
      title: "NEP Curriculum",
      tagline: "Future-ready learning for growing minds",
      description: "A modern, forward-thinking curriculum aligned with National Education Policy 2020 guidelines for holistic early development.",
      image: "/galleryimg-16.jpeg",
      icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      features: [
        { icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5"/>, title: "Holistic Growth", desc: "Focus on cognitive, emotional, and physical." },
        { icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5"/>, title: "Experiential", desc: "Learning through real-world experiences." },
        { icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5"/>, title: "Future-Ready", desc: "Building critical thinking and problem-solving." },
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      badge: "Ages 4 - 6 Years",
      boxShape: { borderRadius: "60px 60px 160px 60px" },
      imageShape: { borderRadius: "40px 40px 120px 40px" },
    }
  ];

  // Path goes Bottom-to-Top, so 0.15 is near Bottom, 0.5 is Middle, 0.85 is near Top
  const pathTargets = [0.15, 0.5, 0.85];

  // Initialize and handle GSAP continuous timeline
  useEffect(() => {
    if (typeof window === "undefined" || !riverPathRef.current || !fishRef.current) return;
    gsap.registerPlugin(MotionPathPlugin);

    const positionMilestones = () => {
      pathTargets.forEach((target, i) => {
        if (milestoneRefs.current[i]) {
          gsap.set(milestoneRefs.current[i], {
            motionPath: {
              path: riverPathRef.current!,
              align: riverPathRef.current!,
              alignOrigin: [0.5, 0.5],
              start: target,
              end: target
            }
          });
        }
      });
    };

    positionMilestones();
    window.addEventListener('resize', positionMilestones);

    const updateFishPosition = () => {
      gsap.set(fishRef.current, {
        motionPath: {
          path: riverPathRef.current!,
          align: riverPathRef.current!,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: progressProxy.current.val,
          end: progressProxy.current.val
        }
      });
    };

    // Master Timeline for continuous bottom-to-top swimming
    tlRef.current = gsap.timeline({ repeat: -1 });

    tlRef.current
      .set(progressProxy.current, { val: pathTargets[0] })
      .call(() => setActiveIndex(0))
      // Swim to Daycare over 2 seconds
      .to(progressProxy.current, { val: pathTargets[1], duration: 2.5, ease: "none", onUpdate: updateFishPosition })
      .call(() => setActiveIndex(1))
      // Swim to NEP over 2 seconds
      .to(progressProxy.current, { val: pathTargets[2], duration: 2.5, ease: "none", onUpdate: updateFishPosition })
      .call(() => setActiveIndex(2))
      // Swim off-screen top
      .to(progressProxy.current, { val: 1.0, duration: 1, ease: "none", onUpdate: updateFishPosition })
      // Invisible reset to bottom
      .set(progressProxy.current, { val: 0.0 })
      // Swim back to Preschool
      .to(progressProxy.current, { val: pathTargets[0], duration: 1, ease: "none", onUpdate: updateFishPosition });

    return () => {
      window.removeEventListener('resize', positionMilestones);
      tlRef.current?.kill();
    };
  }, []); 

  const activeProg = programmes[activeIndex];

  return (
    <section className="relative py-6 md:py-10 bg-[#FCFAEF] overflow-hidden flex flex-col items-center justify-center min-h-0">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-[5%] right-[15%] text-orange-200 animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] right-[20%] text-blue-200 animate-bounce">
          <Sparkles className="w-8 h-8" />
        </div>
      </div>

      <div className="container-custom relative z-10 w-full">
        
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <span className="section-label mb-3 inline-flex items-center gap-1.5 bg-white text-orange-500 shadow-sm border border-orange-100 py-1 px-3">
            <Sparkles className="w-3.5 h-3.5" /> OUR PROGRAMMES
          </span>
          <h2 className="font-baloo text-[var(--color-primary)] text-2xl sm:text-3xl lg:text-[38px] leading-tight font-extrabold mb-3">
            Programmes for Every Little One
          </h2>
          <p className="font-nunito text-sm sm:text-[15px] text-[var(--color-muted)] font-medium max-w-xl mx-auto leading-relaxed">
            Thoughtfully designed learning experiences that nurture growth, confidence, and joyful discovery at every stage.
          </p>
        </div>

        {/* Dense & Balanced Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Realistic Continuous River */}
          <div className="lg:col-span-4 xl:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-visible pointer-events-none lg:pointer-events-auto">
            
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 600">
              <defs>
                <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#AEE1FF" />
                  <stop offset="50%" stopColor="#BAE0FF" />
                  <stop offset="100%" stopColor="#D9EFFF" />
                </linearGradient>
              </defs>
              
              {/* Continuous River Flowing Bottom to Top */}
              <path d="M 100 650 C 60 620, 140 550, 100 450 C 20 300, 180 150, 100 -50" fill="none" stroke="url(#riverGrad)" strokeWidth="80" strokeLinecap="round" />
              
              {/* River Highlights */}
              <path d="M 100 650 C 60 620, 140 550, 100 450 C 20 300, 180 150, 100 -50" fill="none" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="30" strokeLinecap="round" />
              
              {/* The invisible exact motion path for GSAP */}
              <path ref={riverPathRef} d="M 100 650 C 60 620, 140 550, 100 450 C 20 300, 180 150, 100 -50" fill="none" stroke="transparent" strokeWidth="2" />
              
              {/* Playful River Ripples */}
              <path d="M 80 80 Q 100 100 120 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M 120 280 Q 130 300 150 280" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M 60 480 Q 80 490 90 470" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>

            {/* Milestones with Pill Labels below them */}
            {programmes.map((prog, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  ref={(el) => { milestoneRefs.current[idx] = el; }}
                  onClick={() => {
                    // Manual seeking via timeline calculation
                    if (idx === 0) tlRef.current?.seek(0);
                    if (idx === 1) tlRef.current?.seek(2.5);
                    if (idx === 2) tlRef.current?.seek(5.0);
                  }}
                  className={`absolute flex flex-col items-center justify-center transition-all duration-500 z-10 pointer-events-auto cursor-pointer ${isActive ? 'scale-110 shadow-lg' : 'scale-100 hover:scale-105'}`}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-500 border-[3px] ${isActive ? prog.borderColor : 'border-transparent'} shadow-md`}>
                    <div className={`p-2.5 md:p-3 rounded-full ${prog.bgColor} ${prog.color}`}>
                      {prog.icon}
                    </div>
                    {isActive && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className={`absolute inset-0 rounded-full border-2 ${prog.borderColor}`}
                      />
                    )}
                  </div>
                  
                  {/* Pill Label matching the Image */}
                  <div className="mt-2 bg-white px-3 py-1 rounded-full text-[13px] md:text-[14px] font-baloo font-bold shadow-sm border border-gray-100 whitespace-nowrap text-[var(--color-primary)]">
                    {prog.title}
                  </div>
                </button>
              );
            })}

            {/* Clownfish Mascot */}
            <div
              ref={fishRef}
              className="absolute w-12 h-12 md:w-16 md:h-16 z-20 pointer-events-none drop-shadow-md"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <ClownfishSVG />
              {/* Fish Swimming Bob */}
              <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0" />
            </div>

          </div>

          {/* Right Column: Dense Dynamic Content Panel */}
          <div className="lg:col-span-8 xl:col-span-9 relative h-full min-h-[350px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={activeProg.boxShape}
                className={`bg-white p-4 sm:p-6 md:p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-4 ${activeProg.borderColor} flex flex-col xl:flex-row gap-6 md:gap-8 h-full overflow-hidden`}
              >
                
                {/* Content Side (Primary Focus) */}
                <div className="w-full xl:w-[55%] flex flex-col justify-center order-2 xl:order-1 relative z-10">
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${activeProg.bgColor} ${activeProg.color} w-fit mb-3 shadow-sm`}>
                    <Smile className="w-3.5 h-3.5" />
                    <span className="text-xs md:text-sm font-bold">{activeProg.badge}</span>
                  </div>
                  
                  <h3 className={`font-baloo text-2xl md:text-[32px] font-extrabold ${activeProg.color} mb-1.5 leading-tight`}>
                    {activeProg.title}
                  </h3>
                  <p className="font-nunito text-sm md:text-base font-bold text-orange-600 mb-3">
                    {activeProg.tagline}
                  </p>
                  <p className="font-nunito text-[14px] md:text-[15px] text-[var(--color-body)] leading-relaxed mb-5">
                    {activeProg.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {activeProg.features.map((feat, idx) => (
                       <div key={idx} className="flex items-start gap-3">
                         <div className={`mt-0.5 p-2 rounded-xl ${activeProg.bgColor} ${activeProg.color}`}>
                           {feat.icon}
                         </div>
                         <div>
                           <h4 className="font-baloo text-[15px] md:text-base font-bold text-[var(--color-dark)] leading-tight mb-0.5">{feat.title}</h4>
                           <p className="font-nunito text-[13px] md:text-sm text-[var(--color-muted)] leading-relaxed">{feat.desc}</p>
                         </div>
                       </div>
                    ))}
                  </div>

                  <button onClick={() => openModal("apply")} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-[15px] transition-transform hover:scale-105 hover:shadow-md w-fit flex items-center gap-2 mt-auto">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Side (Abstract Shaped Image) */}
                <div className="relative w-full xl:w-[45%] h-[220px] xl:h-auto overflow-hidden shadow-inner order-1 xl:order-2 border-[3px] border-white ring-1 ring-gray-100" style={activeProg.imageShape}>
                   <Image src={activeProg.image} fill className="object-cover" alt={activeProg.title} />
                   
                   <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-sm -rotate-3">
                     {activeProg.icon}
                   </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
