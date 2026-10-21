import { z } from "zod";

/** Maximum length of a comment body, measured after sanitization. */
export const COMMENT_BODY_MAX_LENGTH = 1000;

/** Maximum length of a report reason, measured after sanitization. */
export const REPORT_REASON_MAX_LENGTH = 200;

/** Default page size for paginated list endpoints. */
export const PAGE_LIMIT_DEFAULT = 20;

/** Hard cap on the page size a client may request. */
export const PAGE_LIMIT_MAX = 50;

export type CommentStatus = "visible" | "hidden";

/**
 * Control characters to strip from user text: C0 (minus tab, newline and
 * carriage return), DEL and the C1 block. Newlines and tabs are preserved so
 * multi-line comments survive.
 */
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;

/** Remove control characters, preserving tab, newline and carriage return. */
export function stripControlChars(input: string): string {
  return input.replace(CONTROL_CHARS, "");
}

/** Sanitize free text: strip control characters then trim the ends. */
export function sanitizeText(input: string): string {
  return stripControlChars(input).trim();
}

export const commentBodySchema = z
  .string()
  .max(COMMENT_BODY_MAX_LENGTH * 2)
  .transform(sanitizeText)
  .pipe(z.string().min(1).max(COMMENT_BODY_MAX_LENGTH));

export const createCommentSchema = z.object({
  body: commentBodySchema,
  turnstileToken: z.string(),
  parentId: z.string().uuid().nullish(),
});

export const reportReasonSchema = z
  .string()
  .max(REPORT_REASON_MAX_LENGTH * 2)
  .transform(sanitizeText)
  .pipe(z.string().min(1).max(REPORT_REASON_MAX_LENGTH));

export const createReportSchema = z.object({ reason: reportReasonSchema });

export const commentStatusSchema = z.enum(["visible", "hidden"]);

export const updateCommentStatusSchema = z.object({
  status: commentStatusSchema,
});

/** Keyset pagination cursor: the tuple `(created_at, id)` of the last row. */
export type Cursor = { createdAt: number; id: string };

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const CURSOR_ID_RE = /^[A-Za-z0-9_-]+$/;
const CURSOR_TIME_RE = /^[0-9]{1,15}$/;

/** Encode a `(createdAt, id)` tuple as a URL-safe, tamper-evident cursor. */
export function encodeCursor(createdAt: number, id: string): string {
  const raw = `${createdAt}|${id}`;
  return btoa(raw).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * Decode a cursor produced by {@link encodeCursor}.
 *
 * Returns `null` for anything that is not a well formed cursor, including
 * base64 that does not decode, a missing separator, a non-numeric timestamp or
 * an id that is not a UUID. Callers should treat `null` as a bad request.
 */
export function decodeCursor(value: string | undefined | null): Cursor | null {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 200) return null;
  if (!CURSOR_ID_RE.test(trimmed)) return null;

  let normalized = trimmed.replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4 !== 0) normalized += "=";

  let raw: string;
  try {
    raw = atob(normalized);
  } catch {
    return null;
  }

  const sep = raw.indexOf("|");
  if (sep <= 0) return null;

  const timePart = raw.slice(0, sep);
  const id = raw.slice(sep + 1);
  if (!CURSOR_TIME_RE.test(timePart)) return null;
  if (!UUID_RE.test(id)) return null;

  const createdAt = Number(timePart);
  if (!Number.isSafeInteger(createdAt) || createdAt < 0) return null;

  return { createdAt, id };
}

/** Clamp a raw `limit` query value to `[1, PAGE_LIMIT_MAX]`, defaulting to 20. */
export function parseLimit(raw: string | undefined | null): number {
  if (raw === undefined || raw === null || raw.trim() === "") {
    return PAGE_LIMIT_DEFAULT;
  }
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) return PAGE_LIMIT_DEFAULT;
  return Math.min(n, PAGE_LIMIT_MAX);
}
