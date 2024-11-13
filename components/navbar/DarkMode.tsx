"use client";

import * as React from "react";
import { RxSun, RxMoon } from "react-icons/rx";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative"
      >
        <RxSun className=" h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out rotate-0 scale-100 dark:hidden" />
        <RxMoon className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out rotate-0 scale-100 hidden dark:inline-block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};
export default DarkMode;
