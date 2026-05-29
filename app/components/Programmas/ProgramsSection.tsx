"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Play Group",
    age: "Age: 2 – 3 Years",
    color: "#22A45D",
    borderColor: "#22A45D",
    image: "/galleryimg-1.jpeg",
  },
  {
    id: 2,
    title: "Nursery",
    age: "Age: 3 – 4 Years",
    color: "#6B3FA0",
    borderColor: "#6B3FA0",
    image: "/galleryimg-12.jpeg",
  },
  {
    id: 3,
    title: "PP1",
    age: "Age: 4 – 5 Years",
    color: "#E06820",
    borderColor: "#E06820",
    image: "/galleryimg-13.jpeg",
  },
  {
    id: 4,
    title: "PP2",
    age: "Age: 5 – 6 Years",
    color: "#1A8FD1",
    borderColor: "#1A8FD1",
    image: "/galleryimg-4.jpeg",
  },
  {
    id: 5,
    title: "Day Care",
    age: "8:30 AM – 7:00 PM",
    color: "#E06820",
    borderColor: "#E06820",
    badge: "Proeve",
    image: "/galleryimg-5.jpeg",
  },
];

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? programs.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === programs.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-[white] py-14 md:py-20">
      {/* Section Header */}
      <div className="container-custom text-center mb-10 md:mb-12">
        <p className="text-[#E06820] font-bold text-[13px] tracking-[0.15em] uppercase font-['Nunito'] mb-3">
          Every Child Is Different
        </p>
        <h2 className="text-[#2E2E2E] font-extrabold text-[36px] md:text-[48px] font-['Baloo_2'] leading-tight">
          Find the Right <span className="text-[#E06820]">Learning Path</span>
        </h2>
        <div className="flex justify-center mt-4 mb-5">
          <div className="w-20 h-1.5 rounded-full bg-[#E06820]" />
        </div>
        <p className="text-gray-500 text-[15px] md:text-[17px] font-['Nunito'] max-w-[580px] mx-auto leading-relaxed">
          From playful toddler exploration to school-ready confidence — each programme is carefully crafted for your child's stage of growth.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="container-custom hidden sm:block">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>

      {/* Mobile Carousel — one card at a time */}
      <div className="sm:hidden px-4">

        {/* Single card display */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {programs.map((program) => (
              <div key={program.id} className="flex-shrink-0 w-full px-1">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons only */}
        <div className="flex items-center justify-center gap-3 mt-5">

          {/* Prev Button */}
          <button
            onClick={prev}
            className="w-12 h-12 rounded-lg bg-[#6B3FA0] hover:bg-[#5a2f8e] flex items-center justify-center shadow-md transition-colors duration-200"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-12 h-12 rounded-lg bg-[#6B3FA0] hover:bg-[#5a2f8e] flex items-center justify-center shadow-md transition-colors duration-200"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>

      {/* Note Box */}
      <div className="container-custom mt-10">
        <div className="bg-[#f3eeff] rounded-2xl border-2 border-[#f3eeff] px-8 py-8 md:px-12 md:py-10">
          <p className="text-black font-['Nunito'] text-[15px] md:text-[17px] leading-[1.9]">
            Our programmes are thoughtfully designed to nurture every child's unique potential.
            From Play Group through PP2, each stage builds on the last — fostering curiosity,
            confidence, and a lifelong love of learning. Our Day Care programme (Proeve) ensures
            your child is safe, engaged, and cared for from <strong>8:30 AM to 7:00 PM</strong>,
            with trained staff maintaining a warm and stimulating environment throughout the day.
            We follow a child-centred approach with a student–teacher ratio designed for personal
            attention and meaningful growth.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Button label="Admissions Enquiry" variant="primary" size="lg" />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: typeof programs[0] }) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden bg-[#f7f5f0] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
      style={{ borderBottom: `4px solid ${program.borderColor}` }}
    >
      <div className="relative w-full h-[160px] sm:h-[180px]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 py-4">
        <p
          className="font-extrabold text-[13px] uppercase tracking-wide font-['Nunito'] mb-1"
          style={{ color: program.color }}
        >
          {program.title}
          {program.badge && (
            <span
              className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full border normal-case tracking-normal align-middle"
              style={{ color: program.color, borderColor: program.color }}
            >
              {program.badge}
            </span>
          )}
        </p>
        <p className="text-gray-500 text-[13px] font-['Nunito']">{program.age}</p>
      </div>
    </div>
  );
}