import { LogoIcon } from "@/components/logo";
import { ExcelSheetIcon, MetaIcon, SlackIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { IconBrandInstagram, IconCircleDashedCheck } from "@tabler/icons-react";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      className="absolute inset-x-0 flex h-full w-full items-center justify-center gap-2 rounded-t-3xl p-2"
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
        <LogoIcon className="size-10 text-neutral-400" />
        <RevolvingCard>
          <SlackIcon className="size-8" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:20s] [--translate-position:160px]">
          <MetaIcon className="size-10" />
        </RevolvingCard>
        <RevolvingCard className="[--orbit-duration:15s] [--translate-position:180px]">
          <IconBrandInstagram className="size-10 text-red-500" />
        </RevolvingCard>
        <RevolvingCard className="[--orbit-duration:25s] [--translate-position:220px]">
          <ExcelSheetIcon className="size-10" />
        </RevolvingCard>
        <RevolvingCard className="size-auto w-40 bg-transparent shadow-none ring-0 [--orbit-duration:20s] [--translate-position:160px]">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[90%]"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
          />
        </RevolvingCard>
      </Circle>
      <Circle className="relative z-[9] size-60 border-neutral-200 bg-neutral-100/80 shadow-sm"></Circle>
      <Circle className="z-[8] size-80 border-neutral-200 bg-neutral-100/60 shadow-sm"></Circle>
      <Circle className="z-[7] size-100 border-neutral-200 bg-neutral-100/40 shadow-sm"></Circle>
      <Circle className="z-[6] size-120 border-neutral-200 bg-neutral-100/20 shadow-sm"></Circle>
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 m-auto size-40 shrink-0 rounded-full border border-transparent bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "animate-orbit absolute inset-0 m-auto flex size-10 items-center justify-center rounded-sm border border-transparent bg-white ring-1 ring-black/10 [--orbit-duration:10s] [--translate-position:120px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  badge?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-xs font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="font-display mt-3 text-xs font-light text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
