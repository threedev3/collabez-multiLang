"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Reviews = () => {
  const t = useTranslations("reviews");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const reviewItems = [
    {
      avatar: "/avatar1.png",
      name: t("reviewItems.0.name"),
      tagLine: t("reviewItems.0.tagLine"),
      review: t("reviewItems.0.review"),
    },

    {
      avatar: "/avatar3.png",
      name: t("reviewItems.1.name"),
      tagLine: t("reviewItems.1.tagLine"),
      review: t("reviewItems.1.review"),
    },
    {
      avatar: "/avatar4.png",
      name: t("reviewItems.2.name"),
      tagLine: t("reviewItems.2.tagLine"),
      review: t("reviewItems.2.review"),
    },
  ];

  const settings = {
    infinite: true,
    slideToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 808,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full " id="reviews">
      <div className="absolute top-0 -left-48 bg-blur-gradient lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] -z-0" />
      <div className="bg-[url('/reviewsBg.png')] bg-no-repeat bg-contain bg-right absolute right-0 top-40 bottom-0 lg:w-[500px] w-[400px]" />

      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex flex-col min-[806px]:gap-6 gap-6 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-7xl min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            {t("clientReviews")}
          </h3>
        </div>

        <Slider {...settings} className="w-full relative z-20">
          {reviewItems.map((reviewItem, index) => (
            <div className="mx-auto" key={index}>
              <div
                className={`bg-reviewCard/40 min-[1426px]:max-w-[460px] xl:max-w-[350px] max-w-full min-[808px]:min-h-[250px] min-[414px]:min-h-[220px] min-h-[300px] backdrop-blur-sm review-border flex flex-col ${
                  locale === "ar" ? "items-end" : "items-start"
                } gap-8 p-6 mx-3 cursor-pointer`}
              >
                <div
                  className={`flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                  } justify-between items-center w-full`}
                >
                  <div
                    className={`flex ${
                      locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center gap-3`}
                  >
                    <div>
                      <Image
                        src={reviewItem.avatar}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>

                    <div
                      className={`flex flex-col ${
                        locale === "ar" ? "items-end" : "items-start"
                      } gap-0.5`}
                    >
                      <h3 className="font-[family-name:var(--font-satoshi)] text-white text-lg">
                        {reviewItem.name}
                      </h3>
                      <p className="font-[family-name:var(--font-satoshi)] text-white text-sm">
                        {reviewItem.tagLine}
                      </p>
                    </div>
                  </div>

                  <div>
                    <Image src="/quote.png" alt="" width={50} height={50} />
                  </div>
                </div>

                <div>
                  <p
                    className={`font-[family-name:var(--font-satoshi)] text-white text-base min-[808px]:max-w-[370px] max-w-full ${
                      locale === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {reviewItem.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute -bottom-60 -right-28 bg-blur-gradient-purple  w-[600px] h-[600px]" />
    </div>
  );
};

export default Reviews;
