import GalleryScroll from "../components/Programmas/GalleryScroll";
import ProgrammesBanner from "../components/Programmas/ProgramBanner";
import ProgramsDaySchedule from "../components/Programmas/ProgramsDaySchedule";
import ProgramsSection from "../components/Programmas/ProgramsSection";
import AdmissionsBanner from "../home_page_components/AdmissionsBanner";

export default function Programs() {
    return (
        <>
        <ProgrammesBanner/>
        <ProgramsSection/>
        {/* <GalleryScroll/> */}
        {/* <AdmissionsBanner/> */}
        <ProgramsDaySchedule/>
        </>
    )
}
