"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeModeLinks() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => setTheme("light")}
        className={`text-sm md:text-base font-medium py-2 px-3 rounded transition-colors ${
          theme === "light"
            ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/20"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
      >
        Light
      </button>
      <span className="text-gray-400 dark:text-gray-600">/</span>
      <button
        onClick={() => setTheme("dark")}
        className={`text-sm md:text-base font-medium py-2 px-3 rounded transition-colors ${
          theme === "dark"
            ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/20"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
