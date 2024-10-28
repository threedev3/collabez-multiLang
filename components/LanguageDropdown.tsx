"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useLocale } from "@/context/LocaleContext";
import { useRouter, usePathname } from "next/navigation";

const LanguageDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const localeLang = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
    setIsDropdownOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* World Icon to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
      >
        <FaGlobe className="w-5 h-5" />
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-lg w-32 z-50">
          <ul className="flex flex-col text-left text-gray-800 font-medium">
            <li
              onClick={() => handleLanguageChange("en")}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                localeLang === "en" ? "font-bold" : ""
              }`}
            >
              English
            </li>
            <li
              onClick={() => handleLanguageChange("ar")}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                localeLang === "ar" ? "font-bold" : ""
              }`}
            >
              Arabic
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
