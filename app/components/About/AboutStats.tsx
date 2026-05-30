"use client";

import Image from "next/image";

export default function AboutStats() {
  const stats = [
    { value: "15+", label: "Years Of Care" },
    { value: "1200+", label: "Happy Little Alumni" },
    { value: "25+", label: "Caring Educators" },
    { value: "9", label: "Daily Activities" },
  ];

  const handleScrollToStory = () => {
    const element = document.getElementById("our-story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-16 md:py-2 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay to ensure text readability over the bg image */}
      <div className="absolute inset-0 bg-white/60 z-0 pointer-events-none" />

      {/* Floating Emojis in far margins */}
      {/* <div className="absolute left-[3%] top-[30%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div> */}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Organic Blob Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-center py-10 animate-fade-in-left lg:-translate-x-16">
            <div className="relative w-full max-w-[530px] aspect-square flex justify-center items-center animate-float-main-image">

              <div
                className="absolute pointer-events-none z-0 animate-float-blob-1"
                style={{
                  top: "-2%",
                  right: "-2%",
                  width: "55%",
                  height: "58%",
                  backgroundColor: "rgba(224, 83, 28, 0.22)",
                  borderRadius: "60% 40% 50% 50% / 45% 60% 40% 55%",
                }}
              />

              <div
                className="absolute pointer-events-none z-0 animate-float-blob-2"
                style={{
                  bottom: "-2%",
                  left: "-2%",
                  width: "52%",
                  height: "48%",
                  backgroundColor: "rgba(0, 188, 212, 0.18)",
                  borderRadius: "50% 60% 40% 60% / 55% 40% 60% 45%",
                }}
              />

              <div
                className="absolute z-10 pointer-events-none"
                style={{ top: "10%", left: "18%", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#4b2ca0", opacity: 0.9 }}
              />
              <div
                className="absolute z-10 pointer-events-none"
                style={{ top: "22%", left: "25%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff7043", opacity: 0.85 }}
              />
              <div
                className="absolute z-10 pointer-events-none"
                style={{ top: "36%", left: "10%", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#f5b842", opacity: 0.9 }}
              />

              <div
                className="relative z-10 overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500 w-[88%] h-[88%]"
                style={{
                  borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
                  border: "7px solid #ffffff",
                }}
              >
                <Image
                  src="/kids-clapping.jpg"
                  alt="Happy clapping children at Small Wonders"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                />
              </div>

            </div>
          </div>

          {/* RIGHT: Text Content & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left animate-fade-in-right">
            <span className="text-[var(--color-primary)] font-bold text-xs tracking-widest uppercase font-['Nunito'] mb-3 block">
              — ABOUT SMALL WONDERS
            </span>
            <h2 className="text-[var(--color-secondary)] font-black text-3xl md:text-5xl leading-tight font-['Baloo_2'] mb-6">
              A Joyful Start Since 2009
            </h2>

            <p className="text-[#3d3d5c] text-base md:text-lg leading-relaxed font-['Nunito'] mb-5">
              Small Wonders opened its doors in 2009 with one simple belief — that every child deserves
              a childhood full of curiosity, kindness and play. What began as a tiny neighbourhood playgroup
              is today a much-loved preschool and daycare for families in our community.
            </p>

            <p className="text-[#3d3d5c] text-base md:text-lg leading-relaxed font-['Nunito'] mb-8">
              Our bright classrooms, age-appropriate activities and warm caregivers create the perfect space
              for children aged 1.5 to 6 years to learn, grow and feel at home — all day, every day.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pt-1">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col transform hover:scale-105 transition-transform duration-300 cursor-default group">
                  <span className="text-[var(--color-primary)] font-extrabold text-2xl md:text-4xl font-['Baloo_2'] group-hover:text-[#e0531c] transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[#7a7a9d] text-xs font-semibold font-['Nunito'] mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}