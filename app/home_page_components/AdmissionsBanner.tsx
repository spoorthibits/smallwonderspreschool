"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function AdmissionsBanner() {
  const router = useRouter();
  const { openModal } = useModal();

  return (
    <section className="relative w-full z-10 pt-[70px]">
      {/* Yellow band — fixed height on tab/desktop */}
      <div className="relative bg-[#FDB813] rounded-t-[35px] md:rounded-t-[60px] overflow-hidden min-h-[140px] md:h-[145px]">
        {/* decorative bubble */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-[10%] w-20 h-20 bg-white/5 rounded-full pointer-events-none hidden md:block" />

        <div className="container-custom h-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2 lg:gap-8 h-full items-center py-6 md:py-0">

            {/* spacer for kid column */}
            <div className="hidden md:block md:col-span-3" />

            {/* Heading & subtext */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start pl-[120px] sm:pl-[160px] md:pl-0">
              <h2 className="font-baloo text-[var(--color-purple-deep)] text-xl sm:text-2xl md:text-[22px] lg:text-[32px] leading-tight font-extrabold mb-1 md:mb-0 lg:mb-1">
                Admissions Open for 2025-26
              </h2>
              <p className="font-nunito text-xs sm:text-sm md:text-[13px] lg:text-base text-[var(--color-purple-deep)] font-bold max-w-xl leading-snug lg:leading-relaxed opacity-95">
                Give your child the best start in a nurturing and joyful learning environment.
              </p>
            </div>

            {/* Buttons */}
            <div className="md:col-span-4 flex flex-row gap-2 md:gap-1 lg:gap-3 items-center justify-center md:justify-end w-full pl-[120px] sm:pl-[160px] md:pl-0">
              <button
                onClick={() => openModal("apply")}
                className="group px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-[var(--color-purple-deep)] hover:bg-[#381166] text-white font-baloo text-[13px] lg:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                Enroll Now
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => router.push("/contact")}
                className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-white hover:bg-gray-50 text-[var(--color-purple-deep)] border-2 border-white font-baloo text-[13px] lg:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current" />
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Kid — sits on top, overflows upward, zero gap at bottom */}
      <div
        className="absolute bottom-8 md:bottom-0 -left-6 md:left-0 lg:left-[max(32px,calc((100vw-80rem)/2+32px))] pointer-events-none select-none z-20"
        style={{ width: "clamp(200px, 20vw, 300px)", height: "clamp(240px, 26vw, 360px)" }}
      >
        <Image
          src="/girl_painted_hands_new.png"
          alt="Smiling little girl showing colorful painted hands"
          fill
          sizes="300px"
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}