"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, Heart, Trash2 } from "lucide-react";
import { ApiError, apiFetch, type RatingStats } from "@/lib/api";
import { useSessionUser } from "@/lib/auth-client";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

const MAX_HEARTS = 5;

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

/** Recompute the aggregate as if the caller's rating became `next`. */
function project(stats: RatingStats, next: number | null): RatingStats {
  if (next === stats.mine) return stats;

  let count = stats.count;
  let total = (stats.average ?? 0) * count;

  if (stats.mine !== null) {
    count -= 1;
    total -= stats.mine;
  }
  if (next !== null) {
    count += 1;
    total += next;
  }

  return { average: count > 0 ? round1(total / count) : null, count, mine: next };
}

function Hearts({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: MAX_HEARTS }, (_, index) => (
        <Heart
          key={index}
          className={cn(
            "size-4",
            index < Math.round(value) ? "fill-rose-500 text-rose-500" : "text-border",
          )}
        />
      ))}
    </span>
  );
}

/** Average score plus a keyboard-accessible control for the logged user. */
export function HeartRating({ portId }: { portId: string }) {
  const t = useT();
  const { user, isPending: sessionPending } = useSessionUser();
  const [state, setState] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    data: RatingStats | null;
  }>({ key: "", status: "loading", data: null });
  const [pending, setPending] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [hover, setHover] = useState(0);

  const userId = user?.id ?? null;
  const requestKey = `${portId}|${userId ?? ""}`;

  useEffect(() => {
    let active = true;
    apiFetch<RatingStats>(`/ratings/${encodeURIComponent(portId)}`)
      .then((data) => {
        if (active) setState({ key: requestKey, status: "ready", data });
      })
      .catch(() => {
        if (active) setState({ key: requestKey, status: "error", data: null });
      });
    return () => {
      active = false;
    };
  }, [portId, requestKey]);

  const loading = state.key !== requestKey;
  const loadError = !loading && state.status === "error";
  const stats = loading ? null : state.data;

  async function apply(next: number | null) {
    if (!stats || pending) return;

    const previous = stats;
    setState((current) => ({ ...current, data: project(previous, next) }));
    setActionError(null);
    setPending(true);

    try {
      const data =
        next === null
          ? await apiFetch<RatingStats>(`/ratings/${encodeURIComponent(portId)}`, {
              method: "DELETE",
            })
          : await apiFetch<RatingStats>(`/ratings/${encodeURIComponent(portId)}`, {
              method: "PUT",
              body: JSON.stringify({ hearts: next }),
            });
      setState({ key: requestKey, status: "ready", data });
    } catch (error) {
      setState((current) => ({ ...current, data: previous }));
      setActionError(
        error instanceof ApiError && (error.status === 401 || error.status === 403)
          ? t.community.rating.signInToRate
          : t.community.rating.saveError,
      );
    } finally {
      setPending(false);
    }
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!user) return;
    const current = stats?.mine ?? 0;

    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      void apply(Math.min(MAX_HEARTS, current + 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      void apply(Math.max(1, (current || 1) - 1));
    } else if ((event.key === "Delete" || event.key === "Backspace") && current > 0) {
      event.preventDefault();
      void apply(null);
    }
  }

  const interactive = Boolean(user);
  const activeValue = hover || stats?.mine || 0;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold tracking-tight">{t.community.rating.title}</h2>

      {loading ? (
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          {t.community.rating.loading}
        </p>
      ) : loadError ? (
        <p role="alert" className="text-sm text-danger">
          {t.community.rating.error}
        </p>
      ) : stats ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {stats.count > 0 && stats.average !== null ? (
              <>
                <Hearts value={stats.average} />
                <span className="text-sm font-medium">
                  {t.community.rating.averageValue(stats.average)}
                </span>
                <span className="text-sm text-muted">
                  Â· {t.community.rating.countLabel(stats.count)}
                </span>
              </>
            ) : (
              <span className="text-sm text-muted">{t.community.rating.noRatings}</span>
            )}
          </div>

          {interactive ? (
            <div className="flex flex-wrap items-center gap-3">
              <div
                role="radiogroup"
                aria-label={t.community.rating.yourRating}
                aria-busy={pending}
                onKeyDown={onKeyDown}
                onMouseLeave={() => setHover(0)}
                className="inline-flex items-center gap-0.5"
              >
                {Array.from({ length: MAX_HEARTS }, (_, index) => index + 1).map((value) => {
                  const selected = stats.mine === value;
                  const filled = activeValue >= value;
                  return (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      aria-label={t.community.rating.rateHearts(value)}
                      tabIndex={selected || (stats.mine === null && value === 1) ? 0 : -1}
                      disabled={pending}
                      onMouseEnter={() => setHover(value)}
                      onFocus={() => setHover(value)}
                      onBlur={() => setHover(0)}
                      onClick={() => void apply(selected ? null : value)}
                      className="rounded-sm p-1 transition-colors duration-150 hover:text-accent-hover disabled:opacity-60"
                    >
                      <Heart
                        className={cn("size-6", filled ? "fill-rose-500 text-rose-500" : "text-border")}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>

              {stats.mine !== null && (
                <button
                  type="button"
                  onClick={() => void apply(null)}
                  disabled={pending}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors duration-150 hover:border-danger/50 hover:text-danger disabled:opacity-60"
                >
                  {pending ? (
                    <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Trash2 className="size-4" aria-hidden="true" />
                  )}
                  {t.community.rating.remove}
                </button>
              )}
            </div>
          ) : sessionPending ? null : (
            <p className="text-sm text-muted">{t.community.rating.signInToRate}</p>
          )}

          {actionError && (
            <p role="alert" className="text-sm text-danger">
              {actionError}
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
}

