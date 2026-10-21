"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, MessageCircle, Send, Trash2 } from "lucide-react";
import {
  ApiError,
  TURNSTILE_SITE_KEY,
  apiFetch,
  type CommentItem,
  type CommentsPage,
  type MissingPortItem,
  type MissingPortsPage,
} from "@/lib/api";
import { useSessionUser } from "@/lib/auth-client";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Turnstile } from "./turnstile";
import { UserAvatar } from "./user-avatar";

const COMMENT_MAX_LENGTH = 1000;

function formatWhen(iso: string, locale: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" });
}

/** Public board for ports that are not in the catalog yet. */
export function MissingPorts() {
  const t = useT();
  const locale = useLocale();
  const { user, isPending } = useSessionUser();
  const userId = user?.id ?? null;

  const [feed, setFeed] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    items: MissingPortItem[];
    cursor: string | null;
  }>({ key: "", status: "loading", items: [], cursor: null });
  const [morePending, setMorePending] = useState(false);
  const [openComments, setOpenComments] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const requestKey = `missing|${userId ?? ""}`;

  useEffect(() => {
    let active = true;
    apiFetch<MissingPortsPage>("/missing")
      .then((page) => {
        if (!active) return;
        setFeed({ key: requestKey, status: "ready", items: page.items, cursor: page.nextCursor });
      })
      .catch(() => {
        if (!active) return;
        setFeed({ key: requestKey, status: "error", items: [], cursor: null });
      });
    return () => {
      active = false;
    };
  }, [requestKey]);

  const loading = feed.key !== requestKey;
  const status = loading ? "loading" : feed.status;
  const items = feed.items;

  async function loadMore() {
    if (!feed.cursor || morePending) return;
    setMorePending(true);
    try {
      const page = await apiFetch<MissingPortsPage>(
        `/missing?cursor=${encodeURIComponent(feed.cursor)}`,
      );
      setFeed((current) => ({
        ...current,
        items: [...current.items, ...page.items],
        cursor: page.nextCursor,
      }));
    } catch {
      setActionError(t.community.missingPorts.loadError);
    } finally {
      setMorePending(false);
    }
  }

  async function submitProposal() {
    setActionError(null);
    setNotice(null);

    if (!title.trim() || !game.trim() || !platform.trim()) {
      setActionError(t.community.missingPorts.submitError);
      return;
    }
    if (TURNSTILE_SITE_KEY && !token) {
      setActionError(t.community.missingPorts.submitError);
      return;
    }

    setSubmitting(true);
    try {
      const created = await apiFetch<MissingPortItem>("/missing", {
        method: "POST",
        body: JSON.stringify({
          title: title.trim(),
          game: game.trim(),
          platform: platform.trim(),
          url: url.trim() || null,
          notes: notes.trim() || null,
          turnstileToken: token ?? "",
        }),
      });
      setFeed((current) => ({
        ...current,
        items: [created, ...current.items],
      }));
      setTitle("");
      setGame("");
      setPlatform("");
      setUrl("");
      setNotes("");
      setNotice(t.community.missingPorts.submitted);
    } catch (error) {
      if (error instanceof ApiError && error.code === "turnstile_failed") {
        setActionError(t.community.missingPorts.submitError);
      } else if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
        setActionError(t.community.missingPorts.signIn);
      } else {
        setActionError(t.community.missingPorts.submitError);
      }
    } finally {
      setToken(null);
      setResetKey((key) => key + 1);
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t.community.missingPorts.title}
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted">
          {t.community.missingPorts.subtitle}
        </p>
      </header>

      {user ? (
        <form
          className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
          onSubmit={(event) => {
            event.preventDefault();
            void submitProposal();
          }}
        >
          <h2 className="text-sm font-semibold">{t.community.missingPorts.proposeTitle}</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field
              label={t.community.missingPorts.formTitle}
              value={title}
              onChange={setTitle}
              required
            />
            <Field
              label={t.community.missingPorts.formGame}
              value={game}
              onChange={setGame}
              required
            />
            <Field
              label={t.community.missingPorts.formPlatform}
              value={platform}
              onChange={setPlatform}
              required
            />
            <Field
              label={t.community.missingPorts.formUrl}
              value={url}
              onChange={setUrl}
              type="url"
            />
          </div>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium text-foreground">
              {t.community.missingPorts.formNotes}
            </span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              maxLength={1000}
              rows={2}
              className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Turnstile
              siteKey={TURNSTILE_SITE_KEY}
              resetKey={resetKey}
              onVerify={setToken}
              onExpire={() => setToken(null)}
              onError={() => setToken(null)}
            />
            <Button type="submit" size="sm" disabled={submitting}>
              {submitting ? (
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              {submitting
                ? t.community.missingPorts.submitting
                : t.community.missingPorts.submit}
            </Button>
          </div>
        </form>
      ) : isPending ? null : (
        <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
          {t.community.missingPorts.signIn}
        </p>
      )}

      {notice && (
        <p role="status" className="text-sm text-ok">
          {notice}
        </p>
      )}
      {actionError && (
        <p role="alert" className="text-sm text-danger">
          {actionError}
        </p>
      )}

      {status === "loading" ? (
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          {t.community.missingPorts.loading}
        </p>
      ) : status === "error" ? (
        <p role="alert" className="text-sm text-danger">
          {t.community.missingPorts.loadError}
        </p>
      ) : items.length === 0 ? (
        <p className="text-sm text-muted">{t.community.missingPorts.empty}</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.id} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <h2 className="text-base font-semibold leading-snug">{item.title}</h2>
                  <p className="text-sm text-muted">
                    {item.game} · {item.platform}
                  </p>
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {item.status === "done"
                    ? t.community.missingPorts.statusDone
                    : t.community.missingPorts.statusOpen}
                </span>
              </div>
              {item.notes && (
                <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
                  {item.notes}
                </p>
              )}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all text-sm text-link underline-offset-2 hover:underline"
                >
                  {item.url}
                </a>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span>{t.community.missingPorts.by(item.author.name)}</span>
                <time dateTime={item.createdAt}>{formatWhen(item.createdAt, locale)}</time>
                <button
                  type="button"
                  onClick={() => setOpenComments(openComments === item.id ? null : item.id)}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  {t.community.missingPorts.comments}
                </button>
              </div>
              {openComments === item.id && <MissingComments missingId={item.id} />}
            </li>
          ))}
        </ul>
      )}

      {feed.cursor && (
        <div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => void loadMore()}
            disabled={morePending}
          >
            {morePending && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
            {morePending ? t.community.missingPorts.loading : t.community.missingPorts.loadMore}
          </Button>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      />
    </label>
  );
}

