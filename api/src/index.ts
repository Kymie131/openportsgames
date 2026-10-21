import { Hono } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";

import { createAuth } from "./auth";
import * as schema from "./db/schema";
import { allowedOrigins, originCheck } from "./middleware/origin";
import { rateLimit } from "./middleware/ratelimit";
import { requireUser, type SessionEnv } from "./middleware/session";
import { admin } from "./routes/admin";
import { comments } from "./routes/comments";
import { missing } from "./routes/missing";
import { ratings } from "./routes/ratings";

const app = new Hono<SessionEnv>();

const DELETE_ACCOUNT_WINDOW_MS = 60 * 60 * 1000;
const DELETE_ACCOUNT_MAX = 3;

app.use("*", secureHeaders());

app.use("*", (c, next) =>
  cors({
    origin: allowedOrigins(c.env),
    credentials: true,
  })(c, next),
);

app.use("*", originCheck());

app.on(["GET", "POST"], "/api/auth/*", (c) => createAuth(c.env).handler(c.req.raw));

app.get("/health", (c) => c.json({ ok: true }));

app.get("/me", requireUser(), (c) => {
  const user = c.get("user");
  return c.json({
    id: user.id,
    name: user.name,
    image: user.image,
    role: user.role,
  });
});

/**
 * Delete the current account and everything tied to it.
 *
 * The `user` row is removed; every referencing table declares
 * `ON DELETE CASCADE`, so sessions, OAuth accounts, ratings, comments and
 * reports go with it. Better Auth is asked to sign the session out first so it
 * emits its own exact `Set-Cookie` clearing headers (name, path and flags),
 * which are copied onto the response.
 */
app.delete(
  "/me",
  requireUser(),
  rateLimit({
    limit: DELETE_ACCOUNT_MAX,
    windowMs: DELETE_ACCOUNT_WINDOW_MS,
    scope: "delete-account",
  }),
  async (c) => {
    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });

    const signOutUrl = new URL(c.req.url);
    signOutUrl.pathname = "/api/auth/sign-out";
    const signOut = await createAuth(c.env).handler(
      new Request(signOutUrl, { method: "POST", headers: c.req.raw.headers }),
    );

    await db.delete(schema.user).where(eq(schema.user.id, user.id));

    const response = c.json({ ok: true });
    for (const cookie of signOut.headers.getSetCookie()) {
      response.headers.append("set-cookie", cookie);
    }
    return response;
  },
);

app.route("/ratings", ratings);
app.route("/comments", comments);
app.route("/missing", missing);
app.route("/admin", admin);

app.onError((_err, c) => c.json({ error: "internal_error" }, 500));

export default app;
