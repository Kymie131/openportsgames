"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, ThumbsDown, ThumbsUp } from "lucide-react";

import { apiFetch, type ReviewSummary } from "@/lib/api";
import { useT } from "@/lib/i18n/use-i18n";

export const REVIEW_CHANGE_EVENT = "opg-review-change";

export function ReviewSummaryBlock({ portId }: { portId: string }) {
  const t = useT();
  const [state, setState] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    data: ReviewSummary | null;
  }>({ key: "", status: "loading", data: null });
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const onChange = () => setRevision((value) => value + 1);
    window.addEventListener(REVIEW_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, onChange);
  }, []);

  useEffect(() => {
    let active = true;
    apiFetch<ReviewSummary>(`/reviews/${encodeURIComponent(portId)}`)
      .then((data) => {
        if (active) setState({ key: portId, status: "ready", data });
      })
      .catch(() => {
        if (active) setState({ key: portId, status: "error", data: null });
      });
    return () => {
      active = false;
    };
  }, [portId, revision]);

  const loading = state.key !== portId || state.status === "loading";

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold tracking-tight">{t.community.reviews.title}</h2>

      {loading ? (
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          {t.community.reviews.loading}
        </p>
      ) : state.status === "error" ? (
        <p role="alert" className="text-sm text-danger">
          {t.community.reviews.error}
        </p>
      ) : !state.data || state.data.total === 0 ? (
        <p className="text-sm text-muted">{t.community.reviews.empty}</p>
      ) : (
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <ThumbsUp className="size-4 text-emerald-500" aria-hidden="true" />
              {t.community.reviews.percent(state.data.percent ?? 0)}
            </span>
            <span className="text-xs text-muted">
              {t.community.reviews.total(state.data.total)}
            </span>
          </div>
          <div
            className="flex h-2 overflow-hidden rounded-full bg-surface-2"
            role="img"
            aria-label={t.community.reviews.percent(state.data.percent ?? 0)}
          >
            <span
              className="h-full bg-emerald-500"
              style={{ width: `${state.data.percent ?? 0}%` }}
            />
            <span
              className="h-full bg-rose-500"
              style={{ width: `${100 - (state.data.percent ?? 0)}%` }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="size-3.5 text-emerald-500" aria-hidden="true" />
              {state.data.positive} {t.community.reviews.positive}
            </span>
            <span className="inline-flex items-center gap-1">
              <ThumbsDown className="size-3.5 text-rose-500" aria-hidden="true" />
              {state.data.negative} {t.community.reviews.negative}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
