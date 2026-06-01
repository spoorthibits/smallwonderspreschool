"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviewsData } from "../data/reviews";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const quoteColors = ["text-purple-300", "text-pink-300", "text-teal-300", "text-orange-300"];

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
      const currentScrollPage = Math.round(scrollLeft / clientWidth);
      setActiveIndex(currentScrollPage);
      const pages = Math.ceil(scrollWidth / clientWidth);
      setTotalPages(pages > 0 ? pages : 1);
    }
  }, []);

  const scrollByAmount = useCallback(
    (direction: "left" | "right") => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = 320 + 24;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10;

        if (direction === "right" && atEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
          });
        }
        setTimeout(checkScroll, 400);
      }
    },
    [checkScroll]
  );

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        scrollByAmount("right");
      }
    }, 3000);
  }, [scrollByAmount]);

  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
    setTimeout(() => {
      isPausedRef.current = false;
    }, 5000);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    startAutoScroll();
    return () => {
      window.removeEventListener("resize", checkScroll);
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [checkScroll, startAutoScroll]);

  return (
    <section className="relative py-4 md:py-6 bg-[var(--color-bg-yellow)] overflow-hidden flex flex-col justify-center">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] text-[var(--color-primary)] rotate-12 opacity-60 hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="absolute top-[20%] right-[10%] text-pink-400 -rotate-12 opacity-60 hidden md:block">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[8%] text-[var(--color-secondary)] opacity-40 hidden md:block">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
            <path d="M10,50 Q30,10 50,50 T90,50" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-4 md:mb-5">
          <div className="inline-block relative">
            <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-1">
              What Parents Say
            </h2>
            <svg className="absolute -top-3 -left-6 text-[var(--color-primary)] w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
            </svg>
            <svg className="absolute -top-1 -right-8 text-[var(--color-primary)] w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
            </svg>
          </div>
          <p className="font-nunito text-[14px] md:text-[16px] text-slate-500 font-bold max-w-xl mx-auto">
            Real experiences from our wonderful parent community
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={pauseAutoScroll}
          onTouchStart={pauseAutoScroll}
        >
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-2 snap-x snap-mandatory pt-1 px-2 items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviewsData.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-4 md:p-5 flex-shrink-0 w-[270px] sm:w-[300px] md:w-[320px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col snap-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300 overflow-hidden"
                style={{ minHeight: "200px", height: "290px" }}
              >
                {/* Stars & Quote Icon */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-0.5 text-[#FDB813]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className={`font-baloo text-3xl leading-none opacity-80 ${quoteColors[idx % quoteColors.length]}`}>
                    &ldquo;
                  </span>
                </div>

                {/* Review Text */}
                <div className="flex-grow mb-3 pr-1">
                  <p className="font-nunito text-[12px] md:text-[13px] text-slate-600 leading-relaxed italic line-clamp-5">
                    {review.text}
                  </p>
                </div>

                <hr className="border-t border-gray-100 mb-2" />

                <p className="font-baloo font-bold text-gray-800 text-[14px] truncate">
                  &ndash; {review.name === "no-name" ? "Anonymous Parent" : review.name}
                </p>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => { pauseAutoScroll(); scrollByAmount("left"); }}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 hidden md:flex items-center justify-center text-[var(--color-secondary)] transition-all duration-300 z-10 ${
              canScrollLeft ? "opacity-100 hover:bg-purple-50 hover:scale-105" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => { pauseAutoScroll(); scrollByAmount("right"); }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 hidden md:flex items-center justify-center text-[var(--color-secondary)] transition-all duration-300 z-10 ${
              canScrollRight ? "opacity-100 hover:bg-purple-50 hover:scale-105" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-3">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-purple-600 scale-110" : "bg-gray-200 hover:bg-purple-300"
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
                onClick={() => {
                  pauseAutoScroll();
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: idx * scrollRef.current.clientWidth,
                      behavior: "smooth",
                    });
                    setTimeout(checkScroll, 400);
                  }
                }}
              />
            ))}
          </div>
        )}

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}