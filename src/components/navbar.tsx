"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Product", href: "/product" },
  { name: "FAQs", href: "/faqs" },
  { name: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between px-4 py-2 md:hidden">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              background: "rgba(255,255,255,0.5)",
            }}
            transition={{
              duration: 0.2,
              delay: 0.1,
            }}
            className="fixed inset-0 z-50 h-full w-full px-4 py-2 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)}>
                <IconX className="size-4" />
              </button>
            </div>
            <div className="flex-1 my-10 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index + link.name}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link href={link.href}>
                    <span className="text-2xl font-medium text-neutral-600 dark:text-neutral-400">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              <Link href={"/login"}>
                <span className="rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Login
                </span>
              </Link>
              <Button variants="primary">Signup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <Container className="hidden items-center justify-between py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/login"}>
          <span className="rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Login
          </span>
        </Link>
        <Button
          variants="primary"
          // href={"/signup"}
          // className="text-sm font-medium"
        >
          Signup
        </Button>
      </div>
    </Container>
  );
};
