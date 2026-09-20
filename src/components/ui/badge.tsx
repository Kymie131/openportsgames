import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "accent" | "ok" | "warning" | "danger";

const toneClasses: Record<Tone, string> = {
  neutral: "border-border bg-surface-2 text-foreground",
  accent: "border-accent/30 bg-accent/15 text-accent",
  ok: "border-ok/30 bg-ok/15 text-ok",
  warning: "border-warning/30 bg-warning/15 text-warning",
  danger: "border-danger/30 bg-danger/15 text-danger",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium leading-5",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}