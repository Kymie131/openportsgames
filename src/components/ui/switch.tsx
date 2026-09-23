"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onCheckedChange,
  label,
  className,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  className?: string;
}) {
  return (
    <label className={cn("flex items-center gap-2 text-sm text-foreground", className)}>
      <RadixSwitch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border bg-surface-2",
          "transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          "data-[state=checked]:border-transparent data-[state=checked]:bg-accent",
        )}
      >
        <RadixSwitch.Thumb className="block h-4 w-4 translate-x-0.5 rounded-full bg-foreground shadow-sm transition-transform duration-150 data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-accent-contrast" />
      </RadixSwitch.Root>
      <span>{label}</span>
    </label>
  );
}
