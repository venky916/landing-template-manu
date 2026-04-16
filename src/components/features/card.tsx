import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-xl rounded-lg bg-neutral-50 dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-display text-lg font-bold md:text-2xl", className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-6 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800",
        className,
      )}
      {...rest}
    >
      <IconPlus />
    </button>
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
        "relative h-80 overflow-hidden perspective-distant sm:h-60 md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};
