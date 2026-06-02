"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Calendar, Award, Heart, GraduationCap, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import { useModal } from "../context/ModalContext";

const slides = [
  { src: "/real_school/galleryimg-1.jpeg", alt: "Preschool children engaging in fun hands-on painting and creative arts" },
  { src: "/classrooms/galleryimg-4.jpeg", alt: "Preschool students playing educational group learning games" },
  { src: "/real_school/galleryimg-5.jpeg", alt: "Toddlers building shapes with colorful primary blocks" },
  { src: "/classrooms/galleryimg-6.jpeg", alt: "Kids exploring sensory play activities in a clean bright classroom" },
  { src: "/classrooms/galleryimg-7.jpeg", alt: "Children sharing smiles and working together on craft workshops" },
];

const stats = [
  {
    icon: <Award className="w-6 h-6 text-[var(--color-accent-teal)]" />,
    value: "1.5+",
    label: "Years of Excellence",
    bgClass: "bg-[#e0f7fa]",
  },
  {
    icon: <Heart className="w-6 h-6 text-[var(--color-accent-orange)]" />,
    value: "500+",
    label: "Happy Families",
    bgClass: "bg-[#fff3e0]",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[var(--color-secondary)]" />,
    value: "Experienced",
    label: "& Caring Teachers",
    bgClass: "bg-[var(--color-bg-purple)]",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[var(--color-accent-green)]" />,
    value: "Safe & Secure",
    label: "Environment",
    bgClass: "bg-[#e8f5e9]",
  },
];

export default function HeroBanner() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-[var(--color-offwhite)]">

      {/* ── Decorative background doodles ── */}
      {/* Low-opacity layer for SVG paths only */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        {/* Dashed arc */}
        <svg className="absolute top-0 left-10 w-[320px] h-[160px] text-orange-300 opacity-30 hidden xl:block" fill="none" viewBox="0 0 320 160">
          <path d="M10,150 Q160,10 310,150" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="6,8" />
        </svg>

        {/* Paper airplane */}
        <svg className="absolute top-4 left-[280px] w-10 h-10 text-[var(--color-primary)] opacity-40 hidden xl:block animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 2L2 9.25L10.5 13.5L18 7.5L12 15L16.25 22L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Colorful, visible, big decorative stars — outside the faded layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
        {/* Top-left — large teal star */}
        <span className="absolute top-[18%] left-[3%] text-4xl text-[var(--color-accent-teal)] animate-pulse drop-shadow-md">★</span>
        {/* Mid-left — large purple star */}
        <span className="absolute top-[55%] left-[5%] text-3xl text-[var(--color-secondary)] animate-pulse delay-300 drop-shadow-md">★</span>
        {/* Bottom-left small — orange star */}
        <span className="absolute bottom-[15%] left-[12%] text-2xl text-[var(--color-accent-orange)] animate-pulse delay-700 drop-shadow-md">✦</span>
        {/* Center-ish — big golden star */}
        <span className="absolute top-[8%] left-[44%] text-5xl text-[#FDB813] animate-pulse delay-200 drop-shadow-lg hidden lg:block">★</span>
        {/* Top-right — big pink/red star */}
        <span className="absolute top-[12%] right-[4%] text-4xl text-[var(--color-accent-red)] animate-pulse delay-500 drop-shadow-md hidden sm:block">★</span>
        {/* Mid-right — green star */}
        <span className="absolute top-[50%] right-[3%] text-3xl text-[var(--color-accent-green)] animate-pulse delay-100 drop-shadow-md hidden lg:block">✦</span>
        {/* Bottom-right — accent orange small */}
        <span className="absolute bottom-[20%] right-[8%] text-2xl text-[var(--color-primary)] animate-pulse delay-600 drop-shadow-md hidden sm:block">★</span>
      </div>

      <div className="container-custom relative z-10">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-start">

          {/* ── Left Column: Content ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:pt-6">
            <span className="section-label mb-5 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-ping"></span>
              Welcome to Small wonders Preschool
            </span>

            <h1 className="mb-6 font-baloo text-[var(--color-primary)] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-extrabold tracking-tight">
              Where Little Minds <br className="hidden sm:inline" />
              Blossom Into{" "}
              <span className="text-[var(--color-secondary)]">Bright Futures</span>
            </h1>

            <p className="mb-8 font-nunito text-base sm:text-lg text-[var(--color-body)] max-w-xl font-medium leading-relaxed">
              A joyful, safe and stimulating environment where children learn through play,
              explore their potential and grow into confident, compassionate individuals.
            </p>

            <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <Button
                label="Admissions Open"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
                iconPosition="right"
                className="group w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 transition-transform shadow-md"
                onClick={() => openModal("apply")}
              />
              <Button
                label="Book a Visit"
                variant="white"
                size="lg"
                icon={<Calendar className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />}
                iconPosition="left"
                className="group w-full sm:w-auto bg-[#FDB813] text-[var(--color-purple-deep)] hover:bg-[#ffd95a] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md font-bold"
                onClick={() => openModal("visit")}
              />
            </div>
          </div>

          {/* ── Right Column: Carousel + Stats ── */}
          <div className="lg:col-span-6 flex flex-col items-center relative">

            {/* Soft decorative background shadow blob */}
            <div className="absolute inset-0 bg-yellow-100 rounded-[50px_130px_50px_110px] filter blur-2xl opacity-40 transform rotate-6 scale-105 pointer-events-none"></div>

            {/* Organic tilted carousel frame */}
            <div className="relative w-full max-w-[560px] aspect-[1.1] sm:aspect-[1.15] lg:aspect-[1.1] border-[12px] border-[#FDB813] rounded-[140px_40px_140px_40px] shadow-[0_20px_50px_rgba(107,63,160,0.15)] overflow-hidden bg-zinc-100 z-10">

              {slides.map((slide, index) => {
                const isActive = index === activeSlide;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-[1800ms] ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none"></div>
                  </div>
                );
              })}
            </div>

            {/* ── Stats bar directly below the carousel ── */}
            <div className="relative z-10 w-full max-w-[560px] bg-white rounded-2xl border border-[var(--color-border)] shadow-[0_8px_28px_-6px_rgba(107,63,160,0.10)] px-2 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 w-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex-1 flex items-center gap-1.5 sm:gap-2.5 p-1 rounded-xl hover:bg-[var(--color-offwhite)] transition-all duration-200 group min-w-0"
                  >
                    {/* Circular tinted icon */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-400 group-hover:scale-110 ${stat.bgClass}`}>
                      <div className="scale-75 sm:scale-90 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] sm:text-xs md:text-sm font-extrabold text-[var(--color-dark)] font-baloo leading-tight">
                        {stat.value}
                      </span>
                      <span className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-[var(--color-muted)] font-nunito leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating emoji badges */}
            <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-purple-100 rounded-full border-4 border-white flex items-center justify-center shadow-md animate-bounce hidden sm:flex z-20">
              <span className="text-xl">🎨</span>
            </div>
            <div className="absolute top-2 -right-3 w-10 h-10 bg-orange-100 rounded-full border-4 border-white flex items-center justify-center shadow-md animate-pulse hidden sm:flex z-20">
              <span className="text-lg">🧸</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
