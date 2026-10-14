"use client";

import { cn } from "@/lib/utils";

/** Avatar with an initial fallback when the provider exposes no picture. */
export function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image?: string | null;
  className?: string;
}) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt=""
        loading="lazy"
        className={cn("shrink-0 rounded-full border border-border object-cover", className)}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-xs font-semibold uppercase",
        className,
      )}
    >
      {name.trim().charAt(0) || "?"}
    </span>
  );
}
