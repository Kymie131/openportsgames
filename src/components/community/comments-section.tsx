"use client";

import { useEffect, useState } from "react";
import { Flag, LoaderCircle, Send, Trash2 } from "lucide-react";
import {
  ApiError,
  TURNSTILE_SITE_KEY,
  apiFetch,
  type CommentItem,
  type CommentsPage,
} from "@/lib/api";
import { useSessionUser } from "@/lib/auth-client";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Turnstile } from "./turnstile";
import { UserAvatar } from "./user-avatar";

/** Mirrors the API limit for a comment body. */
const COMMENT_MAX_LENGTH = 1000;

function formatWhen(iso: string, locale: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" });
}

/** Comment list with keyset pagination, a Turnstile-gated box, delete and report. */
export function CommentsSection({ portId }: { portId: string }) {
  const t = useT();
  const locale = useLocale();
  const { user, isPending: sessionPending } = useSessionUser();
  const userId = user?.id ?? null;

  const [feed, setFeed] = useState<{
    key: string;
    status: "loading" | "ready" | "error";
    items: CommentItem[];
    cursor: string | null;
  }>({ key: "", status: "loading", items: [], cursor: null });
  const [morePending, setMorePending] = useState(false);

  const [body, setBody] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [reportTarget, setReportTarget] = useState<CommentItem | null>(null);
  const [reportReason, setReportReason] = useState("");
  const [reportPending, setReportPending] = useState(false);
  const [reportError, setReportError] = useState<string | null>(null);

  const requestKey = `${portId}|${userId ?? ""}`;

  useEffect(() => {
    let active = true;
    apiFetch<CommentsPage>(`/comments/${encodeURIComponent(portId)}`)
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
  }, [portId, requestKey]);

  const loading = feed.key !== requestKey;
  const status = loading ? "loading" : feed.status;
  const items = feed.items;
  const cursor = feed.cursor;

  async function loadMore() {
    if (!cursor || morePending) return;
    setMorePending(true);
    setActionError(null);
    try {
      const page = await apiFetch<CommentsPage>(
        `/comments/${encodeURIComponent(portId)}?cursor=${encodeURIComponent(cursor)}`,
      );
      setFeed((current) => ({
        key: requestKey,
        status: "ready",
        items: [...current.items, ...page.items],
        cursor: page.nextCursor,
      }));
    } catch {
      setActionError(t.community.comments.error);
    } finally {
      setMorePending(false);
    }
  }

  async function submit() {
    const value = body.trim();
    setNotice(null);
    setActionError(null);

    if (!value) {
      setActionError(t.community.comments.emptyBody);
      return;
    }
    if (!token) {
      setActionError(t.community.comments.turnstileRequired);
      return;
    }

    setSubmitting(true);
    try {
      const created = await apiFetch<CommentItem>(`/comments/${encodeURIComponent(portId)}`, {
        method: "POST",
        body: JSON.stringify({ body: value, turnstileToken: token }),
      });
      setFeed((current) => ({
        key: requestKey,
        status: "ready",
        items: [created, ...current.items],
        cursor: current.cursor,
      }));
      setBody("");
      setNotice(t.community.comments.posted);
    } catch (error) {
      if (error instanceof ApiError && error.code === "turnstile_failed") {
        setActionError(t.community.comments.turnstileError);
      } else if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
        setActionError(t.community.comments.signInToComment);
      } else {
        setActionError(t.community.comments.submitError);
      }
    } finally {
      setToken(null);
      setResetKey((key) => key + 1);
      setSubmitting(false);
    }
  }

  async function removeComment(id: string) {
    const previous = items;
    setActionError(null);
    setNotice(null);
    setDeletingId(id);
    setFeed((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== id),
    }));
    try {
      await apiFetch<{ ok: boolean }>(`/comments/${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch {
      setFeed((current) => ({ ...current, items: previous }));
      setActionError(t.community.comments.deleteError);
    } finally {
      setDeletingId(null);
    }
  }

  async function submitReport() {
    if (!reportTarget) return;
    const reason = reportReason.trim();
    if (!reason) return;

    setReportPending(true);
    setReportError(null);
    try {
      await apiFetch<{ ok: boolean }>(`/comments/${encodeURIComponent(reportTarget.id)}/report`, {
        method: "POST",
        body: JSON.stringify({ reason }),
      });
      setReportTarget(null);
      setReportReason("");
      setNotice(t.community.comments.reportSent);
    } catch {
      setReportError(t.community.comments.reportError);
    } finally {
      setReportPending(false);
    }
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold tracking-tight">{t.community.comments.title}</h2>

      {user ? (
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4">
          <label htmlFor="opg-comment" className="sr-only">
            {t.community.comments.placeholder}
          </label>
          <textarea
            id="opg-comment"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            maxLength={COMMENT_MAX_LENGTH}
            rows={3}
            placeholder={t.community.comments.placeholder}
            className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Turnstile
              siteKey={TURNSTILE_SITE_KEY}
              resetKey={resetKey}
              onVerify={setToken}
              onExpire={() => setToken(null)}
              onError={() => setToken(null)}
            />
            <span className="text-xs text-muted">
              {t.community.comments.charCount(body.length, COMMENT_MAX_LENGTH)}
            </span>
          </div>
          <div className="flex items-center justify-end">
            <Button type="button" size="sm" onClick={() => void submit()} disabled={submitting}>
              {submitting ? (
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              {submitting ? t.community.comments.submitting : t.community.comments.submit}
            </Button>
          </div>
        </div>
      ) : sessionPending ? null : (
        <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
          {t.community.comments.signInToComment}
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
          {t.community.comments.loading}
        </p>
      ) : status === "error" ? (
        <p role="alert" className="text-sm text-danger">
          {t.community.comments.error}
        </p>
      ) : items.length === 0 ? (
        <p className="text-sm text-muted">{t.community.comments.empty}</p>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.id} className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-start gap-3">
                  <UserAvatar
                    name={item.author.name}
                    image={item.author.image}
                    className="size-8"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="text-sm font-medium">{item.author.name}</span>
                      {item.mine && (
                        <span className="rounded-full border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                          {t.community.comments.you}
                        </span>
                      )}
                      <time dateTime={item.createdAt} className="text-xs text-muted">
                        {formatWhen(item.createdAt, locale)}
                      </time>
                    </div>
                    <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
                      {item.body}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      {item.mine && (
                        <button
                          type="button"
                          onClick={() => void removeComment(item.id)}
                          disabled={deletingId === item.id}
                          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-danger disabled:opacity-60"
                        >
                          {deletingId === item.id ? (
                            <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
                          ) : (
                            <Trash2 className="size-3.5" aria-hidden="true" />
                          )}
                          {t.community.comments.delete}
                        </button>
                      )}
                      {!item.mine && user && (
                        <button
                          type="button"
                          onClick={() => {
                            setReportReason("");
                            setReportError(null);
                            setReportTarget(item);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground"
                        >
                          <Flag className="size-3.5" aria-hidden="true" />
                          {t.community.comments.report}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {cursor && (
            <div>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => void loadMore()}
                disabled={morePending}
                className={cn(morePending && "opacity-60")}
              >
                {morePending && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
                {morePending ? t.community.comments.loadingMore : t.community.comments.loadMore}
              </Button>
            </div>
          )}
        </>
      )}

      <Dialog
        open={reportTarget !== null}
        onOpenChange={(open) => {
          if (!open) setReportTarget(null);
        }}
        title={t.community.comments.reportTitle}
        description={t.community.comments.reportDescription}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="opg-report" className="sr-only">
            {t.community.comments.reportPlaceholder}
          </label>
          <textarea
            id="opg-report"
            value={reportReason}
            onChange={(event) => setReportReason(event.target.value)}
            maxLength={200}
            rows={3}
            placeholder={t.community.comments.reportPlaceholder}
            className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          {reportError && (
            <p role="alert" className="text-sm text-danger">
              {reportError}
            </p>
          )}
          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setReportTarget(null)}
            >
              {t.community.comments.cancel}
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => void submitReport()}
              disabled={reportPending || reportReason.trim().length === 0}
            >
              {reportPending && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
              {reportPending
                ? t.community.comments.reportSending
                : t.community.comments.reportSubmit}
            </Button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
