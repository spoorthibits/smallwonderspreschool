"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useModal } from "../context/ModalContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useModal();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.22 5.03a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.168-4.17H3.75A.75.75 0 0 1 3 10z"
        clipRule="evenodd"
      />
    </svg>
  );

  const handleCtaClick = () => {
    closeMenu();
    router.push("/contact");
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo-link" onClick={closeMenu}>
          <div className="navbar-logo-container">
            <Image
              src="/graphics_and_icons/logo.png"
              alt="Small Wonders Preschool Logo"
              fill
              sizes="(max-width: 768px) 133px, 178px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Desktop & Laptop Navigation */}
        <nav className="navbar-menu">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`navbar-link ${isActive ? "active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="navbar-actions">
          <Button
            label="Enquire Now"
            variant="secondary"
            size="sm"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={handleCtaClick}
            className="navbar-cta-btn"
          />

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            className={`menu-toggle ${isOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <div
        className={`mobile-menu-overlay ${isOpen ? "is-active" : ""}`}
        onClick={closeMenu}
      />
      <div className={`mobile-menu-drawer ${isOpen ? "is-active" : ""}`}>
        <nav className="mobile-menu-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`mobile-menu-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile CTA Button inside Drawer */}
        <div className="mobile-drawer-cta">
          <Button
            label="Enquire Now"
            variant="secondary"
            size="md"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={handleCtaClick}
            fullWidth
          />
        </div>
      </div>
    </header>
  );
}
