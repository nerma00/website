"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";
const CYCLE: Theme[] = ["system", "light", "dark"];

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button type="button" className="text-xs text-muted/70" disabled>
        system
      </button>
    );
  }

  const current = (theme as Theme) ?? "system";

  const next = () => {
    const i = CYCLE.indexOf(current);
    setTheme(CYCLE[(i + 1) % CYCLE.length]);
  };

  return (
    <button
      type="button"
      onClick={next}
      className="text-xs text-muted/70 transition-colors hover:text-foreground"
    >
      {current}
    </button>
  );
}
