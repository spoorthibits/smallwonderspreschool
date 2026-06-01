"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { Smile, Sparkles, BookOpen, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ProgramItem {
  id: number;
  title: string;
  age: string;
  description: string;
  bullets: string[];
  image: string;
  themeColor: string;
  icon: React.ReactNode;
}

const programs: ProgramItem[] = [
  {
    id: 1,
    title: "Play Group",
    age: "1.5 to 2 Years",
    description: "A joyful start where little ones explore, play, and build foundational social skills through guided sensory activities and friendly interactions.",
    bullets: [
      "Sensory & motor skill building",
      "Early speech & communication growth",
      "Social play & interactive sharing activities",
    ],
    image: "/kids-slide.png",
    themeColor: "var(--color-accent-green)",
    icon: <Smile size={18} />,
  },
  {
    id: 2,
    title: "Nursery",
    age: "2 to 3 Years",
    description: "Building curiosity and creative expression through sensory play, storytelling, and interactive guided activities designed to inspire young minds.",
    bullets: [
      "Creative storytelling & language play",
      "Sensory-based cognitive worksheets",
      "Expressive music, art & craft sessions",
    ],
    image: "/kids-reading.png",
    themeColor: "var(--color-accent-orange)",
    icon: <Sparkles size={18} />,
  },
  {
    id: 3,
    title: "LKG (IK1)",
    age: "3 to 4 Years",
    description: "Developing critical thinking, early communication, and foundational academic skills to foster confidence and independence in every child.",
    bullets: [
      "Intro to basic numeracy & word phonics",
      "Interactive reading & handwriting play",
      "Independence & logical thinking building",
    ],
    image: "/kids-toy.png",
    themeColor: "var(--color-secondary)",
    icon: <BookOpen size={18} />,
  },
  {
    id: 4,
    title: "UKG (IK2)",
    age: "4 to 5 Years",
    description: "Preparing young learners for formal primary schooling with advanced literacy, math concepts, social skills, and academic confidence.",
    bullets: [
      "Comprehensive primary school readiness",
      "Analytical problem-solving tasks",
      "Confidence, self-care & public talking training",
    ],
    image: "/kids-puzzle-table.jpg",
    themeColor: "var(--color-accent-teal)",
    icon: <Star size={18} />,
  },
];

