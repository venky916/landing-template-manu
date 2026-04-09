import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./button";

export const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Product", href: "/product" },
    { name: "FAQs", href: "/faqs" },
    { name: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
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
    </div>
  );
};
