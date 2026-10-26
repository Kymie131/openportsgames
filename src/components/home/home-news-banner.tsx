"use client";

import { useSyncExternalStore } from "react";
import { X } from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { useT } from "@/lib/i18n/use-i18n";
import { assetPath } from "@/lib/utils";

const STORAGE_KEY = "opg-news-taiga-achievements-v1";
const CHANGE_EVENT = "opg-news-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getSnapshot() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function HomeNewsBanner() {
  const t = useT();
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function dismiss() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable: dismissal only lasts this render */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  if (dismissed) return null;

  return (
    <aside
      aria-label={t.home.newsTitle}
      className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
    >
      <div className="grid gap-0 sm:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-3 p-5 pr-12 sm:p-6 sm:pr-6">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.home.eyebrow}
          </p>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {t.home.newsTitle}
          </h2>
          <p className="text-sm leading-relaxed text-muted">{t.home.newsBody}</p>
          <Link
            href="/guides"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            {t.home.newsCta}
          </Link>
        </div>
        <div className="relative hidden min-h-44 sm:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/news/taiga-achievements.jpg")}
            alt={t.home.newsTitle}
            width={960}
            height={540}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label={t.home.newsDismiss}
        className="absolute right-2.5 top-2.5 inline-flex size-8 items-center justify-center rounded-full bg-background/80 text-muted backdrop-blur transition-colors hover:bg-surface-2 hover:text-foreground"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </aside>
  );
}
