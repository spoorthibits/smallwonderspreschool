import AboutBanner from "../components/About/AboutBanner";
import AboutStats from "../components/About/AboutStats";
import AboutStory from "../components/About/AboutStory";
import AboutPhilosophy from "../components/About/AboutPhilosophy";
import AboutAimMission from "../components/About/AboutAimMission";
import AboutPrograms from "../components/About/AboutPrograms";
import AboutSpecial from "../components/About/AboutSpecial";
import ProgramsSection from "../components/Programmas/ProgramsSection";

export const metadata = {
  title: "About Us | Small Wonders International Play School",
  description: "Learn more about Small Wonders International Play School, our journey, philosophy, leadership, and programs.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutBanner />
      <AboutStats />
      <AboutStory />
      <AboutPhilosophy />
      <AboutAimMission />
      <ProgramsSection/>
      {/* <AboutPrograms /> */}
      <AboutSpecial />
    </main>
  );
}
