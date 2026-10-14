import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { and, desc, eq, lt, or, type SQL } from "drizzle-orm";

import * as schema from "../db/schema";
import {
  createCommentSchema,
  createReportSchema,
  decodeCursor,
  encodeCursor,
  parseLimit,
} from "../lib/comments";
import { isValidPortId } from "../lib/ports";
import { portIdSchema } from "../lib/ratings";
import { verifyTurnstile } from "../lib/turnstile";
import { rateLimit } from "../middleware/ratelimit";
import { optionalUser, requireUser, toPublicUser, type SessionEnv } from "../middleware/session";

export const comments = new Hono<SessionEnv>();

const COMMENT_WINDOW_MS = 10 * 60 * 1000;
const COMMENT_MAX = 5;
const REPORT_WINDOW_MS = 60 * 60 * 1000;
const REPORT_MAX = 10;
const DELETE_WINDOW_MS = 10 * 60 * 1000;
const DELETE_MAX = 30;

function resolvePortId(raw: string): string | null {
  const parsed = portIdSchema.safeParse(raw);
  if (!parsed.success || !isValidPortId(parsed.data)) return null;
  return parsed.data;
}

async function readJson(c: { req: { json: () => Promise<unknown> } }): Promise<unknown> {
  try {
    return await c.req.json();
  } catch {
    return undefined;
  }
}

comments.get("/:portId", optionalUser(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  const conditions: SQL[] = [
    eq(schema.comment.portId, portId),
    eq(schema.comment.status, "visible"),
  ];
  if (cursor) {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.comment.createdAt, at),
        and(eq(schema.comment.createdAt, at), lt(schema.comment.id, cursor.id)),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.comment.id,
      body: schema.comment.body,
      createdAt: schema.comment.createdAt,
      userId: schema.comment.userId,
      authorId: schema.user.id,
      authorName: schema.user.name,
      authorImage: schema.user.image,
    })
    .from(schema.comment)
    .innerJoin(schema.user, eq(schema.comment.userId, schema.user.id))
    .where(and(...conditions))
    .orderBy(desc(schema.comment.createdAt), desc(schema.comment.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;

  const items = page.map((row) => ({
    id: row.id,
    body: row.body,
    createdAt: row.createdAt.toISOString(),
    author: toPublicUser({
      id: row.authorId,
      name: row.authorName,
      image: row.authorImage,
    }),
    mine: user ? row.userId === user.id : false,
  }));

  const last = page.at(-1);
  const nextCursor = hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null;

  return c.json({ items, nextCursor });
});

comments.post(
  "/:portId",
  requireUser(),
  rateLimit({ limit: COMMENT_MAX, windowMs: COMMENT_WINDOW_MS, scope: "comment" }),
  async (c) => {
    const portId = resolvePortId(c.req.param("portId"));
    if (!portId) return c.json({ error: "not_found" }, 404);

    const parsed = createCommentSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const ip = c.req.header("cf-connecting-ip") ?? null;
    const verified = await verifyTurnstile(parsed.data.turnstileToken, c.env.TURNSTILE_SECRET, ip);
    if (!verified) return c.json({ error: "turnstile_failed" }, 403);

    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });
    const now = new Date();
    const id = crypto.randomUUID();

    await db.insert(schema.comment).values({
      id,
      userId: user.id,
      portId,
      body: parsed.data.body,
      status: "visible",
      createdAt: now,
    });

    return c.json(
      {
        id,
        body: parsed.data.body,
        createdAt: now.toISOString(),
        author: toPublicUser(user),
        mine: true,
      },
      201,
    );
  },
);

comments.delete(
  "/:id",
  requireUser(),
  rateLimit({ limit: DELETE_MAX, windowMs: DELETE_WINDOW_MS, scope: "comment-delete" }),
  async (c) => {
    const id = c.req.param("id");
    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });

    const rows = await db
      .select({ userId: schema.comment.userId })
      .from(schema.comment)
      .where(eq(schema.comment.id, id))
      .limit(1);

    const existing = rows[0];
    if (!existing) return c.json({ error: "not_found" }, 404);
    if (existing.userId !== user.id && user.role !== "admin") {
      return c.json({ error: "forbidden" }, 403);
    }

    await db.delete(schema.comment).where(eq(schema.comment.id, id));
    return c.json({ ok: true });
  },
);

comments.post(
  "/:id/report",
  requireUser(),
  rateLimit({ limit: REPORT_MAX, windowMs: REPORT_WINDOW_MS, scope: "report" }),
  async (c) => {
    const parsed = createReportSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const commentId = c.req.param("id");
    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });

    const existing = await db
      .select({ id: schema.comment.id })
      .from(schema.comment)
      .where(eq(schema.comment.id, commentId))
      .limit(1);
    if (!existing[0]) return c.json({ error: "not_found" }, 404);

    await db
      .insert(schema.report)
      .values({
        id: crypto.randomUUID(),
        commentId,
        userId: user.id,
        reason: parsed.data.reason,
        createdAt: new Date(),
      })
      .onConflictDoNothing({
        target: [schema.report.commentId, schema.report.userId],
      });

    return c.json({ ok: true }, 201);
  },
);
