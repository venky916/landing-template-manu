"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export const LandingImages = ({
  firstSrc = "/images/4.webp",
  secondSrc = "/images/3.webp",
}: {
  firstSrc?: string;
  secondSrc?: string;
}) => {
  return (
    <div className="relative">
      <div className="relative min-h-72 w-full translate-x-5 translate-y-10 perspective-distant sm:min-h-80 md:min-h-100 md:translate-x-10 lg:min-h-140 lg:translate-x-24 lg:translate-y-20">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="relative shadow-2xl perspective-[4000px]"
        >
          <Image
            src={firstSrc}
            alt="Hero"
            className={cn(
              "fill absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% object-contain shadow-2xl",
            )}
            width={1440}
            height={1024}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="relative translate-x-20 -translate-y-10 shadow-2xl perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src={secondSrc}
            alt="Hero"
            className={cn(
              "fill absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% object-contain shadow-xl",
            )}
            width={1440}
            height={1024}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
