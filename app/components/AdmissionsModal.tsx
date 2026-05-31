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
        className={`relative bg-white w-full max-w-[420px] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden border border-zinc-100 z-10 transition-all duration-300 ${
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
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Modal Header */}
        <div className="p-5 pb-2 text-left relative overflow-hidden">
          {/* Subtle background glow depending on type */}
          <div 
            className={`absolute top-0 left-0 w-32 h-32 rounded-full filter blur-3xl opacity-20 pointer-events-none -translate-x-8 -translate-y-8 transition-colors duration-300 ${
              isVisit ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
            }`}
          />

          <div className="relative flex flex-col items-start">
            {/* Header Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 ${
              isVisit ? "bg-[var(--color-bg-purple)] text-[var(--color-secondary)]" : "bg-[var(--color-bg-yellow)] text-[var(--color-primary)]"
            }`}>
              {isVisit ? (
                <School className="w-5 h-5" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
            </div>

            {/* Modal Title */}
            <h2 id="modal-title" className="text-xl md:text-2xl font-baloo font-extrabold text-[var(--color-dark)] leading-tight">
              {isVisit ? "Book a School Tour" : "Apply for Admission"}
            </h2>
            
            {/* Modal Subtitle */}
            <p className="text-xs font-medium text-[var(--color-muted)] font-nunito mt-1 leading-relaxed">
              {isVisit 
                ? "Experience our classrooms first-hand and meet our educators." 
                : "Give your child a playful education. Begin your request below."}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-5 pb-5 pt-1 overflow-y-auto max-h-[85vh]">
          <AdmissionsForm
            type={modalType}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
