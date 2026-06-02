"use client";

import Image from "next/image";
import { Smile, Sparkles, BookOpen, Star } from "lucide-react";

interface ProgramItem {
  id: number;
  title: string;
  age: string;
  description: string;
  image: string;
  themeColor: string;
  icon: React.ReactNode;
}

export default function AboutPrograms() {
  const programs: ProgramItem[] = [
    {
      id: 1,
      title: "Play Group",
      age: "1.5 to 2 Years",
      description: "A joyful start where little ones explore, play, and build foundational social skills.",
      image: "/individual_kids/kids-slide.png",
      themeColor: "#4CAF50",
      icon: <Smile size={18} className="text-white" />,
    },
    {
      id: 2,
      title: "Nursery",
      age: "2 to 3 Years",
      description: "Building curiosity and creative expression through sensory play and guided activities.",
      image: "/individual_kids/kids-tunnel.png",
      themeColor: "#ff7043",
      icon: <Sparkles size={18} className="text-white" />,
    },
    {
      id: 3,
      title: "LKG (IK1)",
      age: "3 to 4 Years",
      description: "Developing critical thinking, communication, and foundational skills for independence.",
      image: "/individual_kids/kids-toy.png",
      themeColor: "#6b3fa0",
      icon: <BookOpen size={18} className="text-white" />,
    },
    {
      id: 4,
      title: "UKG (IK2)",
      age: "4 to 5 Years",
      description: "Preparing young learners for formal primary schooling, academic confidence, and success.",
      image: "/classrooms/kids-puzzle-table.jpg",
      themeColor: "#00bcd4",
      icon: <Star size={18} className="text-white" />,
    },
  ];

  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[30%] w-12 h-12 star-float-png z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/graphics_and_icons/slider_shape02.png" alt="Star" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/graphics_and_icons/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="w-16 h-1 bg-[#4c1b85] rounded-full mb-4" />
          <h2 className="text-[#ff7043] font-black text-3xl md:text-5xl font-['Baloo_2']">
            Our Programs
          </h2>
          <p className="text-[#7a7a9d] text-base md:text-lg font-['Nunito'] mt-3 max-w-[600px]">
            Tailored age-appropriate education plans designed to nourish each child&apos;s academic and emotional growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up delay-200">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col rounded-[24px] bg-white shadow-lg hover:shadow-2xl overflow-hidden border border-[#e8e8f0] group hover:-translate-y-2 hover:border-transparent transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title / Icon Divider Banner */}
              <div
                className="flex items-center gap-2 px-5 py-3 text-white font-bold text-sm md:text-base font-['Baloo_2']"
                style={{ backgroundColor: prog.themeColor }}
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[15deg]">
                  {prog.icon}
                </div>
                <span>{prog.title}</span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">
                <span
                  className="font-bold text-xs uppercase tracking-wider font-['Nunito'] mb-2"
                  style={{ color: prog.themeColor }}
                >
                  {prog.age}
                </span>
                <p className="text-[#3d3d5c] text-sm md:text-base leading-relaxed font-['Nunito'] flex-grow">
                  {prog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
