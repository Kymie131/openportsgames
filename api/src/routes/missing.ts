import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { and, desc, eq, lt, or, type SQL } from "drizzle-orm";

import * as schema from "../db/schema";
import { decodeCursor, encodeCursor, parseLimit } from "../lib/comments";
import {
  createMissingPortCommentSchema,
  createMissingPortSchema,
  updateMissingPortStatusSchema,
} from "../lib/missing";
import { verifyTurnstile } from "../lib/turnstile";
import { rateLimit } from "../middleware/ratelimit";
import {
  optionalUser,
  requireUser,
  toPublicUser,
  type SessionEnv,
} from "../middleware/session";

export const missing = new Hono<SessionEnv>();

const CREATE_WINDOW_MS = 10 * 60 * 1000;
const CREATE_MAX = 3;
const COMMENT_WINDOW_MS = 10 * 60 * 1000;
const COMMENT_MAX = 5;
const DELETE_WINDOW_MS = 10 * 60 * 1000;
const DELETE_MAX = 30;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function parseUuid(raw: string): string | null {
  return UUID_RE.test(raw) ? raw : null;
}

async function readJson(c: { req: { json: () => Promise<unknown> } }): Promise<unknown> {
  try {
    return await c.req.json();
  } catch {
    return undefined;
  }
}

function publicAuthor(row: { authorId: string; authorName: string; authorImage: string | null }) {
  return toPublicUser({
    id: row.authorId,
    name: row.authorName,
    image: row.authorImage,
  });
}

missing.get("/", optionalUser(), async (c) => {
  const user = c.get("user");
  const rawStatus = c.req.query("status") ?? "open";
  const status =
    rawStatus === "all"
      ? null
      : rawStatus === "done"
        ? "done"
        : rawStatus === "hidden" && user?.role === "admin"
          ? "hidden"
          : "open";

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const db = drizzle(c.env.DB, { schema });

  const conditions: SQL[] = [];
  if (status) conditions.push(eq(schema.missingPort.status, status));
  if (cursor) {
    const at = new Date(cursor.createdAt);
    conditions.push(
      or(
        lt(schema.missingPort.createdAt, at),
        and(eq(schema.missingPort.createdAt, at), lt(schema.missingPort.id, cursor.id)),
      ) as SQL,
    );
  }

  const rows = await db
    .select({
      id: schema.missingPort.id,
      title: schema.missingPort.title,
      game: schema.missingPort.game,
      platform: schema.missingPort.platform,
      url: schema.missingPort.url,
      notes: schema.missingPort.notes,
      status: schema.missingPort.status,
      createdAt: schema.missingPort.createdAt,
      authorId: schema.user.id,
      authorName: schema.user.name,
      authorImage: schema.user.image,
    })
    .from(schema.missingPort)
    .innerJoin(schema.user, eq(schema.missingPort.userId, schema.user.id))
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(desc(schema.missingPort.createdAt), desc(schema.missingPort.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);

  return c.json({
    items: page.map((row) => ({
      id: row.id,
      title: row.title,
      game: row.game,
      platform: row.platform,
      url: row.url,
      notes: row.notes,
      status: row.status,
      createdAt: row.createdAt.toISOString(),
      author: publicAuthor(row),
      mine: user ? row.authorId === user.id : false,
    })),
    nextCursor: hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null,
  });
});

missing.post(
  "/",
  requireUser(),
  rateLimit({ limit: CREATE_MAX, windowMs: CREATE_WINDOW_MS, scope: "missing-create" }),
  async (c) => {
    const parsed = createMissingPortSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const ip = c.req.header("cf-connecting-ip") ?? null;
    const verified = await verifyTurnstile(
      parsed.data.turnstileToken,
      c.env.TURNSTILE_SECRET,
      ip,
    );
    if (!verified) return c.json({ error: "turnstile_failed" }, 403);

    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });
    const now = new Date();
    const id = crypto.randomUUID();

    await db.insert(schema.missingPort).values({
      id,
      title: parsed.data.title,
      game: parsed.data.game,
      platform: parsed.data.platform,
      url: parsed.data.url ?? null,
      notes: parsed.data.notes ?? null,
      userId: user.id,
      status: "open",
      createdAt: now,
    });

    return c.json(
      {
        id,
        title: parsed.data.title,
        game: parsed.data.game,
        platform: parsed.data.platform,
        url: parsed.data.url ?? null,
        notes: parsed.data.notes ?? null,
        status: "open",
        createdAt: now.toISOString(),
        author: toPublicUser(user),
        mine: true,
      },
      201,
    );
  },
);

