import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { alias } from "drizzle-orm/sqlite-core";
import { and, desc, eq, gte, like, lte, lt, or, sql, type SQL } from "drizzle-orm";
import { z } from "zod";

import * as schema from "../db/schema";
import { decodeCursor, encodeCursor, parseLimit } from "../lib/comments";
import {
  auditFilterSchema,
  endOfDay,
  recordModeration,
  reportFilterSchema,
  updateCommentModerationSchema,
  updateReportSchema,
} from "../lib/moderation";
import { requireAdmin, toPublicUser, type SessionEnv } from "../middleware/session";
import { rateLimit } from "../middleware/ratelimit";

export const admin = new Hono<SessionEnv>();

admin.use("*", requireAdmin());

const commentAuthor = alias(schema.user, "comment_author");
const reporter = alias(schema.user, "reporter");
const resolver = alias(schema.user, "report_resolver");
const missingCommentAuthor = alias(schema.user, "missing_comment_author");
const auditActor = alias(schema.user, "moderation_actor");

const updateRoleSchema = z.object({ role: z.enum(["user", "admin"]) });

async function readJson(c: { req: { json: () => Promise<unknown> } }): Promise<unknown> {
  try {
    return await c.req.json();
  } catch {
    return undefined;
  }
}

admin.get("/reports", async (c) => {
  const parsedFilter = reportFilterSchema.safeParse({
    status: c.req.query("status") ?? undefined,
    reason: c.req.query("reason") ?? undefined,
    from: c.req.query("from") ?? undefined,
    to: c.req.query("to") ?? undefined,
  });
  if (!parsedFilter.success) return c.json({ error: "invalid_filters" }, 400);

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });
  const filter = parsedFilter.data;

  const conditions: SQL[] = [];
  if (filter.status !== "all") {
    conditions.push(eq(schema.report.status, filter.status));
  }
  if (filter.reason) {
    conditions.push(like(schema.report.reason, `%${filter.reason}%`));
  }
  if (filter.from) {
    conditions.push(gte(schema.report.createdAt, filter.from));
  }
  if (filter.to) {
    conditions.push(lte(schema.report.createdAt, endOfDay(filter.to)));
  }
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
      status: schema.report.status,
      note: schema.report.note,
      resolvedAt: schema.report.resolvedAt,
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
      resolverId: resolver.id,
      resolverName: resolver.name,
      resolverImage: resolver.image,
    })
    .from(schema.report)
    .innerJoin(schema.comment, eq(schema.report.commentId, schema.comment.id))
    .innerJoin(commentAuthor, eq(schema.comment.userId, commentAuthor.id))
    .innerJoin(reporter, eq(schema.report.userId, reporter.id))
    .leftJoin(resolver, eq(schema.report.resolvedBy, resolver.id))
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(schema.report.createdAt), desc(schema.report.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;

  const items = page.map((row) => ({
    id: row.id,
    reason: row.reason,
    status: row.status,
    note: row.note ?? null,
    resolvedAt: row.resolvedAt ? row.resolvedAt.toISOString() : null,
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
    resolvedBy: row.resolverId
      ? toPublicUser({
          id: row.resolverId,
          name: row.resolverName ?? "",
          image: row.resolverImage,
        })
      : null,
  }));

  const last = page.at(-1);
  const nextCursor = hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null;

  return c.json({ items, nextCursor });
});

admin.patch(
  "/reports/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-reports" }),
  async (c) => {
    const parsed = updateReportSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const existingRows = await db
      .select({
        id: schema.report.id,
        note: schema.report.note,
      })
      .from(schema.report)
      .where(eq(schema.report.id, c.req.param("id")))
      .limit(1);
    const existing = existingRows[0];
    if (!existing) return c.json({ error: "not_found" }, 404);

    const user = c.get("user");
    const now = new Date();
    const note = parsed.data.note !== undefined ? parsed.data.note : existing.note;
    const resolved = parsed.data.status !== "open";

    const rows = await db
      .update(schema.report)
      .set({
        status: parsed.data.status,
        note,
        resolvedBy: resolved ? user.id : null,
        resolvedAt: resolved ? now : null,
      })
      .where(eq(schema.report.id, existing.id))
      .returning({ id: schema.report.id, status: schema.report.status });

    const updated = rows[0];
    if (!updated) return c.json({ error: "not_found" }, 404);

    const action =
      parsed.data.status === "dismissed"
        ? "report.dismiss"
        : parsed.data.status === "resolved"
          ? "report.resolve"
          : "report.reopen";

    await recordModeration(db, {
      actorId: user.id,
      action,
      targetType: "report",
      targetId: updated.id,
      note,
      createdAt: now,
    });

    return c.json({
      id: updated.id,
      status: updated.status,
      note,
      resolvedAt: resolved ? now.toISOString() : null,
      resolvedBy: resolved ? toPublicUser(user) : null,
    });
  },
);

