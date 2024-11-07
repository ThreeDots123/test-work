import About from "./about";
import Briefing from "./brief";
import HeroSection from "./hero";
import WhyChooseUs from "./why-choose-us";
import OurProducts from "./products";
import Testimonials from "./testimonials";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <About />
      <Briefing />
      <WhyChooseUs />
      <OurProducts />
      <Testimonials />

      <div className="pt-[100px] bg-slate-100">
        <div className="text-center w-fit mx-auto">
          <h5 className="text-xl font-medium">Ready to request a quote?</h5>
          <span className="block mx-auto">
            <a
              href="/contact"
              className="text-white py-[5px] px-10 text-5xl font-semibold bg-[rgb(32,31,31)] block w-fit mx-auto"
            >
              let's talk
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
