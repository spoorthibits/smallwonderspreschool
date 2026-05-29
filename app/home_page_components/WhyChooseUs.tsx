"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, GraduationCap, Heart, Sparkles } from "lucide-react";

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  barColor: string;
}

export default function WhyChooseUs() {
  const cards: FeatureCard[] = [
    {
      number: "01",
      title: "Safe Infrastructure",
      description: "Secure premises and clean, bright environments for complete peace of mind.",
      image: "/galleryimg-6.jpeg",
      icon: <ShieldCheck className="w-4 h-4" />,
      iconBg: "bg-orange-50 border-orange-100",
      iconColor: "text-orange-500",
      barColor: "bg-orange-500",
    },
    {
      number: "02",
      title: "Trained Teachers",
      description: "Experienced, certified and loving educators nurturing your child's growth.",
      image: "/galleryimg-4.jpeg",
      icon: <GraduationCap className="w-4 h-4" />,
      iconBg: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-500",
      barColor: "bg-blue-500",
    },
    {
      number: "03",
      title: "Caring Environment",
      description: "A warm, nurturing second home where every child feels loved and safe.",
      image: "/galleryimg-20.jpeg",
      icon: <Heart className="w-4 h-4" />,
      iconBg: "bg-rose-50 border-rose-100",
      iconColor: "text-rose-500",
      barColor: "bg-rose-500",
    },
    {
      number: "04",
      title: "Fun Learning",
      description: "Joyful play-based techniques, hands-on activities, and creative discovery.",
      image: "/galleryimg-5.jpeg",
      icon: <Sparkles className="w-4 h-4" />,
      iconBg: "bg-emerald-50 border-emerald-100",
      iconColor: "text-emerald-500",
      barColor: "bg-emerald-500",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-offwhite)] overflow-hidden border-b border-[var(--color-border)]">
      
      {/* Decorative stars and doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-[10%] left-[5%] text-2xl text-orange-400 animate-pulse">★</span>
        <span className="absolute bottom-[15%] right-[5%] text-3xl text-yellow-400 animate-bounce">★</span>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-4 inline-flex items-center gap-1.5 bg-orange-50 text-[var(--color-primary)]">
            Parent-Trusted Experience
          </span>
          <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold mb-3">
            Why Parents Love Small Wonders
          </h2>
          <p className="font-nunito text-sm sm:text-base text-[var(--color-muted)] font-medium max-w-xl mx-auto leading-relaxed">
            A warm, safe, and forward-thinking preschool environment where children build confidence through care, creativity, and modern early learning.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 p-5 shadow-[0_8px_30px_rgba(107,63,160,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${card.iconBg} ${card.iconColor}`}>
                    {card.icon}
                  </div>
                  <span className="font-baloo text-xs font-bold text-gray-300">
                    {card.number}
                  </span>
                </div>

                {/* Rectangular Rounded Image */}
                <div className="relative w-full aspect-[1.45] rounded-2xl overflow-hidden mb-4 bg-zinc-100 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-baloo text-base sm:text-lg font-extrabold text-[var(--color-dark)] leading-tight text-left">
                  {card.title}
                </h3>

                {/* Underline Bar */}
                <div className={`w-10 h-1.5 ${card.barColor} rounded-full mt-1.5 mb-3`}></div>

                {/* Card Description */}
                <p className="font-nunito text-xs text-[var(--color-muted)] font-semibold leading-relaxed text-left">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
