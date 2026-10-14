import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { alias } from "drizzle-orm/sqlite-core";
import { and, desc, eq, lt, or, type SQL } from "drizzle-orm";

import * as schema from "../db/schema";
import { decodeCursor, encodeCursor, parseLimit, updateCommentStatusSchema } from "../lib/comments";
import { requireAdmin, toPublicUser, type SessionEnv } from "../middleware/session";
import { rateLimit } from "../middleware/ratelimit";

export const admin = new Hono<SessionEnv>();

admin.use("*", requireAdmin());

const commentAuthor = alias(schema.user, "comment_author");
const reporter = alias(schema.user, "reporter");

async function readJson(c: { req: { json: () => Promise<unknown> } }): Promise<unknown> {
  try {
    return await c.req.json();
  } catch {
    return undefined;
  }
}

admin.get("/reports", async (c) => {
  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });

  const conditions: SQL[] = [];
  if (cursor) {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.report.createdAt, at),
        and(eq(schema.report.createdAt, at), lt(schema.report.id, cursor.id)),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.report.id,
      reason: schema.report.reason,
      createdAt: schema.report.createdAt,
      commentId: schema.comment.id,
      commentBody: schema.comment.body,
      commentStatus: schema.comment.status,
      authorId: commentAuthor.id,
      authorName: commentAuthor.name,
      authorImage: commentAuthor.image,
      reporterId: reporter.id,
      reporterName: reporter.name,
      reporterImage: reporter.image,
    })
    .from(schema.report)
    .innerJoin(schema.comment, eq(schema.report.commentId, schema.comment.id))
    .innerJoin(commentAuthor, eq(schema.comment.userId, commentAuthor.id))
    .innerJoin(reporter, eq(schema.report.userId, reporter.id))
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(schema.report.createdAt), desc(schema.report.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;

  const items = page.map((row) => ({
    id: row.id,
    reason: row.reason,
    createdAt: row.createdAt.toISOString(),
    comment: {
      id: row.commentId,
      body: row.commentBody,
      status: row.commentStatus,
      author: toPublicUser({
        id: row.authorId,
        name: row.authorName,
        image: row.authorImage,
      }),
    },
    reporter: toPublicUser({
      id: row.reporterId,
      name: row.reporterName,
      image: row.reporterImage,
    }),
  }));

  const last = page.at(-1);
  const nextCursor = hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null;

  return c.json({ items, nextCursor });
});

admin.patch(
  "/comments/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-moderation" }),
  async (c) => {
    const parsed = updateCommentStatusSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .update(schema.comment)
      .set({ status: parsed.data.status })
      .where(eq(schema.comment.id, c.req.param("id")))
      .returning({ id: schema.comment.id, status: schema.comment.status });

    const updated = rows[0];
    if (!updated) return c.json({ error: "not_found" }, 404);
    return c.json(updated);
  },
);

admin.delete(
  "/users/:id",
  rateLimit({ limit: 30, windowMs: 10 * 60 * 1000, scope: "admin-delete" }),
  async (c) => {
    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .delete(schema.user)
      .where(eq(schema.user.id, c.req.param("id")))
      .returning({ id: schema.user.id });

    if (!rows[0]) return c.json({ error: "not_found" }, 404);
    return c.json({ ok: true });
  },
);
