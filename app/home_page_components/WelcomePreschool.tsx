"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Palette,
  Heart,
  Gamepad2,
} from "lucide-react";
import Button from "../components/Button";

export default function WelcomePreschool() {
  const router = useRouter();
  
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
  const parallaxTilt  = useTransform(springX, v => v * 0.15);

  const splatClipPath = "M0.475,0.055 C0.605,0.102 0.825,0.005 0.885,0.125 C0.945,0.245 0.815,0.355 0.875,0.485 C0.935,0.615 0.985,0.825 0.855,0.915 C0.725,1.005 0.565,0.885 0.435,0.915 C0.305,0.945 0.125,1.025 0.045,0.895 C-0.035,0.765 0.145,0.605 0.105,0.475 C0.065,0.345 -0.055,0.165 0.045,0.055 C0.145,-0.055 0.345,0.008 0.475,0.055 Z";

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-8 md:py-10 lg:py-3 bg-white overflow-hidden"
    >
      <div className="container-custom relative z-10">

        {/* ── MOBILE-ONLY HEADING (below md) ── */}
        <div className="block md:hidden mb-2 px-1">
          <h2
            className="font-baloo leading-[1.1] font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 5.5vw, 1.8rem)" }}
          >
            <span className="text-[var(--color-secondary)]">Welcome to </span>
            <span className="text-[var(--color-primary)]">Small Wonders Play School</span>
          </h2>
        </div>

        {/* Grid: single col on mobile, two-col from md+ (tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">

          {/* ── Left Column: Image ── */}
          <div className="md:col-span-1 lg:col-span-6 relative flex justify-center items-center py-6 md:py-8 lg:py-10 min-h-[300px] order-1">

            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="welcome-splat-clip" clipPathUnits="objectBoundingBox">
                  <path d={splatClipPath} />
                </clipPath>
              </defs>
            </svg>

            <motion.div
              style={{ x: parallaxSlowX, y: parallaxSlowY, rotate: parallaxTilt }}
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
              className="relative w-full max-w-[480px] md:max-w-[340px] lg:max-w-[480px] aspect-square z-20 pointer-events-auto"
            >
              <div
                className="absolute w-[105%] h-[105%] -top-[2%] -left-[2%] bg-gradient-to-tr from-purple-200 to-pink-200 opacity-80 -rotate-6"
                style={{ clipPath: "url(#welcome-splat-clip)" }}
              />
              <div
                className="absolute w-[95%] h-[95%] top-[5%] left-[5%] bg-gradient-to-br from-orange-100 to-yellow-100 opacity-90 rotate-12"
                style={{ clipPath: "url(#welcome-splat-clip)" }}
              />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* ── Right Column: Content ── */}
          <div className="md:col-span-1 lg:col-span-6 flex flex-col items-start lg:pl-8 order-2">

            {/* Heading — hidden on mobile only, visible from md+ */}
            <div className="mb-4 hidden md:block">
              <span className="text-[var(--color-secondary)] font-baloo text-xl font-bold block mb-2">
                Welcome to
              </span>
              <h2 className="font-baloo text-[var(--color-primary)] text-3xl md:text-4xl lg:text-[40px] leading-[1.1] font-extrabold tracking-tight">
                Small Wonders Play School
              </h2>
            </div>

            {/* Paragraph */}
            <div className="font-nunito text-[15px] md:text-[15px] lg:text-[17px] text-[var(--color-body)] leading-relaxed mb-6 max-w-lg">
              <p className="mb-4">
                A happy place where tiny hands create, curious minds explore, and little hearts bloom. From exciting adventures to joyful learning moments, every day is designed to spark{" "}
                <span className="font-bold text-[var(--color-primary)]">imagination</span> and build{" "}
                <span className="font-bold text-[var(--color-primary)]">confidence</span>.
              </p>
              <p>
                Our nurturing educators craft each experience with love and purpose, ensuring every child feels seen, valued, and inspired. Through{" "}
                <span className="font-bold text-[var(--color-primary)]">play-based learning</span>, art, music, and storytelling, we lay the foundation for a lifelong love of learning. We're truly delighted to be a part of your child's wonderful journey of growth, discovery, and joy.
              </p>
            </div>

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