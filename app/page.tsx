import HeroBanner from "./home_page_components/HeroBanner";
import ActivityTicker from "./home_page_components/ActivityTicker";
import WelcomePreschool from "./home_page_components/WelcomePreschool";
import OurPrograms from "./home_page_components/OurPrograms";
import WhatWeOffer from "./home_page_components/WhatWeOffer";
import WhyChooseUs from "./home_page_components/WhyChooseUs";
import Testimonials from "./home_page_components/Testimonials";
import StepsToJoin from "./home_page_components/StepsToJoin";
import FAQ from "./home_page_components/FAQ";
import AdmissionsBanner from "./home_page_components/AdmissionsBanner";
import HomeBanner from "./components/Homepage/HomeBanner";

export default function Home() {
  return (
    <main className="flex-1 bg-[var(--color-offwhite)] relative">
      {/* Home Page Section 2: Banner Section (Hero Carousel & Stats Bar) */}
      <HomeBanner />
      {/* <HeroBanner /> */}

      {/* Home Page Section 3: Continuous Horizontal Scrolling Ticker of Activities */}
      <ActivityTicker />

      {/* Home Page Section 4: Welcome to Preschool Section */}
      <WelcomePreschool />

      {/* Home Page Section 5: Our Programs Section with Animated Fish Path */}
      {/* <OurPrograms /> */}

      {/* Home Page Section 5b: What We Offer (New Programs Section) */}
      <WhatWeOffer />

      {/* Home Page Section 6: Why Choose Us Feature Grid Section */}
      <WhyChooseUs />

      {/* Home Page Section 7: What Parents Say Testimonials Section */}
      <Testimonials />

      {/* Home Page Section 8: Steps to Join Admission Process Section */}
      <StepsToJoin />

      {/* Home Page Section 9: Frequently Asked Questions Section */}
      <FAQ />

      {/* Home Page Section 10: Admissions Open Banner Section (Above Footer) */}
      <AdmissionsBanner />
    </main>
  );
}