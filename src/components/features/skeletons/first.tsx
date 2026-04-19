import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div className="h-full w-full translate-x-5 -translate-y-10 scale-[1.2] rotate-x-20 -rotate-y-20 rotate-z-5 mask-r-from-50% mask-radial-from-50% perspective-distant">
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="danger" text="120s" />}
      />
      <SkeletonCard
        className="absolute bottom-8 left-8 z-20"
        icon={<IconExclamationCircle className="size-4" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="success" text="10s" />}
      />
      <SkeletonCard
        className="absolute bottom-20 left-4 z-10 max-w-[80%]"
        icon={<IconExclamationCircle className="size-4" />}
        title="Risk Analysis"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="warning" text="40s" />}
      />
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
        <p className="text-xs font-normal text-black md:text-sm dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="font-display mt-3 text-[10px] font-light text-neutral-500 md:text-sm dark:text-neutral-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Tag text="Google Ads" />
        <Tag text="SaaS" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm bg-neutral-200 px-2 py-1 text-[10px] font-medium tracking-tight md:text-sm dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  const variantClasses = {
    success: "bg-green-300/10 border-green-300 text-green-500",
    danger: "bg-red-300/10 border-red-300 text-red-500",
    warning: "bg-yellow-300/10 border-yellow-300 text-yellow-500",
  };
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full border p-1 px-1 py-0.5",
        variantClasses[variant],
      )}
    >
      {/* strokeWidth={2.5} */}
      <IconClock className="size-4" />
      <IconRipple className="size-4" />
      <p className="text-xs font-bold">{text}</p>
    </div>
  );
};
