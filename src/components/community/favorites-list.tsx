"use client";

import { useEffect, useState } from "react";
import { BookmarkX, LoaderCircle } from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { ScreenshotFrame } from "@/components/ports/screenshot-frame";
import { ApiError, apiFetch, type FavoritesResponse } from "@/lib/api";
import { useSessionUser } from "@/lib/auth-client";
import { useT } from "@/lib/i18n/use-i18n";
import { LoginButton } from "./login-button";

/** Compact catalog row passed from the static favorites page. */
export type FavoritePortSummary = {
  id: string;
  title: string;
  game: string;
  platformLabel: string;
  cover: { src: string; alt: string } | null;
};

export function FavoritesList({ ports }: { ports: FavoritePortSummary[] }) {
  const t = useT();
  const { user, isPending } = useSessionUser();
  const [state, setState] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    ids: string[];
  }>({ key: "", status: "loading", ids: [] });
  const [reloadKey, setReloadKey] = useState(0);
  const [removing, setRemoving] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const userId = user?.id ?? null;
  const requestKey = `${userId ?? "anon"}|${reloadKey}`;

  useEffect(() => {
    if (!userId) return;

    let active = true;
    apiFetch<FavoritesResponse>("/favorites")
      .then((data) => {
        if (active) {
          setState({
            key: requestKey,
            status: "ready",
            ids: data.items.map((item) => item.portId),
          });
        }
      })
      .catch(() => {
        if (active) setState({ key: requestKey, status: "error", ids: [] });
      });

    return () => {
      active = false;
    };
  }, [requestKey, userId]);

  async function remove(portId: string) {
    setRemoving(portId);
    setActionError(null);
    try {
      await apiFetch(`/favorites/${encodeURIComponent(portId)}`, { method: "DELETE" });
      setState((current) => ({
        ...current,
        ids: current.ids.filter((id) => id !== portId),
      }));
    } catch (error) {
      setActionError(
        error instanceof ApiError && (error.status === 401 || error.status === 403)
          ? t.community.favorites.signInToSave
          : t.community.favorites.saveError,
      );
    } finally {
      setRemoving(null);
    }
  }

  const byId = new Map(ports.map((port) => [port.id, port]));
  const saved = state.ids
    .map((id) => byId.get(id))
    .filter((port): port is FavoritePortSummary => Boolean(port));

  const loading =
    isPending || (Boolean(userId) && (state.key !== requestKey || state.status === "loading"));

  return (
    <div className="flex flex-col gap-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.community.favorites.title}
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted">
          {t.community.favorites.description}
        </p>
      </header>

      {!isPending && !userId && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-5">
          <p className="text-sm text-muted">{t.community.favorites.signInToSave}</p>
          <LoginButton showLabel />
        </div>
      )}

      {loading && (
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          {t.community.favorites.loading}
        </p>
      )}

      {!loading && userId && state.status === "error" && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-5">
          <p className="text-sm text-danger">{t.community.favorites.loadError}</p>
          <button
            type="button"
            onClick={() => setReloadKey((current) => current + 1)}
            className="rounded-md border border-border px-3 py-2 text-sm hover:bg-surface-2"
          >
            {t.community.favorites.retry}
          </button>
        </div>
      )}

      {actionError && (
        <p role="alert" className="text-sm text-danger">
          {actionError}
        </p>
      )}

      {!loading && userId && state.status === "ready" && (
        <>
          {saved.length === 0 ? (
            <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-5">
              <p className="text-sm text-muted">{t.community.favorites.empty}</p>
              <Link
                href="/ports"
                className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast hover:bg-accent-hover"
              >
                {t.community.favorites.browse}
              </Link>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted">
                {t.community.favorites.count(saved.length)}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {saved.map((port) => (
                  <li
                    key={port.id}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-3"
                  >
                    <Link
                      href={`/ports/${port.id}`}
                      className="block overflow-hidden rounded-lg border border-border bg-surface-2"
                      aria-label={port.title}
                    >
                      {port.cover ? (
                        <ScreenshotFrame
                          src={port.cover.src}
                          alt={port.cover.alt}
                          className="aspect-[4/5] w-full"
                          fallback={
                            <span className="flex h-full w-full items-center justify-center px-3 text-center text-sm font-semibold text-muted">
                              {port.game}
                            </span>
                          }
                        />
                      ) : (
                        <span className="flex aspect-[4/5] w-full items-center justify-center px-3 text-center text-sm font-semibold text-muted">
                          {port.game}
                        </span>
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col gap-1">
                      <h2 className="line-clamp-2 text-sm font-semibold leading-snug">
                        <Link href={`/ports/${port.id}`} className="hover:text-link">
                          {port.game}
                        </Link>
                      </h2>
                      <p className="truncate text-xs text-muted" title={port.title}>
                        {port.title}
                      </p>
                      {port.platformLabel && (
                        <p className="text-xs text-muted">{port.platformLabel}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => void remove(port.id)}
                      disabled={removing === port.id}
                      className="inline-flex w-fit items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:bg-surface-2 hover:text-foreground disabled:opacity-60"
                    >
                      {removing === port.id ? (
                        <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
                      ) : (
                        <BookmarkX className="size-3.5" aria-hidden="true" />
                      )}
                      {removing === port.id
                        ? t.community.favorites.removing
                        : t.community.favorites.remove}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
