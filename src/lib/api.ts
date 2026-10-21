/**
 * Client-side helpers for the public backend (Cloudflare Worker).
 *
 * Every request sends credentials so the Better Auth session cookie travels
 * with it. Responses are typed here instead of in each component.
 */

/** Backend origin, without a trailing slash. Empty when not configured. */
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

/** Public Turnstile site key. Empty disables the widget. */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

/** Public user shape returned by the API: never carries email or provider ids. */
export type PublicUser = {
  id: string;
  name: string;
  image: string | null;
};

/** Aggregated rating for a port, plus the caller's own hearts when logged in. */
export type RatingStats = {
  average: number | null;
  count: number;
  mine: number | null;
};

export type CommentItem = {
  id: string;
  body: string;
  createdAt: string;
  parentId: string | null;
  author: PublicUser;
  mine: boolean;
};

export type MissingPortStatus = "open" | "done" | "hidden";

export type MissingPortItem = {
  id: string;
  title: string;
  game: string;
  platform: string;
  url: string | null;
  notes: string | null;
  status: MissingPortStatus;
  createdAt: string;
  author: PublicUser;
  mine: boolean;
};

export type MissingPortsPage = {
  items: MissingPortItem[];
  nextCursor: string | null;
};

export type CommentsPage = {
  items: CommentItem[];
  nextCursor: string | null;
};

/** Error carrying the HTTP status and the generic API error code. */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string) {
    super(code);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

/**
 * Fetch JSON from the API with the session cookie attached.
 *
 * Throws {@link ApiError} for any non-2xx response; the body is parsed only to
 * recover the generic `error` code, never surfaced to the user verbatim.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set("accept", "application/json");
  if (init?.body !== undefined) headers.set("content-type", "application/json");

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    let code = "request_failed";
    try {
      const data = (await response.json()) as { error?: unknown };
      if (data && typeof data.error === "string") code = data.error;
    } catch {
      /* non-JSON error body: keep the generic code */
    }
    throw new ApiError(response.status, code);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
