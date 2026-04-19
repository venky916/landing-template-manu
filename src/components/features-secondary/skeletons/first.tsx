"use client";
import {
  ExcelSheetIcon,
  FileIcon,
  HubSpotIcon,
  HumanIcon,
  SalesforceIcon,
} from "@/icons";
import { CogIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Item = {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

export const SkeletonOne = () => {
  const items: Item[] = [
    {
      topIcon: <FileIcon className="size-4" />,
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
      index: 1,
    },
    {
      topIcon: <CogIcon className="size-4" />,
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      index: 2,
    },
    {
      topIcon: <HumanIcon className="size-4" />,
      title: "Human-in-the-Loop",
      description:
        "Add reviews, approvals and escalations without slowing work.",
      index: 3,
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const [activeCards, setActiveCards] = useState<Item[] | null>(null);
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveCards((prev) => {
          if (!prev) {
            return [items[0]];
          } else if (prev.length >= items.length) {
            clearInterval(interval);
            return prev;
          }
          return [items[prev.length], ...prev];
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isInView]); // Add isInView to dependency array

  return (
    <motion.div
      ref={ref}
      layout
      className="absolute inset-x-0 mx-auto flex h-full w-full max-w-md flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2"
    >
      {activeCards &&
        activeCards.map((item, index) => (
          <Card
            topIcon={item.topIcon}
            title={item.title}
            description={item.description}
            index={item.index}
            key={index}
          />
        ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  index,
}: {
  topIcon?: React.ReactNode;
  title?: string;
  description?: string;
  index: number;
}) => {
  const randomColors = [
    "--color-red-500",
    "--color-blue-500",
    "--color-green-500",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.3 }}
      className="flex items-start gap-4 rounded-[16px] border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10"
    >
      <div
        className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-500"
        style={{
          backgroundColor: `var(${randomColors[index % randomColors.length]})`,
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800">{title}</p>
        <p className="font-normal text-balance text-neutral-600 md:text-base">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          <Tag
            text={"Salesforce"}
            icon={<SalesforceIcon className="size-4" />}
          />
          <Tag text={"Hubspot"} icon={<HubSpotIcon className="size-4" />} />
          <Tag text="Sheets" icon={<ExcelSheetIcon className="size-4" />} />
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text?: string; icon?: React.ReactNode }) => {
  return (
    <div className="flex w-fit items-center gap-2 rounded-md border border-neutral-200 px-1 py-0.5 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
