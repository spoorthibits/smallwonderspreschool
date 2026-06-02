"use client";

import Image from "next/image";
import Button from "../Button";
import { useEffect, useRef, useState, useCallback } from "react";

const programs = [
  {
    id: 1,
    title: "Play Group",
    age: "2 to 3 Years",
    color: "#22A45D",
    borderColor: "#22A45D",
    image: "/real_school/galleryimg-1.jpeg",
    description:
      "A Playgroup program designed for toddlers aged 2–3 years. Children explore and learn through play, sensory activities, and social interaction, building motor skills and early communication.",
  },
  {
    id: 2,
    title: "Nursery",
    age: "3 to 4 Years",
    color: "#6B3FA0",
    borderColor: "#6B3FA0",
    image: "/classrooms/galleryimg-12.jpeg",
    description:
      "The Nursery program serves as children's first formal step into structured learning. It emphasizes early literacy and numeracy, fostering creativity and a love for books and storytelling.",
  },
  {
    id: 3,
    title: "PP1",
    age: "4 to 5 Years",
    color: "#E06820",
    borderColor: "#E06820",
    image: "/classrooms/galleryimg-13.jpeg",
    description:
      "PP1 builds on nursery foundations, introducing structured reading, writing, and arithmetic in an engaging, supportive classroom environment that sparks curiosity and confidence.",
  },
  {
    id: 4,
    title: "PP2",
    age: "5 to 6 Years",
    color: "#1A8FD1",
    borderColor: "#1A8FD1",
    image: "/classrooms/galleryimg-4.jpeg",
    description:
      "PP2 prepares children for primary school with advanced literacy, numeracy, and critical thinking — a solid bridge between early childhood education and formal schooling.",
  },
  {
    id: 5,
    title: "Summer Camp",
    age: "5 to 6 Years",
    color: "#22A45D",
    borderColor: "#22A45D",
    image: "/real_school/galleryimg-1.jpeg",
    description:
      "Engaging summer and winter camps that go beyond preschool to enhance analytical, cognitive, social, and language skills through storytelling, creative writing, and puzzle-solving.",
  },
  {
    id: 6,
    title: "Day Care",
    age: "8:30 AM – 7:00 PM",
    color: "#E06820",
    borderColor: "#E06820",
    badge: "Proeve",
    image: "/real_school/galleryimg-5-cropped.jpeg",
    description:
      "Our Day Care provides a safe, nurturing environment throughout the day with structured activities, supervised play, and rest time — giving parents peace of mind.",
  },
];

const GAP = 24; // px gap between cards

/** Returns how many cards to show based on container width */
function getVisibleCards(containerWidth: number): number {
  if (containerWidth < 640) return 1;   // mobile
  if (containerWidth < 1024) return 2;  // tablet
  return 3;                             // desktop
}

/** Extra horizontal inset so the single card on mobile isn't edge-to-edge */
function getSideInset(containerWidth: number): number {
  if (containerWidth < 640) return 32; // 16px breathing room each side
  return 0;
}

export default function ProgramsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Duplicate items for seamless infinite loop
  const items = [...programs, ...programs];

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const visible = getVisibleCards(containerWidth);
    const inset = getSideInset(containerWidth);
    const cw = (containerWidth - inset - GAP * (visible - 1)) / visible;
    setVisibleCards(visible);
    setCardWidth(cw);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  // Seamless loop reset
  useEffect(() => {
    if (currentIndex >= programs.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Auto-scroll every 2.5s
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goToNext, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext, isPaused]);

  // On mobile we subtract half the inset so the card is visually centred
  const sideInset = visibleCards === 1 ? 16 : 0;
  const translateX = -(currentIndex * (cardWidth + GAP)) + sideInset;

  return (
    <section className="w-full bg-white py-14 md:py-20">
      {/* Section Header */}
      <div className="container-custom text-center mb-10 md:mb-12">
        <p className="text-[#E06820] font-bold text-[13px] tracking-[0.15em] uppercase font-['Nunito'] mb-3">
          Every Child Is Different
        </p>
        <h2 className="text-[#1a1a2e] font-extrabold text-[36px] md:text-[48px] font-['Baloo_2'] leading-tight">
          Find the Right{" "}
          <span className="text-[#E06820]">Learning Path</span>
        </h2>
        <div className="flex justify-center mt-4 mb-5">
          <div className="w-20 h-1.5 rounded-full bg-[#E06820]" />
        </div>
        <p className="text-[#3d3d5c] text-[16px] md:text-[18px] font-['Nunito'] max-w-[800px] mx-auto leading-relaxed">
          Smallwonders preschool programs are designed for your child&apos;s
          holistic development. From Playgroup to PP2, we nurture essential
          skills in a fun, engaging environment.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Inner container: centred, with consistent side padding */}
        <div
          ref={containerRef}
          className="mx-auto px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "1280px" }}
        >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: isTransitioning
              ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
              : "none",
          }}
        >
          {items.map((program, idx) => (
            <div
              key={`${program.id}-${idx}`}
              style={{ flex: `0 0 ${cardWidth}px`, minWidth: `${cardWidth}px` }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2.5 mt-10">
        {programs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentIndex(i);
                setIsTransitioning(true);
              }
            }}
            className="transition-all duration-300"
            style={{
              width: currentIndex % programs.length === i ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background:
                currentIndex % programs.length === i
                  ? "#E06820"
                  : "#6b3fa040",
              border:
                currentIndex % programs.length === i
                  ? "none"
                  : "1.5px solid #6B3FA0",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Button label="Admissions Enquiry" variant="primary" size="lg" />
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[0] }) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{ border: "1px solid #e8e8f0", minHeight: "480px" }}
    >
      {/* Image */}
      <div className="relative w-full flex-shrink-0" style={{ height: "220px" }}>
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div
        className="px-6 py-5 flex flex-col flex-1"
        style={{ borderBottom: `4px solid ${program.borderColor}` }}
      >
        {/* Title row */}
        <div className="flex items-baseline justify-between gap-2 mb-3">
          <p
            className="font-extrabold text-[20px] uppercase tracking-wide font-['Nunito'] leading-none"
            style={{ color: program.color }}
          >
            {program.title}
            {program.badge && (
              <span
                className="ml-2 text-[12px] font-bold px-2 py-0.5 rounded-full border normal-case tracking-normal align-middle"
                style={{ color: program.color, borderColor: program.color }}
              >
                {program.badge}
              </span>
            )}
          </p>
          <span className="text-[#7a7a9d] text-[13px] font-['Nunito'] font-semibold whitespace-nowrap flex-shrink-0">
            {program.age}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#3d3d5c] text-[15px] font-['Nunito'] leading-relaxed flex-1">
          {program.description}
        </p>
      </div>
    </div>
  );
}