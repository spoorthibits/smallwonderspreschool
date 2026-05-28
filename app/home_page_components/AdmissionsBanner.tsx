"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight } from "lucide-react";

export default function AdmissionsBanner() {
  const router = useRouter();

  return (
    <section className="relative w-full py-6 md:py-8 mt-12 md:mt-24 z-10">
      {/* Background container that clips the background decoration */}
      <div className="absolute inset-0 bg-[#FDB813] rounded-t-[35px] md:rounded-t-[60px] overflow-hidden z-0">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ── Column 1: Kid with Painted Hands ── */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start relative">
            <div className="relative w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] lg:w-[330px] lg:h-[330px] -mt-24 sm:-mt-28 lg:-mt-44 drop-shadow-lg select-none z-10">
              <Image
                src="/girl_painted_hands_new.png"
                alt="Smiling little girl showing colorful painted hands"
                fill
                sizes="(max-width: 1024px) 270px, 330px"
                className="object-contain scale-130 origin-bottom"
                priority
              />
            </div>
          </div>

          {/* ── Column 2: Admissions Heading & Text ── */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="font-baloo text-[var(--color-purple-deep)] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-extrabold mb-2">
              Admissions Open for 2025-26
            </h2>
            <p className="font-nunito text-sm sm:text-base text-[var(--color-purple-deep)] font-bold max-w-xl leading-relaxed opacity-95">
              Give your child the best start in a nurturing and joyful learning environment.
            </p>
          </div>

          {/* ── Column 3: Call to Action Buttons on the Right ── */}
          <div className="lg:col-span-4 flex flex-row gap-3 items-center justify-center lg:justify-end w-full">
            <button
              onClick={() => router.push("/contact")}
              className="group px-6 py-2.5 rounded-full bg-[var(--color-purple-deep)] hover:bg-[#381166] text-white font-baloo text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[var(--color-purple-deep)] border-2 border-white font-baloo text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
