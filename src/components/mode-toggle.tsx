"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [systemTheme]);

  const switchTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme(systemTheme === "light" ? "dark" : "light");
    }
  };

  return (
    <button
      onClick={switchTheme}
      className="relative flex items-center justify-center"
    >
      <SunIcon
        size={14}
        className="absolute inset-0 scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90"
      />
      <MoonIcon
        size={14}
        className="absolute inset-0 scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0"
      />
    </button>
  );
};
