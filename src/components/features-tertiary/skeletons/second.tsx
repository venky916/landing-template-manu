"use client";

import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-3xl p-2">
      <div className="grid grid-cols-4 gap-1">
        <Item />
        <Item src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D" />
        <Item />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D" />
        <Item containerClassName="bg-gradient-to-br from-black/50 via-transparent to-black/50">
          <div className="flex h-full w-full items-center justify-center bg-white">
            <LogoIcon className="size-12" />
          </div>
        </Item>
        <Item src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D" />
        <Item />
      </div>
      <div className="grid grid-cols-4 gap-1">
        <Item />
        <Item src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D" />
        <Item />
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  src,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "border-neutraL-200 relative aspect-square size-20 justify-self-center rounded-xl border border-dashed p-px",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10",
        "overflow-hidden",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-[12px] p-px",
          src && "bg-gradient-to-br from-blue-500 via-transparent to-blue-500",
          containerClassName,
        )}
      >
        {children ?? (
          <>
            {src && (
              <Image
                src={src}
                height={120}
                width={120}
                alt="item"
                className="relative z-20 aspect-square rounded-[12px] object-cover"
              />
            )}
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed"></div>
      {children}
    </div>
  );
};
