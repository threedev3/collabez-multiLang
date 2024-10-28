"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

interface ProcessStepType {
  number: string;
  title: string;
  description: string;
}

const Process = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const processSteps: ProcessStepType[] = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start with a detailed discussion to understand your needs, goals, and vision.",
    },
    {
      number: "02",
      title: "Research & Planning",
      description:
        "Our team conducts thorough research and creates a comprehensive project plan.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create intuitive and visually appealing designs tailored to your brand.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our skilled developers bring the designs to life with clean, efficient code.",
    },
    {
      number: "05",
      title: "Testing & Refinement",
      description:
        "Rigorous testing ensures a bug-free, high-performance final product.",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "We assist with deployment and provide ongoing support to ensure your success.",
    },
  ];

  const ProcessStep = ({
    step,
    index,
  }: {
    step: ProcessStepType;
    index: number;
  }) => (
    <motion.div
      key={step.number}
      className="flex flex-col items-center text-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="relative w-40 h-40 mb-4"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFAE00" />
              <stop offset="100%" stopColor="#101010" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="animate-circle"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold font-[family-name:var(--font-satoshi)]">
          {step.number}
        </div>
      </motion.div>
      <h4 className="text-white text-3xl font-bold mb-2 font-[family-name:var(--font-satoshi)]">
        {step.title}
      </h4>
      <p className="text-gray-300 text-base font-[family-name:var(--font-satoshi)] max-w-xs">
        {step.description}
      </p>
      {!isMobile && !isTablet && (
        <>
          {(index < 2 || (index >= 3 && index < 5)) && (
            <div className="absolute top-20 -right-[31%] w-[55%] mx-auto h-0.5 overflow-hidden">
              <div
                className="w-full h-full animate-dash-move mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFAE0070 50%, transparent 50%)",
                  backgroundSize: "20px 100%",
                }}
              />
            </div>
          )}
        </>
      )}
      {!isMobile && isTablet && (
        <>
          {((index < 3 && index % 2 === 0) ||
            (index >= 3 && index < 5 && index % 2 === 0)) && (
            <div className="absolute top-20 -right-[33%] w-[55%] mx-auto h-0.5 overflow-hidden">
              <div
                className="w-full h-full animate-dash-move mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFAE0070 50%, transparent 50%)",
                  backgroundSize: "20px 100%",
                }}
              />
            </div>
          )}
        </>
      )}
      {isMobile && (
        <>
          {(index < 3 || (index >= 3 && index < 5)) && (
            <div className="absolute top-20 min-[540px]:-right-[27%] -right-[24%] min-[540px]:w-[55%] w-[47%] mx-auto h-0.5 overflow-hidden">
              <div
                className="w-full h-full animate-dash-move mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFAE0070 50%, transparent 50%)",
                  backgroundSize: "20px 100%",
                }}
              />
            </div>
          )}
        </>
      )}
    </motion.div>
  );

  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full "
      id="process"
      ref={ref}
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            From Concepts To Launch
          </h3>
        </div>

        {isMobile ? (
          <Slider {...sliderSettings} className="w-full relative z-20">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;
