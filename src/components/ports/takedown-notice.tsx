"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { TakedownPort } from "@/lib/ports/schema";
import { useT } from "@/lib/i18n/use-i18n";

export function TakedownNotice({ port }: { port: TakedownPort }) {
  const t = useT();
  return (
    <section className="flex flex-col items-start gap-4 py-16">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {t.legal.takedownNoticeTitle}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{port.title}</h1>
      </div>
      <p className="max-w-prose text-sm text-muted">{t.legal.takedownNoticeAbout}</p>
      <p className="max-w-prose text-sm text-muted">{t.legal.takedownNoticeContact}</p>
      <Link
        href="/legal"
        className="rounded-full border border-border px-4 py-2 text-sm text-link transition-colors duration-150 hover:border-accent-hover hover:text-link-hover"
      >
        {t.legal.title}
      </Link>
      <Link
        href="/ports"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-link transition-colors hover:text-link-hover"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.legal.takedownNoticeBack}
      </Link>
    </section>
  );
}
