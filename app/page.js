import HeroBanner from "@/component/home/HeroBanner";
import Features from "@/component/home/Features";
import About from "@/component/home/About";
import Programs from "@/component/home/Programs";
import Faculty from "@/component/home/Faculty";
import TextSlider from "@/component/home/TextSlider";
import Events from "@/component/home/Events";
import Experience from "@/component/home/Experience";
import Team from "@/component/home/Team";
import ContactForm from "@/component/home/ContactForm";
import Blog from "@/component/home/Blog";
import Gallery from "@/component/home/Gallery";
import CtaBanner from "@/component/home/CtaBanner";
import Mission from "@/component/home/Mission";
import Announcement from "@/component/home/announcement/Announcement";
import EventsCalendar from "@/component/events-calendar/EventsCalendar";
import ProgramCard from "@/component/Cards/ProgramCard";
import {programData} from "@/component/data/programData";
import StatsSection from "@/component/home/StatsSection";
import Placement from "@/component/home/Placement";
import Recruiters from "@/component/common/recruiters/Recruiters";
import Testimonials from "@/component/common/testimonials/Testimonials";

export default function Home() {
  return (
    <>
     <HeroBanner />
     <Announcement/>  
      {/* <Features /> */}
      <About />
      <Mission/>
      <ProgramCard programData = {programData} />
      <Gallery limit={6} />
      <StatsSection/>
      <Placement/>
        <Recruiters/>
        <Testimonials/>
       {/* <Programs />
      <AboutTwo />
      <Faculty />
      <TextSlider />
      <Events />
      <Testimonials />
      <Experience />
      <Team />
      <ContactForm />
      <Blog />
      
      <CtaBanner /> */}
    </>
  );
}
