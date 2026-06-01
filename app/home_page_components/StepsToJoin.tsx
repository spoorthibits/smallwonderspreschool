"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { useModal } from "../context/ModalContext";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function StepsToJoin() {
  const { openModal } = useModal();
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
    <section className="relative py-6 md:py-10 bg-white overflow-hidden">

      {/* Decorative preschool elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[8%] text-pink-300 opacity-40 animate-[bounce_4s_infinite] hidden md:block">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] right-[5%] text-yellow-300 opacity-50 animate-pulse hidden md:block">
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute top-[40%] left-[45%] w-16 h-16 text-yellow-300 opacity-40 pointer-events-none hidden md:block animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* ── Left Column: Steps List ── */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase mb-2 font-nunito">
              — How to Join
            </span>
            <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl md:text-[44px] leading-tight font-extrabold mb-6 md:mb-8">
              Three Simple Steps
            </h2>

            <div className="space-y-5 md:space-y-6 w-full relative">
              {/* Connecting dashed line behind the numbers */}
              <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-[var(--color-primary)] opacity-30 z-0"></div>

              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start group relative z-10">

                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-[var(--color-primary)] text-white font-baloo text-lg font-bold shadow-md shadow-orange-100 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Step Text Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="font-baloo text-base sm:text-xl font-extrabold text-[var(--color-secondary)] leading-snug mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="font-nunito text-sm text-[var(--color-body)] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-7 md:mt-10 w-full flex justify-center md:justify-start">
              <Button
                label="Visit Us"
                variant="secondary"
                size="sm"
                icon={<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
                iconPosition="right"
                onClick={() => openModal("visit")}
                className="text-center group shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              />
            </div>
          </div>

          {/* ── Right Column: Image Asset ── */}
          {/* ── Right Column: Image Asset ── */}
          <div className="md:col-span-6 relative flex justify-center py-4 md:py-6">
            <motion.div
              animate={{
                y: [-6, 6, -6],
                x: [-4, 4, -4],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden md:block relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] aspect-square group origin-center"
            >
              {/* Layer 1 (Bottom Light Colored Shadow) */}
              <div className="absolute -inset-4 md:-inset-6 bg-orange-200/80 [border-radius:64%_36%_40%_60%/48%_55%_45%_52%] transition-transform duration-500 group-hover:scale-105 z-0"></div>

              {/* Layer 2 (Middle Light Colored Shadow) */}
              <div className="absolute -inset-2 md:-inset-3 bg-[var(--color-bg-purple)] [border-radius:50%_50%_60%_40%/40%_60%_50%_50%] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 z-10"></div>

              {/* Main Image Layer */}
              <div className="absolute inset-0 overflow-hidden bg-white border-[6px] border-white [border-radius:56%_44%_47%_53%/53%_48%_52%_47%] shadow-md z-20 transition-transform duration-500">
                <Image
                  src="/galleryimg-16.jpeg"
                  alt="Children happily playing and learning in the classroom at Small Wonders"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Soft shadow vector */}
            <div className="absolute -bottom-2 right-4 md:right-10 w-12 h-12 text-yellow-400 opacity-70 hidden md:block">
              ★
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}