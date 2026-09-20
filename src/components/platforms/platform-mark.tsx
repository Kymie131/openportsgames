import { Command } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { PlatformKey } from "@/lib/ports/schema";
import { cn } from "@/lib/utils";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function WindowsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} {...strokeProps}>
      <path d="M4 6.5 10.6 5.8V11.4H4V6.5Z" />
      <path d="M12.4 5.7 20 4.9V11.4h-7.6V5.7Z" />
      <path d="M4 13.4h6.6V19l-6.6-.8v-4.8Z" />
      <path d="M12.4 13.4H20v6.5l-7.6-.9v-5.6Z" />
    </svg>
  );
}

function LinuxMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} {...strokeProps}>
      <path d="M12 3.4c-2 0-3.5 1.6-3.5 3.5 0 .4.05.85.14 1.25-1.7.85-2.82 2.55-2.82 4.45 0 1.9 1.03 3.6 2.68 4.58l1.34 2.84h3.78l1.34-2.84c1.65-.98 2.68-2.68 2.68-4.58 0-1.9-1.12-3.6-2.82-4.45.09-.4.14-.85.14-1.25 0-1.9-1.5-3.5-3.5-3.5Z" />
      <path d="M9 10.5c.7 0 1.2-.5 1.2-1.2 0-.7-.5-1.3-1.2-1.3-.7 0-1.3.6-1.3 1.3 0 .7.6 1.2 1.3 1.2ZM15 10.5c.7 0 1.2-.5 1.2-1.2 0-.7-.5-1.3-1.2-1.3-.7 0-1.3.6-1.3 1.3 0 .7.6 1.2 1.3 1.2Z" />
    </svg>
  );
}

function AndroidMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} {...strokeProps}>
      <path d="M8.9 6l-1.4-2.3M15.1 6l1.4-2.3" />
      <circle cx="12" cy="7.2" r="2.9" />
      <path d="M4.6 14.5c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4l.5 3.4c.1.99-.5 2.1-1.6 2.1H5.7c-1.1 0-1.7-1.11-1.6-2.1l.5-3.4Z" />
    </svg>
  );
}

function MacOsMark(props: SVGProps<SVGSVGElement>) {
  return <Command strokeWidth={1.6} {...props} />;
}

const platformMarks = {
  windows: WindowsMark,
  linux: LinuxMark,
  macos: MacOsMark,
  android: AndroidMark,
} satisfies Record<PlatformKey, ComponentType<SVGProps<SVGSVGElement>>>;

export function PlatformMark({
  platform,
  className,
}: {
  platform: PlatformKey;
  className?: string;
}) {
  const Mark = platformMarks[platform];
  return <Mark className={cn("size-4", className)} />;
}