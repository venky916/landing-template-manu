"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkFlowIcon } from "@/icons";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";

export const FeaturesTertiary = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
          <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <div className="p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Audit Trail
              </h2>
              <CardDescription>
                Tracks every agent action with full input-output visibility and
                timestamps.
              </CardDescription>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200 p-8 dark:border-neutral-800">
            <h2 className="text-lg font-bold text-neutral-800">
              Role-Based Access
            </h2>
            <CardDescription>
              Controls who can launch, review, or manage agents based on roles.
            </CardDescription>
            <CardSkeleton className="mask-r-from-50% mask-l-from-50% mask-radial-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200 p-8 dark:border-neutral-800">
            <h2 className="text-lg font-bold text-neutral-800">
              Approval Queue
            </h2>
            <CardDescription>
              Sends agent-generated content to human reviewers before it is
              published.
            </CardDescription>
            <CardSkeleton className="mask-radial-from-10%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className="pt-8 pl-8">
            <h2 className="text-lg font-bold text-neutral-800">
              Guardrail Engine
            </h2>
            <CardDescription>
              Applies brand, tone, and policy checks before output goes live.
            </CardDescription>
            <CardSkeleton>
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-80 w-full flex-col overflow-hidden perspective-distant sm:h-60 md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="mt-2 max-w-sm text-balance text-neutral-600">{children}</p>
  );
};
