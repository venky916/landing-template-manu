import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./sub-heading";
import { Button } from "./button";
import Link from "next/link";
import { IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const Product = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Solutions",
      href: "#",
    },
  ];

  const Company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 py-10 perspective-distant md:py-20 lg:py-32 dark:border-neutral-800">
      <Container className="relative z-20 grid grid-cols-1 gap-10 md:grid-cols-5">
        <div className="col-span-2 flex flex-col items-start gap-4">
          <Logo />
          <SubHeading>Safe, observable, outcome-driven AI</SubHeading>
          <Button className="shadow-brand">Start a 30-day trial</Button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Product</h4>
          <ul className="flex list-none flex-col gap-2">
            {Product.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-neutral-600 transition duration-200 hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="flex list-none flex-col gap-2">
            {Company.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-neutral-600 transition duration-200 hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
          <div className="relative flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-100">
            <input
              className="bg-transparent py-2 pr-12 pl-8 text-sm text-neutral-600 placeholder-neutral-400 outline-none"
              type="email"
              placeholder="Your email"
            />
            <button className="absolute inset-y-0 right-0 cursor-pointer rounded-[7px] bg-black px-4 py-2">
              <IconSend className="size-4 text-white" />
            </button>
          </div>
          <p className="font-inter tex-sm max-w-xl text-neutral-500 dark:text-neutral-400">
            Get the latest product news and behind the scenes updates.
          </p>
        </div>
      </Container>
      <Container className="relative z-20 mt-10 flex flex-col justify-between sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Agenforce AI. All rights reserved.
        </p>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </div>
          <div></div>
        </div>
      </Container>
      <div
        className={cn(
          "absolute -inset-x-[2000%] -inset-y-[200%]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
          "flex items-center justify-center gap-15",
          "mask-radial-from-50%",
        )}
        style={{
          transform: " rotateX(60deg)",
        }}
      ></div>
    </footer>
  );
};
