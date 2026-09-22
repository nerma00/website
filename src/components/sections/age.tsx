import type { ReactNode } from "react";

export function AgeTooltip({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-1.5 py-0.5 text-xs text-background opacity-0 transition-opacity duration-200 group-hover/age:opacity-100 hidden [@media(hover:hover)]:block">
      {children}
    </span>
  );
}
