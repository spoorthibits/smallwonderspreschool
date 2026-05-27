"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  // ── DESIGN SYSTEM VARIABLES ─────────────────────────────────────
  // Structured similar to Button.tsx using CSS variables from globals.css
  const bgClass = "bg-[var(--color-purple-deep)]";
  const textClass = "text-white";
  const headingClass = "text-[var(--color-primary)] font-['Baloo_2',cursive] text-lg font-bold tracking-wide";
  const linkHoverClass = "hover:text-[var(--color-primary)] transition-colors duration-200";

  // ── CONFIGURATIONS ──
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className={`relative ${bgClass} ${textClass} pt-8 pb-6 font-['Nunito',sans-serif] ${className ?? ""}`.trim()}>
      
      {/* ── 1. Repeating Wave Divider (Absolute positioned to overlap the section above, removing any vertical gap) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%] pointer-events-none z-10">
        <svg
          className="relative block w-full h-[24px] sm:h-[32px] md:h-[40px] lg:h-[48px] text-[var(--color-purple-deep)] fill-current"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Repeating Sine Wave path with 12 cycles, filled with deep purple */}
          <path d="M 0 30 C 60 5, 60 55, 120 30 C 180 5, 180 55, 240 30 C 300 5, 300 55, 360 30 C 420 5, 420 55, 480 30 C 540 5, 540 55, 600 30 C 660 5, 660 55, 720 30 C 780 5, 780 55, 840 30 C 900 5, 900 55, 960 30 C 1020 5, 1020 55, 1080 30 C 1140 5, 1140 55, 1200 30 C 1260 5, 1260 55, 1320 30 C 1380 5, 1380 55, 1440 30 L 1440 60 L 0 60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Columns Container - Uses Flex for exact alignment and dotted separators */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-4 py-2">
          
          {/* ── COLUMN 1: LOGO & TAGLINE ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center max-w-[300px] mx-auto lg:mx-0">
            <div className="flex items-center">
              {/* Playful Reaching-Child Logo Icon */}
              <svg className="w-14 h-14 mr-3 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Colorful segmented circle/balloon */}
                <path d="M 65 12 A 18 18 0 0 1 83 30 L 65 30 Z" fill="#ff7043" />
                <path d="M 83 30 A 18 18 0 0 1 65 48 L 65 30 Z" fill="#4caf50" />
                <path d="M 65 48 A 18 18 0 0 1 47 30 L 65 30 Z" fill="#00bcd4" />
                <path d="M 47 30 A 18 18 0 0 1 65 12 L 65 30 Z" fill="#f5a623" />
                <circle cx="65" cy="30" r="7" fill="#ffffff" opacity="0.8" />
                
                {/* Stylized child figure in brand primary yellow, reaching up */}
                <circle cx="38" cy="45" r="7" fill="#f5a623" />
                <path d="M 38 52 C 38 62, 45 76, 45 86" stroke="#f5a623" strokeWidth="5" strokeLinecap="round" />
                <path d="M 38 52 C 48 49, 58 41, 63 29" stroke="#f5a623" strokeWidth="5" strokeLinecap="round" />
                <path d="M 38 52 C 30 61, 23 71, 20 80" stroke="#f5a623" strokeWidth="4" strokeLinecap="round" />
              </svg>

              {/* Logo Text */}
              <div className="flex flex-col text-left font-['Baloo_2',cursive]">
                <span className="text-xl font-extrabold text-[var(--color-primary)] leading-tight tracking-wide drop-shadow-sm">
                  Small Wonders
                </span>
                <div className="flex items-baseline">
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                    International
                  </span>
                  <span className="text-[10px] font-semibold text-white italic ml-1.5 whitespace-nowrap">
                    ...Play School
                  </span>
                </div>
              </div>
            </div>
            
            {/* Tagline Underline & tag text */}
            <div className="w-full mt-1">
              <div className="h-[1.5px] bg-[var(--color-primary)] w-full mb-1.5 rounded-full" />
              <p className="text-center font-['Baloo_2',cursive] tracking-[0.12em] text-white font-medium text-[10px] uppercase">
                Let's Play 'N' Learn
              </p>
            </div>
          </div>

          {/* ── DOTTED VERTICAL LINE 1 (Desktop only) ── */}
          <div className="hidden lg:block w-[1px] h-28 border-l border-dotted border-white/20 my-1 self-center" />

          {/* ── COLUMN 2: QUICK LINKS ── */}
          <div className="flex flex-col items-center lg:items-start min-w-[120px]">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-2 space-y-1.5 text-center lg:text-left text-xs font-medium text-white/95">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkHoverClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: CONTACT US ── */}
          <div className="flex flex-col items-center lg:items-start max-w-[280px]">
            <h3 className={headingClass}>Contact Us</h3>
            <ul className="mt-2 space-y-2.5 text-center lg:text-left text-xs font-medium text-white/95">
              <li className="flex flex-col lg:flex-row items-center lg:items-start">
                <MapPin size={15} className="text-white lg:mr-2 mb-1 lg:mb-0 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  @ 40, Classic Enclave, Madhavapuri Colony, Sainikpuri, Secunderabad.
                </span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start">
                <Phone size={15} className="text-white lg:mr-2 mb-1 lg:mb-0 flex-shrink-0 mt-0.5" />
                <span>96428 05126, 80994 22344</span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start">
                <Mail size={15} className="text-white lg:mr-2 mb-1 lg:mb-0 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@smallwondersplayschool.com" className={linkHoverClass}>
                  info@smallwondersplayschool.com
                </a>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start">
                <Globe size={15} className="text-white lg:mr-2 mb-1 lg:mb-0 flex-shrink-0 mt-0.5" />
                <a href="http://www.smallwondersplayschool.com" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>
                  www.smallwondersplayschool.com
                </a>
              </li>
            </ul>
          </div>

          {/* ── DOTTED VERTICAL LINE 2 (Desktop only) ── */}
          <div className="hidden lg:block w-[1px] h-28 border-l border-dotted border-white/20 my-1 self-center" />

          {/* ── COLUMN 4: FOLLOW US ── */}
          <div className="flex flex-col items-center lg:items-start min-w-[120px]">
            <h3 className={headingClass}>Follow Us</h3>
            <div className="mt-3 flex items-center gap-2.5">
              {/* Facebook Icon */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3c-3 0-5 2-5 5v2z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.077-4.513 10.08-10.068.001-2.69-1.044-5.22-2.943-7.123C16.51 1.51 13.984.465 11.3.465c-5.56 0-10.077 4.513-10.08 10.068-.001 2.055.539 4.062 1.564 5.845L1.8 22.183l5.847-1.53c-1.636.885-2.735 1.501-1.002 1.501z" />
                  <path d="M17.472 14.382c-.302-.151-1.787-.882-2.057-.981-.271-.1-.469-.151-.667.151-.198.3-.769.981-.94 1.18-.173.2-.347.225-.648.075-.302-.15-1.272-.469-2.422-1.496-.893-.798-1.497-1.785-1.672-2.086-.174-.3-.019-.463.132-.612.135-.134.302-.351.453-.526.151-.176.202-.3.302-.5.1-.2.05-.375-.025-.526-.075-.15-.667-1.607-.914-2.201-.24-.579-.485-.501-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.787-.732 2.04-1.439.253-.706.253-1.314.177-1.439-.076-.126-.272-.2-.574-.351z" fill="white" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ── 3. Minimal Bottom Copyright ── */}
        <div className="mt-4 pt-3 border-t border-white/10 text-center text-[10px] text-white/40">
          <p>© {new Date().getFullYear()} Small Wonders International Play School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
