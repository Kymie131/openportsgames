import { Hono } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

import { createAuth } from "./auth";
import { allowedOrigins, originCheck } from "./middleware/origin";
import { requireUser, type SessionEnv } from "./middleware/session";
import { admin } from "./routes/admin";
import { comments } from "./routes/comments";
import { ratings } from "./routes/ratings";

const app = new Hono<SessionEnv>();

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

app.route("/ratings", ratings);
app.route("/comments", comments);
app.route("/admin", admin);

app.onError((_err, c) => c.json({ error: "internal_error" }, 500));

export default app;
