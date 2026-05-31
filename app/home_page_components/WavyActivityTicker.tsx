"use client";

import React from "react";
import {
  Music, Palette, Paintbrush, Scissors, Mic,
  Sparkles, Trophy, Activity, Heart, Shield, Sparkle,
} from "lucide-react";

const BasketballIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M6 12A6 6 0 0 1 18 12" />
    <path d="M12 6A6 6 0 0 1 12 18" />
    <path d="M6.2 6.2c2.5 2.5 2.5 9.1 0 11.6" />
    <path d="M17.8 6.2c-2.5 2.5-2.5 9.1 0 11.6" />
  </svg>
);

const activities = [
  { name: "Dance",        icon: <Music style={{ width: 24, height: 24 }} /> },
  { name: "Dramatics",    icon: <Sparkle style={{ width: 24, height: 24 }} /> },
  { name: "Art & Craft",  icon: <Palette style={{ width: 24, height: 24 }} /> },
  { name: "Painting",     icon: <Paintbrush style={{ width: 24, height: 24 }} /> },
  { name: "Origami",      icon: <Scissors style={{ width: 24, height: 24 }} /> },
  { name: "Recitation",   icon: <Mic style={{ width: 24, height: 24 }} /> },
  { name: "Creative Art", icon: <Sparkles style={{ width: 24, height: 24 }} /> },
  { name: "Sports",       icon: <Trophy style={{ width: 24, height: 24 }} /> },
  { name: "Cricket",      icon: <Activity style={{ width: 24, height: 24 }} /> },
  { name: "Yoga",         icon: <Heart style={{ width: 24, height: 24 }} /> },
  { name: "Martial Arts", icon: <Shield style={{ width: 24, height: 24 }} /> },
  { name: "Basketball",   icon: <BasketballIcon /> },
];

const HEIGHT = 80;
const VERTICAL_OFFSET = 28; // px to shift content downward

export default function WavyActivityTicker() {
  const doubled = [...activities, ...activities];

  return (
    <div
      style={{
        backgroundColor: "#E06820",
        height: `${HEIGHT}px`,
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        paddingTop: `${VERTICAL_OFFSET}px`,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          animation: "marquee 30s linear infinite",
          display: "flex",
          alignItems: "center",
          width: "max-content",
          height: "100%",
        }}
      >
        {doubled.map((activity, i) => (
          <React.Fragment key={i}>
            <span
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "12px",
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              ✦
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 20px",
                whiteSpace: "nowrap",
                cursor: "pointer",
                color: "white",
              }}
            >
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                {activity.icon}
              </div>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: "0.04em",
                  color: "white",
                  textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  lineHeight: 1,
                }}
              >
                {activity.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}