admin.delete(
  "/reports/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-reports" }),
  async (c) => {
    const db = drizzle(c.env.DB, { schema });
    const user = c.get("user");
    const now = new Date();
    const rows = await db
      .update(schema.report)
      .set({ status: "dismissed", resolvedBy: user.id, resolvedAt: now })
      .where(eq(schema.report.id, c.req.param("id")))
      .returning({ id: schema.report.id });

    if (!rows[0]) return c.json({ error: "not_found" }, 404);

    await recordModeration(db, {
      actorId: user.id,
      action: "report.dismiss",
      targetType: "report",
      targetId: rows[0].id,
      createdAt: now,
    });

    return c.json({ ok: true, status: "dismissed" });
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

admin.get("/users/:id", async (c) => {
  const id = c.req.param("id");
  const db = drizzle(c.env.DB, { schema });

  const userRows = await db
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
    .where(eq(schema.user.id, id))
    .limit(1);

  const user = userRows[0];
  if (!user) return c.json({ error: "not_found" }, 404);

  const [ratings, comments, missing] = await Promise.all([
    db
      .select({
        portId: schema.rating.portId,
        stars: schema.rating.stars,
        updatedAt: schema.rating.updatedAt,
      })
      .from(schema.rating)
      .where(eq(schema.rating.userId, id))
      .orderBy(desc(schema.rating.updatedAt))
      .limit(100),
    db
      .select({
        id: schema.comment.id,
        portId: schema.comment.portId,
        body: schema.comment.body,
        sentiment: schema.comment.sentiment,
        status: schema.comment.status,
        createdAt: schema.comment.createdAt,
      })
      .from(schema.comment)
      .where(eq(schema.comment.userId, id))
      .orderBy(desc(schema.comment.createdAt))
      .limit(100),
    db
      .select({
        id: schema.missingPort.id,
        title: schema.missingPort.title,
        status: schema.missingPort.status,
        createdAt: schema.missingPort.createdAt,
      })
      .from(schema.missingPort)
      .where(eq(schema.missingPort.userId, id))
      .orderBy(desc(schema.missingPort.createdAt))
      .limit(100),
  ]);

  return c.json({
    user: {
      id: user.id,
      name: user.name,
      image: user.image ?? null,
      role: user.role,
      createdAt: user.createdAt.toISOString(),
      ratings: Number(user.ratings ?? 0),
      comments: Number(user.comments ?? 0),
    },
    ratings: ratings.map((row) => ({
      portId: row.portId,
      stars: row.stars,
      updatedAt: row.updatedAt.toISOString(),
    })),
    comments: comments.map((row) => ({
      id: row.id,
      portId: row.portId,
      body: row.body,
      sentiment: row.sentiment ?? null,
      status: row.status,
      createdAt: row.createdAt.toISOString(),
    })),
    missing: missing.map((row) => ({
      id: row.id,
      title: row.title,
      status: row.status,
      createdAt: row.createdAt.toISOString(),
    })),
  });
});

admin.patch(
  "/missing-comments/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-moderation" }),
  async (c) => {
    const parsed = updateCommentModerationSchema.safeParse(await readJson(c));
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

    await recordModeration(db, {
      actorId: c.get("user").id,
      action: parsed.data.status === "hidden" ? "missing_comment.hide" : "missing_comment.show",
      targetType: "missing_comment",
      targetId: updated.id,
      note: parsed.data.note,
    });

    return c.json(updated);
  },
);

admin.patch(
  "/comments/:id",
  rateLimit({ limit: 60, windowMs: 10 * 60 * 1000, scope: "admin-moderation" }),
  async (c) => {
    const parsed = updateCommentModerationSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .update(schema.comment)
      .set({ status: parsed.data.status })
      .where(eq(schema.comment.id, c.req.param("id")))
      .returning({ id: schema.comment.id, status: schema.comment.status });

    const updated = rows[0];
    if (!updated) return c.json({ error: "not_found" }, 404);

    await recordModeration(db, {
      actorId: c.get("user").id,
      action: parsed.data.status === "hidden" ? "comment.hide" : "comment.show",
      targetType: "comment",
      targetId: updated.id,
      note: parsed.data.note,
    });

    return c.json(updated);
  },
);