missing.get("/:id", optionalUser(), async (c) => {
  const id = parseUuid(c.req.param("id"));
  if (!id) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select({
      id: schema.missingPort.id,
      title: schema.missingPort.title,
      game: schema.missingPort.game,
      platform: schema.missingPort.platform,
      url: schema.missingPort.url,
      notes: schema.missingPort.notes,
      status: schema.missingPort.status,
      createdAt: schema.missingPort.createdAt,
      authorId: schema.user.id,
      authorName: schema.user.name,
      authorImage: schema.user.image,
    })
    .from(schema.missingPort)
    .innerJoin(schema.user, eq(schema.missingPort.userId, schema.user.id))
    .where(eq(schema.missingPort.id, id))
    .limit(1);

  const row = rows[0];
  if (!row || (row.status === "hidden" && user?.role !== "admin")) {
    return c.json({ error: "not_found" }, 404);
  }

  return c.json({
    id: row.id,
    title: row.title,
    game: row.game,
    platform: row.platform,
    url: row.url,
    notes: row.notes,
    status: row.status,
    createdAt: row.createdAt.toISOString(),
    author: publicAuthor(row),
    mine: user ? row.authorId === user.id : false,
  });
});

missing.get("/:id/comments", optionalUser(), async (c) => {
  const id = parseUuid(c.req.param("id"));
  if (!id) return c.json({ error: "not_found" }, 404);

  const rawCursor = c.req.query("cursor");
  const cursor = rawCursor === undefined ? null : decodeCursor(rawCursor);
  if (rawCursor !== undefined && !cursor) {
    return c.json({ error: "invalid_cursor" }, 400);
  }

  const limit = parseLimit(c.req.query("limit"));
  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  const exists = await db
    .select({ id: schema.missingPort.id })
    .from(schema.missingPort)
    .where(eq(schema.missingPort.id, id))
    .limit(1);
  if (!exists[0]) return c.json({ error: "not_found" }, 404);

  const conditions: SQL[] = [
    eq(schema.missingPortComment.missingPortId, id),
    eq(schema.missingPortComment.status, "visible"),
  ];
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
      createdAt: schema.missingPortComment.createdAt,
      userId: schema.missingPortComment.userId,
      parentId: schema.missingPortComment.parentId,
      authorId: schema.user.id,
      authorName: schema.user.name,
      authorImage: schema.user.image,
    })
    .from(schema.missingPortComment)
    .innerJoin(schema.user, eq(schema.missingPortComment.userId, schema.user.id))
    .where(and(...conditions))
    .orderBy(desc(schema.missingPortComment.createdAt), desc(schema.missingPortComment.id))
    .limit(limit + 1);

  const hasMore = rows.length > limit;
  const page = hasMore ? rows.slice(0, limit) : rows;
  const last = page.at(-1);

  return c.json({
    items: page.map((row) => ({
      id: row.id,
      body: row.body,
      createdAt: row.createdAt.toISOString(),
      parentId: row.parentId ?? null,
      author: publicAuthor(row),
      mine: user ? row.userId === user.id : false,
    })),
    nextCursor: hasMore && last ? encodeCursor(last.createdAt.getTime(), last.id) : null,
  });
});

