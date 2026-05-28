"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  relation: string;
  text: string;
  avatar: string;
  imageOnLeft: boolean;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      relation: "Mother of Aarav (LKG)",
      text: "Small Wonders has helped my child become more confident, independent and happy. The teachers are caring and supportive. We are grateful for the wonderful environment!",
      avatar: "/avatar_priya.png",
      imageOnLeft: true,
    },
    {
      name: "Rahul Verma",
      relation: "Father of Anaya (Nursery)",
      text: "The activities, teaching methods and personal attention given to each child is excellent. I highly recommend Small Wonders for every parent looking for quality preschool education.",
      avatar: "/avatar_rahul.png",
      imageOnLeft: false,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-offwhite)] overflow-hidden border-b border-[var(--color-border)]">
      
      {/* Decorative stars scattered on sides */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Left side stars */}
        <span className="absolute top-[25%] left-[8%] text-3xl text-amber-400 animate-pulse">★</span>
        <span className="absolute bottom-[30%] left-[6%] text-xl text-purple-400 animate-bounce">✦</span>
        {/* Right side stars */}
        <span className="absolute top-[35%] right-[7%] text-2xl text-purple-400 animate-pulse">✦</span>
        <span className="absolute bottom-[20%] right-[9%] text-3xl text-amber-400 animate-bounce">★</span>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-3">
            {/* Dots on left */}
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDB813]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)]"></span>
            
            <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold px-3">
              What Parents Say
            </h2>

            {/* Dots on right */}
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDB813]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          </div>
        </div>

        {/* Testimonials Alternating Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {testimonials.map((test, index) => {
            const cardBorderColor = index % 2 === 0 ? "border-[#FDB813]" : "border-[#6b3fa0]";
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-4 ${cardBorderColor} p-6 sm:p-8 flex flex-col md:flex-row gap-6 shadow-[0_12px_40px_rgba(107,63,160,0.06)] hover:shadow-xl transition-all duration-300 items-center justify-between`}
              >
                {/* Quote Icon Badge */}
                <span className="absolute top-4 left-4 text-4xl font-serif text-[#FDB813]/25 select-none pointer-events-none">
                  “
                </span>

                {/* Alternating Layout */}
                {test.imageOnLeft ? (
                  <>
                    {/* Avatar Left */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100 flex-shrink-0 shadow-md">
                      <Image
                        src={test.avatar}
                        alt={`Portrait of parent ${test.name}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    {/* Text Right */}
                    <div className="flex-1 flex flex-col justify-between text-center md:text-left min-w-0">
                      <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed italic mb-4">
                        "{test.text}"
                      </p>
                      <div>
                        <h4 className="font-baloo text-base font-extrabold text-[var(--color-dark)] leading-none">
                          - {test.name}
                        </h4>
                        <span className="font-nunito text-xs text-[var(--color-muted)] font-semibold mt-1 block">
                          {test.relation}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text Left */}
                    <div className="flex-1 flex flex-col justify-between text-center md:text-left order-2 md:order-1 min-w-0">
                      <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed italic mb-4">
                        "{test.text}"
                      </p>
                      <div>
                        <h4 className="font-baloo text-base font-extrabold text-[var(--color-dark)] leading-none">
                          - {test.name}
                        </h4>
                        <span className="font-nunito text-xs text-[var(--color-muted)] font-semibold mt-1 block">
                          {test.relation}
                        </span>
                      </div>
                    </div>
                    {/* Avatar Right */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100 flex-shrink-0 shadow-md order-1 md:order-2">
                      <Image
                        src={test.avatar}
                        alt={`Portrait of parent ${test.name}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonial slider indicator dots */}
        <div className="flex justify-center items-center gap-1.5 mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FDB813] cursor-pointer opacity-50 hover:opacity-100"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] cursor-pointer opacity-50 hover:opacity-100"></span>
        </div>

      </div>
    </section>
  );
}
