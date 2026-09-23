"use client";

import { Moon, Sun } from "lucide-react";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";
import { useTheme } from "./use-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const t = useT();
  const next: "dark" | "light" = theme === "dark" ? "light" : "dark";
  const label = next === "dark" ? t.theme.switchToDark : t.theme.switchToLight;

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors duration-150 hover:bg-surface-2",
        className,
      )}
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="sr-only">{label}</span>
    </button>
  );
}
