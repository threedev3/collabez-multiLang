"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  rotatingWords,
}: {
  words: string[];
  rotatingWords?: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.15),
      }
    );

    if (rotatingWords && rotatingWords.length > 0) {
      const interval = setInterval(() => {
        setRotatingWordIndex((prevIndex) =>
          prevIndex === rotatingWords.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [animate, rotatingWords]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className=" dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor min-[1400px]:leading-tight leading-none tracking-wide ">
          <motion.div ref={scope}>
            {words.map((line, lineIdx) => (
              <div key={lineIdx} className="my-2">
                {line.split(" ").map((word, idx) => (
                  <motion.span
                    key={word + idx}
                    className={`${
                      idx >= 0
                        ? "text-purple bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor"
                        : "dark:text-white"
                    } opacity-0`}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </div>
            ))}

            {rotatingWords && rotatingWords.length > 0 && (
              <div className="my-2">
                {words.slice(-1, -1).join(" ")}{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWordIndex}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor transform"
                  >
                    {rotatingWords[rotatingWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
