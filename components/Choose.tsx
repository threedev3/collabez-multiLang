"use client";
import { chooseItems } from "@/data";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";

const Choose = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative " id="why-choose">
      <div className="sm:px-10 px-5 sm:py-10 py-5 w-full mt-40">
        <div className="absolute top-20 -left-48 bg-blur-gradient-purple  lg:w-[700px] lg:h-[700px] sm:w-[400px] sm:h-[400px] w-[400px] h-[400px]" />

        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
          <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto ">
              Here’s Why We’re Different
            </h3>
          </div>

          {!isLargeScreen ? (
            <Slider {...sliderSettings} className="w-full relative">
              {chooseItems.map((chooseItem, index) => (
                <div className="relative" key={index}>
                  <div
                    key={index}
                    className="flex flex-col gap-6 items-center mt-10 group"
                  >
                    <div className="p-6 rounded-full gradient-border relative">
                      <div className="w-9 h-9 rounded-full bg-white absolute inset-0 flex items-center justify-center">
                        <p className="text-black font-[family-name:var(--font-satoshi-bold)] font-extrabold text-sm">
                          0{index + 1}
                        </p>
                      </div>
                      <Image
                        src={chooseItem.icon}
                        alt=""
                        height={80}
                        width={80}
                        className="object-contain"
                      />
                    </div>

                    <div className="w-16 h-1 bg-heroColor rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    <div>
                      <h3 className="font-[family-name:var(--font-satoshi)] text-white text-2xl">
                        {chooseItem.title}
                      </h3>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-satoshi)] text-white xl:text-lg text-base text-center xl:max-w-[350px] max-w-xs">
                        {chooseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full relative z-10">
              {chooseItems.map((chooseItem, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 items-center mt-10 group"
                >
                  <div className="p-6 rounded-full gradient-border relative">
                    <div className="w-9 h-9 rounded-full bg-white absolute inset-0 flex items-center justify-center">
                      <p className="text-black font-[family-name:var(--font-satoshi-bold)] font-extrabold text-sm">
                        0{index + 1}
                      </p>
                    </div>
                    <Image
                      src={chooseItem.icon}
                      alt=""
                      height={80}
                      width={80}
                      className=" object-contain"
                    />
                  </div>

                  <div className="w-16 h-1 bg-heroColor rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  <div>
                    <h3 className="font-[family-name:var(--font-satoshi)] text-white text-2xl">
                      {chooseItem.title}
                    </h3>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-satoshi)] text-white xl:text-lg text-base text-center xl:max-w-[350px] max-w-xs">
                      {chooseItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="sm:px-10 px-5 sm:py-10 py-5 border-t-2 border-[#63518960] border-b-2 mt-6 relative">
        <div className="absolute -top-32 -left-48 bg-blur-gradient-purple opacity-80 w-[500px] h-[500px]" />

        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full relative z-[5]">
          <div className="flex min-[806px]:flex-row flex-col min-[806px]:gap-6 gap-0 items-start justify-between w-full">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)]">
              Ready to Get Started?
            </h3>

            <a className="min-[1525px]:mt-8 mt-4 inline-flex flex-shrink-0 cursor-pointer">
              <MagicButton
                title="Get a Free Consultation"
                position="right"
                otherClasses="font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm"
                handleClick={() => scrollToSection("contact")}
              />
            </a>
          </div>
          <div>
            <p className="font-[family-name:var(--font-satoshi)] text-white lg:text-xl sm:text-lg font-medium text-base relative z-10 max-w-2xl">
              <span className="font-[family-name:var(--font-satoshi-bold)] font-bold">
                Let’s Build Something Great Together!
              </span>{" "}
              Whether you need a website, app, or custom solution, we’re ready
              to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 -right-48 bg-blur-gradient lg:w-[800px] lg:h-[650px] w-[400px] h-[400px]" />
    </div>
  );
};

export default Choose;
