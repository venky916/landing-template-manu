"use client";
import { ExcelSheetIcon, HubSpotIcon, SalesforceIcon } from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconClipboardDataFilled,
  IconFeatherFilled,
  IconFileDotsFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const SkeletonFour = () => {
  const tags = [
    {
      text: "Salesforce",
      icon: <SalesforceIcon className="size-4" />,
    },
    {
      text: "Hubspot",
      icon: <HubSpotIcon className="size-4" />,
    },
    {
      text: "Sheets",
      icon: <ExcelSheetIcon className="size-4" />,
    },
  ];
  const items = [
    {
      title: "Brand & Style",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
      icon: <IconClipboardDataFilled className="size-4 text-blue-500" />,
      className: "bg-blue-100 border-blue-200",
      tags,
    },
    {
      title: "Compliance & Policy",
      description:
        "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
      icon: <IconFileDotsFilled className="size-4 text-green-500" />,
      className: "bg-green-100 border-green-200",
      tags,
    },
    {
      title: "Content Safety Filters",
      description:
        "Protect your brand from harmful content with built-in safety filters that block sensitive or inappropriate material.",
      icon: <IconFeatherFilled className="size-4 text-indigo-500" />,
      className: "bg-indigo-100 border-indigo-200",
      tags,
    },
    {
      title: "Approval Triggers",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      icon: <IconPointerUp className="size-4 text-neutral-500" />,
      className: "bg-neutral-100 border-neutral-200",
      tags,
    },

    {
      title: "Output Quality Checks",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      icon: <IconFilter2Search className="size-4 text-purple-500" />,
      className: "bg-purple-100 border-purple-200",
      tags,
    },
  ];
  const [selected, setSelected] = useState(items[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
      setTimeout(() => {
        setSelected(items[currentIndexRef.current]);
      });
    }, 2000); // Change item every 3 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, []);

  return (
    <div>
      <div className="mx-auto my-4 flex max-w-lg flex-wrap items-center justify-center gap-4">
        {items.map((item, index) => (
          <button
            key={item.title}
            className={cn(
              "relative flex cursor-pointer items-center justify-center gap-1 rounded-sm border px-2 py-1 text-xs opacity-50 transition duration-200 active:scale-98",
              selected.title === item.title && "opacity-100",
              item.className,
            )}
            onClick={() => setSelected(item)}
          >
            {selected.title === item.title && (
              <motion.div
                layoutId="selected-item"
                className="shadow- absolute inset-0 rounded-[5px] shadow-inner"
              ></motion.div>
            )}

            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div className="absolute inset-x-0 mx-auto flex h-full w-full max-w-md flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2">
        <Card
          topIcon={selected.icon}
          title={selected.title}
          description={selected.description}
          className={selected.className}
          tags={selected.tags}
        />
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  className,
  tags,
}: {
  topIcon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  tags: { text: string; icon: React.ReactNode }[];
}) => {
  return (
    <motion.div
      key={title}
      className="flex flex-col items-start gap-4 rounded-[16px] border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "mt-1 flex size-7 shrink-0 items-center justify-center rounded-full",
            className,
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: 0.1,
          }}
          className="text-lg font-bold text-neutral-800"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <p className="text-base font-normal text-neutral-600">
          Tone Guidelines
        </p>
        <p className="mt-2 mb-4 rounded-sm border border-dashed border-neutral-200 px-2 py-1 text-sm font-normal text-neutral-600">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
              }}
            >
              <Tag text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
