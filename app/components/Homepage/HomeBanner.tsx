"use client";

import Image from "next/image";
import WavyActivityTicker from "../../home_page_components/WavyActivityTicker";

export default function HomeBanner() {
  return (
    <>
      <section className="relative w-full overflow-hidden flex flex-col bg-[#2a1f7a]">
        {/* Hero Video (full-width, natural height, no zoom, no crop) */}
        <div className="relative w-full z-0 bg-transparent leading-none">
          <video
            src="/final_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        </div>

        {/* Wavy Purple Banner */}
        <div className="relative w-full z-10 -mt-[50px]">
          <WavyActivityTicker />
        </div>
      </section>
    </>
  );
}