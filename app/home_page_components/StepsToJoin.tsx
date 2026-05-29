"use client";

import React from "react";
import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function StepsToJoin() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Book A School Tour",
      description: "Come see our classrooms, meet our team and watch the children at play. Tours run Mon–Fri.",
    },
    {
      number: "02",
      title: "Choose The Right Programme",
      description: "We'll help you pick the best fit — playgroup, preschool or full-day daycare — based on your child's age and needs.",
    },
    {
      number: "03",
      title: "Welcome To The Family",
      description: "Complete a simple enrolment and we'll guide you through a warm, gradual settling-in week.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-[var(--color-border)]">
      
      {/* Decorative background doodles */}
      <div className="absolute top-[20%] left-[45%] w-16 h-16 text-yellow-300 opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Steps List ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase mb-2 font-nunito">
              — How to Join
            </span>
            <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold mb-10">
              Three Simple Steps
            </h2>

            <div className="space-y-8 w-full">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5 items-start group">
                  
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-[var(--color-primary)] text-white font-baloo text-lg font-bold shadow-md shadow-orange-100 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Step Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-baloo text-lg sm:text-xl font-extrabold text-[var(--color-secondary)] leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Image Asset ── */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Background frame decoration */}
            <div className="absolute -inset-4 bg-purple-50 rounded-3xl rotate-2 scale-95 pointer-events-none"></div>
            
            {/* Main Picture of Kids Playing */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-8 border-white z-10">
              <Image
                src="/galleryimg-16.jpeg"
                alt="Children happily playing and learning in the classroom at Small Wonders"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            
            {/* Soft shadow vector */}
            <div className="absolute -bottom-6 -right-4 w-12 h-12 text-yellow-400 opacity-70 hidden md:block">★</div>
          </div>

        </div>
      </div>
    </section>
  );
}
