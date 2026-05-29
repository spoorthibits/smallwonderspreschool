"use client";

import Image from "next/image";

export default function AboutAimMission() {
  const missionItems = [
    {
      title: "Holistic Development",
      description: "Address the needs of the whole child - emotional, social, physical, and cognitive.",
    },
    {
      title: "Positive Relationships",
      description: "Build strong, collaborative partnerships with parents and the community.",
    },
    {
      title: "Teacher Empowerment",
      description: "Continuous professional growth, training, and support for our educators.",
    },
    {
      title: "Safe & Playful Infrastructure",
      description: "Clean, secure, and child-friendly facilities designed for exploration.",
    },
    {
      title: "Value-Based Learning",
      description: "Instill core values like respect, honesty, responsibility, and deep empathy.",
    },
    {
      title: "Global Citizens",
      description: "Prepare children to be innovative, responsible, and active citizens of tomorrow.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14 relative overflow-hidden">
      {/* Floating Emojis in far margins */}
      <div className="absolute left-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>

      {/* Background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#f3eeff] rounded-full opacity-30 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Our Aim */}
          <div className="lg:col-span-5 flex flex-col animate-fade-in-left">
            <div className="w-16 h-1 bg-[#4CAF50] rounded-full mb-4" />
            <h3 className="text-[#e0531c] font-black text-2xl md:text-4xl font-['Baloo_2'] mb-6">
              Our Aim
            </h3>
            <p className="text-[#3d3d5c] text-base md:text-lg leading-relaxed font-['Nunito'] mb-8">
              To create a safe, healthy, and delightful learning environment to make our future
              citizens independent learners, thinkers, and successful individuals.
            </p>

            {/* Styled Image Frame like Mockup (Green border, yellow star badge) */}
            <div className="relative p-3 bg-white rounded-[28px] border-4 border-[#4CAF50] shadow-xl rotate-[1deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
              
              {/* Floating Yellow Outline Star in top-right of image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 text-[#f5a623] star-float z-10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div className="w-full aspect-[4/3] relative rounded-[20px] overflow-hidden">
                <Image
                  src="/kids-praying.jpg"
                  alt="Children praying at Small Wonders"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Our Mission */}
          <div className="lg:col-span-7 flex flex-col relative animate-fade-in-right">
            
            {/* Rocket SVG Outline Background (mockup style) */}
            <div className="absolute right-0 bottom-0 w-44 h-44 text-[#e0531c]/5 pointer-events-none -z-0 balloon-float">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 5.5C4 22 6.25 21 7.5 19.5" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2 1 3.5 2 4.5L12 8l8.5 8.5c1-1 2-2.5 2-4.5 0-5.5-4.5-10-10-10z" />
                <path d="M9 15v6h6v-6" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-1 bg-[#e0531c] rounded-full mb-4" />
              <h3 className="text-[#e0531c] font-black text-2xl md:text-4xl font-['Baloo_2'] mb-6">
                Our Mission
              </h3>

              <ul className="space-y-6">
                {missionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 transform hover:translate-x-1.5 transition-transform duration-300 cursor-default group">
                    {/* Bullet marker */}
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <div className="flex flex-col">
                      <span className="text-[#4c1b85] font-extrabold text-base md:text-lg font-['Baloo_2'] leading-snug group-hover:text-[#4CAF50] transition-colors duration-300">
                        {item.title}:
                      </span>
                      <span className="text-[#3d3d5c] text-sm md:text-base font-['Nunito'] mt-0.5 leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
