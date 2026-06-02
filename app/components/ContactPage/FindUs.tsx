"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

export default function ContactMap() {
  const handleGetDirections = () => {
    window.open(
      "https://maps.google.com/?q=Plot+No+160/140,+O+U+Teacher’s+Colony,+Hi-Tension+Road,+Sainikpuri,+Secunderabad,+Telangana+500094",
      "_blank"
    );
  };

  return (
    <section className="relative pb-20 bg-white">
      <div className="container-custom">
        <div className="relative w-full rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 bg-white overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row w-full items-stretch">

            {/* Left Column: Info & Button */}
            <div className="flex-none w-full lg:w-[360px] xl:w-[420px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-6 md:p-8 lg:py-10 lg:pl-12 lg:pr-6 xl:py-12 xl:pl-14 xl:pr-8">
              <h3 className="font-baloo text-[36px] font-bold text-[var(--color-primary)] mb-4">
                Find Us Here
              </h3>
              <p className="font-nunito text-base text-slate-700 font-bold leading-relaxed mb-8">
                Plot No 160/140, <br />
                O U Teacher’s Colony, <br />
                Hi-Tension Road, Sainikpuri, <br />
                Secunderabad, Telangana. 500094.
              </p>
              <Button
                onClick={handleGetDirections}
                variant="secondary"
                size="lg"
                className="font-bold shadow-md hover:-translate-y-1 active:translate-y-0 flex justify-center items-center py-4 px-8 text-base rounded-2xl w-full sm:w-auto"
              >
                Get Directions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Column: Maps Image with Floating Card */}
            <div className="flex-1 relative w-full min-h-[300px] lg:min-h-[300px]">
              <Image
                src="/graphics_and_icons/maps_image.png"
                alt="Map Location"
                fill
                className="object-cover"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-sm p-4 rounded-[28px] shadow-2xl flex flex-col items-center w-[180px] md:w-[210px] border border-white">
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-3 shadow-inner border-[4px] border-white">
                  <Image
                    src="/real_school/galleryimg-1.jpeg"
                    alt="School Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-baloo text-lg font-bold text-[var(--color-primary)] text-center leading-tight pb-1">
                  We Can&apos;t Wait to <br /> Meet You!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}