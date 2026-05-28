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
    image: "/galleryimg-7.jpeg",
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
    image: "/galleryimg-8.jpeg",
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
    image: "/galleryimg-4.jpeg",
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
    image: "/galleryimg-5.jpeg",
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
    image: "/galleryimg-6.jpeg",
    themeColor: "#f97316",
    knobColor: "#f97316",
    iconBg: "rgba(255,255,255,0.25)",
    icon: <PartyPopper size={22} color="#fff" />,
    filterIcon: <PartyPopper size={18} color="#f97316" />,
  },
];

const filterTabs = [
  { label: "All Photos",   value: "all",          color: "#4c1b85" },
  { label: "Classroom",    value: "Classroom",    color: "#f5a623" },
  { label: "Activities",   value: "Activities",   color: "#7c3aed" },
  { label: "Celebrations", value: "Celebrations", color: "#f97316" },
  { label: "Art & Craft",  value: "Art & Craft",  color: "#ec4899" },
  { label: "Play Time",    value: "Play Time",    color: "#2563eb" },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-11 md:py-10 bg-[var(--offwhite-bg)]">
      <div className="container-custom">

        {/* Filter Tabs */}
        <div className="bg-white border border-[var(--color-border)] rounded-[28px] px-4 py-5 shadow-sm mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-['Nunito'] border-2 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? "#2d1a5e" : "#fff",
                    borderColor: isActive ? "#2d1a5e" : "#e5e7eb",
                    color: isActive ? "#fff" : "#374151",
                  }}
                >
                  {/* Colored dot */}
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? "#fff" : tab.color,
                    }}
                  />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mb-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-[14px] overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-2 mb-6">
          <button className="bg-[#E06820] hover:bg-[#5e3810] text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-widest transition-colors duration-200 font-['Nunito'] uppercase">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}