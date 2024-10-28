"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
// import { navItems } from "@/data";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { scrollToSection } from "@/lib/scrollToSection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  // const router = useRouter();
  // const { locale } = router;

  // const isRTL = locale === "ar";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 },
  };

  const navItems = [
    { id: "home", name: t("home") },
    { id: "services", name: t("services") },
    { id: "portfolio", name: t("portfolio") },
    { id: "why-choose", name: t("why_choose") },
    { id: "reviews", name: t("reviews") },
    { id: "process", name: t("process") },
    { id: "contact", name: t("contact") },
  ];
  return (
    <header
      className={`flex ${
        locale === "ar" ? "flex-row-reverse" : "flex-row"
      } justify-between items-center gap-3 relative`}
      // dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center gap-3 w-full `}
      >
        <div className={`transform ${locale === "ar" ? "scale-x-[1]" : ""}`}>
          <Image
            src="/logo.png"
            width={180}
            height={100}
            alt="collabez-logo"
            className="cursor-pointer object-contain"
          />
        </div>

        <nav>
          <ul
            className={`lg:flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } lg:items-center min-[1400px]:gap-6 xl:gap-4 gap-3 hidden`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="list-none tracking-wide font-[family-name:var(--font-satoshi)] capitalize cursor-pointer text-white hover:text-heroColor transition-all duration-300 xl:text-base text-sm"
                onClick={() => handleScroll(item.id)}
                // href={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:block hidden absolute top-0 z-[10000]">
          <FloatingNav navItems={navItems} />
        </div>

        <div className="lg:flex lg:items-center xl:gap-6 gap-4 hidden">
          <a className="relative z-20 cursor-pointer">
            <MagicButton
              title={t("get_quote")}
              position="right"
              otherClasses="font-[family-name:var(--font-satoshi)] w-32 "
              handleClick={() => scrollToSection("contact")}
            />
          </a>
        </div>

        <div
          className="lg:hidden block w-10 h-8 cursor-pointer z-[11000] relative"
          onClick={toggleMenu}
        >
          <FaBars
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <IoCloseSharp
            className={`h-8 w-8 text-white absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-50"
            }`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 ${
              isMenuOpen ? "z-[10000]" : "z-0"
            } bg-black bg-opacity-95 flex flex-col gap-6 items-center justify-center`}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="space-y-5 text-center">
                {navItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-white text-4xl font-bold hover:text-heroColor transition-colors duration-300 font-[family-name:var(--font-satoshi)]"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a className="relative z-20 cursor-pointer mt-4">
                <MagicButton
                  title={t("get_quote")}
                  // icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="font-[family-name:var(--font-satoshi)] w-48 "
                  handleClick={() => handleScroll("contact")}
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
