import React from "react";
import SubHero from "@/components/SubHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import ThankYouComp from "@/components/ThankYou";

const ThankYou = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
      <div className="bg-[url('/bgLines.png')] bg-no-repeat h-full bg-cover w-full bg-center bg-opacity-20 absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-20 w-full">
        <SubHero />
        <div className="relative z-20">
          <AnimateOnScroll>
            <ThankYouComp />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Footer />
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
