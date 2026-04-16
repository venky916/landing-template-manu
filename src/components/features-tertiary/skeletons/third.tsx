"use client";
import {
  BottomArrowIllustration,
  TopArrowIllustration,
} from "@/illustrations/grid";
import { cn } from "@/lib/utils";
import { IconSettings, IconSparkles } from "@tabler/icons-react";
import React from "react";

export const SkeletonThree = () => {
  return (
    <div className="absolute inset-0 mx-auto flex h-full w-full max-w-lg flex-1 flex-col gap-2 rounded-t-3xl px-2 pt-2 perspective-[400px]">
      <TopArrowIllustration className="absolute -top-4 left-40 z-30 mx-auto" />
      <BottomArrowIllustration className="absolute -bottom-10 left-32 mx-auto blur-[2px]" />
      <div
        className={cn(
          "absolute -inset-x-[2000%] -inset-y-[200%]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
          "flex items-center justify-center gap-15",
        )}
        style={{
          transform: "rotateY(20deg) rotateX(50deg) rotateZ(40deg)",
        }}
      >
        <div className="flex items-center gap-2 rounded-full border border-orange-500 bg-orange-100 px-4 py-2 font-medium text-orange-500">
          <IconSettings className="size-4" />
          <span>Processing</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-green-500 bg-green-100 px-4 py-2 font-medium text-green-500">
          <IconSparkles className="size-4" />
          <span>Feedback</span>
        </div>
      </div>
    </div>
  );
};