admin.get("/audit", async (c) => {
  const parsedFilter = auditFilterSchema.safeParse({
    action: c.req.query("action") ?? undefined,
    targetType: c.req.query("targetType") ?? undefined,
  });
  if (!parsedFilter.success) return c.json({ error: "invalid_filters" }, 400);

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });
  const filter = parsedFilter.data;

  const conditions: SQL[] = [];
  if (filter.action) conditions.push(eq(schema.moderationLog.action, filter.action));
  if (filter.targetType) {
    conditions.push(eq(schema.moderationLog.targetType, filter.targetType));
  }
  if (cursor) {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.moderationLog.createdAt, at),
        and(
          eq(schema.moderationLog.createdAt, at),
          lt(schema.moderationLog.id, cursor.id),
        ),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.moderationLog.id,
      action: schema.moderationLog.action,
      targetType: schema.moderationLog.targetType,
      targetId: schema.moderationLog.targetId,
      note: schema.moderationLog.note,
      createdAt: schema.moderationLog.createdAt,
      actorId: auditActor.id,
      actorName: auditActor.name,
      actorImage: auditActor.image,
    })
    .from(schema.moderationLog)
    .leftJoin(auditActor, eq(schema.moderationLog.actorId, auditActor.id))
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(schema.moderationLog.createdAt), desc(schema.moderationLog.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);

  return c.json({
    items: page.map((row) => ({
      id: row.id,
      action: row.action,
      targetType: row.targetType,
      targetId: row.targetId,
      note: row.note ?? null,
      createdAt: row.createdAt.toISOString(),
      actor: row.actorId
        ? toPublicUser({
            id: row.actorId,
            name: row.actorName ?? "",
            image: row.actorImage,
          })
        : null,
    })),
    nextCursor:
      hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null,
  });
});

admin.get("/users", async (c) => {
  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const rawRole = c.req.query("role");
  const role = rawRole === "admin" || rawRole === "user" ? rawRole : null;
  const rawSort = c.req.query("sort") ?? "newest";
  const sort =
    rawSort === "ratings" || rawSort === "comments" || rawSort === "name"
      ? rawSort
      : "newest";

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });

  const conditions: SQL[] = [];
  if (role) conditions.push(eq(schema.user.role, role));
  if (cursor && sort === "newest") {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.user.createdAt, at),
        and(eq(schema.user.createdAt, at), lt(schema.user.id, cursor.id)),
      ) as SQL,
    );
  }

  const ratingsCount = sql<number>`(select count(*) from ${schema.rating} where ${schema.rating.userId} = ${schema.user.id})`;
  const commentsCount = sql<number>`(select count(*) from ${schema.comment} where ${schema.comment.userId} = ${schema.user.id})`;

  const order =
    sort === "ratings"
      ? [desc(ratingsCount), desc(schema.user.createdAt)]
      : sort === "comments"
        ? [desc(commentsCount), desc(schema.user.createdAt)]
        : sort === "name"
          ? [schema.user.name, desc(schema.user.createdAt)]
          : [desc(schema.user.createdAt), desc(schema.user.id)];

  const rows = await db
    .select({
      id: schema.user.id,
      name: schema.user.name,
      image: schema.user.image,
      role: schema.user.role,
      createdAt: schema.user.createdAt,
      ratings: ratingsCount,
      comments: commentsCount,
    })
    .from(schema.user)
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(...order)
    .limit(sort === "newest" ? limit + 1 : 200);

  const hasMore = sort === "newest" && rows.length > limit;
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
    nextCursor:
      hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null,
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

    await recordModeration(db, {
      actorId: c.get("user").id,
      action: "user.role",
      targetType: "user",
      targetId,
      note: `role:${parsed.data.role}`,
    });

    return c.json({ id: targetId, role: parsed.data.role });
  },
);

admin.delete(
  "/users/:id",
  rateLimit({ limit: 30, windowMs: 10 * 60 * 1000, scope: "admin-delete" }),
  async (c) => {
    const targetId = c.req.param("id");
    const actor = c.get("user");
    if (targetId === actor.id) return c.json({ error: "cannot_delete_self" }, 400);

    const db = drizzle(c.env.DB, { schema });
    const targetRows = await db
      .select({ id: schema.user.id, role: schema.user.role })
      .from(schema.user)
      .where(eq(schema.user.id, targetId))
      .limit(1);
    const target = targetRows[0];
    if (!target) return c.json({ error: "not_found" }, 404);

    if (target.role === "admin") {
      const admins = await db
        .select({ count: sql<number>`count(*)` })
        .from(schema.user)
        .where(eq(schema.user.role, "admin"));
      if (Number(admins[0]?.count ?? 0) <= 1) {
        return c.json({ error: "last_admin" }, 409);
      }
    }

    const rows = await db
      .delete(schema.user)
      .where(eq(schema.user.id, targetId))
      .returning({ id: schema.user.id });

    if (!rows[0]) return c.json({ error: "not_found" }, 404);

    await recordModeration(db, {
      actorId: actor.id,
      action: "user.delete",
      targetType: "user",
      targetId,
    });

    return c.json({ ok: true });
  },
);

