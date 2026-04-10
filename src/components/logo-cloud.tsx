"use client";
import Image from "next/image";
import React from "react";
import { Container } from "./container";
import { motion } from "motion/react";
export const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
    {
      title: "Hello Patient",
      src: "https://assets.aceternity.com/logos/hello-patient.png",
    },
    {
      title: "Granola",
      src: "https://assets.aceternity.com/logos/granola.png",
    },
    {
      title: "Character AI",
      src: "https://assets.aceternity.com/logos/characterai.png",
    },

    {
      title: "Oracle",
      src: "https://assets.aceternity.com/logos/oracle.png",
    },
    {
      title: "Portola",
      src: "https://assets.aceternity.com/logos/portola.png",
    },
  ];
  return (
    <section className="">
      <Container>
        <h2 className="mx-auto max-w-xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-300">
          Trusted by modern operators across industries.
          <br />
          <span className="text-neutral-400">
            {" "}
            From pilot to scale without chaos.
          </span>
        </h2>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 md:grid-cols-3">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.title}
              initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width={100}
                height={100}
                className="mx-auto size-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
