"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5 opacity-50" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
