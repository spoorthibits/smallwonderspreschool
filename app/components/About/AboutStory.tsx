"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section id="our-story" className="w-full bg-white py-20 relative overflow-hidden">
      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[30%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Our Story Text */}
          <div className="lg:col-span-6 text-left animate-fade-in-left">
            <div className="w-16 h-1 bg-[#4CAF50] rounded-full mb-4" />
            <h2 className="text-[#e0531c] font-black text-3xl md:text-5xl font-['Baloo_2'] mb-6">
              Our Story
            </h2>
            
            <div className="space-y-6 text-[#3d3d5c] text-base md:text-lg leading-relaxed font-['Nunito']">
              <p>
                Small Wonders International Play School was established with a dream to create a nurturing space
                where children can learn, play and grow happily. Our Founder & Chairman, Jagdev Singh Chauhan,
                envisioned a school that blends strong values with modern teaching to prepare children for life.
              </p>
              <p>
                Today, under the guidance of our Director, Gayatri Singh, we continue this journey with
                passion and commitment. We are dedicated to providing a safe, warm, and rich learning environment
                where every child&apos;s unique talents are recognized and celebrated.
              </p>
            </div>
          </div>

          {/* RIGHT: Leadership Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in-right">
            
            {/* Card 1: Jagdev Singh Chauhan (Founder & Chairman) */}
            <div className="flex flex-col rounded-[24px] bg-[var(--color-offwhite)] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-[#e8e8f0]">
              <div className="aspect-[4/5] relative w-full bg-gradient-to-br from-[#6b3fa0]/20 to-[#e0531c]/20 flex items-center justify-center">
                
                {/* Visual Placeholder for Photo */}
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-[#6b3fa0]/30 border-4 border-white flex items-center justify-center text-[#6b3fa0] font-black text-3xl font-['Baloo_2'] shadow-md mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    JSC
                  </div>
                  <span className="text-[#6b3fa0] font-bold text-xs uppercase tracking-wider font-['Nunito']">
                    Jagdev Singh Chauhan
                  </span>
                  <span className="text-[#7a7a9d] text-[11px] font-medium font-['Nunito'] mt-2">
                    Founder & Chairman
                  </span>
                  <div className="mt-3 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[10px] text-[#7a7a9d] font-semibold">
                    Profile Photo Coming Soon
                  </div>
                </div>
              </div>
              <div className="bg-[#6b3fa0] text-white p-4 text-center">
                <h4 className="font-bold text-lg font-['Baloo_2'] leading-tight">
                  Jagdev Singh Chauhan
                </h4>
                <p className="text-white/80 text-xs font-semibold font-['Nunito'] mt-1">
                  Founder & Chairman
                </p>
              </div>
            </div>

            {/* Card 2: Gayatri Singh (Director) */}
            <div className="flex flex-col rounded-[24px] bg-[var(--color-offwhite)] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-[#e8e8f0] group/card">
              <div className="aspect-[4/5] relative w-full overflow-hidden bg-zinc-100">
                <Image
                  src="/Director.jpeg"
                  alt="Gayatri Singh - Director"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>
              <div className="bg-[#4c1b85] text-white p-4 text-center">
                <h4 className="font-bold text-lg font-['Baloo_2'] leading-tight">
                  Gayatri Singh
                </h4>
                <p className="text-white/80 text-xs font-semibold font-['Nunito'] mt-1">
                  Director
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
