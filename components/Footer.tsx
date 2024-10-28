"use client";

import React from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = useTranslations("footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  // const footerText = t("currentYear", { year: currentYear });

  return (
    <div className="relative  w-full border-t border-[#63518960]">
      <div className="absolute -top-40 -left-48 bg-blur-gradient-purple opacity-80 w-[700px] h-[700px]" />
      <div className="sm:px-10 px-5 sm:py-10 py-5 relative z-10">
        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full relative z-10">
          <div
            className={`grid lg:grid-cols-4 min-[540px]:grid-cols-2 grid-cols-1 min-[540px]:gap-6 gap-8 ${
              locale === "ar" ? "place-items-end" : "place-items-start"
            }   w-full`}
          >
            <div
              className={`flex flex-col gap-3 ${
                locale === "ar"
                  ? "order-last items-end text-right"
                  : "items-start"
              }`}
            >
              <div>
                <Image
                  src="/logo.png"
                  width={220}
                  height={100}
                  alt=""
                  className="cursor-pointer object-contain"
                  onClick={scrollToTop}
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-satoshi)] text-white min-[540px]:text-lg text-base max-w-sm">
                  {t("description")}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col gap-3 ${
                locale === "ar" ? "order-3 items-end text-right" : "items-start"
              }`}
            >
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl font-extrabold">
                  {t("quickLinks.title")}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  {t("quickLinks.services")}
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("portfolio")}
                >
                  {t("quickLinks.portfolio")}
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("why-choose")}
                >
                  {t("quickLinks.whyCollabez")}
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("reviews")}
                >
                  {t("quickLinks.reviews")}
                </li>
              </ul>
            </div>
            <div
              className={`flex flex-col gap-3 ${
                locale === "ar" ? "order-2 items-end text-right" : "items-start"
              }`}
            >
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  {t("services.title")}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("services.webDevelopment")}
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("services.uiUxDesigner")}
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("services.branding")}
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("services.shopify")}
                </li>
              </ul>
            </div>
            <div
              className={`flex flex-col gap-3 ${
                locale === "ar" ? "order-1 items-end text-right" : "items-start"
              }`}
            >
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  {t("contactUs.title")}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <a
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  href="mailto:hello@collabez.ae"
                >
                  {t("contactUs.email")}
                </a>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("contactUs.phone")}
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  {t("contactUs.address")}
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/50 mt-6"></div>

          <div
            className={`flex ${
              locale === "ar" ? "md:flex-row-reverse" : "md:flex-row"
            }  flex-col md:justify-between md:items-center gap-4 w-full`}
          >
            <div>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm md:text-start text-center">
                {/* © {currentYear} Collabez. All rights reserved. */}
                {t("currentYear", {
                  year: currentYear,
                })}
              </p>
            </div>
            <div className="flex gap-3 items-center md:justify-start justify-center">
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                {t("policies.privacyPolicy")}
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                {t("policies.termsOfService")}
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                {t("policies.cookiePolicy")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-48 bg-blur-gradient opacity-80 w-[700px] h-[700px] z-0" />
    </div>
  );
};

export default Footer;
