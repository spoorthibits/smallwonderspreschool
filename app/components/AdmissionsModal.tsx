"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import AdmissionsForm from "./AdmissionsForm";
import { X, Sparkles, School } from "lucide-react";

export default function AdmissionsModal() {
  const { isOpen, modalType, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Handle mounting and animation states for smooth transition
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setMounted(false), 300); // match duration-300
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!mounted || !modalType) return null;

  const isVisit = modalType === "visit";
  
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-md transition-opacity duration-300"
        onClick={closeModal}
      />

      {/* Modal Dialog Card */}
      <div
        className={`relative bg-white w-full max-w-2xl rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden border border-zinc-100 z-10 transition-all duration-300 ${
          animate ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
        }`}
      >
        {/* Colorful top decoration strip */}
        <div
          className={`h-3 w-full transition-colors duration-300 ${
            isVisit ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
          }`}
        />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 pb-4 text-left relative overflow-hidden">
          {/* Subtle background glow depending on type */}
          <div 
            className={`absolute top-0 left-0 w-48 h-48 rounded-full filter blur-3xl opacity-20 pointer-events-none -translate-x-12 -translate-y-12 transition-colors duration-300 ${
              isVisit ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
            }`}
          />

          <div className="relative flex flex-col items-start">
            {/* Header Icon */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${
              isVisit ? "bg-[var(--color-bg-purple)] text-[var(--color-secondary)]" : "bg-[var(--color-bg-yellow)] text-[var(--color-primary)]"
            }`}>
              {isVisit ? (
                <School className="w-6 h-6" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </div>

            {/* Modal Title */}
            <h2 id="modal-title" className="text-2xl md:text-3xl font-baloo font-extrabold text-[var(--color-dark)] leading-tight">
              {isVisit ? "Book a School Tour" : "Apply for Admission"}
            </h2>
            
            {/* Modal Subtitle */}
            <p className="text-sm font-medium text-[var(--color-muted)] font-nunito mt-1.5 leading-relaxed max-w-lg">
              {isVisit 
                ? "Experience our classrooms first-hand, meet our caring educators, and explore our learning environments." 
                : "Give your child the gift of a playful, nurturing education. Begin your admission request below."}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 md:px-8 pb-8 pt-2 max-h-[calc(100vh-200px)] overflow-y-auto">
          <AdmissionsForm
            type={modalType}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
