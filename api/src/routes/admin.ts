import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { alias } from "drizzle-orm/sqlite-core";
import { and, desc, eq, lt, or, sql, type SQL } from "drizzle-orm";
import { z } from "zod";

import * as schema from "../db/schema";
import { decodeCursor, encodeCursor, parseLimit, updateCommentStatusSchema } from "../lib/comments";
import { requireAdmin, toPublicUser, type SessionEnv } from "../middleware/session";
import { rateLimit } from "../middleware/ratelimit";

export const admin = new Hono<SessionEnv>();

admin.use("*", requireAdmin());

const commentAuthor = alias(schema.user, "comment_author");
const reporter = alias(schema.user, "reporter");
const missingCommentAuthor = alias(schema.user, "missing_comment_author");

const updateRoleSchema = z.object({ role: z.enum(["user", "admin"]) });

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

admin.delete(
  "/reports/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-reports" }),
  async (c) => {
    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .delete(schema.report)
      .where(eq(schema.report.id, c.req.param("id")))
      .returning({ id: schema.report.id });

    if (!rows[0]) return c.json({ error: "not_found" }, 404);
    return c.json({ ok: true });
  },
);

admin.get("/missing-comments", async (c) => {
  const rawStatus = c.req.query("status") ?? "all";
  const status =
    rawStatus === "visible" || rawStatus === "hidden" ? rawStatus : null;

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });

  const conditions: SQL[] = [];
  if (status) conditions.push(eq(schema.missingPortComment.status, status));
  if (cursor) {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.missingPortComment.createdAt, at),
        and(
          eq(schema.missingPortComment.createdAt, at),
          lt(schema.missingPortComment.id, cursor.id),
        ),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.missingPortComment.id,
      body: schema.missingPortComment.body,
      status: schema.missingPortComment.status,
      createdAt: schema.missingPortComment.createdAt,
      parentId: schema.missingPortComment.parentId,
      authorId: missingCommentAuthor.id,
      authorName: missingCommentAuthor.name,
      authorImage: missingCommentAuthor.image,
      postId: schema.missingPort.id,
      postTitle: schema.missingPort.title,
      postStatus: schema.missingPort.status,
    })
    .from(schema.missingPortComment)
    .innerJoin(
      missingCommentAuthor,
      eq(schema.missingPortComment.userId, missingCommentAuthor.id),
    )
    .innerJoin(
      schema.missingPort,
      eq(schema.missingPortComment.missingPortId, schema.missingPort.id),
    )
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(schema.missingPortComment.createdAt), desc(schema.missingPortComment.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);
  const nextCursor = hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null;

  return c.json({
    items: page.map((row) => ({
      id: row.id,
      body: row.body,
      status: row.status,
      createdAt: row.createdAt.toISOString(),
      parentId: row.parentId ?? null,
      author: toPublicUser({
        id: row.authorId,
        name: row.authorName,
        image: row.authorImage,
      }),
      post: {
        id: row.postId,
        title: row.postTitle,
        status: row.postStatus,
      },
    })),
    nextCursor,
  });
});

admin.patch(
  "/missing-comments/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-moderation" }),
  async (c) => {
    const parsed = updateCommentStatusSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .update(schema.missingPortComment)
      .set({ status: parsed.data.status })
      .where(eq(schema.missingPortComment.id, c.req.param("id")))
      .returning({
        id: schema.missingPortComment.id,
        status: schema.missingPortComment.status,
      });

    const updated = rows[0];
    if (!updated) return c.json({ error: "not_found" }, 404);
    return c.json(updated);
  },
);

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

admin.get("/users", async (c) => {
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
        lt(schema.user.createdAt, at),
        and(eq(schema.user.createdAt, at), lt(schema.user.id, cursor.id)),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.user.id,
      name: schema.user.name,
      image: schema.user.image,
      role: schema.user.role,
      createdAt: schema.user.createdAt,
      ratings: sql<number>`(select count(*) from ${schema.rating} where ${schema.rating.userId} = ${schema.user.id})`,
      comments: sql<number>`(select count(*) from ${schema.comment} where ${schema.comment.userId} = ${schema.user.id})`,
    })
    .from(schema.user)
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(schema.user.createdAt), desc(schema.user.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);

  return c.json({
    items: page.map((row) => ({
      id: row.id,
      name: row.name,
      image: row.image ?? null,
      role: row.role,
      createdAt: row.createdAt.toISOString(),
      ratings: Number(row.ratings ?? 0),
      comments: Number(row.comments ?? 0),
    })),
    nextCursor: hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null,
  });
});

admin.patch(
  "/users/:id/role",
  rateLimit({ limit: 30, windowMs: 10 * 60 * 1000, scope: "admin-role" }),
  async (c) => {
    const parsed = updateRoleSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const targetId = c.req.param("id");
    if (targetId === c.get("user").id) return c.json({ error: "cannot_change_self" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const targetRows = await db
      .select({ id: schema.user.id, role: schema.user.role })
      .from(schema.user)
      .where(eq(schema.user.id, targetId))
      .limit(1);
    const target = targetRows[0];
    if (!target) return c.json({ error: "not_found" }, 404);

    if (target.role === "admin" && parsed.data.role === "user") {
      const admins = await db
        .select({ count: sql<number>`count(*)` })
        .from(schema.user)
        .where(eq(schema.user.role, "admin"));
      if (Number(admins[0]?.count ?? 0) <= 1) {
        return c.json({ error: "last_admin" }, 409);
      }
    }

    await db
      .update(schema.user)
      .set({ role: parsed.data.role })
      .where(eq(schema.user.id, targetId));

    return c.json({ id: targetId, role: parsed.data.role });
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