function MissingComments({ missingId }: { missingId: string }) {
  const t = useT();
  const locale = useLocale();
  const { user } = useSessionUser();
  const [feed, setFeed] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    items: CommentItem[];
  }>({ key: "", status: "loading", items: [] });
  const [body, setBody] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiFetch<CommentsPage>(`/missing/${encodeURIComponent(missingId)}/comments`)
      .then((page) => {
        if (active) setFeed({ key: missingId, status: "ready", items: page.items });
      })
      .catch(() => {
        if (active) setFeed({ key: missingId, status: "error", items: [] });
      });
    return () => {
      active = false;
    };
  }, [missingId]);

  async function submit() {
    const value = body.trim();
    setError(null);
    if (!value) {
      setError(t.community.missingPorts.commentError);
      return;
    }
    setSubmitting(true);
    try {
      const created = await apiFetch<CommentItem>(
        `/missing/${encodeURIComponent(missingId)}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ body: value, turnstileToken: token ?? "" }),
        },
      );
      setFeed((current) => ({ ...current, items: [created, ...current.items] }));
      setBody("");
    } catch {
      setError(t.community.missingPorts.commentError);
    } finally {
      setToken(null);
      setResetKey((key) => key + 1);
      setSubmitting(false);
    }
  }

  async function remove(commentId: string) {
    const previous = feed.items;
    setFeed((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== commentId),
    }));
    try {
      await apiFetch<{ ok: boolean }>(
        `/missing/${encodeURIComponent(missingId)}/comments/${encodeURIComponent(commentId)}`,
        { method: "DELETE" },
      );
    } catch {
      setFeed((current) => ({ ...current, items: previous }));
      setError(t.community.missingPorts.deleteError);
    }
  }

  return (
    <div className="mt-3 flex flex-col gap-3 border-t border-border pt-3">
      {user && (
        <div className="flex flex-col gap-2">
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            maxLength={COMMENT_MAX_LENGTH}
            rows={2}
            placeholder={t.community.missingPorts.commentPlaceholder}
            className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Turnstile
              siteKey={TURNSTILE_SITE_KEY}
              resetKey={resetKey}
              onVerify={setToken}
              onExpire={() => setToken(null)}
              onError={() => setToken(null)}
            />
            <Button type="button" size="sm" onClick={() => void submit()} disabled={submitting}>
              {submitting && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
              {submitting
                ? t.community.missingPorts.commentSubmitting
                : t.community.missingPorts.commentSubmit}
            </Button>
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}

      {feed.status === "loading" ? (
        <p className="text-xs text-muted">{t.community.missingPorts.loading}</p>
      ) : feed.items.length === 0 ? (
        <p className="text-xs text-muted">{t.community.missingPorts.commentsEmpty}</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {feed.items.map((item) => (
            <li key={item.id} className="flex items-start gap-2">
              <UserAvatar name={item.author.name} image={item.author.image} className="size-6" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted">
                  <span className="font-medium text-foreground">{item.author.name}</span>
                  <time dateTime={item.createdAt}>{formatWhen(item.createdAt, locale)}</time>
                  {item.mine && (
                    <button
                      type="button"
                      onClick={() => void remove(item.id)}
                      className="inline-flex items-center gap-1 rounded px-1 text-muted transition-colors hover:text-danger"
                    >
                      <Trash2 className="size-3" aria-hidden="true" />
                      {t.community.missingPorts.delete}
                    </button>
                  )}
                </div>
                <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
