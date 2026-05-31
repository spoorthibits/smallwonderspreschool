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
        height: "85vh",
        minHeight: "600px",
        backgroundImage: "url('/bannerimg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        overflow: "visible",
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex items-center overflow-hidden pb-24">
        <div className="mx-auto px-10 md:px-6 w-full max-w-screen-xl">
          <div className="max-w-xl relative">

            {/* Arrow above heading */}
            {/* <div className="absolute -top-29 left-94">
              <Image
                src="/bannerarrow.png"
                alt="arrow"
                width={240}
                height={240}
                className="object-contain"
              />
            </div> */}

            {/* Heading */}
            <h2
              className="font-extrabold leading-tight mb-4 relative z-10"
              style={{
                fontSize: "clamp(2.8rem, 12vw, 2.8rem)",
                fontFamily: "Georgia, serif",
              }}
            >
              <span style={{ color: "var(--color-primary)" }}>Nurturing Young Minds</span>
              <br />
              <span style={{ color: "var(--color-primary)" }}>Building </span>
              <span style={{ color: "var(--color-secondary)" }}>Bright Futures</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              A joyful learning environment where curiosity grows,
              creativity thrives, and every child shines.
            </p>

            <button
              onClick={() => openModal("apply")}
              className="inline-flex items-center gap-2 font-bold text-white uppercase tracking-wider md:tracking-widest px-6 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "var(--color-secondary)" }}
            >
              Enroll Your Child Today
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {/* Fun background floating elements */}
            <div className="absolute top-0 right-10 md:right-32 text-yellow-400 opacity-60 animate-[bounce_4s_infinite] pointer-events-none z-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
              </svg>
            </div>
            <div className="absolute -bottom-6 left-10 text-pink-400 opacity-60 animate-pulse pointer-events-none z-0">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Wave at bottom */}
      <div className="absolute -bottom-9 left-0 w-full z-10">
        {/* Down Arrow centered above wave */}
        <div className="absolute top-17 left-80 -translate-x-1/2 z-20">
          <Image
            src="/downarrow.png"
            alt="scroll down"
            width={160}
            height={120}
            className="object-contain"
          />
        </div>
        <Image
          src="/wavehome.png"
          alt="wave"
          width={1500}
          height={50}
          className="w-full h-auto block"
        />
        </div>

    </section>
  );
}