"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/** Extracts the video id from the usual YouTube URL shapes. */
export function youtubeVideoId(url: string): string | null {
  const match =
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/.exec(
      url,
    );
  return match ? match[1] : null;
}

/**
 * Click-to-play gameplay clip. The iframe (youtube-nocookie, no related videos)
 * is only created after the click, so the page never loads the player or its
 * cookies up front and there is no link out to the source channel.
 */
export function VideoEmbed({
  url,
  title,
  thumbnail,
}: {
  url: string;
  title: string;
  thumbnail?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeVideoId(url);

  if (!id) return null;

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={cn(
        "group relative block aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface",
        "transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      )}
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_70%)]" />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
          <Play className="size-5 translate-x-[1px]" aria-hidden="true" />
        </span>
      </span>
      <span className="sr-only">{title}</span>
    </button>
  );
}
