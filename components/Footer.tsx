"use client";

import React from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative  w-full border-t border-[#63518960]">
      <div className="absolute -top-40 -left-48 bg-blur-gradient-purple opacity-80 w-[700px] h-[700px]" />
      <div className="sm:px-10 px-5 sm:py-10 py-5 relative z-10">
        <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-6 lg:gap-6 gap-6 items-start justify-center h-full relative z-10">
          <div className="grid lg:grid-cols-4 min-[540px]:grid-cols-2 grid-cols-1 min-[540px]:gap-6 gap-8 place-items-start place-content-center w-full">
            <div className="flex flex-col gap-3">
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
                  Transforming ideas into impactful digital solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl font-extrabold">
                  Quick Links
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("why-choose")}
                >
                  Why Collabez
                </li>
                <li
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  onClick={() => scrollToSection("reviews")}
                >
                  Reviews
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  Services
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Web Development
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  UI/UX Designer
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Branding
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  Shopify
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white text-xl">
                  Contact Us
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                <a
                  className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm cursor-pointer"
                  href="mailto:hello@collabez.ae"
                >
                  hello@collabez.ae
                </a>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  +97142206029
                </li>
                <li className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                  SPC Freezone, Sharjah, UAE
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/50 mt-6"></div>

          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4 w-full">
            <div>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm md:text-start text-center">
                © {currentYear} Collabez. All rights reserved.
              </p>
            </div>
            <div className="flex gap-3 items-center md:justify-start justify-center">
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Privacy Policy
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Terms of Service
              </p>
              <p className="text-white font-[family-name:var(--font-satoshi)] min-[540px]:text-base text-sm">
                Cookie Policy
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
