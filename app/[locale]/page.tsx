import AnimateOnScroll from "@/components/AnimateOnScroll";
import Choose from "@/components/Choose";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechSlider from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import ScrollToTop from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
      <div className="bg-[url('/bgLines.png')] bg-no-repeat h-full bg-cover w-full bg-center bg-opacity-20 absolute inset-0 z-0" />
      <Toaster position="bottom-center" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-20 w-full">
        <Hero />
        <div className="relative z-20">
          <AnimateOnScroll>
            <TechSlider />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Services />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Choose />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Portfolio />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Reviews />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Process />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <ContactForm />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Footer />
          </AnimateOnScroll>

          <ScrollToTop />
        </div>
      </div>
    </main>
  );
}
