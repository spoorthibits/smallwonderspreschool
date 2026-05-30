"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomeBanner() {
  const [busDirection, setBusDirection] = useState<"slide-right" | "slide-left">("slide-right");
  const intervalLeftRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRightRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Bus animation: mirrors the reference code exactly
  // to_left fires every 10s, to_right fires every 20s
  useEffect(() => {
    intervalLeftRef.current = setInterval(() => {
      setBusDirection("slide-left");
    }, 10000);

    intervalRightRef.current = setInterval(() => {
      setBusDirection("slide-right");
    }, 20000);

    return () => {
      if (intervalLeftRef.current) clearInterval(intervalLeftRef.current);
      if (intervalRightRef.current) clearInterval(intervalRightRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(110vw); }
        }
        @keyframes slideInLeft {
          0%   { transform: translateX(110vw); }
          100% { transform: translateX(-120%); }
        }
        .bus-slide-right {
          animation: slideInRight 8s linear forwards;
        }
        .bus-slide-left {
          animation: slideInLeft 8s linear forwards;
        }
      `}</style>

      <section className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[520px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/preschool.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bus animation layer — sits above video */}
        <div
          className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
          style={{ height: "80px" }}
        >
          <div
            key={busDirection} // remount on direction change to restart animation
            className={busDirection === "slide-right" ? "bus-slide-right" : "bus-slide-left"}
            style={{ display: "inline-block", position: "absolute", bottom: "8px" }}
          >
            <Image
              src="/school-bus.png"
              alt="School bus"
              width={180}
              height={90}
              style={{
                display: "block",
                transform: busDirection === "slide-right" ? "scaleX(-1)" : "scaleX(1)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}