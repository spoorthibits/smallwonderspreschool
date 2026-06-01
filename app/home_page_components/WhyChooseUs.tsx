"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, GraduationCap, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      title: "Safe Infrastructure",
      description: "Secure premises and clean, bright environments for complete peace of mind.",
      image: "/galleryimg-6.jpeg",
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      color: "bg-[#FFE8D6]", // Brighter, vibrant pastel orange
      glowColor: "hover:shadow-[0_12px_40px_rgba(251,146,60,0.35)]",
      tabRight: false,
      tabBottom: false,
      holeRight: true,
      holeBottom: true,
      initialPosition: { x: -80, y: -80 },
      corners: "rounded-[24px] md:rounded-none md:rounded-tl-[40px]",
    },
    {
      id: 2,
      title: "Trained Teachers",
      description: "Experienced, certified and loving educators nurturing your child's growth.",
      image: "/galleryimg-4.jpeg",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      color: "bg-[#EBE0FF]", // Brighter, vibrant pastel purple
      glowColor: "hover:shadow-[0_12px_40px_rgba(192,132,252,0.35)]",
      tabLeft: true,
      tabBottom: false,
      holeLeft: false,
      holeBottom: true,
      initialPosition: { x: 80, y: -80 },
      corners: "rounded-[24px] md:rounded-none md:rounded-tr-[40px]",
    },
    {
      id: 3,
      title: "Caring Environment",
      description: "A warm, nurturing second home where every child feels loved and safe.",
      image: "/galleryimg-20.jpeg",
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      color: "bg-[#FFDDF0]", // Brighter, vibrant pastel pink
      glowColor: "hover:shadow-[0_12px_40px_rgba(244,114,182,0.35)]",
      tabTop: true,
      tabRight: false,
      holeTop: false,
      holeRight: true,
      initialPosition: { x: -80, y: 80 },
      corners: "rounded-[24px] md:rounded-none md:rounded-bl-[40px]",
    },
    {
      id: 4,
      title: "Fun Learning",
      description: "Joyful play-based techniques, hands-on activities, and creative discovery.",
      image: "/galleryimg-1.jpeg",
      icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
      color: "bg-[#FFF2BA]", // Brighter, vibrant pastel yellow
      glowColor: "hover:shadow-[0_12px_40px_rgba(250,204,21,0.35)]",
      tabTop: true,
      tabLeft: true,
      holeTop: false,
      holeLeft: false,
      initialPosition: { x: 80, y: 80 },
      corners: "rounded-[24px] md:rounded-none md:rounded-br-[40px]",
    },
  ];

  const tabClasses = "hidden md:block absolute w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full z-20 pointer-events-none transition-transform duration-500";
  const holeClasses = "hidden md:block absolute w-[80px] h-[80px] md:w-[96px] md:h-[96px] bg-white rounded-full z-10 pointer-events-none";

  return (
    <section className="relative py-4 md:py-6 bg-white overflow-hidden">
      
      {/* Decorative preschool elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
       
        
        
        
        {/* New Fun Elements */}
      
       
        
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 md:mb-4 px-4">

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-baloo text-[var(--color-primary)] text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-extrabold mb-2"
          >
            Why Parents Love Small Wonders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-sm sm:text-base text-[var(--color-muted)] font-medium max-w-xl mx-auto leading-relaxed"
          >
            A warm, safe, and forward-thinking preschool environment where children build confidence through care, creativity, and modern early learning.
          </motion.p>
        </div>

        {/* Puzzle Layout */}
        <div className="relative w-full max-w-6xl mx-auto mt-0">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            
            {cards.map((card) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, x: card.initialPosition.x, y: card.initialPosition.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 * card.id }}
                className="z-10 w-full h-full"
              >
                <div className={`relative m-0 transition-all duration-300 hover:-translate-y-1.5 hover:z-30 ${card.corners} group h-full`}>
                   {/* 1. Inner Content Box */}
                   <div className={`relative w-full h-full z-0 ${card.color} ${card.corners} p-3 md:p-5 flex flex-col justify-between shadow-sm transition-shadow duration-500 ${card.glowColor}`}>
                      <div className="mb-3">
                        <div className="flex items-center gap-2 md:gap-3 mb-2">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                            {card.icon}
                          </div>
                          <h3 className="font-baloo text-lg sm:text-xl font-extrabold text-[var(--color-dark)] leading-tight">{card.title}</h3>
                        </div>
                        <p className="font-nunito text-[13px] sm:text-[14px] text-[var(--color-body)] font-medium leading-relaxed">{card.description}</p>
                      </div>

                      {/* Image */}
                      <div className="relative w-full h-[120px] sm:h-[140px] md:h-[180px] rounded-2xl overflow-hidden bg-white/40 shadow-inner">
                        <Image src={card.image} fill className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]" alt={card.title} />
                      </div>
                   </div>

                   {/* 2. Puzzle Holes (Cutouts simulated with white background circles) */}
                   {card.holeRight && <div className={`${holeClasses} top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10`} />}
                   {card.holeBottom && <div className={`${holeClasses} bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10`} />}
                   {card.holeLeft && <div className={`${holeClasses} top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10`} />}

                   {/* 3. Puzzle Tabs (Colored protruding circles) */}
                   {card.tabLeft && <div className={`${tabClasses} top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20 ${card.color}`} />}
                   {card.tabTop && <div className={`${tabClasses} top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ${card.color}`} />}
                   {card.tabRight && <div className={`${tabClasses} top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20 ${card.color}`} />}
                </div>
              </motion.div>
            ))}

            {/* Central Heart Badge - Connects the 4 pieces on desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full z-40 shadow-lg items-center justify-center"
            >
               <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
            </motion.div>

          </div>
          
          {/* Bottom decorative text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 flex justify-center"
          >
             <div className="inline-flex items-center gap-2 bg-[#FFF8F0] px-6 py-3 rounded-full border border-orange-100 shadow-sm">
               <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
               <span className="font-nunito text-[15px] font-bold text-[var(--color-dark)]">Every piece matters in your child's <span className="text-orange-600">growth journey.</span></span>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
