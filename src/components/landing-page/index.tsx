import About from "./about";
import Briefing from "./brief";
import HeroSection from "./hero";
import WhyChooseUs from "./why-choose-us";
import OurProducts from "./products";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <About />
      <Briefing />
      <WhyChooseUs />
      <OurProducts />
    </>
  );
}
