"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Palette,
  Heart,
  Gamepad2,
  Pencil,
  Bird
} from "lucide-react";
import Button from "../components/Button";

export default function WelcomePreschool() {
  const router = useRouter();
  
  // Parallax Mouse values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = (clientX / window.innerWidth - 0.5) * 40;
    const targetY = (clientY / window.innerHeight - 0.5) * 40;
    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const parallaxSlowX = useTransform(springX, v => v * 0.3);
  const parallaxSlowY = useTransform(springY, v => v * 0.3);
  const parallaxFastX = useTransform(springX, v => v * -0.6);
  const parallaxFastY = useTransform(springY, v => v * -0.6);
  const parallaxTilt = useTransform(springX, v => v * 0.15); // Slight tilt for splash

  // A more chaotic organic splat shape for the splash
  const splatClipPath = "M0.475,0.055 C0.605,0.102 0.825,0.005 0.885,0.125 C0.945,0.245 0.815,0.355 0.875,0.485 C0.935,0.615 0.985,0.825 0.855,0.915 C0.725,1.005 0.565,0.885 0.435,0.915 C0.305,0.945 0.125,1.025 0.045,0.895 C-0.035,0.765 0.145,0.605 0.105,0.475 C0.065,0.345 -0.055,0.165 0.045,0.055 C0.145,-0.055 0.345,0.008 0.475,0.055 Z";

  // Badges matching the new image design (pastel blobs)
  const imageBadges = [
    {
      title: "Play",
      subtitle: "Explore",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />,
      shapeClass: "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
    },
    {
      title: "Learn",
      subtitle: "Grow",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-100",
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      shapeClass: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
    },
    {
      title: "Create",
      subtitle: "Innovate",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100",
      icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
      shapeClass: "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]"
    },
    {
      title: "Care",
      subtitle: "Share",
      iconColor: "text-rose-500",
      bgColor: "bg-rose-100",
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      shapeClass: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
    },
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-8 md:py-8 lg:py-3 bg-white overflow-hidden"
     
    >
      
      

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          
          {/* ── Left Column: Slide-up Splash Animation ── */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6 md:py-10 min-h-[300px]">
            
            {/* SVG Defs for Splat ClipPath */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="welcome-splat-clip" clipPathUnits="objectBoundingBox">
                  <path d={splatClipPath} />
                </clipPath>
              </defs>
            </svg>

            {/* The Main Splash & Image Container */}
            <motion.div
              style={{ x: parallaxSlowX, y: parallaxSlowY, rotate: parallaxTilt }}
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
              className="relative w-full max-w-[480px] aspect-square z-20 pointer-events-auto"
            >
              {/* Background Pastel Splashes (Offset for 3D layered paint effect) */}
              <div 
                className="absolute w-[105%] h-[105%] -top-[2%] -left-[2%] bg-gradient-to-tr from-purple-200 to-pink-200 opacity-80 -rotate-6"
                style={{ clipPath: "url(#welcome-splat-clip)" }}
              />
              <div 
                className="absolute w-[95%] h-[95%] top-[5%] left-[5%] bg-gradient-to-br from-orange-100 to-yellow-100 opacity-90 rotate-12"
                style={{ clipPath: "url(#welcome-splat-clip)" }}
              />

              {/* Foreground Splat containing the Image */}
              <div 
                className="w-full h-full relative overflow-hidden shadow-2xl bg-purple-50"
                style={{ clipPath: "url(#welcome-splat-clip)" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/galleryimg-5.jpeg"
                    alt="Children engaging in learning and play activities at Small Wonders Preschool"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>

          </div>
          {/* ── Right Column: Content ── */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-8">
            
            {/* Heading Section */}
            <div className="mb-4">
              <span className="text-[var(--color-secondary)] font-baloo text-xl font-bold block mb-2">
                Welcome to
              </span>
              <h2 className="font-baloo text-[var(--color-primary)] text-4xl sm:text-5xl lg:text-[40px] leading-[1.1] font-extrabold tracking-tight">
                Small Wonders Play School
              </h2>
            </div>

            {/* Paragraph Content */}
<div className="font-nunito text-[16px] md:text-[17px] text-[var(--color-body)] leading-relaxed mb-6 max-w-lg">
  <p className="mb-4">
    A happy place where tiny hands create, curious minds explore, and little hearts bloom. From exciting adventures to joyful learning moments, every day is designed to spark <span className="font-bold text-[var(--color-primary)]">imagination</span> and build <span className="font-bold text-[var(--color-primary)]">confidence</span>.
  </p>
  <p>
    Our nurturing educators craft each experience with love and purpose, ensuring every child feels seen, valued, and inspired. Through <span className="font-bold text-[var(--color-primary)]">play-based learning</span>, art, music, and storytelling, we lay the foundation for a lifelong love of learning. We're truly delighted to be a part of your child's wonderful journey of growth, discovery, and joy.
  </p>
</div>

            {/* Pastel Abstract Badges */}
            {/* <div className="w-full mb-8">
              <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg">
                {imageBadges.map((badge, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 group text-center cursor-pointer">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${badge.bgColor} ${badge.iconColor} ${badge.shapeClass}`}>
                      {badge.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-baloo text-[15px] sm:text-[17px] font-extrabold text-slate-800 leading-none mb-1">
                        {badge.title}
                      </span>
                      <span className={`font-nunito text-[12px] sm:text-[13px] font-bold ${badge.iconColor} opacity-80 leading-none`}>
                        {badge.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Button */}
            <Button
              label="Our Story"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
              iconPosition="right"
              className="group hover:-translate-y-1 transition-all shadow-md bg-[var(--color-secondary)] hover:opacity-90 rounded-full px-8"
              onClick={() => router.push("/about")}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
