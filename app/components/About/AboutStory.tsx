"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section
      id="our-story"
      className="w-full py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Floating Emojis in far margins */}
      {/* <div className="absolute left-[3%] top-[30%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div> */}
      {/* <div className="absolute right-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div> */}

      {/* Paper airplane arrow — left side, like the reference */}
      <div className="absolute left-[1%] bottom-[-2%] w-36 h-86 z-10 pointer-events-none hidden md:block">
  <img
    src="/arrowig1.png"
    alt=""
    aria-hidden="true"
    className="w-full h-full object-contain"
  />
</div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Our Story Text */}
          <div className="lg:col-span-6 text-left animate-fade-in-left">
            <div className="w-16 h-1 bg-[#4CAF50] rounded-full mb-3" />
            <h2 className="text-[#1a237e] font-black text-3xl md:text-4xl font-['Baloo_2'] mb-4 leading-tight">
              Our Story
            </h2>

            <div className="space-y-4 text-[#3d3d5c] text-sm md:text-base leading-relaxed font-['Nunito']">
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

          {/* RIGHT: Leadership Cards — Oval shape */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 animate-fade-in-right">

          
            {/* Card 1: Jagdev Singh Chauhan */}
          <div
            className="flex flex-col bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden "
            
          >
            <div className="aspect-[3/4] relative w-full overflow-hidden bg-zinc-100">
              <Image
                src="/Jagdev-sir.png"
                alt="Jagdev Singh Chauhan - Founder & Chairman"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
              />
            </div>
            <div className="py-2 px-3 text-center text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
              <h4 className="font-bold text-md font-['Baloo_2'] leading-tightn text-white">Jagdev Singh Chauhan</h4>
              <p className="text-white/80 text-[10px] font-semibold font-['Nunito'] mt-0.5">Founder & Chairman</p>
            </div>
          </div>

            {/* Card 2: Gayatri Singh */}
          <div
            className="flex flex-col bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden "
            
          >
            <div className="aspect-[3/4] relative w-full overflow-hidden bg-zinc-100">
              <Image
                src="/Director.jpeg"
                alt="Gayatri Singh - Director"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
              />
            </div>
            <div className="py-2 px-3 text-center text-white" style={{ backgroundColor: "var(--color-primary)" }}>
              <h4 className="font-bold text-md font-['Baloo_2'] leading-tight text-white">Gayatri Singh</h4>
              <p className="text-white/80 text-[10px] font-semibold font-['Nunito'] mt-0.5">Director</p>
            </div>
          </div>

          </div>
        </div>
      </div>

      {/* Bottom wave curve divider */}
     
    </section>
  );
}