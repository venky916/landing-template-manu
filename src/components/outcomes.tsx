import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./sub-heading";
import { LandingImages } from "./landing-images";

export const Outcomes = () => {
  return (
    <div>
      <Container className="relative overflow-hidden py-10 md:py-20 lg:py-32">
        <Heading as="h1">
          Governed AI,
          <br /> Trusted Outcomes
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant.
        </SubHeading>
        <LandingImages firstSrc="/images/5.webp" secondSrc="/images/6.webp" />

        <div className="bg-background absolute inset-x-0 bottom-0 h-40 w-full mask-t-from-10% md:h-100"></div>
      </Container>
    </div>
  );
};
