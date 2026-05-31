"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
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
              className="font-extrabold leading-tight mb-4"
              style={{
                fontSize: "clamp(2.8rem, 12vw, 2.8rem)",
                fontFamily: "Georgia, serif",
              }}
            >
              <span style={{ color: "#E06820" }}>Nurturing Young Minds</span>
              <br />
              <span style={{ color: "#E06820" }}>Building </span>
              <span style={{ color: "#6b3fa0" }}>Bright Futures</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              A joyful learning environment where curiosity grows,
              creativity thrives, and every child shines.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-white uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "#6b3fa0" }}
            >
              Enroll Your Child Today
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

          </div>
        </div>
      </div>

      {/* Wave at bottom */}
      <div className="absolute -bottom-6 left-0 w-full z-10">
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
          width={1900}
          height={80}
          className="w-full h-auto block"
        />
        </div>

    </section>
  );
}