"use client";

import React, { useMemo } from "react";
import {
  Music, Palette, Paintbrush, Scissors, Mic,
  Sparkles, Trophy, Activity, Heart, Shield, Sparkle
} from "lucide-react";

const BasketballIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M6 12A6 6 0 0 1 18 12" />
    <path d="M12 6A6 6 0 0 1 12 18" />
    <path d="M6.2 6.2c2.5 2.5 2.5 9.1 0 11.6" />
    <path d="M17.8 6.2c-2.5 2.5-2.5 9.1 0 11.6" />
  </svg>
);

const activities = [
  { name: "Dance",        icon: <Music className="w-5 h-5" />,        colorClass: "text-yellow-300" },
  { name: "Dramatics",    icon: <Sparkle className="w-5 h-5" />,      colorClass: "text-orange-400" },
  { name: "Art & Craft",  icon: <Palette className="w-5 h-5" />,      colorClass: "text-teal-300"   },
  { name: "Painting",     icon: <Paintbrush className="w-5 h-5" />,   colorClass: "text-pink-300"   },
  { name: "Origami",      icon: <Scissors className="w-5 h-5" />,     colorClass: "text-purple-300" },
  { name: "Recitation",   icon: <Mic className="w-5 h-5" />,          colorClass: "text-blue-300"   },
  { name: "Creative Art", icon: <Sparkles className="w-5 h-5" />,     colorClass: "text-green-300"  },
  { name: "Sports",       icon: <Trophy className="w-5 h-5" />,       colorClass: "text-amber-300"  },
  { name: "Cricket",      icon: <Activity className="w-5 h-5" />,     colorClass: "text-red-400"    },
  { name: "Yoga",         icon: <Heart className="w-5 h-5" />,        colorClass: "text-emerald-300"},
  { name: "Martial Arts", icon: <Shield className="w-5 h-5" />,       colorClass: "text-indigo-300" },
  { name: "Basketball",   icon: <BasketballIcon />,                   colorClass: "text-orange-300" },
];

export default function WavyActivityTicker() {
  const blockWidth = 2400;
  const height     = 82;
  const cycles     = 8;
  const cycleWidth = blockWidth / cycles;

  const topBase  = 18;
  const amp      = 22;
  const chipY    = 45;

  // Wavy top edge, straight bottom
  const wavePath = useMemo(() => {
    let d = `M 0 ${topBase}`;
    for (let i = 0; i < cycles; i++) {
      const x0 = i * cycleWidth;
      const x1 = (i + 1) * cycleWidth;
      const cx = x0 + cycleWidth / 2;
      d += ` C ${cx} ${topBase - amp}, ${cx} ${topBase + amp}, ${x1} ${topBase}`;
    }
    d += ` L ${blockWidth} ${height} L 0 ${height} Z`;
    return d;
  }, [blockWidth, cycleWidth, cycles, topBase, amp, height]);

  const blocks = [0, 1];

  return (
    <div className="relative overflow-hidden w-full select-none bg-transparent">
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee-track flex" style={{ gap: 0 }}>
          {blocks.map((blockIdx) => (
            <div
              key={blockIdx}
              className="relative flex-shrink-0"
              style={{ width: `${blockWidth}px`, height: `${height}px` }}
            >
              {/* Wavy-top straight-bottom ribbon */}
              <svg
                viewBox={`0 0 ${blockWidth} ${height}`}
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#4a3aa8" />
                    <stop offset="40%"  stopColor="#3b2d99" />
                    <stop offset="100%" stopColor="#2a1f7a" />
                  </linearGradient>
                  <linearGradient id="edgeFoam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="rgba(255,255,255,0.45)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <clipPath id="ribbonClip">
                    <path d={wavePath} />
                  </clipPath>
                </defs>

                {/* Main body */}
                <path d={wavePath} fill="url(#purpleGrad)" />

                {/* Foam highlight at the wavy top edge */}
                <path d={wavePath} fill="url(#edgeFoam)" opacity="0.4" />
              </svg>

              {/* Activity chips */}
              {activities.map((activity, i) => {
                const delay = i * -0.42;
                const x     = (i + 0.5) * (blockWidth / activities.length);
                return (
                  <React.Fragment key={i}>
                    {/* Separator star */}
                    <div
                      className="absolute z-10 text-white/20 text-xs animate-wavy-float select-none"
                      style={{
                        top:       `${chipY}px`,
                        left:      `${i * (blockWidth / activities.length)}px`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${delay - 0.2}s`,
                      }}
                    >
                      ✦
                    </div>

                    {/* Activity chip */}
                    <div
                      className="absolute z-10 animate-wavy-float"
                      style={{
                        top:            `${chipY}px`,
                        left:           `${x}px`,
                        transform:      "translate(-50%, -50%)",
                        animationDelay: `${delay}s`,
                      }}
                    >
                      <div className="flex items-center gap-2 cursor-pointer group">
                        <div className={`flex-shrink-0 transition-transform duration-300
                          group-hover:scale-125 ${activity.colorClass}`}>
                          {activity.icon}
                        </div>
                        <span className="font-baloo text-base md:text-lg font-bold
                          tracking-wide whitespace-nowrap text-white
                          transition-all duration-300
                          group-hover:text-yellow-300 group-hover:scale-105"
                          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}>
                          {activity.name}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}