import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export const Button = ({
  children,
  className,
  variants = "primary",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) => {
  const defaultVariantClasses =
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none";

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-brand",
    outline:
      " bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30  dark:hover:bg-input/50",
    ghost:
      "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    secondary: "",
  };

  const variantSize = {
    default: "h-9 rounded-sm px-4 py-2",
    sm: "h-8 rounded-sm gap-1.5 px-3",
    lg: "h-10 rounded-sm px-6",
  };

  const combinedClassName = cn(
    defaultVariantClasses,
    variantSize[size],
    variantClasses[variants],
    className,
  );

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<
      Record<string, unknown>
    >;
    return React.cloneElement(child, {
      ...props,
      className: cn(
        combinedClassName,
        child.props.className as string | undefined,
      ),
    });
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
