"use client";

import { School, Sparkles, Heart, Gamepad2, Bus, Users } from "lucide-react";

interface SpecialItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  hoverBg: string;
  shadowColor: string;
}

export default function AboutSpecial() {
  const items: SpecialItem[] = [
    {
      id: 1,
      title: "Colorful & Safe Classrooms",
      icon: <School size={38} />,
      iconColor: "#4CAF50",
      hoverBg: "hover:bg-[#f1f8f3]",
      shadowColor: "hover:shadow-[#4CAF50]/15",
    },
    {
      id: 2,
      title: "Activity & Learning Zones",
      icon: <Sparkles size={38} />,
      iconColor: "#ff7043",
      hoverBg: "hover:bg-[#fff7f5]",
      shadowColor: "hover:shadow-[#ff7043]/15",
    },
    {
      id: 3,
      title: "Experienced & Caring Teachers",
      icon: <Heart size={38} />,
      iconColor: "#8b5bbf",
      hoverBg: "hover:bg-[#fbf8ff]",
      shadowColor: "hover:shadow-[#8b5bbf]/15",
    },
    {
      id: 4,
      title: "Play-Based Curriculum",
      icon: <Gamepad2 size={38} />,
      iconColor: "#00bcd4",
      hoverBg: "hover:bg-[#ecfdff]",
      shadowColor: "hover:shadow-[#00bcd4]/15",
    },
    {
      id: 5,
      title: "Transport Facility Available",
      icon: <Bus size={38} />,
      iconColor: "#4CAF50",
      hoverBg: "hover:bg-[#f1f8f3]",
      shadowColor: "hover:shadow-[#4CAF50]/15",
    },
    {
      id: 6,
      title: "Strong Parent Partnership",
      icon: <Users size={38} />,
      iconColor: "#ec4899",
      hoverBg: "hover:bg-[#fff0f5]",
      shadowColor: "hover:shadow-[#ec4899]/15",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[30%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#ff7043] font-black text-3xl md:text-[38px] font-['Baloo_2'] relative inline-block">
            What Makes Us Special
            <div className="w-12 h-1 bg-[#4CAF50] mx-auto mt-2 rounded-full" />
          </h2>
        </div>

        {/* Highlight Items Grid - Borderless card layout with interactive float animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 animate-fade-in-up delay-200">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center p-6 rounded-[24px] bg-white border border-transparent transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl ${item.hoverBg} ${item.shadowColor} group cursor-pointer`}
            >
              {/* Icon Container with Micro-animation on hover */}
              <div
                className="transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-[12deg] mb-6"
                style={{ color: item.iconColor }}
              >
                {item.icon}
              </div>

              {/* Title, animates color on hover */}
              <h3 className="text-[#3d3d5c] font-extrabold text-sm md:text-[15px] leading-snug font-['Baloo_2'] max-w-[140px] group-hover:text-[#ff7043] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
