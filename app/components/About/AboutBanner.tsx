"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="w-full bg-white py-16 md:py-20 relative overflow-hidden">

      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[15%] w-16 h-28 balloon-float z-10 pointer-events-none opacity-85 hidden md:block">
        <img
          src="/slider_shape03.png"
          alt="Heart Balloon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-[3%] top-[15%] w-12 h-12 star-float-png z-10 pointer-events-none opacity-85 hidden md:block">
        <img
          src="/slider_shape02.png"
          alt="Star"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-custom relative">
        <div className="bg-white rounded-[30px] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="relative overflow-visible pr-4 animate-fade-in-left">

              {/* TEXT CONTENT */}
              <h1 className="font-black text-[48px] md:text-[64px] font-['Baloo_2'] leading-tight mb-2 text-[#e0531c]">
                About Us
              </h1>

              {/* Subtitle */}
              <p className="text-[#555577] font-semibold text-sm md:text-[17px] font-['Nunito'] tracking-wide mb-4">
                Nurturing Young Minds, Building Bright Futures
              </p>

              {/* Decorative line */}
              <div className="w-14 h-1.5 rounded-full bg-[#4c1b85] mb-6" />

              <p className="text-[#3d3d5c] text-[17px] leading-[1.85] font-['Nunito']">
                At Small Wonders International Play School, every child is a unique star.
                We provide a safe, joyful and stimulating environment where children learn
                through play, explore their potential and grow into confident, compassionate individuals.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end lg:pr-6 relative animate-fade-in-right">
              <div className="w-full max-w-[560px] aspect-[4/3] relative rounded-[40px] overflow-hidden border border-zinc-100 shadow-xl bg-white hover:scale-[1.02] hover:rotate-[1deg] hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/kids-classroom.jpg"
                  alt="Children studying at Small Wonders"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