export default function AboutProgramsScroll() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<any>(null);

  // Monitor resize to set mobile status
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Monitor scroll for desktop/tablet wheel hijacking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Wheel hijacking is active on tablets and desktop screens (width >= 640px)
      if (window.innerWidth < 640) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Hijack scroll when the container is prominently centered in the viewport
      const isCentered = rect.top < viewportHeight * 0.4 && rect.bottom > viewportHeight * 0.4;
      if (!isCentered) return;

      const now = Date.now();
      // Add cooldown threshold for smooth slide selection transitions
      if (now - lastScrollTime.current < 650) {
        if (e.deltaY > 0 && active < programs.length - 1) {
          e.preventDefault();
        } else if (e.deltaY < 0 && active > 0) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        if (active < programs.length - 1) {
          e.preventDefault();
          setActive((prev) => prev + 1);
          lastScrollTime.current = now;
        }
      } else if (e.deltaY < 0) {
        if (active > 0) {
          e.preventDefault();
          setActive((prev) => prev - 1);
          lastScrollTime.current = now;
        }
      }
    };

    // Use passive: false to allow e.preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [active]);

  // Mobile Auto-rotate timer
  useEffect(() => {
    if (!isMobile) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % programs.length);
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        clearTimeout(timerRef.current);
      }
    };
  }, [isMobile]);

  const handleManualNav = (index: number) => {
    setActive(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      clearTimeout(timerRef.current);
    }
    if (isMobile) {
      // Resume auto-scroll after 8 seconds of inactivity (only if on mobile)
      timerRef.current = setTimeout(() => {
        timerRef.current = setInterval(() => {
          setActive((prev) => (prev + 1) % programs.length);
        }, 4500);
      }, 8000);
    }
  };

  const handleDotClick = (index: number) => {
    handleManualNav(index);
  };

  const currentProgram = programs[active] || programs[0];

  return (
    <div
      ref={containerRef}
      className="w-full h-auto lg:h-[800px] pt-16 pb-12 md:pt-20 md:pb-16 relative overflow-hidden bg-white" // Sized exactly to content height, no vertical h-[300vh] or 1300px gaps!
    >
      {/* Floating decoration shapes in background margins */}
      <div className="absolute left-[2%] top-[5%] w-10 h-10 star-float z-0 opacity-50 pointer-events-none hidden lg:block">
        <img src="/slider_shape02.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[2%] bottom-[5%] w-12 h-12 balloon-float z-0 opacity-50 pointer-events-none hidden lg:block">
        <img src="/slider_shape01.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <p className="text-[var(--color-primary)] font-bold text-[13px] tracking-[0.15em] uppercase font-['Nunito'] mb-1">
            — AGE APPROPRIATE PATHS
          </p>
          <h2 className="text-[var(--color-secondary)] font-black text-3xl md:text-5xl font-['Baloo_2'] leading-tight">
            Our Programs
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-16 h-1 rounded-full bg-[var(--color-primary)]" />
          </div>
        </div>

        {/* ── DESKTOP TABS LAYOUT ── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-12 justify-between flex-row">

          {/* 1. Left side: Discover Checklist Card */}
          <div className="w-[300px] xl:w-[360px] flex-shrink-0">
            <div className="bg-[#f5f0ed]/70 h-[400px] backdrop-blur-sm rounded-[32px] p-10 pr-6 border border-[var(--color-border)] shadow-sm relative w-full">

              <h3 className="text-[var(--color-dark)] font-black text-3xl font-['Baloo_2'] mb-4 uppercase tracking-wider">
                Discover
              </h3>

              <ul className="space-y-4 mt-6">
                {programs.map((prog, index) => {
                  const isActive = active === index;
                  return (
                    <li
                      key={prog.id}
                      onClick={() => handleDotClick(index)}
                      className="flex items-start gap-4 cursor-pointer group h-[40px]"
                    >
                      <span
                        className="text-2xl leading-none transition-colors duration-300"
                        style={{ color: isActive ? prog.themeColor : "#d4c8c2" }}
                      >
                        •
                      </span>
                      <span
                        className="font-medium tracking-wide uppercase transition-all duration-300 text-sm md:text-xl font-['Baloo_2']"
                        style={{
                          color: isActive ? prog.themeColor : "var(--color-dark)",
                          transform: isActive ? "translateX(6px)" : "translateX(0)",
                        }}
                      >
                        {prog.title}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Dot indicators */}
              <div className="flex gap-2.5 mt-8">
                {programs.map((prog, index) => (
                  <button
                    key={prog.id}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === active ? "w-10" : "w-2"
                      }`}
                    style={{
                      backgroundColor: index === active ? prog.themeColor : "#d4c8c2",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* 2. Middle side: Content Text Description */}
          <div className="flex-grow min-w-[320px] xl:min-w-[500px] h-[400px] px-6 ">
            <div key={active} className="flex flex-col justify-center min-h-[250px]">

              <span
                className="w-fit font-bold text-xs uppercase tracking-wider font-['Nunito'] px-3.5 py-1 rounded-full border mb-3 animate-fade-in-up"
                style={{
                  color: currentProgram.themeColor,
                  borderColor: currentProgram.themeColor,
                }}
              >
                {currentProgram.age}
              </span>

              <h3
                className="font-black text-3.5xl md:text-5xl font-['Baloo_2'] mb-4 mt-2 transition-colors duration-300 animate-fade-in-up"
                style={{ color: currentProgram.themeColor }}
              >
                {currentProgram.title}
              </h3>

              <p className="text-[var(--color-body)] text-[17px] md:text-[22px] leading-relaxed font-['Nunito'] mb-5 max-w-[480px] animate-fade-in-up">
                {currentProgram.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {currentProgram.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs md:text-[20px] text-[var(--color-body)] font-['Nunito'] font-bold animate-fade-in-up"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: currentProgram.themeColor }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="animate-fade-in-up delay-200">
                <Button label="Admissions Enquiry" variant="primary" size="lg" />
              </div>

            </div>
          </div>

          {/* 3. Right side: Large static rounded rectangular image (530px x 400px) */}
          <div className="w-[420px] xl:w-[550px] flex-shrink-0 flex justify-center">
            <div className="relative w-full xl:w-[530px] h-[320px] xl:h-[400px]">

              {/* Static offset decorative backing cards */}
              <div
                className="absolute -bottom-2 -left-2 w-full h-full opacity-15 rounded-[24px]"
                style={{ backgroundColor: "var(--color-accent-teal)" }}
              />
              <div
                className="absolute -top-2 -right-2 w-full h-full opacity-15 rounded-[24px]"
                style={{ backgroundColor: "var(--color-accent-orange)" }}
              />

              {/* Styled image container with vertical slider */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-lg border-4 border-white bg-zinc-50">
                <div
                  className="relative w-full h-full transition-transform duration-700 ease-out"
                  style={{
                    height: `${programs.length * 100}%`,
                    transform: `translateY(-${(active / programs.length) * 100}%)`,
                  }}
                >
                  {programs.map((prog, idx) => (
                    <div
                      key={prog.id}
                      className="relative w-full h-full"
                      style={{ height: `${100 / programs.length}%` }}
                    >
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        sizes="(min-width: 1280px) 530px, 420px"
                        priority={idx === 0}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── TABLET LAYOUT (640px <= width < 1024px) ── */}
        <div className="hidden sm:flex lg:hidden flex-col gap-6">

          {/* 1. Horizontal Scrollable Tabs / Pills Selector */}
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center px-1">
            {programs.map((prog, index) => {
              const isActive = active === index;
              return (
                <button
                  key={prog.id}
                  onClick={() => handleDotClick(index)}
                  className="flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-black font-['Baloo_2'] uppercase tracking-wider transition-all duration-300 border cursor-pointer"
                  style={{
                    backgroundColor: isActive ? prog.themeColor : "rgba(245, 240, 237, 0.6)",
                    borderColor: isActive ? prog.themeColor : "var(--color-border)",
                    color: isActive ? "white" : "var(--color-dark)",
                    boxShadow: isActive ? "0 4px 10px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {prog.title}
                </button>
              );
            })}
          </div>

          {/* 2. Content Layout */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch mt-2">

            {/* Left Column / Details Card */}
            <div className="flex-1 bg-[#f5f0ed]/60 backdrop-blur-sm border border-[var(--color-border)] rounded-[28px] p-6 md:p-7 shadow-sm flex flex-col justify-between">
              
              <div key={active} className="flex flex-col">
                <span
                  className="w-fit font-bold text-[10px] md:text-xs uppercase tracking-wider font-['Nunito'] px-3 py-1 rounded-full border mb-3 animate-fade-in-up"
                  style={{
                    color: currentProgram.themeColor,
                    borderColor: currentProgram.themeColor,
                  }}
                >
                  {currentProgram.age}
                </span>

                <h3
                  className="font-black text-2xl md:text-[26px] font-['Baloo_2'] mb-3 mt-1 animate-fade-in-up"
                  style={{ color: currentProgram.themeColor }}
                >
                  {currentProgram.title}
                </h3>

                <p className="text-[var(--color-body)] text-sm md:text-[15px] leading-relaxed font-['Nunito'] mb-5 animate-fade-in-up">
                  {currentProgram.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {currentProgram.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs md:text-[13px] text-[var(--color-body)] font-['Nunito'] font-bold animate-fade-in-up"
                      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: currentProgram.themeColor }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
                {/* Bullet Page Dot Indicators inside the card */}
                <div className="flex gap-2 bg-white/50 rounded-full p-1.5 border border-[var(--color-border)] w-fit mx-auto sm:mx-0">
                  {programs.map((prog, idx) => (
                    <button
                      key={prog.id}
                      onClick={() => handleDotClick(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === active ? "w-6" : "w-1.5"
                      }`}
                      style={{
                        backgroundColor: idx === active ? prog.themeColor : "#d4c8c2",
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button label="Admissions Enquiry" variant="primary" size="md" className="w-full sm:w-auto" />
              </div>

            </div>

            {/* Right Column / Image Card */}
            <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] md:w-[280px] md:h-[210px]">

                {/* Static offset decorative backing cards */}
                <div
                  className="absolute -bottom-1.5 -left-1.5 w-full h-full opacity-15 rounded-[20px]"
                  style={{ backgroundColor: "var(--color-accent-teal)" }}
                />
                <div
                  className="absolute -top-1.5 -right-1.5 w-full h-full opacity-15 rounded-[20px]"
                  style={{ backgroundColor: "var(--color-accent-orange)" }}
                />

                {/* Styled image container with vertical slider */}
                <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-md border-4 border-white bg-zinc-50">
                  <div
                    className="relative w-full h-full transition-transform duration-700 ease-out"
                    style={{
                      height: `${programs.length * 100}%`,
                      transform: `translateY(-${(active / programs.length) * 100}%)`,
                    }}
                  >
                    {programs.map((prog, idx) => (
                      <div
                        key={prog.id}
                        className="relative w-full h-full"
                        style={{ height: `${100 / programs.length}%` }}
                      >
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          sizes="(min-width: 768px) 280px, 100vw"
                          priority={idx === 0}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ── MOBILE LAYOUT (width < 640px) ── */}
        <div className="block sm:hidden relative px-6 select-none overflow-visible">
          
          {/* Card Slider Window */}
          <div className="overflow-hidden w-full rounded-[28px] shadow-lg border border-gray-100 bg-white">
            
            {/* Slider Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {programs.map((prog, idx) => (
                <div key={prog.id} className="w-full flex-shrink-0 flex flex-col bg-white">
                  
                  {/* 1. Full-bleed Image */}
                  <div className="relative w-full aspect-[16/10] bg-zinc-50 border-b border-gray-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="100vw"
                      priority={idx === 0}
                      className="object-cover"
                    />
                  </div>

                  {/* 2. Card Details Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    
                    {/* Header row: Title on left, Age on right */}
                    <div className="flex items-baseline justify-between gap-2 border-b border-gray-100/60 pb-2">
                      <h3
                        className="font-black text-xl font-['Baloo_2'] tracking-wide uppercase"
                        style={{ color: prog.themeColor }}
                      >
                        {prog.title}
                      </h3>
                      <span className="font-bold text-xs uppercase tracking-wider font-['Nunito'] text-gray-500">
                        {prog.age}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--color-body)] text-[14px] leading-relaxed font-['Nunito'] mt-3 mb-3">
                      {prog.description}
                    </p>

                    {/* Bullets List */}
                    <ul className="space-y-1.5 mb-4">
                      {prog.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-2.5 text-xs text-[var(--color-body)] font-['Nunito'] font-bold"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                            style={{ backgroundColor: prog.themeColor }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action row: Dots on left, Button on right */}
                    <div className="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-gray-100">
                      <div className="flex gap-1.5 bg-gray-50 rounded-full p-1.5 border border-gray-100">
                        {programs.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => handleManualNav(dotIdx)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              dotIdx === active ? "w-5" : "w-1.5"
                            }`}
                            style={{
                              backgroundColor: dotIdx === active ? prog.themeColor : "#d4c8c2",
                            }}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                      <Button label="Enquire" variant="primary" size="sm" />
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Left/Right Floating Navigation Chevrons */}
          <button
            onClick={() => handleManualNav((active - 1 + programs.length) % programs.length)}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-gray-900 active:scale-90 transition-all z-20 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => handleManualNav((active + 1) % programs.length)}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-gray-900 active:scale-90 transition-all z-20 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </div>
  );
}
