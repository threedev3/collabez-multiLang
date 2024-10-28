"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { CardSpotlight } from "./ui/card-spotlight";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("hero");

  // Get the subtitles and rotating words and assert their types
  const subtitles: string[] = t("subtitles") as unknown as string[];
  const rotatingWords: string[] = t("rotatingWords") as unknown as string[];

  const subtitlesT = JSON.parse(t("subtitles"));
  const rotatingWordsT = JSON.parse(t("rotatingWords"));

  console.log("Subtitles:", subtitlesT);
  console.log("Rotating Words:", rotatingWordsT);

  return (
    <section
      className="min-h-screen relative z-30 border-b border-white/20"
      id="home"
    >
      <div
        className="bg-[url('/heroBg.png')] bg-no-repeat  bg-cover bg-center w-full relative z-30"
        // id="home"
      >
        <CardSpotlight className=" relative sm:px-10 px-5 sm:py-10 py-5 h-[100vh] w-full z-10">
          <div className="bg-black absolute inset-0 h-screen w-full bg-opacity-5" />
          <div>
            <Spotlight
              className="-top-12 -left-10 md:left-0 md:top-0 h-screen "
              fill="#854CFF"
            />
          </div>

          <div className="max-w-[93%] w-full mx-auto relative z-0 ">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>

          <div
            className={`flex justify-center items-center relative h-[96%] lg:z-[0] ${
              isMenuOpen ? "-z-[1]" : "z-0"
            }`}
          >
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] xl:max-w-[85vw] min-[1400px]:max-w-[70vw] flex flex-col min-[1400px]:gap-16 xl:gap-16 lg:gap-10 gap-16 items-center justify-center h-full">
              <TextGenerateEffect
                // words={["From Concept to Code,", "Transforming Ideas into"]}
                words={subtitlesT}
                rotatingWords={rotatingWordsT}
                className="text-center text-[28px] min-[375px]:text-[30px] min-[414px]:text-[32px] min-[540px]:text-[40px] md:text-[56px] lg:text-[56px] xl:text-[68px] min-[1400px]:text-[80px] font-[family-name:var(--font-satoshi-bold)]"
              />

              {/* <p className="text-center md:tracking-wider xl:mb-4 text-[17px] min-[414px]:text-lg min-[540px]:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-[family-name:var(--font-satoshi)]">
                Websites • Mobile Apps • Custom Software
              </p> */}
              {/* <p className="text-center md:tracking-wider xl:mb-4 text-base text-white/80 min-[414px]:text-base min-[540px]:text-base md:text-lg xl:text-xl font-[family-name:var(--font-satoshi)]">
                Searching for a dependable tech ally in UAE & KSA? Look no
                further. CollabEZ brings your ideas to life with precision and
                care. We&apos;re not just service providers; we&apos;re your
                long-term partners in digital success. Curious about what we can
                achieve together?
              </p> */}

              <a className="relative cursor-pointer">
                <MagicButton
                  title={t("title")}
                  position="right"
                  otherClasses="font-[family-name:var(--font-satoshi)]"
                  handleClick={() => scrollToSection("services")}
                />
              </a>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default Hero;
