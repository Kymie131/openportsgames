"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Eye, EyeOff, LoaderCircle, ShieldCheck, Trash2, Users } from "lucide-react";

import { LoginButton } from "@/components/community/login-button";
import { Container } from "@/components/layout/container";
import { ApiError, apiFetch, type PublicUser } from "@/lib/api";

type Me = PublicUser & { role: string };

type ReportStatus = "open" | "dismissed" | "resolved";

type ReportItem = {
  id: string;
  reason: string;
  status: ReportStatus;
  note: string | null;
  resolvedAt: string | null;
  resolvedBy: PublicUser | null;
  createdAt: string;
  comment: {
    id: string;
    body: string;
    status: "visible" | "hidden";
    author: PublicUser;
  };
  reporter: PublicUser;
};

type AuditAction =
  | "report.dismiss"
  | "report.resolve"
  | "report.reopen"
  | "comment.hide"
  | "comment.show"
  | "comment.delete"
  | "missing_comment.hide"
  | "missing_comment.show"
  | "missing_comment.delete"
  | "missing_port.status"
  | "user.role"
  | "user.delete";

type AuditItem = {
  id: string;
  action: AuditAction;
  targetType: "report" | "comment" | "missing_comment" | "missing_port" | "user";
  targetId: string;
  note: string | null;
  createdAt: string;
  actor: PublicUser | null;
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

type UserDetail = {
  user: UserItem;
  ratings: { portId: string; stars: number; updatedAt: string }[];
  comments: {
    id: string;
    portId: string;
    body: string;
    sentiment: "positive" | "negative" | null;
    status: "visible" | "hidden";
    createdAt: string;
  }[];
  missing: { id: string; title: string; status: "open" | "done" | "hidden"; createdAt: string }[];
};

type Page<T> = { items: T[]; nextCursor: string | null };

type ReportFilters = {
  status: ReportStatus | "all";
  reason: string;
  from: string;
  to: string;
};

const STRINGS = {
  en: {
    title: "Moderation",
    subtitle: "Review reports and comments from the missing-ports board.",
    reports: "Reports",
    board: "Board comments",
    audit: "Audit log",
    auditEmpty: "No moderation actions recorded yet.",
    auditActions: {
      "report.dismiss": "Report dismissed",
      "report.resolve": "Report resolved",
      "report.reopen": "Report reopened",
      "comment.hide": "Comment hidden",
      "comment.show": "Comment shown",
      "comment.delete": "Comment deleted",
      "missing_comment.hide": "Board comment hidden",
      "missing_comment.show": "Board comment shown",
      "missing_comment.delete": "Board comment deleted",
      "missing_port.status": "Proposal status changed",
      "user.role": "User role changed",
      "user.delete": "User deleted",
    },
    targetTypes: {
      report: "Report",
      comment: "Comment",
      missing_comment: "Board comment",
      missing_port: "Proposal",
      user: "User",
    },
    deletedUser: "Deleted account",
    filterStatus: "Status",
    allStatuses: "All statuses",
    statusOpen: "Open",
    statusDismissed: "Dismissed",
    statusResolved: "Resolved",
    searchReason: "Search reason",
    fromDate: "From",
    toDate: "To",
    applyFilters: "Apply",
    clearFilters: "Clear",
    note: "Moderator note",
    notePlaceholder: "Optional note",
    noteEmpty: "No note",
    resolve: "Resolve",
    reopen: "Reopen",
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
    allRoles: "All roles",
    filterRole: "Role",
    sortBy: "Sort by",
    sortNewest: "Newest",
    sortRatings: "Most ratings",
    sortComments: "Most comments",
    sortName: "Name",
    profile: "Profile",
    profileRatings: "Ratings",
    profileComments: "Comments",
    profileMissing: "Missing-port proposals",
    profileEmpty: "Nothing yet.",
    close: "Close",
    loadingProfile: "Loading profile…",
  },
  es: {
    title: "Moderación",
    subtitle: "Revisa denuncias y comentarios del tablón de ports faltantes.",
    reports: "Denuncias",
    board: "Comentarios del tablón",
    audit: "Registro de moderación",
    auditEmpty: "Todavía no hay acciones de moderación.",
    auditActions: {
      "report.dismiss": "Denuncia descartada",
      "report.resolve": "Denuncia resuelta",
      "report.reopen": "Denuncia reabierta",
      "comment.hide": "Comentario oculto",
      "comment.show": "Comentario mostrado",
      "comment.delete": "Comentario borrado",
      "missing_comment.hide": "Comentario del tablón oculto",
      "missing_comment.show": "Comentario del tablón mostrado",
      "missing_comment.delete": "Comentario del tablón borrado",
      "missing_port.status": "Estado de propuesta cambiado",
      "user.role": "Rol de usuario cambiado",
      "user.delete": "Usuario borrado",
    },
    targetTypes: {
      report: "Denuncia",
      comment: "Comentario",
      missing_comment: "Comentario del tablón",
      missing_port: "Propuesta",
      user: "Usuario",
    },
    deletedUser: "Cuenta borrada",
    filterStatus: "Estado",
    allStatuses: "Todos los estados",
    statusOpen: "Abierta",
    statusDismissed: "Descartada",
    statusResolved: "Resuelta",
    searchReason: "Buscar motivo",
    fromDate: "Desde",
    toDate: "Hasta",
    applyFilters: "Aplicar",
    clearFilters: "Limpiar",
    note: "Nota de moderación",
    notePlaceholder: "Nota opcional",
    noteEmpty: "Sin nota",
    resolve: "Resolver",
    reopen: "Reabrir",
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
    allRoles: "Todos los roles",
    filterRole: "Rol",
    sortBy: "Ordenar por",
    sortNewest: "Más recientes",
    sortRatings: "Más valoraciones",
    sortComments: "Más comentarios",
    sortName: "Nombre",
    profile: "Perfil",
    profileRatings: "Valoraciones",
    profileComments: "Comentarios",
    profileMissing: "Propuestas de ports",
    profileEmpty: "Todavía nada.",
    close: "Cerrar",
    loadingProfile: "Cargando perfil…",
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

function ReportStatusBadge({
  status,
  labels,
}: {
  status: ReportStatus;
  labels: { statusOpen: string; statusDismissed: string; statusResolved: string };
}) {
  const className =
    status === "resolved"
      ? "rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
      : status === "dismissed"
        ? "rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted"
        : "rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent";
  const label =
    status === "resolved"
      ? labels.statusResolved
      : status === "dismissed"
        ? labels.statusDismissed
        : labels.statusOpen;
  return <span className={className}>{label}</span>;
}

export function AdminDashboard() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang === "es" ? "es" : "en";
  const t = STRINGS[lang];

  const [state, setState] = useState<"loading" | "anon" | "forbidden" | "ready" | "error">(
    "loading",
  );
  const [tab, setTab] = useState<"reports" | "comments" | "users" | "audit">("reports");
  const [meId, setMeId] = useState<string | null>(null);
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [reportsCursor, setReportsCursor] = useState<string | null>(null);
  const [reportFilters, setReportFilters] = useState<ReportFilters>({
    status: "open",
    reason: "",
    from: "",
    to: "",
  });
  const [draftFilters, setDraftFilters] = useState<ReportFilters>(reportFilters);
  const [reportNotes, setReportNotes] = useState<Record<string, string>>({});
  const [comments, setComments] = useState<MissingCommentItem[]>([]);
  const [commentsCursor, setCommentsCursor] = useState<string | null>(null);
  const [audit, setAudit] = useState<AuditItem[]>([]);
  const [auditCursor, setAuditCursor] = useState<string | null>(null);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [usersCursor, setUsersCursor] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<"all" | "user" | "admin">("all");
  const [userSort, setUserSort] = useState<"newest" | "ratings" | "comments" | "name">(
    "newest",
  );
  const [profile, setProfile] = useState<UserDetail | null>(null);
  const [profileLoading, setProfileLoading] = useState(false);
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

  const loadReports = useCallback(
    async (cursor?: string) => {
      const params = new URLSearchParams();
      params.set("status", reportFilters.status);
      if (reportFilters.reason.trim()) params.set("reason", reportFilters.reason.trim());
      if (reportFilters.from) params.set("from", reportFilters.from);
      if (reportFilters.to) params.set("to", reportFilters.to);
      if (cursor) params.set("cursor", cursor);
      return apiFetch<Page<ReportItem>>(`/admin/reports?${params.toString()}`);
    },
    [reportFilters],
  );

  const loadAudit = useCallback(async (cursor?: string) => {
    const query = cursor ? `?cursor=${encodeURIComponent(cursor)}` : "";
    return apiFetch<Page<AuditItem>>(`/admin/audit${query}`);
  }, []);

  const loadComments = useCallback(async (cursor?: string) => {
    const query = cursor
      ? `?status=all&cursor=${encodeURIComponent(cursor)}`
      : "?status=all";
    return apiFetch<Page<MissingCommentItem>>(`/admin/missing-comments${query}`);
  }, []);

  const loadUsers = useCallback(
    async (cursor?: string) => {
      const params = new URLSearchParams();
      if (roleFilter !== "all") params.set("role", roleFilter);
      if (userSort !== "newest") params.set("sort", userSort);
      if (cursor && userSort === "newest") params.set("cursor", cursor);
      const query = params.size ? `?${params.toString()}` : "";
      return apiFetch<Page<UserItem>>(`/admin/users${query}`);
    },
    [roleFilter, userSort],
  );

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
          : tab === "audit"
            ? loadAudit().then((page) => {
                if (cancelled) return;
                setAudit(page.items);
                setAuditCursor(page.nextCursor);
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
  }, [state, tab, loadReports, loadComments, loadAudit, loadUsers]);

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
      if (tab === "audit" && auditCursor) {
        const page = await loadAudit(auditCursor);
        setAudit((current) => [...current, ...page.items]);
        setAuditCursor(page.nextCursor);
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

  async function updateReportStatus(
    id: string,
    status: ReportStatus,
    note?: string,
  ) {
    setBusy(id);
    setActionError(false);
    try {
      const updated = await apiFetch<{
        id: string;
        status: ReportStatus;
        note: string | null;
        resolvedAt: string | null;
        resolvedBy: PublicUser | null;
      }>(`/admin/reports/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status,
          ...(note?.trim() ? { note } : {}),
        }),
      });
      setReports((current) => {
        if (reportFilters.status !== "all" && reportFilters.status !== updated.status) {
          return current.filter((item) => item.id !== id);
        }
        return current.map((item) =>
          item.id === id
            ? {
                ...item,
                status: updated.status,
                note: updated.note,
                resolvedAt: updated.resolvedAt,
                resolvedBy: updated.resolvedBy,
              }
            : item,
        );
      });
      setReportNotes((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });
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

  async function openProfile(id: string) {
    setProfileLoading(true);
    setActionError(false);
    try {
      const detail = await apiFetch<UserDetail>(`/admin/users/${id}`);
      setProfile(detail);
    } catch {
      setActionError(true);
    } finally {
      setProfileLoading(false);
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
              {(["reports", "comments", "users", "audit"] as const).map((value) => (
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
                  {value === "reports"
                    ? t.reports
                    : value === "comments"
                      ? t.board
                      : value === "users"
                        ? t.users
                        : t.audit}
                </button>
              ))}
            </div>

            {actionError && <p className="text-sm text-danger">{t.error}</p>}

            {tab === "reports" && (
              <div className="flex flex-col gap-3">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setReportFilters({
                      ...draftFilters,
                      reason: draftFilters.reason.trim(),
                    });
                  }}
                  className="flex flex-wrap items-end gap-2 rounded-xl border border-border bg-surface p-3"
                >
                  <label className="flex flex-col gap-1 text-xs text-muted">
                    {t.filterStatus}
                    <select
                      value={draftFilters.status}
                      onChange={(event) =>
                        setDraftFilters((current) => ({
                          ...current,
                          status: event.target.value as ReportStatus | "all",
                        }))
                      }
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    >
                      <option value="open">{t.statusOpen}</option>
                      <option value="resolved">{t.statusResolved}</option>
                      <option value="dismissed">{t.statusDismissed}</option>
                      <option value="all">{t.allStatuses}</option>
                    </select>
                  </label>
                  <label className="flex min-w-40 flex-1 flex-col gap-1 text-xs text-muted">
                    {t.reportReason}
                    <input
                      type="search"
                      value={draftFilters.reason}
                      maxLength={200}
                      onChange={(event) =>
                        setDraftFilters((current) => ({
                          ...current,
                          reason: event.target.value,
                        }))
                      }
                      placeholder={t.searchReason}
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-xs text-muted">
                    {t.fromDate}
                    <input
                      type="date"
                      value={draftFilters.from}
                      onChange={(event) =>
                        setDraftFilters((current) => ({
                          ...current,
                          from: event.target.value,
                        }))
                      }
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-xs text-muted">
                    {t.toDate}
                    <input
                      type="date"
                      value={draftFilters.to}
                      onChange={(event) =>
                        setDraftFilters((current) => ({
                          ...current,
                          to: event.target.value,
                        }))
                      }
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    />
                  </label>
                  <button
                    type="submit"
                    className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-contrast"
                  >
                    {t.applyFilters}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const cleared: ReportFilters = {
                        status: "open",
                        reason: "",
                        from: "",
                        to: "",
                      };
                      setDraftFilters(cleared);
                      setReportFilters(cleared);
                    }}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-muted hover:bg-surface-2"
                  >
                    {t.clearFilters}
                  </button>
                </form>

                {reports.length === 0 && <p className="text-sm text-muted">{t.emptyReports}</p>}
                {reports.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <ReportStatusBadge status={item.status} labels={t} />
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
                    {item.status !== "open" && item.resolvedAt && (
                      <p className="text-xs text-muted">
                        {item.resolvedBy?.name ?? t.deletedUser} ·{" "}
                        {shortDate(item.resolvedAt, lang)}
                      </p>
                    )}
                    {item.note && (
                      <p className="rounded-md bg-surface-2 px-3 py-2 text-xs leading-5 text-muted">
                        <span className="font-medium text-foreground">{t.note}:</span>{" "}
                        {item.note}
                      </p>
                    )}
                    {item.status === "open" && (
                      <label className="flex flex-col gap-1 text-xs text-muted">
                        <span className="sr-only">{t.note}</span>
                        <input
                          type="text"
                          value={reportNotes[item.id] ?? ""}
                          maxLength={500}
                          onChange={(event) =>
                            setReportNotes((current) => ({
                              ...current,
                              [item.id]: event.target.value,
                            }))
                          }
                          placeholder={t.notePlaceholder}
                          className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                        />
                      </label>
                    )}
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
                      {item.status === "open" ? (
                        <>
                          <button
                            type="button"
                            disabled={busy === item.id}
                            onClick={() =>
                              updateReportStatus(
                                item.id,
                                "resolved",
                                reportNotes[item.id],
                              )
                            }
                            className="rounded-md bg-accent px-2.5 py-1.5 text-xs font-medium text-accent-contrast disabled:opacity-50"
                          >
                            {t.resolve}
                          </button>
                          <button
                            type="button"
                            disabled={busy === item.id}
                            onClick={() =>
                              updateReportStatus(
                                item.id,
                                "dismissed",
                                reportNotes[item.id],
                              )
                            }
                            className="rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:bg-surface-2 disabled:opacity-50"
                          >
                            {t.dismiss}
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          disabled={busy === item.id}
                          onClick={() => updateReportStatus(item.id, "open")}
                          className="rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:bg-surface-2 disabled:opacity-50"
                        >
                          {t.reopen}
                        </button>
                      )}
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
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 text-xs text-muted">
                    {t.filterRole}
                    <select
                      value={roleFilter}
                      onChange={(event) =>
                        setRoleFilter(event.target.value as "all" | "user" | "admin")
                      }
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    >
                      <option value="all">{t.allRoles}</option>
                      <option value="admin">{t.adminRole}</option>
                      <option value="user">{t.userRole}</option>
                    </select>
                  </label>
                  <label className="inline-flex items-center gap-2 text-xs text-muted">
                    {t.sortBy}
                    <select
                      value={userSort}
                      onChange={(event) =>
                        setUserSort(
                          event.target.value as "newest" | "ratings" | "comments" | "name",
                        )
                      }
                      className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
                    >
                      <option value="newest">{t.sortNewest}</option>
                      <option value="ratings">{t.sortRatings}</option>
                      <option value="comments">{t.sortComments}</option>
                      <option value="name">{t.sortName}</option>
                    </select>
                  </label>
                </div>
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
                        <button
                          type="button"
                          onClick={() => void openProfile(item.id)}
                          className="text-sm font-medium underline-offset-4 hover:underline"
                        >
                          {item.name}
                        </button>
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

            {tab === "audit" && (
              <div className="flex flex-col gap-3">
                {audit.length === 0 && <p className="text-sm text-muted">{t.auditEmpty}</p>}
                {audit.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span className="text-sm font-medium text-foreground">
                        {t.auditActions[item.action]}
                      </span>
                      <span>·</span>
                      <span>{t.targetTypes[item.targetType]}</span>
                      <span>·</span>
                      <span>{shortDate(item.createdAt, lang)}</span>
                    </div>
                    <p className="text-xs text-muted">
                      {item.actor?.name ?? t.deletedUser} ·{" "}
                      <span className="font-mono">{item.targetId}</span>
                    </p>
                    {item.note && (
                      <p className="rounded-md bg-surface-2 px-3 py-2 text-xs leading-5 text-muted">
                        {item.note}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}

            {((tab === "reports" && reportsCursor) ||
              (tab === "comments" && commentsCursor) ||
              (tab === "users" && usersCursor) ||
              (tab === "audit" && auditCursor)) && (
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

      {(profileLoading || profile) && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.profile}
        >
          <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-xl border border-border bg-background p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{t.profile}</h2>
              <button
                type="button"
                onClick={() => setProfile(null)}
                className="rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-surface-2"
              >
                {t.close}
              </button>
            </div>

            {profileLoading ? (
              <p className="inline-flex items-center gap-2 text-sm text-muted">
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                {t.loadingProfile}
              </p>
            ) : profile ? (
              <>
                <div className="flex items-center gap-3">
                  {profile.user.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.user.image}
                      alt=""
                      className="size-12 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <span className="flex size-12 items-center justify-center rounded-full border border-border bg-surface-2 font-semibold uppercase">
                      {profile.user.name.charAt(0)}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium">{profile.user.name}</span>
                    <span className="text-xs text-muted">
                      {profile.user.role === "admin" ? t.adminRole : t.userRole} ·{" "}
                      {shortDate(profile.user.createdAt, lang)}
                    </span>
                  </div>
                  <div className="ml-auto text-xs text-muted">
                    <span>{t.ratingsCount(profile.user.ratings)}</span> ·{" "}
                    <span>{t.commentsCount(profile.user.comments)}</span>
                  </div>
                </div>

                <section className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold">{t.profileRatings}</h3>
                  {profile.ratings.length === 0 ? (
                    <p className="text-sm text-muted">{t.profileEmpty}</p>
                  ) : (
                    <ul className="flex flex-col gap-1.5 text-sm">
                      {profile.ratings.map((rating) => (
                        <li key={`${rating.portId}-${rating.updatedAt}`}>
                          <a
                            href={`/${lang}/ports/${rating.portId}/`}
                            className="text-link hover:underline"
                          >
                            {rating.portId}
                          </a>{" "}
                          <span className="text-muted">· {rating.stars}/5</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                <section className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold">{t.profileComments}</h3>
                  {profile.comments.length === 0 ? (
                    <p className="text-sm text-muted">{t.profileEmpty}</p>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {profile.comments.map((comment) => (
                        <li
                          key={comment.id}
                          className="rounded-lg border border-border bg-surface p-3 text-sm"
                        >
                          <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                            <a
                              href={`/${lang}/ports/${comment.portId}/`}
                              className="text-link hover:underline"
                            >
                              {comment.portId}
                            </a>
                            {comment.sentiment && (
                              <span
                                className={
                                  comment.sentiment === "positive"
                                    ? "rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-500"
                                    : "rounded-full bg-rose-500/10 px-2 py-0.5 text-rose-500"
                                }
                              >
                                {comment.sentiment === "positive"
                                  ? t.profileComments
                                  : t.profileComments}
                              </span>
                            )}
                            {comment.status === "hidden" && <span>· {t.hidden}</span>}
                            <span>· {shortDate(comment.createdAt, lang)}</span>
                          </div>
                          <p className="whitespace-pre-wrap break-words">{comment.body}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                <section className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold">{t.profileMissing}</h3>
                  {profile.missing.length === 0 ? (
                    <p className="text-sm text-muted">{t.profileEmpty}</p>
                  ) : (
                    <ul className="flex flex-col gap-1.5 text-sm">
                      {profile.missing.map((item) => (
                        <li key={item.id}>
                          {item.title}{" "}
                          <span className="text-muted">· {item.status}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}




