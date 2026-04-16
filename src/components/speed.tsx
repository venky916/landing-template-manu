import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./sub-heading";
import { LandingImages } from "./landing-images";
import { FeaturesSecondary } from "./features-secondary";

export const Speed = () => {
  return (
    <div>
      <Container className="relative overflow-hidden py-10 md:py-20 lg:py-32">
        <Heading as="h1">
          Built for Speed
          <br /> Designed for Scale
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>
        <LandingImages />

        <div className="bg-background absolute inset-x-0 bottom-0 h-40 w-full mask-t-from-10% md:h-100"></div>
      </Container>
    </div>
  );
};
