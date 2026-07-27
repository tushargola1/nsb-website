import HeroBanner from "@/component/home/HeroBanner";
import Features from "@/component/home/Features";
import About from "@/component/home/About";
import Programs from "@/component/home/Programs";
import Faculty from "@/component/home/Faculty";
import TextSlider from "@/component/home/TextSlider";
import Events from "@/component/home/Events";
import Testimonials from "@/component/home/Testimonials";
import Experience from "@/component/home/Experience";
import Team from "@/component/home/Team";
import ContactForm from "@/component/home/ContactForm";
import Blog from "@/component/home/Blog";
import Gallery from "@/component/home/Gallery";
import CtaBanner from "@/component/home/CtaBanner";
import Mission from "@/component/home/Mission";

export default function Home() {
  return (
    <>
     <HeroBanner />
      {/* <Features /> */}
      <About />
      <Mission/>
      <Gallery />
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
