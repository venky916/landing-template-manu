"use client";
import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
      className={cn(
        "mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10",
        "group translate-x-10",
        "mask-b-from-50% mask-radial-from-50%",
      )}
    >
      <div className="flex items-center gap-3">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-xs font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>
      <div className="relative mt-4 flex-1 rounded-2xl border border-neutral-200 bg-neutral-200">
        <Pattern />
        <div className="absolute inset-0 h-full w-full translate-x-4 -translate-y-4 scale-101 rounded-2xl bg-white duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100">
          <Row
            icon={<IconCheck className="size-3" />}
            text="Fetching Data"
            time="10s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3" />}
            text="Processing Data"
            time="20s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3" />}
            text="Performing Action"
            time="30s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3" />}
            text="Waiting"
            time="40s"
          />
          <GradientHr />
          <Row
            icon={<IconLoader2 className="size-4 animate-spin" />}
            text="Generating Report"
            time="50s"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
  );
};

const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "danger" | "warning";
}) => {
  const variantClasses = {
    success: "bg-green-500",
    danger: "bg-red-500 ",
    warning: "bg-yellow-500 ",
  };
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-4 items-center justify-center rounded-full text-white",
            variantClasses[variant],
          )}
        >
          {icon}
        </div>
        <p className="text-xs md:text-sm font-medium text-neutral-500">{text}</p>
      </div>
      <div className="flex items-center gap-1 text-neutral-400">
        <IconRipple className="size-4" />
        <p className="text-xs font-bold">{time}</p>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
};
