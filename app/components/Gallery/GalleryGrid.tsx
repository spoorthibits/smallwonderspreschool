"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Palette,
  Sparkles,
  Smile,
  PartyPopper,
  BookmarkCheck,
  LayoutGrid,
} from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  themeColor: string;
  knobColor: string;
  iconBg: string;
  icon: React.ReactNode;
  filterIcon: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Classroom",
    title: "Creative Learning",
    description: "Learning made fun and meaningful.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#f5a623",
    knobColor: "#f5a623",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <BookOpen size={22} color="#fff" />,
    filterIcon: <BookOpen size={18} color="#f5a623" />,
  },
  {
    id: 2,
    category: "Activities",
    title: "Fun Activities",
    description: "Exploring, playing and growing together.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#7c3aed",
    knobColor: "#7c3aed",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <Smile size={22} color="#fff" />,
    filterIcon: <Smile size={18} color="#7c3aed" />,
  },
  {
    id: 3,
    category: "Play Time",
    title: "Play Time",
    description: "Play, laugh and create beautiful bonds.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#2563eb",
    knobColor: "#2563eb",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <Sparkles size={22} color="#fff" />,
    filterIcon: <Sparkles size={18} color="#2563eb" />,
  },
  {
    id: 4,
    category: "Art & Craft",
    title: "Art & Craft",
    description: "Little hands creating big imagination.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#ec4899",
    knobColor: "#ec4899",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <Palette size={22} color="#fff" />,
    filterIcon: <Palette size={18} color="#ec4899" />,
  },
  {
    id: 5,
    category: "Classroom",
    title: "Classroom Moments",
    description: "Moments that shape young minds.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#16a34a",
    knobColor: "#16a34a",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <BookmarkCheck size={22} color="#fff" />,
    filterIcon: <BookmarkCheck size={18} color="#16a34a" />,
  },
  {
    id: 6,
    category: "Celebrations",
    title: "Celebrations",
    description: "Celebrating every little achievement.",
    image: "/galleryimg-1.jpeg",
    themeColor: "#f97316",
    knobColor: "#f97316",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <PartyPopper size={22} color="#fff" />,
    filterIcon: <PartyPopper size={18} color="#f97316" />,
  },
];

const filterTabs = [
  { label: "All Photos",    value: "all",          icon: <LayoutGrid size={18} color="#fff" />,          activeBg: "#4c1b85" },
  { label: "Classroom",     value: "Classroom",    icon: <BookOpen size={18} color="#f5a623" />,          activeBg: "#4c1b85" },
  { label: "Activities",    value: "Activities",   icon: <Smile size={18} color="#7c3aed" />,             activeBg: "#4c1b85" },
  { label: "Celebrations",  value: "Celebrations", icon: <PartyPopper size={18} color="#ec4899" />,       activeBg: "#4c1b85" },
  { label: "Art & Craft",   value: "Art & Craft",  icon: <Palette size={18} color="#f5a623" />,           activeBg: "#4c1b85" },
  { label: "Play Time",     value: "Play Time",    icon: <Sparkles size={18} color="#2563eb" />,          activeBg: "#4c1b85" },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-11 md:py-1 bg-[var(--offwhite-bg)]">
      <div className="container-custom">

        {/* Title */}
        

        {/* Filter Tabs */}
        <div className="bg-white border border-[var(--color-border)] rounded-[28px] px-1 py-5 shadow-sm mb-13">

  <div className="flex flex-wrap justify-center gap-3">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-['Nunito'] border-2 transition-all duration-300"
                style={{
                  backgroundColor: isActive ? tab.activeBg : "#fff",
                  borderColor: isActive ? tab.activeBg : "#e5e7eb",
                  color: isActive ? "#fff" : "#374151",
                }}
              >
                {/* Icon */}
                <span
                  style={{
                    color: isActive ? "#fff" : undefined,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isActive && tab.value === "all" ? (
                    <LayoutGrid size={18} color="#fff" />
                  ) : (
                    React.isValidElement<{ color?: string }>(tab.icon)
  ? React.cloneElement(tab.icon, {
      color: isActive ? "#fff" : undefined,
    })
  : tab.icon
                  )}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
  
</div>
        {/* Jigsaw Card Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-19">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative group flex flex-col rounded-[1.75rem] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-visible"
            >
              {/* Jigsaw Knob — top center */}
             

              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.75rem] rounded-b-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Colored Footer Bar */}
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-b-[1.75rem]"
                style={{ backgroundColor: item.themeColor }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-white font-bold text-base leading-tight font-['Baloo_2']">
                    {item.title}
                  </h4>
                  <p className="text-white/85 text-xs mt-0.5 font-['Nunito']">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}