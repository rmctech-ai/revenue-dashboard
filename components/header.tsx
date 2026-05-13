"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Header() {
  // Access current theme and setter from next-themes
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center border-b bg-background px-6">
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Revenue Dashboard</h1>
      </div>
      {/* Toggle between dark and light themes */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  );
}