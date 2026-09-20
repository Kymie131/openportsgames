import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section";
}) {
  return (
    <Tag className={cn("rounded-lg border border-border bg-surface", className)}>
      {children}
    </Tag>
  );
}