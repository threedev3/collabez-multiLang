"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  const t = useTranslations("portfolio");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const portfolioItems = [
    {
      bgImage: "portfolio1.png",
      title: t("items.0.title"),
      category: t("items.0.category"),
      link: "https://worldonboard.com/",
    },
    {
      bgImage: "portfolio2.png",
      title: t("items.1.title"),
      category: t("items.1.category"),
      link: "https://stellaronlineschool.co.uk/",
    },
    {
      bgImage: "portfolio3.png",
      title: t("items.2.title"),
      category: t("items.2.category"),
      link: "https://collabdash.io/",
    },
    {
      bgImage: "portfolio4.png",
      title: t("items.3.title"),
      category: t("items.3.category"),
      link: "https://tuitionhighway.com/",
    },
  ];

  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="portfolio"
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            {t("successStories")}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative  place-items-center w-full z-10">
          {portfolioItems.map((portfolio, index) => (
            <Link
              href={portfolio.link ? portfolio.link : ""}
              target={portfolio.link ? "_blank" : ""}
              key={index}
              style={{
                backgroundImage: `url(${portfolio.bgImage})`,
              }}
              className="xl:h-[560px] md:h-[460px] h-[320px] col-span-1 lg:w-[90%] w-[100%] aspect-square xl:bg-cover bg-cover bg-center bg-no-repeat mb-4 relative group cursor-pointer border border-portfolioBorder/35"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 border-2 border-arrowBorder rounded-full cursor-pointer">
                <FaArrowRight className="text-arrowBorder " />
              </div>
              <div
                className={`flex ${
                  locale === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center gap-1 sm:py-3 py-1.5 sm:px-3 px-3 w-[95%] mx-auto border border-white/35 absolute bottom-4 left-0 right-0 backdrop-blur-sm bg-white/10`}
              >
                <h3 className="text-portfolioText md:text-xl sm:text-lg text-base font-[family-name:var(--font-satoshi)]">
                  {portfolio.title}
                </h3>
                <p className="text-portfolioText font-light md:text-base text-sm font-[family-name:var(--font-satoshi)]">
                  {portfolio.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  md:w-[900px] md:h-[900px] w-[500px] h-[500px]" />
    </div>
  );
};

export default Portfolio;
