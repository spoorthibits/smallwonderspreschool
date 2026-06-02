"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  // ── CONFIGURATIONS ──
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className={`footer-wrapper ${className ?? ""}`.trim()}>
      
      {/* ── 1. Repeating Wave Divider (Absolute positioned to overlap the section above, removing any vertical gap) ── */}
      {/* <div className="footer-wave-container">
        <svg
          className="footer-wave-svg"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        > */}
          {/* Repeating Sine Wave path with 12 cycles, filled with deep purple */}
          {/* <path d="M 0 30 C 60 5, 60 55, 120 30 C 180 5, 180 55, 240 30 C 300 5, 300 55, 360 30 C 420 5, 420 55, 480 30 C 540 5, 540 55, 600 30 C 660 5, 660 55, 720 30 C 780 5, 780 55, 840 30 C 900 5, 900 55, 960 30 C 1020 5, 1020 55, 1080 30 C 1140 5, 1140 55, 1200 30 C 1260 5, 1260 55, 1320 30 C 1380 5, 1380 55, 1440 30 L 1440 60 L 0 60 Z" />
        </svg>
      </div> */}

      <div className="container-custom">
        {/* Main Columns Container - Uses Flex for exact alignment and dotted separators */}
        <div className="footer-columns">
          
          {/* ── COLUMN 1: LOGO IMAGE ── */}
          <div className="footer-col-logo">
            <Link href="/" className="footer-logo-card">
              <Image
                src="/graphics_and_icons/logo.png"
                alt="Small Wonders Play School Logo"
                width={240}
                height={90}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>
          </div>

          {/* ── DOTTED VERTICAL LINE 1 (Desktop only) ── */}
          <div className="footer-divider-vertical" />

          {/* ── COLUMN 2: QUICK LINKS ── */}
          <div className="footer-col-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: CONTACT US ── */}
          <div className="footer-col-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" />
                <span>
                  Plot No 160/140, O U Teacher’s Colony, Hi-Tension Road, Sainikpuri, Secunderabad, Telangana. 500094.
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" />
                <span>9849805126, 8121005126</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:info@smallwondersplayschool.com" className="footer-link">
                  info@smallwondersplayschool.com
                </a>
              </li>
              <li className="footer-contact-item">
                <Globe size={15} className="footer-contact-icon" />
                <a href="https://www.smallwonderspreschool.co.in/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  www.smallwonderspreschool.co.in
                </a>
              </li>
            </ul>
          </div>

          {/* ── DOTTED VERTICAL LINE 2 (Desktop only) ── */}
          <div className="footer-divider-vertical" />

          {/* ── COLUMN 4: FOLLOW US ── */}
          <div className="footer-col-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social-icons">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/SmallWondersInternationalPlaySchool"
                aria-label="Facebook"
                className="footer-social-btn facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3c-3 0-5 2-5 5v2z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/smallwonders_sainikpuri?utm_source=qr"
                aria-label="Instagram"
                className="footer-social-btn instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919849805126"
                aria-label="WhatsApp"
                className="footer-social-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Small Wonders Play School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
