"use client";

export default function AboutAimMission() {
  const missionPillars = [
    {
      title: "Holistic Development",
      description:
        "Our programs go beyond academics, focusing on the emotional, social, and ethical growth of every child. We connect children to the community, nature, and global values, shaping them into compassionate, responsible citizens.",
      bg: "#fff3eb",
      titleColor: "var(--color-primary)",
      textColor: "var(--color-body)",
      border: "var(--color-primary)",
    },
    {
      title: "Positive Relationships",
      description:
        "We place families at the heart of everything we do, tailoring our approach to individual needs, fostering self-discovery, and helping children develop a strong sense of identity, belonging, and purpose.",
      bg: "#f3eeff",
      titleColor: "var(--color-secondary)",
      textColor: "var(--color-body)",
      border: "var(--color-secondary)",
    },
    {
      title: "Value-Based Learning",
      description:
        "Children learn best through play, and we integrate play-based methods to spark curiosity, creativity, and a lifelong love for learning — building confidence and courage every single day.",
      bg: "#e8f8f0",
      titleColor: "var(--color-accent-green)",
      textColor: "var(--color-body)",
      border: "var(--color-accent-green)",
    },
    {
      title: "Global Citizens",
      description:
        "We cultivate critical thinking and innovation by engaging children in problem-solving activities that develop cognitive and emotional skills, preparing them for the challenges and opportunities of tomorrow.",
      bg: "#e8f6fa",
      titleColor: "var(--color-accent-teal)",
      textColor: "var(--color-body)",
      border: "var(--color-accent-teal)",
    },
  ];

  return (
    <section
      className="w-full py-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgimg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Floating Emojis */}
      <div className="absolute left-[3%] top-[40%] w-16 h-16 sun-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape01.png" alt="Sun" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[3%] bottom-[20%] w-16 h-28 balloon-float z-10 opacity-80 pointer-events-none hidden md:block">
        <img src="/slider_shape03.png" alt="Heart Balloon" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2
            className="font-black text-3xl md:text-5xl font-['Baloo_2'] mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Our Mission
          </h2>
          <p
            className="text-sm md:text-[17px] font-['Nunito'] max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-body)" }}
          >
            Empowering Young Minds for a Bright Future
            <br />
            At Small Wonders, we are committed to providing a nurturing and holistic learning environment
            that brings out the best in every child. Our mission is to empower children with the confidence,
            creativity, and compassion they need to become future-ready individuals.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        {/* Pillars subheading */}
        <div className="text-center mb-10">
          <h2
            className="font-black text-3xl md:text-5xl font-['Baloo_2']"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Pillars of Excellence
          </h2>
        </div>

        {/* 4 Equal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {missionPillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-7 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default border-t-4"
              style={{
                backgroundColor: item.bg,
                borderRadius: "32px",
                minHeight: "380px",
                borderTopColor: item.border,
              }}
            >
              <h4
                className="font-black text-xl md:text-2xl font-['Baloo_2'] leading-snug mb-4 text-center"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm md:text-base font-['Nunito'] leading-relaxed text-center"
                style={{ color: item.textColor }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}