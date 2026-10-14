"use client";

import { createAuthClient } from "better-auth/react";
import { API_URL } from "@/lib/api";

/**
 * Better Auth browser client. Only social providers are enabled (Google,
 * Discord, GitHub); there are no passwords. `API_URL` points at the Worker,
 * whose auth routes live under `/api/auth`.
 */
export const authClient = createAuthClient({
  baseURL: API_URL,
  fetchOptions: {
    credentials: "include",
  },
});

/** Public session user shape: id, name and avatar only. */
export type SessionUser = {
  id: string;
  name: string;
  image?: string | null;
};

/**
 * Read the current session without leaking Better Auth's inferred types.
 *
 * The client is created without a server-side type reference, so its session
 * payload is typed loosely; this narrows it to the fields the UI consumes.
 */
export function useSessionUser(): { user: SessionUser | null; isPending: boolean } {
  const { data, isPending } = authClient.useSession();
  const session = data as unknown as { user?: SessionUser } | null | undefined;
  return { user: session?.user ?? null, isPending };
}
