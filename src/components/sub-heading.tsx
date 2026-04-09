import { cn } from "@/lib/utils";
import React from "react";

export const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-display font-inter text-base text-neutral-400 md:text-lg dark:text-neutral-600 max-w-xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
