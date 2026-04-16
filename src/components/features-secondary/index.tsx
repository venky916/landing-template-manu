"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkFlowIcon } from "@/icons";

export const FeaturesSecondary = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
          <div>
            <div className="p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Agent Studio
              </h2>
              <CardDescription>
                Design, launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows.
              </CardDescription>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">
              Multi-Agent Orchestration
            </h2>
            <CardDescription>
              Coordinate multiple agents across workflows using memory,
              interrupts, and conditional logic.
            </CardDescription>
            <CardSkeleton className="mask-t-from-50% mask-radial-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <WorkFlowIcon />
              <h2 className="text-lg font-bold text-neutral-600">
                Workflow Automation
              </h2>
            </div>
            <p className="mt-2 text-base text-neutral-500">
              Automate campaigns, tickets and CRM updates without manual
              handoffs.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IntegrationIcon />
              <h2 className="text-lg font-bold text-neutral-600">
                Integration Fabric
              </h2>
            </div>
            <p className="mt-2 text-base text-neutral-500">
              Connect CRMs, service desks, data warehouses and cloud apps
              seamlessly.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <HumanIcon className="text-black" />
              <h2 className="text-lg font-bold text-neutral-600">
                Human-in-the-Loop
              </h2>
            </div>
            <p className="mt-2 text-base text-neutral-500">
              Add reviews, approvals and escalations without slowing work.
            </p>
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