missing.post(
  "/:id/comments",
  requireUser(),
  rateLimit({ limit: COMMENT_MAX, windowMs: COMMENT_WINDOW_MS, scope: "missing-comment" }),
  async (c) => {
    const id = parseUuid(c.req.param("id"));
    if (!id) return c.json({ error: "not_found" }, 404);

    const parsed = createMissingPortCommentSchema.safeParse(await readJson(c));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const ip = c.req.header("cf-connecting-ip") ?? null;
    const verified = await verifyTurnstile(
      parsed.data.turnstileToken,
      c.env.TURNSTILE_SECRET,
      ip,
    );
    if (!verified) return c.json({ error: "turnstile_failed" }, 403);

    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });

    const exists = await db
      .select({ id: schema.missingPort.id })
      .from(schema.missingPort)
      .where(eq(schema.missingPort.id, id))
      .limit(1);
    if (!exists[0]) return c.json({ error: "not_found" }, 404);

    let parentId = parsed.data.parentId ?? null;
    if (parentId) {
      const parentRows = await db
        .select({
          id: schema.missingPortComment.id,
          missingPortId: schema.missingPortComment.missingPortId,
          parentId: schema.missingPortComment.parentId,
          status: schema.missingPortComment.status,
        })
        .from(schema.missingPortComment)
        .where(eq(schema.missingPortComment.id, parentId))
        .limit(1);
      const parent = parentRows[0];
      if (!parent || parent.missingPortId !== id || parent.status !== "visible") {
        return c.json({ error: "invalid_parent" }, 400);
      }
      parentId = parent.parentId ?? parent.id;
    }

    const now = new Date();
    const commentId = crypto.randomUUID();
    await db.insert(schema.missingPortComment).values({
      id: commentId,
      missingPortId: id,
      userId: user.id,
      parentId,
      body: parsed.data.body,
      status: "visible",
      createdAt: now,
    });

    return c.json(
      {
        id: commentId,
        body: parsed.data.body,
        createdAt: now.toISOString(),
        parentId,
        author: toPublicUser(user),
        mine: true,
      },
      201,
    );
  },
);

missing.delete(
  "/:id/comments/:commentId",
  requireUser(),
  rateLimit({ limit: DELETE_MAX, windowMs: DELETE_WINDOW_MS, scope: "missing-comment-delete" }),
  async (c) => {
    const id = parseUuid(c.req.param("id"));
    const commentId = parseUuid(c.req.param("commentId"));
    if (!id || !commentId) return c.json({ error: "not_found" }, 404);

    const user = c.get("user");
    const db = drizzle(c.env.DB, { schema });
    const rows = await db
      .select({
        userId: schema.missingPortComment.userId,
        missingPortId: schema.missingPortComment.missingPortId,
      })
      .from(schema.missingPortComment)
      .where(eq(schema.missingPortComment.id, commentId))
      .limit(1);

    const existing = rows[0];
    if (!existing || existing.missingPortId !== id) {
      return c.json({ error: "not_found" }, 404);
    }
    if (existing.userId !== user.id && user.role !== "admin") {
      return c.json({ error: "forbidden" }, 403);
    }

    await db
      .delete(schema.missingPortComment)
      .where(eq(schema.missingPortComment.parentId, commentId));
    await db
      .delete(schema.missingPortComment)
      .where(eq(schema.missingPortComment.id, commentId));
    return c.json({ ok: true });
  },
);

missing.patch("/:id/status", requireUser(), async (c) => {
  const user = c.get("user");
  if (user.role !== "admin") return c.json({ error: "forbidden" }, 403);

  const id = parseUuid(c.req.param("id"));
  if (!id) return c.json({ error: "not_found" }, 404);

  const parsed = updateMissingPortStatusSchema.safeParse(await readJson(c));
  if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

  const db = drizzle(c.env.DB, { schema });
  const existing = await db
    .select({ id: schema.missingPort.id })
    .from(schema.missingPort)
    .where(eq(schema.missingPort.id, id))
    .limit(1);
  if (!existing[0]) return c.json({ error: "not_found" }, 404);

  await db
    .update(schema.missingPort)
    .set({ status: parsed.data.status })
    .where(eq(schema.missingPort.id, id));

  return c.json({ ok: true, status: parsed.data.status });
});
