"use client";

import React from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Palette, 
  Sparkles, 
  Smile, 
  PartyPopper,
  BookmarkCheck
} from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  themeColor: string;
  knobColor: string;
  icon: React.ReactNode;
}

export default function GalleryGrid() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "Classroom",
      title: "Creative Learning",
      description: "Learning made fun and meaningful.",
      image: "/images/classroom_1.png",
      themeColor: "bg-[var(--color-primary)]",
      knobColor: "#f5a623",
      icon: <BookOpen size={20} className="text-[var(--color-primary)]" />,
    },
    {
      id: 2,
      category: "Activities",
      title: "Fun Activities",
      description: "Exploring, playing and growing together.",
      image: "/images/activities_1.png",
      themeColor: "bg-[var(--color-secondary)]",
      knobColor: "#6b3fa0",
      icon: <Smile size={20} className="text-[var(--color-secondary)]" />,
    },
    {
      id: 3,
      category: "Play Time",
      title: "Play Time",
      description: "Play, laugh and create beautiful bonds.",
      image: "/images/play_time_1.png",
      themeColor: "bg-[var(--color-accent-teal)]",
      knobColor: "#00bcd4",
      icon: <Sparkles size={20} className="text-[var(--color-accent-teal)]" />,
    },
    {
      id: 4,
      category: "Art & Craft",
      title: "Art & Craft",
      description: "Little hands creating big imagination.",
      image: "/images/art_craft_1.png",
      themeColor: "bg-pink-500",
      knobColor: "#ec4899",
      icon: <Palette size={20} className="text-pink-500" />,
    },
    {
      id: 5,
      category: "Classroom",
      title: "Classroom Moments",
      description: "Moments that shape young minds.",
      image: "/images/classroom_2.png",
      themeColor: "bg-[var(--color-accent-green)]",
      knobColor: "#4caf50",
      icon: <BookmarkCheck size={20} className="text-[var(--color-accent-green)]" />,
    },
    {
      id: 6,
      category: "Celebrations",
      title: "Celebrations",
      description: "Celebrating every little achievement.",
      image: "/images/celebrations_1.png",
      themeColor: "bg-[var(--color-accent-orange)]",
      knobColor: "#ff7043",
      icon: <PartyPopper size={20} className="text-[var(--color-accent-orange)]" />,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white rounded-t-[3.5rem] shadow-inner relative z-20">
      <div className="container-custom">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="section-label mb-4">Our Moments</span>
          <h2 className="text-[var(--color-secondary)] font-extrabold text-3xl md:text-4xl mt-2 font-['Baloo_2']">
            Inside Small Wonders
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto mt-3 font-['Nunito']">
            Explore daily activities, lessons, and play sessions that keep our children happy and learning.
          </p>
        </div>

        {/* 3-in-a-Row Jigsaw Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="relative group bg-white rounded-[2.5rem] border-4 border-white shadow-xl hover:shadow-2xl transition duration-500 flex flex-col p-3 pb-5 overflow-visible"
            >
              
              {/* ================= INTERLOCKING JIGSAW KNOBS & SOCKETS ================= */}
              
              {/* Top Knob */}
              <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border-4 border-white bg-white z-20 group-hover:scale-105 transition duration-300"></div>
              
              {/* Left Socket */}
              <div className="absolute -left-[22px] top-[40%] -translate-y-1/2 w-11 h-11 rounded-full border-4 border-white bg-[var(--color-offwhite)] z-20 shadow-[inset_-3px_0_4px_rgba(0,0,0,0.04)]"></div>
              
              {/* Right Knob */}
              <div 
                className="absolute -right-[22px] top-[60%] -translate-y-1/2 w-11 h-11 rounded-full border-4 border-white z-20 shadow-md group-hover:scale-105 transition duration-300"
                style={{ backgroundColor: item.knobColor }}
              ></div>

              {/* Bottom Socket */}
              <div className="absolute -bottom-[22px] left-[70%] -translate-x-1/2 w-11 h-11 rounded-full border-4 border-white bg-[var(--color-offwhite)] z-20 shadow-[inset_0_-3px_4px_rgba(0,0,0,0.04)]"></div>

              {/* ================= CARD BODY ================= */}
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full border border-gray-100/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* Text Description Box */}
              <div className={`relative mt-6 rounded-2xl ${item.themeColor} text-white p-5 pt-8 shadow-inner overflow-visible flex-grow flex flex-col justify-between`}>
                
                {/* Jigsaw connector badge linking photo border and description box */}
                <div className="absolute left-6 -top-2 w-6 h-4 bg-white z-10"></div>
                <div className="absolute left-3 -top-7 w-12 h-12 bg-white rounded-full border-4 border-white flex items-center justify-center shadow-md z-20">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-2">
                  <h4 className="font-bold text-white text-xl tracking-wide leading-tight font-['Baloo_2']">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-sm mt-1.5 leading-relaxed font-['Nunito']">
                    {item.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}