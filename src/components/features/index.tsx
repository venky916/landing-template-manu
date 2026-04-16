import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../sub-heading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <div>
      <Container className="pt-10 md:pt-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row lg:items-baseline-last lg:justify-between">
          <Heading className="lg:max-w-xl font-bold text-center lg:text-left mx-auto lg:mx-0">
            Built for Fast Moving Teams That Need Control.
          </Heading>
          <SubHeading className="text-neutral-500 text-center lg:text-left mx-auto lg:mx-0">
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 gap-4 py-10 md:my-20  lg:grid-cols-3">
          <Card className="rounded-tl-3xl rounded-bl-3xl">
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
              <CardCTA />
            </CardContent>
          </Card>
          <Card>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
              <CardCTA />
            </CardContent>
          </Card>
          <Card className="rounded-tr-3xl rounded-br-3xl">
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
            <CardContent>
              <CardTitle>
                Approvals, Guardrails, and Full Auditability
              </CardTitle>
              <CardCTA />
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};
