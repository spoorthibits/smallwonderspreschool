"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Palette,
  Heart,
  Gamepad2,
  Calendar
} from "lucide-react";
import Button from "../components/Button";

export default function WelcomePreschool() {
  const router = useRouter();

  // The 4 interactive circular badges from the image reference
  const imageBadges = [
    {
      title: "Play",
      subtitle: "Explore",
      colorClass: "bg-purple-600 text-white shadow-purple-200",
      icon: <Gamepad2 className="w-5 h-5" />,
    },
    {
      title: "Learn",
      subtitle: "Grow",
      colorClass: "bg-amber-500 text-white shadow-amber-200",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Create",
      subtitle: "Innovate",
      colorClass: "bg-emerald-600 text-white shadow-emerald-200",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "Care",
      subtitle: "Share",
      colorClass: "bg-rose-500 text-white shadow-rose-200",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-[var(--color-border)]">
      {/* Decorative background doodles */}
      <div className="absolute top-10 left-10 w-24 h-24 text-yellow-300 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" fill="none" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Image with organic frames ── */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background decorative yellow frame */}
            <div className="absolute -inset-4 bg-yellow-100 rounded-3xl -rotate-3 scale-95 pointer-events-none"></div>
            
            {/* Decorative dot grid (top-left) */}
            <div className="absolute -top-6 -left-6 w-16 h-16 text-amber-400 opacity-70 hidden md:block">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="10" cy="10" r="4" /><circle cx="30" cy="10" r="4" /><circle cx="50" cy="10" r="4" /><circle cx="70" cy="10" r="4" />
                <circle cx="10" cy="30" r="4" /><circle cx="30" cy="30" r="4" /><circle cx="50" cy="30" r="4" /><circle cx="70" cy="30" r="4" />
                <circle cx="10" cy="50" r="4" /><circle cx="30" cy="50" r="4" /><circle cx="50" cy="50" r="4" /><circle cx="70" cy="50" r="4" />
                <circle cx="10" cy="70" r="4" /><circle cx="30" cy="70" r="4" /><circle cx="50" cy="70" r="4" /><circle cx="70" cy="70" r="4" />
              </svg>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white z-10">
              <Image
                src="/galleryimg-10.jpeg"
                alt="Children engaging in learning and play activities at Small Wonders Preschool"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover"
              />
            </div>

            {/* Bottom-left star doodle */}
            <span className="absolute -bottom-6 -left-4 text-4xl text-emerald-400 animate-pulse hidden md:block">★</span>
          </div>

          {/* ── Right Column: Content ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Heading Section */}
            <div className="mb-6">
              <span className="text-emerald-600 font-baloo text-lg font-bold block mb-1">
                Welcome to
              </span>
              <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold">
                Small Wonders Play School
              </h2>
              <div className="flex flex-wrap gap-2 items-center mt-3 text-sm font-bold text-amber-600">
                <span>A Joyful Start</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Since 2009</span>
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="font-nunito text-base text-[var(--color-body)] leading-relaxed space-y-4 mb-6">
              <p>
                Small Wonders opened its doors in 2009 with one simple belief — that every child deserves a childhood full of curiosity, kindness and play. What began as a tiny neighbourhood playgroup is today a much-loved preschool and daycare for families in our community.
              </p>
              <p>
                Our bright classrooms, age-appropriate activities and warm caregivers create the perfect space for children aged 1.5 to 6 years to learn, grow and feel at home — all day, every day.
              </p>
            </div>

            {/* Play/Explore, Learn/Grow circular badges - as in the image */}
            <div className="w-full mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {imageBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${badge.colorClass}`}>
                      {badge.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-baloo text-sm font-extrabold text-[var(--color-dark)] leading-tight">
                        {badge.title}
                      </span>
                      <span className="font-nunito text-[11px] font-semibold text-[var(--color-muted)] leading-tight">
                        {badge.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <Button
              label="Our Story"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
              iconPosition="right"
              className="group hover:-translate-y-0.5 active:translate-y-0 transition-transform shadow-md"
              onClick={() => router.push("/about")}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
