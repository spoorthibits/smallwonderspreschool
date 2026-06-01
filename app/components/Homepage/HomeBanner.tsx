"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "../../context/ModalContext";

export default function HomeBanner() {
  const { openModal } = useModal();
  return (
    <section
      className="relative w-full"
      style={{
        overflow: "visible",
      }}
    >
      {/* ── MOBILE BANNER IMAGE (visible only on mobile, hidden on md+) ── */}
      <div className="block md:hidden w-full relative" style={{ aspectRatio: "3/4" }}>
        <Image
          src="/bannerimgmobile.png"
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── DESKTOP BANNER (hidden on mobile, visible on md+) ── */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url('/bannerimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── TABLET: reduced height (768–1023px only) ── */}
      <div
        className="hidden md:block lg:hidden"
        style={{ height: "60vh", minHeight: "420px" }}
      />

      {/* ── DESKTOP: original height (1024px+) — UNCHANGED ── */}
      <div
        className="hidden lg:block"
        style={{ height: "85vh", minHeight: "600px" }}
      />

      {/* ── DESKTOP CONTENT (hidden on mobile) ── */}
      <div className="hidden md:flex absolute inset-0 items-center overflow-hidden pb-24">
        <div className="mx-auto px-10 md:px-6 w-full max-w-screen-xl">
          <div className="max-w-xl relative">

            {/* Heading — tablet gets smaller font, desktop unchanged */}
            <h2
              className="font-extrabold leading-tight mb-4 relative z-10"
              style={{
                fontFamily: "Georgia, serif",
                lineHeight: "1.2",
                whiteSpace: "nowrap",
              }}
            >
              {/* tablet font size */}
              <span className="block lg:hidden" style={{ fontSize: "1.75rem" }}>
                <span style={{ color: "var(--color-primary)" }}>Nurturing Young Minds</span>
                <br />
                <span style={{ color: "var(--color-primary)" }}>Building </span>
                <span style={{ color: "var(--color-secondary)" }}>Bright Futures</span>
              </span>
              {/* desktop font size — UNCHANGED */}
              <span className="hidden lg:block" style={{ fontSize: "clamp(3rem, 3.0vw, 3.5rem)" }}>
                <span style={{ color: "var(--color-primary)" }}>Nurturing Young Minds</span>
                <br />
                <span style={{ color: "var(--color-primary)" }}>Building </span>
                <span style={{ color: "var(--color-secondary)" }}>Bright Futures</span>
              </span>
            </h2>

            {/* Paragraph — tablet smaller, desktop unchanged */}
            <p className="text-gray-700 leading-relaxed mb-8 text-sm lg:text-lg max-w-[260px] lg:max-w-none">
              A joyful learning environment where curiosity grows,
              creativity thrives, and every child shines.
            </p>

            {/* Button — tablet smaller padding, desktop unchanged */}
            <button
              onClick={() => openModal("apply")}
              className="inline-flex items-center gap-2 font-bold text-white uppercase tracking-wider md:tracking-wide lg:tracking-widest px-5 py-2.5 lg:px-10 lg:py-4 text-xs lg:text-base rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "var(--color-secondary)" }}
            >
              Enroll Your Child Today
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* ── WAVE (always visible) ── */}
      <div className="absolute -bottom-9 left-0 w-full z-10">

        {/* Down Arrow — desktop only */}
        <div className="hidden md:block absolute lg:top-10 lg:left-80 md:-top-6 md:left-50 -translate-x-1/2 z-20">
          <Image
            src="/downarrow.png"
            alt="scroll down"
            width={160}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Books image — desktop only */}
        <div className="hidden md:block absolute bottom-2 left-4 lg:left-30 md:left-10 z-20">
          <Image
            src="/bookhome.png"
            alt="books"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Happy Children stats card — desktop only */}
        <div
          className="hidden md:flex absolute bottom-10 right-6 md:right-10 lg:right-36 z-20 items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg"
          style={{ minWidth: "220px" }}
        >
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18H23V16.5C23 14.17 18.33 13 16 13Z" fill="var(--color-primary)"/>
              </svg>
              <span className="font-extrabold text-lg" style={{ color: "var(--color-primary)" }}>38+</span>
            </div>
            <span className="text-gray-500 text-xs font-medium">Happy Children</span>
          </div>

          <div className="flex items-center -space-x-2 ml-auto">
            {["/galleryimg-8.jpeg", "/galleryimg-12.jpeg"].map((src, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                style={{ zIndex: 10 - i }}
              >
                <Image src={src} alt={`child ${i + 1}`} width={36} height={36} className="object-cover w-full h-full" />
              </div>
            ))}
            <div
              className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "var(--color-primary)", zIndex: 7 }}
            >
              +
            </div>
          </div>
        </div>

        {/* Mobile wave */}
        <Image
          src="/wavemobile.png"
          alt="wave"
          width={1500}
          height={50}
          className="w-full h-auto block md:hidden relative bottom-8"
        />

        {/* Desktop/tablet wave */}
        <Image
          src="/wavehome.png"
          alt="wave"
          width={1500}
          height={50}
          className="w-full h-auto hidden md:block relative md:bottom-6"
        />
      </div>
    </section>
  );
}