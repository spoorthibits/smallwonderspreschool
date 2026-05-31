"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviewsData } from "../data/reviews";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const quoteColors = ["text-purple-300", "text-pink-300", "text-teal-300", "text-orange-300"];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
      
      // Calculate active dot based on scroll position
      const currentScrollPage = Math.round(scrollLeft / clientWidth);
      setActiveIndex(currentScrollPage);
      
      // Total dots needed
      const pages = Math.ceil(scrollWidth / clientWidth);
      setTotalPages(pages > 0 ? pages : 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by one full visible page width
      const scrollAmount = clientWidth * 0.9; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 400); // Check again after animation
    }
  };

  return (
    <section className="relative py-6 md:py-10 bg-[var(--color-bg-yellow)] overflow-hidden flex flex-col justify-center min-h-0">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] text-[var(--color-primary)] rotate-12 opacity-60 hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <div className="absolute top-[20%] right-[10%] text-pink-400 -rotate-12 opacity-60 hidden md:block">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <div className="absolute bottom-[15%] left-[8%] text-[var(--color-secondary)] opacity-40 hidden md:block">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"><path d="M10,50 Q30,10 50,50 T90,50" /></svg>
        </div>
      </div>

      <div className="container-custom relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block relative">
            <h2 className="font-baloo text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-2">
              What Parents Say
            </h2>
            {/* Title Sparkles */}
            <svg className="absolute -top-3 -left-6 text-[var(--color-primary)] w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" /></svg>
            <svg className="absolute -top-1 -right-8 text-[var(--color-primary)] w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" /></svg>
          </div>
          <p className="font-nunito text-[14px] md:text-[16px] text-slate-500 font-bold max-w-xl mx-auto">
            Real experiences from our wonderful parent community
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Scrollable Cards Area */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar pt-2 px-2 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviewsData.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] p-5 md:p-6 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[45vh] min-h-[240px] max-h-[340px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col snap-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300"
              >
                {/* Card Header: Stars & Quote Icon */}
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="flex gap-1 text-[#FDB813]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`font-baloo text-4xl leading-none opacity-80 ${quoteColors[idx % quoteColors.length]}`}>
                    “
                  </span>
                </div>

                {/* Review Text (Scrollable if too long) */}
                <div className="flex-grow overflow-y-auto hide-scrollbar mb-4 pr-1">
                  <p className="font-nunito text-[13px] md:text-[14px] text-slate-600 leading-relaxed italic">
                    {review.text}
                  </p>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-100 mb-3" />

                {/* Reviewer Name */}
                <p className="font-baloo font-bold text-gray-800 text-[15px] md:text-[16px] truncate">
                  – {review.name === 'no-name' ? 'Anonymous Parent' : review.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-5 lg:-ml-8 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 hidden md:flex items-center justify-center text-[var(--color-secondary)] transition-all duration-300 z-10 ${canScrollLeft ? 'opacity-100 hover:bg-purple-50 hover:scale-105' : 'opacity-0 pointer-events-none'}`}
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-5 lg:-mr-8 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 hidden md:flex items-center justify-center text-[var(--color-secondary)] transition-all duration-300 z-10 ${canScrollRight ? 'opacity-100 hover:bg-purple-50 hover:scale-105' : 'opacity-0 pointer-events-none'}`}
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4 md:mt-5">
            {[...Array(totalPages)].map((_, idx) => (
              <button 
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-purple-600 scale-110' : 'bg-gray-200 hover:bg-purple-300'}`}
                aria-label={`Go to slide page ${idx + 1}`}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: idx * scrollRef.current.clientWidth,
                      behavior: 'smooth'
                    });
                    setTimeout(checkScroll, 400);
                  }
                }}
              />
            ))}
          </div>
        )}

        {/* View All Reviews Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <a 
            href="https://www.justdial.com/Hyderabad/Small-Wonders-International-Play-School-Beside-SAI-Baba-Temple-HiTension-Wire-Road-Sainikpuri/040PXX40-XX40-120424145234-N5N2_BZDET/reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-6 py-2 md:py-2.5 rounded-full font-baloo font-bold text-[14px] md:text-[15px] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 shadow-sm"
          >
            View All Reviews
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
