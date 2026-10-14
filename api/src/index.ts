import { Hono } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

import type { Env } from "./env";
import { allowedOrigins, originCheck } from "./middleware/origin";

const app = new Hono<{ Bindings: Env }>();

app.use("*", secureHeaders());

app.use("*", (c, next) =>
  cors({
    origin: allowedOrigins(c.env),
    credentials: true,
  })(c, next),
);

app.use("*", originCheck());

app.get("/health", (c) => c.json({ ok: true }));

app.onError((_err, c) => c.json({ error: "internal_error" }, 500));

export default app;
