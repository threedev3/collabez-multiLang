"use client";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

const SubHero = () => {
  return (
    <section className="relative z-10 border-b border-white/20" id="thank-home">
      <div
        className="bg-[url('/heroBg.png')] bg-no-repeat  bg-cover bg-center w-full relative z-10"
        // id="home"
      >
        <CardSpotlight className=" relative sm:px-10 px-5 sm:py-10 py-5 w-full z-10">
          <div className="bg-black absolute inset-0 h-screen w-full bg-opacity-5" />
          <div>
            <Spotlight
              className="-top-12 -left-10 md:left-0 md:top-0 h-screen "
              fill="#854CFF"
            />
          </div>

          <div className="max-w-[93%] w-full mx-auto relative z-0 ">
            <Link href="/">
              <Image
                src="/logo.png"
                width={180}
                height={100}
                alt="collabez-logo"
                className="cursor-pointer object-contain"
              />
            </Link>
          </div>

          <div
            className={`flex justify-center items-center relative sm:py-12 py-8 lg:z-10 `}
          >
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[70vw] flex flex-col min-[1400px]:gap-10 xl:gap-10 lg:gap-10 gap-4 items-center justify-center h-full">
              <TextGenerateEffect
                words={["Thank You for Reaching Out!"]}
                className="text-center text-[28px] min-[375px]:text-[25px] min-[414px]:text-[30px] min-[540px]:text-[36px] md:text-[50px] lg:text-[56px] xl:text-[60px] min-[1400px]:text-[70px] font-[family-name:var(--font-satoshi-bold)]"
              />

              <p className="text-center md:tracking-wider xl:mb-4 text-base text-white/80 min-[414px]:text-base min-[540px]:text-lg md:text-xl xl:text-xl min-[1400px]:text-2xl font-[family-name:var(--font-satoshi)] max-w-4xl ">
                We&apos;ve received your information and our team will get back
                to you shortly to discuss your project. Stay tuned for an email
                from us!
              </p>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default SubHero;
