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
    <section className="relative w-full z-30 pt-[10px] md:pt-4 lg:pt-[10px]">

      {/* ══════════════════════════════════════
          MOBILE layout  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="md:hidden relative bg-[#FDB813] rounded-t-[35px] overflow-visible mt-16 min-h-[85px]">
        {/* decorative bubble */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />

        <div className="relative flex flex-row items-center px-3 pb-2 pt-1 gap-3">
          {/* Kid — absolutely positioned to overflow above the band */}
          <div
            className="absolute pointer-events-none select-none z-20"
            style={{ width: 210, height: 780, bottom: -9, left: -22 }}
          >
            <Image
              src="/girl_painted_hands_new.png"
              alt="Smiling little girl showing colorful painted hands"
              fill
              sizes="140px"
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Spacer to push text right of the kid image */}
          <div style={{ width: 140 }} className="shrink-0" />

          {/* Text + buttons */}
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h2 className="font-baloo text-[var(--color-purple-deep)] text-base leading-tight font-extrabold mb-1">
              Admissions Open for 2025-26
            </h2>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP layout  (hidden on mobile)
          — md (768–1023px): tighter grid, buttons wrap below text
          — lg (1024px+):    full side-by-side layout
      ══════════════════════════════════════ */}
      <div className="hidden md:block relative">

        {/* Yellow band */}
        <div className="relative bg-[#FDB813] rounded-t-[60px] overflow-hidden h-[128px]">
          {/* decorative bubble */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />

          <div className="container-custom h-full">

            {/* ── lg+ layout: 3-col grid, buttons on far right ── */}
            <div className="hidden lg:grid grid-cols-12 gap-8 h-full items-center">
              {/* Spacer for kid */}
              <div className="col-span-3" />

              {/* Heading & subtext */}
              <div className="col-span-5 flex flex-col items-start">
                <h2 className="font-baloo text-[var(--color-purple-deep)] text-3xl lg:text-[32px] leading-tight font-extrabold mb-1">
                  Admissions Open for 2025-26
                </h2>
                <p className="font-nunito text-base text-[var(--color-purple-deep)] font-bold max-w-xl leading-relaxed opacity-95">
                  Give your child the best start in a nurturing and joyful learning environment.
                </p>
              </div>

              {/* Buttons */}
              <div className="col-span-4 flex flex-row gap-3 items-center justify-end">
                <button
                  onClick={() => openModal("apply")}
                  className="group px-6 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-baloo text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => router.push("/contact")}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[var(--color-purple-deep)] border-2 border-white font-baloo text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Contact Us
                </button>
              </div>
            </div>

            {/* ── md (tablet 768–1023px): kid spacer + text + buttons stacked ── */}
            <div className="lg:hidden flex flex-row items-center h-full gap-4 pr-4">
              {/* Spacer for kid image (narrower than desktop) */}
              <div className="shrink-0" style={{ width: "clamp(160px, 22vw, 220px)" }} />

              {/* Text block */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h2 className="font-baloo text-[var(--color-purple-deep)] text-xl leading-tight font-extrabold mb-0.5">
                  Admissions Open for 2025-26
                </h2>
                <p className="font-nunito text-sm text-[var(--color-purple-deep)] font-bold leading-snug opacity-95 line-clamp-2">
                  Give your child the best start in a nurturing and joyful learning environment.
                </p>
              </div>

              {/* Buttons — vertical stack on tablet to avoid overlap */}
              <div className="flex flex-col gap-2 items-stretch shrink-0">
                <button
                  onClick={() => openModal("apply")}
                  className="group px-4 py-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-baloo text-xs font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
                >
                  Enroll Now
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => router.push("/contact")}
                  className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-[var(--color-purple-deep)] border-2 border-white font-baloo text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Kid — outside the band, anchored to bottom-left, overflows upward */}
         <div
          className="absolute lg:bottom-0 lg:left-30 md:bottom-0 md:-left-5 pointer-events-none select-none z-20"
          style={{ width: 250, height: 300 }}>
          <Image
            src="/girl_painted_hands_new.png"
            alt="Smiling little girl showing colorful painted hands"
            fill
            sizes="300px"
            className="object-contain object-bottom"
            priority
          />
        </div>

      </div>

    </section>
  );
}