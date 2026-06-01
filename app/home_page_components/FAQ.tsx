"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is the process of admission?",
      answer: (
        <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
          For enrolling your child, you need to fill in the admission forms provided in the prospectus and submit to the School along with the admission fees.
        </p>
      ),
    },
    {
      question: "What are the documents required for admission?",
      answer: (
        <div className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
          <p className="mb-2 font-semibold">The Documents required for admission are:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Duly filled in admission form.</li>
            <li>6 passport size photographs of the child.</li>
            <li>Photocopy of the birth certificate.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Is School Uniform Compulsory?",
      answer: (
        <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
          Yes, the specially designed uniform is recommended. This tradition contributes a strong sense of unity & uniformity in the School with an added benefit of having a neat & well-groomed child.
        </p>
      ),
    },
    {
      question: "What is the student teacher Ratio?",
      answer: (
        <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
          The efforts are made to keep it low to give them good care and individual attention. The child and teacher ratio normally is 10:1.
        </p>
      ),
    },
    {
      question: "Do you converse in English with the Kids?",
      answer: (
        <p className="font-nunito text-sm sm:text-base text-[var(--color-body)] leading-relaxed font-medium">
          In the beginning the child is made comfortable in the School by making use of both the languages i.e., English as well as his/her own mother tongue to express himself. Gradually the child is conditioned to English commands and converse, with time as per his/her progress.
        </p>
      ),
    },
  ];

  return (
    <section className="relative py-6 md:py-10 bg-transparent overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-[8%] left-[5%] w-12 h-12 text-[var(--color-primary)] opacity-10 pointer-events-none hidden md:block">
        <HelpCircle className="w-full h-full" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-14 h-14 text-[var(--color-secondary)] opacity-10 pointer-events-none hidden md:block animate-[bounce_5s_infinite]">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" /></svg>
      </div>

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="section-label mb-4 inline-flex items-center gap-1.5 bg-[var(--color-bg-yellow)] text-[var(--color-primary)]">
            Got Questions?
          </span>
          <h2 className="font-baloo text-[var(--color-primary)] text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-extrabold px-3">
            Frequently Asked Question's
          </h2>
        </div>

        {/* Hover Accordion Cards List */}
        <div
          onMouseLeave={() => setHoveredIndex(0)}
          className="max-w-4xl mx-auto space-y-3 md:space-y-4"
        >
          {faqs.map((faq, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`bg-white rounded-2xl border transition-all duration-300 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(107,63,160,0.04)] cursor-pointer select-none ${isHovered
                    ? "border-[var(--color-primary)] shadow-[0_10px_30px_-6px_rgba(224,104,32,0.10)]"
                    : "border-[var(--color-border)] hover:border-[var(--color-secondary-light)]"
                  }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`font-baloo text-base sm:text-lg lg:text-xl font-extrabold leading-snug transition-colors duration-200 ${isHovered ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]"
                      }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Circular expand icon wrapper */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-[var(--color-primary)] text-white rotate-180" : "bg-[var(--color-bg-purple)] text-[var(--color-secondary)]"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 h-5" />
                  </div>
                </div>

                {/* Animated expandable answer body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isHovered
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-dashed border-gray-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                >
                  <div className="overflow-hidden">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
