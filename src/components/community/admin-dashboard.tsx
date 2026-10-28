"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Eye, EyeOff, LoaderCircle, ShieldCheck, Trash2, Users } from "lucide-react";

import { LoginButton } from "@/components/community/login-button";
import { Container } from "@/components/layout/container";
import { ApiError, apiFetch, type PublicUser } from "@/lib/api";

type Me = PublicUser & { role: string };

type ReportItem = {
  id: string;
  reason: string;
  createdAt: string;
  comment: {
    id: string;
    body: string;
    status: "visible" | "hidden";
    author: PublicUser;
  };
  reporter: PublicUser;
};

type MissingCommentItem = {
  id: string;
  body: string;
  status: "visible" | "hidden";
  createdAt: string;
  parentId: string | null;
  author: PublicUser;
  post: { id: string; title: string; status: "open" | "done" | "hidden" };
};

type UserItem = {
  id: string;
  name: string;
  image: string | null;
  role: "user" | "admin";
  createdAt: string;
  ratings: number;
  comments: number;
};

type Page<T> = { items: T[]; nextCursor: string | null };

const STRINGS = {
  en: {
    title: "Moderation",
    subtitle: "Review reports and comments from the missing-ports board.",
    reports: "Reports",
    board: "Board comments",
    loadMore: "Load more",
    emptyReports: "No pending reports.",
    emptyComments: "No comments to moderate.",
    hide: "Hide",
    show: "Show",
    dismiss: "Dismiss report",
    delete: "Delete",
    hidden: "Hidden",
    visible: "Visible",
    by: "by",
    reportReason: "Reason",
    anonymous: "Sign in with an admin account to moderate.",
    forbidden: "This account does not have the admin role.",
    error: "The moderation data could not be loaded.",
    retry: "Retry",
    post: "Proposal",
    users: "Users",
    emptyUsers: "No registered users.",
    adminRole: "Admin",
    userRole: "User",
    makeAdmin: "Make admin",
    removeAdmin: "Remove admin",
    joined: "Joined",
    ratingsCount: (count: number) => `${count} ratings`,
    commentsCount: (count: number) => `${count} comments`,
    you: "You",
  },
  es: {
    title: "Moderación",
    subtitle: "Revisa denuncias y comentarios del tablón de ports faltantes.",
    reports: "Denuncias",
    board: "Comentarios del tablón",
    loadMore: "Cargar más",
    emptyReports: "No hay denuncias pendientes.",
    emptyComments: "No hay comentarios que moderar.",
    hide: "Ocultar",
    show: "Mostrar",
    dismiss: "Descartar denuncia",
    delete: "Borrar",
    hidden: "Oculto",
    visible: "Visible",
    by: "por",
    reportReason: "Motivo",
    anonymous: "Inicia sesión con una cuenta admin para moderar.",
    forbidden: "Esta cuenta no tiene el rol de administrador.",
    error: "No se pudieron cargar los datos de moderación.",
    retry: "Reintentar",
    post: "Propuesta",
    users: "Usuarios",
    emptyUsers: "No hay usuarios registrados.",
    adminRole: "Admin",
    userRole: "Usuario",
    makeAdmin: "Hacer admin",
    removeAdmin: "Quitar admin",
    joined: "Registro",
    ratingsCount: (count: number) => `${count} valoraciones`,
    commentsCount: (count: number) => `${count} comentarios`,
    you: "Tú",
  },
} as const;

