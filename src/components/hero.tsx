import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./sub-heading";
import { Button } from "./button";
import Link from "next/link";
import { LandingImages } from "./landing-images";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container>
        <Heading as="h1">
          Agents that do the work
          <br /> Approvals that keep you safe.
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button asChild variants="outline">
            <Link href="#">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />

        <div className="bg-background absolute inset-x-0 bottom-0 z-50 h-40 w-full mask-t-from-10% md:h-100"></div>
      </Container>
    </section>
  );
};
