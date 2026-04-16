"use client";
import {
  ExcelSheetIcon,
  FileIcon,
  HubSpotIcon,
  HumanIcon,
  SalesforceIcon,
} from "@/icons";
import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  RecentActivityIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/bento-icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { motion } from "motion/react";

const cardItemsData = [
  {
    icon: <FirstIcon />,
    title: "Personalized Email",
    description: "Personalized Email sent to ••••• @gmail.com",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
        <IconClock className="size-3" />
        <p className="text-[10px] font-bold text-neutral-600">15s</p>
      </div>
    ),
  },
  {
    icon: <SecondIcon />,
    iconClassName: "bg-red-500",
    title: "Peer Review",
    description: "Reviewed and approved 2 outputs from Content Drafting Agent",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
        <p className="text-[10px] font-bold text-red-500">FAILED</p>
      </div>
    ),
  },
  {
    icon: <ThirdIcon />,
    iconClassName: "bg-orange-500",
    title: "Content Drafting",
    description: "Generated draft campaign brief",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
        <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
      </div>
    ),
  },
  {
    icon: <FourthIcon />,
    iconClassName: "bg-black",
    title: "Admin Approval",
    description: "Final approval of marketing copy before publishing",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
        <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
      </div>
    ),
  },
  {
    icon: <FifthIcon />,
    iconClassName: "bg-indigo-500",
    title: "Weekly Campaign Report",
    description: "Generated campaign performance report",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
        <IconClock className="size-3" />
        <p className="text-[10px] font-bold text-neutral-600">2m</p>
      </div>
    ),
  },
  {
    icon: <SecondIcon />,
    iconClassName: "bg-red-500",
    title: "SEO Audit",
    description: "Reviewed and approved 2 outputs from Content Drafting Agent",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
        <p className="text-[10px] font-bold text-red-500">FAILED</p>
      </div>
    ),
  },
  {
    icon: <ThirdIcon />,
    iconClassName: "bg-orange-500",
    title: "Price Monitoring Agent",
    description: "Generated draft campaign brief",
    badge: (
      <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
        <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
      </div>
    ),
  },
];

export const SkeletonOne = () => {
  return (
    <div className="absolute inset-x-8 inset-y-2 mx-auto flex h-full w-full flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 px-2 pt-2">
      <Card>
        {cardItemsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <CardItem
              icon={item.icon}
              iconClassName={item.iconClassName}
              title={item.title}
              badge={item.badge}
              description={item.description}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const CardItem = ({
  icon,
  title,
  description,
  badge,
  iconClassName,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: React.ReactNode;
  iconClassName?: string;
}) => {
  return (
    <div className="flex w-full items-center justify-between pl-4">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-5 items-center justify-center rounded-md bg-blue-500 text-white",
            iconClassName,
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600">{title}</p>
        {badge}
      </div>
      <p className="w-full max-w-[16rem] flex-nowrap text-left text-sm whitespace-nowrap text-neutral-500">
        {description}
      </p>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 rounded-tl-[16px] border border-transparent bg-white ring-1 shadow-black/10 ring-black/10">
      <div className="flex w-full items-start gap-2 border-b border-neutral-200 px-4 py-2">
        <RecentActivityIcon className="size-4" />
        <p className="text-sm font-bold text-neutral-800">Recent Activity</p>
      </div>
      {children}
    </div>
  );
};

