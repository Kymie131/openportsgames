"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck, LoaderCircle } from "lucide-react";

import { ApiError, apiFetch, type FavoriteStatus } from "@/lib/api";
import { useSessionUser } from "@/lib/auth-client";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

/** Private save toggle shown at the top of every port's community block. */
export function FavoriteButton({ portId }: { portId: string }) {
  const t = useT();
  const { user, isPending: sessionPending } = useSessionUser();
  const [state, setState] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    favorited: boolean;
  }>({ key: "", status: "loading", favorited: false });
  const [pending, setPending] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const userId = user?.id ?? null;
  const requestKey = `${portId}|${userId ?? ""}`;

  useEffect(() => {
    if (!userId) return;

    let active = true;
    apiFetch<FavoriteStatus>(`/favorites/${encodeURIComponent(portId)}`)
      .then((data) => {
        if (active) {
          setState({ key: requestKey, status: "ready", favorited: data.favorited });
        }
      })
      .catch(() => {
        if (active) setState({ key: requestKey, status: "error", favorited: false });
      });

    return () => {
      active = false;
    };
  }, [portId, requestKey, userId]);

  const favorited = Boolean(userId) && state.favorited;
  const loading =
    sessionPending || (Boolean(userId) && (state.key !== requestKey || state.status === "loading"));

  async function toggle() {
    if (!userId) {
      setActionError(t.community.favorites.signInToSave);
      return;
    }
    if (pending) return;

    const previous = favorited;
    const next = !previous;
    setState({ key: requestKey, status: "ready", favorited: next });
    setActionError(null);
    setPending(true);

    try {
      const data = await apiFetch<FavoriteStatus>(
        `/favorites/${encodeURIComponent(portId)}`,
        { method: next ? "PUT" : "DELETE" },
      );
      setState({ key: requestKey, status: "ready", favorited: data.favorited });
    } catch (error) {
      setState({ key: requestKey, status: "ready", favorited: previous });
      setActionError(
        error instanceof ApiError && (error.status === 401 || error.status === 403)
          ? t.community.favorites.signInToSave
          : t.community.favorites.saveError,
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">
            {t.community.favorites.title}
          </h2>
          <p className="text-sm text-muted">{t.community.favorites.description}</p>
        </div>
        <button
          type="button"
          onClick={() => void toggle()}
          disabled={loading || pending}
          aria-pressed={favorited}
          className={cn(
            "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors disabled:opacity-60",
            favorited
              ? "border-accent bg-accent/10 text-accent hover:bg-accent/15"
              : "border-border bg-surface text-foreground hover:bg-surface-2",
          )}
        >
          {loading || pending ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : favorited ? (
            <BookmarkCheck className="size-4" aria-hidden="true" />
          ) : (
            <Bookmark className="size-4" aria-hidden="true" />
          )}
          {favorited ? t.community.favorites.saved : t.community.favorites.save}
        </button>
      </div>
      {actionError && (
        <p role="alert" className="text-sm text-danger">
          {actionError}
        </p>
      )}
    </section>
  );
}
