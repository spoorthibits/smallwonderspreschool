"use client";

import React from "react";
import {
  Music,
  Palette,
  Paintbrush,
  Scissors,
  Mic,
  Sparkles,
  Trophy,
  Activity,
  Heart,
  Shield,
  Sparkle
} from "lucide-react";

const BasketballIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
    <circle cx="12" cy="12" r="10" />
    <path d="M6 12A6 6 0 0 1 18 12" />
    <path d="M12 6A6 6 0 0 1 12 18" />
    <path d="M6.2 6.2c2.5 2.5 2.5 9.1 0 11.6" />
    <path d="M17.8 6.2c-2.5 2.5-2.5 9.1 0 11.6" />
  </svg>
);

const activities = [
  { name: "Dance", icon: <Music className="w-5 h-5 text-yellow-300" /> },
  { name: "Dramatics", icon: <Sparkle className="w-5 h-5 text-orange-300" /> },
  { name: "Art & Craft", icon: <Palette className="w-5 h-5 text-teal-300" /> },
  { name: "Painting", icon: <Paintbrush className="w-5 h-5 text-pink-300" /> },
  { name: "Origami", icon: <Scissors className="w-5 h-5 text-purple-300" /> },
  { name: "Recitation", icon: <Mic className="w-5 h-5 text-blue-300" /> },
  { name: "Creative Art", icon: <Sparkles className="w-5 h-5 text-green-300" /> },
  { name: "Sports Facilities", icon: <Trophy className="w-5 h-5 text-amber-300" /> },
  { name: "Cricket", icon: <Activity className="w-5 h-5 text-red-300" /> },
  { name: "Yoga", icon: <Heart className="w-5 h-5 text-emerald-300" /> },
  { name: "Martial Arts", icon: <Shield className="w-5 h-5 text-indigo-300" /> },
  { name: "Basketball", icon: <BasketballIcon /> },
];

export default function ActivityTicker() {
  // Double the array for infinite scrolling effect
  const scrollingItems = [...activities, ...activities];

  return (
    <div className="animate-marquee-container py-3">
      <div className="animate-marquee-track">
        {scrollingItems.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3.5 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer border border-white/5"
          >
            <div className="flex-shrink-0 flex items-center justify-center">
              {activity.icon}
            </div>
            <span className="text-white font-baloo text-base md:text-lg font-bold tracking-wide whitespace-nowrap">
              {activity.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