function shortDate(value: string, lang: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function Badge({
  status,
  labels,
}: {
  status: "visible" | "hidden";
  labels: { hidden: string; visible: string };
}) {
  return (
    <span
      className={
        status === "hidden"
          ? "rounded-full bg-[color-mix(in_oklab,var(--warning)_15%,transparent)] px-2 py-0.5 text-xs font-medium text-warning"
          : "rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted"
      }
    >
      {status === "hidden" ? labels.hidden : labels.visible}
    </span>
  );
}

export function AdminDashboard() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang === "es" ? "es" : "en";
  const t = STRINGS[lang];

  const [state, setState] = useState<"loading" | "anon" | "forbidden" | "ready" | "error">(
    "loading",
  );
  const [tab, setTab] = useState<"reports" | "comments" | "users">("reports");
  const [meId, setMeId] = useState<string | null>(null);
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [reportsCursor, setReportsCursor] = useState<string | null>(null);
  const [comments, setComments] = useState<MissingCommentItem[]>([]);
  const [commentsCursor, setCommentsCursor] = useState<string | null>(null);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [usersCursor, setUsersCursor] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [actionError, setActionError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    apiFetch<Me>("/me")
      .then((me) => {
        if (cancelled) return;
        setMeId(me.id);
        setState(me.role === "admin" ? "ready" : "forbidden");
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        if (error instanceof ApiError && error.status === 401) setState("anon");
        else setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const loadReports = useCallback(async (cursor?: string) => {
    const query = cursor ? `?cursor=${encodeURIComponent(cursor)}` : "";
    return apiFetch<Page<ReportItem>>(`/admin/reports${query}`);
  }, []);

  const loadComments = useCallback(async (cursor?: string) => {
    const query = cursor
      ? `?status=all&cursor=${encodeURIComponent(cursor)}`
      : "?status=all";
    return apiFetch<Page<MissingCommentItem>>(`/admin/missing-comments${query}`);
  }, []);

  const loadUsers = useCallback(async (cursor?: string) => {
    const query = cursor ? `?cursor=${encodeURIComponent(cursor)}` : "";
    return apiFetch<Page<UserItem>>(`/admin/users${query}`);
  }, []);

  useEffect(() => {
    if (state !== "ready") return;
    let cancelled = false;
    const load =
      tab === "reports"
        ? loadReports().then((page) => {
            if (cancelled) return;
            setReports(page.items);
            setReportsCursor(page.nextCursor);
          })
        : tab === "comments"
          ? loadComments().then((page) => {
              if (cancelled) return;
              setComments(page.items);
              setCommentsCursor(page.nextCursor);
            })
          : loadUsers().then((page) => {
              if (cancelled) return;
              setUsers(page.items);
              setUsersCursor(page.nextCursor);
            });
    load.catch(() => {
      if (!cancelled) setState("error");
    });
    return () => {
      cancelled = true;
    };
  }, [state, tab, loadReports, loadComments, loadUsers]);

  async function loadMore() {
    setLoadingMore(true);
    try {
      if (tab === "reports" && reportsCursor) {
        const page = await loadReports(reportsCursor);
        setReports((current) => [...current, ...page.items]);
        setReportsCursor(page.nextCursor);
      }
      if (tab === "comments" && commentsCursor) {
        const page = await loadComments(commentsCursor);
        setComments((current) => [...current, ...page.items]);
        setCommentsCursor(page.nextCursor);
      }
      if (tab === "users" && usersCursor) {
        const page = await loadUsers(usersCursor);
        setUsers((current) => [...current, ...page.items]);
        setUsersCursor(page.nextCursor);
      }
    } catch {
      setActionError(true);
    } finally {
      setLoadingMore(false);
    }
  }

  async function dismissReport(id: string) {
    setBusy(id);
    setActionError(false);
    try {
      await apiFetch(`/admin/reports/${id}`, { method: "DELETE" });
      setReports((current) => current.filter((item) => item.id !== id));
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  async function toggleComment(id: string, status: "visible" | "hidden") {
    setBusy(id);
    setActionError(false);
    try {
      await apiFetch(`/admin/comments/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setReports((current) =>
        current.map((item) =>
          item.comment.id === id ? { ...item, comment: { ...item.comment, status } } : item,
        ),
      );
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  async function deleteComment(id: string) {
    setBusy(id);
    setActionError(false);
    try {
      await apiFetch(`/comments/${id}`, { method: "DELETE" });
      setReports((current) => current.filter((item) => item.comment.id !== id));
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  async function toggleMissingComment(item: MissingCommentItem) {
    const status = item.status === "hidden" ? "visible" : "hidden";
    setBusy(item.id);
    setActionError(false);
    try {
      await apiFetch(`/admin/missing-comments/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setComments((current) =>
        current.map((row) => (row.id === item.id ? { ...row, status } : row)),
      );
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  async function deleteMissingComment(item: MissingCommentItem) {
    setBusy(item.id);
    setActionError(false);
    try {
      await apiFetch(`/missing/${item.post.id}/comments/${item.id}`, { method: "DELETE" });
      setComments((current) => current.filter((row) => row.id !== item.id));
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  async function toggleRole(item: UserItem) {
    const role = item.role === "admin" ? "user" : "admin";
    setBusy(item.id);
    setActionError(false);
    try {
      await apiFetch(`/admin/users/${item.id}/role`, {
        method: "PATCH",
        body: JSON.stringify({ role }),
      });
      setUsers((current) =>
        current.map((row) => (row.id === item.id ? { ...row, role } : row)),
      );
    } catch {
      setActionError(true);
    } finally {
      setBusy(null);
    }
  }

  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-accent" aria-hidden="true" />
            <h1 className="text-2xl font-semibold tracking-tight">{t.title}</h1>
          </div>
          <p className="text-sm text-muted">{t.subtitle}</p>
        </header>

        {state === "loading" && (
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            {t.title}⬦
          </p>
        )}

        {state === "anon" && (
          <div className="mt-8 flex flex-col items-start gap-3">
            <p className="text-sm text-muted">{t.anonymous}</p>
            <LoginButton />
          </div>
        )}

        {state === "forbidden" && <p className="mt-8 text-sm text-muted">{t.forbidden}</p>}

        {state === "error" && (
          <div className="mt-8 flex flex-col items-start gap-3">
            <p className="text-sm text-danger">{t.error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-md border border-border px-3 py-2 text-sm hover:bg-surface-2"
            >
              {t.retry}
            </button>
          </div>
        )}

        {state === "ready" && (
          <div className="mt-6 flex flex-col gap-5">
            <div className="flex gap-2" role="tablist" aria-label={t.title}>
              {(["reports", "comments", "users"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={tab === value}
                  onClick={() => setTab(value)}
                  className={
                    tab === value
                      ? "rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast"
                      : "rounded-md border border-border px-3 py-2 text-sm text-muted hover:bg-surface-2"
                  }
                >
                  {value === "reports" ? t.reports : value === "comments" ? t.board : t.users}
                </button>
              ))}
            </div>

            {actionError && <p className="text-sm text-danger">{t.error}</p>}

            {tab === "reports" && (
              <div className="flex flex-col gap-3">
                {reports.length === 0 && <p className="text-sm text-muted">{t.emptyReports}</p>}
                {reports.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <Badge status={item.comment.status} labels={t} />
                      <span>
                        {t.reportReason}: {item.reason}
                      </span>
                      <span>·</span>
                      <span>{shortDate(item.createdAt, lang)}</span>
                    </div>
                    <p className="whitespace-pre-wrap text-sm text-foreground">
                      {item.comment.body}
                    </p>
                    <p className="text-xs text-muted">
                      {item.comment.author.name} · {t.by} {item.reporter.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={busy === item.comment.id}
                        onClick={() =>
                          toggleComment(
                            item.comment.id,
                            item.comment.status === "hidden" ? "visible" : "hidden",
                          )
                        }
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-surface-2 disabled:opacity-50"
                      >
                        {item.comment.status === "hidden" ? (
                          <Eye className="size-3.5" aria-hidden="true" />
                        ) : (
                          <EyeOff className="size-3.5" aria-hidden="true" />
                        )}
                        {item.comment.status === "hidden" ? t.show : t.hide}
                      </button>
                      <button
                        type="button"
                        disabled={busy === item.comment.id}
                        onClick={() => deleteComment(item.comment.id)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-danger hover:bg-surface-2 disabled:opacity-50"
                      >
                        <Trash2 className="size-3.5" aria-hidden="true" />
                        {t.delete}
                      </button>
                      <button
                        type="button"
                        disabled={busy === item.id}
                        onClick={() => dismissReport(item.id)}
                        className="rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:bg-surface-2 disabled:opacity-50"
                      >
                        {t.dismiss}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {tab === "comments" && (
              <div className="flex flex-col gap-3">
                {comments.length === 0 && <p className="text-sm text-muted">{t.emptyComments}</p>}
                {comments.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <Badge status={item.status} labels={t} />
                      <span>
                        {t.post}: {item.post.title}
                      </span>
                      <span>·</span>
                      <span>{shortDate(item.createdAt, lang)}</span>
                    </div>
                    <p className="whitespace-pre-wrap text-sm text-foreground">{item.body}</p>
                    <p className="text-xs text-muted">{item.author.name}</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={busy === item.id}
                        onClick={() => toggleMissingComment(item)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-surface-2 disabled:opacity-50"
                      >
                        {item.status === "hidden" ? (
                          <Eye className="size-3.5" aria-hidden="true" />
                        ) : (
                          <EyeOff className="size-3.5" aria-hidden="true" />
                        )}
                        {item.status === "hidden" ? t.show : t.hide}
                      </button>
                      <button
                        type="button"
                        disabled={busy === item.id}
                        onClick={() => deleteMissingComment(item)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-danger hover:bg-surface-2 disabled:opacity-50"
                      >
                        <Trash2 className="size-3.5" aria-hidden="true" />
                        {t.delete}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {tab === "users" && (
              <div className="flex flex-col gap-3">
                {users.length === 0 && <p className="text-sm text-muted">{t.emptyUsers}</p>}
                {users.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span
                        className={
                          item.role === "admin"
                            ? "rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-contrast"
                            : "rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted"
                        }
                      >
                        {item.role === "admin" ? t.adminRole : t.userRole}
                      </span>
                      {item.id === meId && <span>{t.you}</span>}
                      <span>{shortDate(item.createdAt, lang)}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Users className="size-4 text-muted" aria-hidden="true" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                        <span>{t.ratingsCount(item.ratings)}</span>
                        <span>{t.commentsCount(item.comments)}</span>
                        {item.id !== meId && (
                          <button
                            type="button"
                            disabled={busy === item.id}
                            onClick={() => toggleRole(item)}
                            className="rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-surface-2 disabled:opacity-50"
                          >
                            {item.role === "admin" ? t.removeAdmin : t.makeAdmin}
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {((tab === "reports" && reportsCursor) ||
              (tab === "comments" && commentsCursor) ||
              (tab === "users" && usersCursor)) && (
              <button
                type="button"
                onClick={loadMore}
                disabled={loadingMore}
                className="self-start rounded-md border border-border px-3 py-2 text-sm hover:bg-surface-2 disabled:opacity-50"
              >
                {t.loadMore}
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}



