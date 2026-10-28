import { relations, sql } from "drizzle-orm";
import {
  check,
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
  unique,
  type AnySQLiteColumn,
} from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).default(false).notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  role: text("role").default("user").notNull(),
});

export const session = sqliteTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = sqliteTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", {
      mode: "timestamp_ms",
    }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", {
      mode: "timestamp_ms",
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = sqliteTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const rating = sqliteTable(
  "rating",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    portId: text("port_id").notNull(),
    stars: integer("stars").notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.userId, table.portId] }),
    index("rating_portId_idx").on(table.portId),
    check("rating_stars_check", sql`${table.stars} between 1 and 5`),
  ],
);

export const comment = sqliteTable(
  "comment",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    portId: text("port_id").notNull(),
    parentId: text("parent_id").references((): AnySQLiteColumn => comment.id, {
      onDelete: "cascade",
    }),
    body: text("body").notNull(),
    status: text("status", { enum: ["visible", "hidden"] }).default("visible").notNull(),
    sentiment: text("sentiment", { enum: ["positive", "negative"] }),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("comment_portId_status_createdAt_idx").on(
      table.portId,
      table.status,
      table.createdAt,
    ),
    index("comment_parentId_idx").on(table.parentId),
    check("comment_status_check", sql`${table.status} in ('visible', 'hidden')`),
    check(
      "comment_sentiment_check",
      sql`${table.sentiment} is null or ${table.sentiment} in ('positive', 'negative')`,
    ),
  ],
);

export const report = sqliteTable(
  "report",
  {
    id: text("id").primaryKey(),
    commentId: text("comment_id")
      .notNull()
      .references(() => comment.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    reason: text("reason").notNull(),
    status: text("status", { enum: ["open", "dismissed", "resolved"] })
      .default("open")
      .notNull(),
    note: text("note"),
    resolvedBy: text("resolved_by").references(() => user.id, {
      onDelete: "set null",
    }),
    resolvedAt: integer("resolved_at", { mode: "timestamp_ms" }),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    unique("report_commentId_userId_unique").on(table.commentId, table.userId),
    index("report_createdAt_idx").on(table.createdAt),
    index("report_status_createdAt_idx").on(table.status, table.createdAt),
    check(
      "report_status_check",
      sql`${table.status} in ('open', 'dismissed', 'resolved')`,
    ),
  ],
);

export const MODERATION_ACTIONS = [
  "report.dismiss",
  "report.resolve",
  "report.reopen",
  "comment.hide",
  "comment.show",
  "comment.delete",
  "missing_comment.hide",
  "missing_comment.show",
  "missing_comment.delete",
  "missing_port.status",
  "user.role",
  "user.delete",
] as const;

export const MODERATION_TARGET_TYPES = [
  "report",
  "comment",
  "missing_comment",
  "missing_port",
  "user",
] as const;

export type ModerationAction = (typeof MODERATION_ACTIONS)[number];
export type ModerationTargetType = (typeof MODERATION_TARGET_TYPES)[number];

export const moderationLog = sqliteTable(
  "moderation_log",
  {
    id: text("id").primaryKey(),
    actorId: text("actor_id").references(() => user.id, { onDelete: "set null" }),
    action: text("action", { enum: [...MODERATION_ACTIONS] }).notNull(),
    targetType: text("target_type", { enum: [...MODERATION_TARGET_TYPES] }).notNull(),
    targetId: text("target_id").notNull(),
    note: text("note"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("moderation_log_createdAt_idx").on(table.createdAt),
    index("moderation_log_action_createdAt_idx").on(table.action, table.createdAt),
    index("moderation_log_actorId_idx").on(table.actorId),
    check(
      "moderation_log_action_check",
      sql`${table.action} in ('report.dismiss', 'report.resolve', 'report.reopen', 'comment.hide', 'comment.show', 'comment.delete', 'missing_comment.hide', 'missing_comment.show', 'missing_comment.delete', 'missing_port.status', 'user.role', 'user.delete')`,
    ),
    check(
      "moderation_log_target_type_check",
      sql`${table.targetType} in ('report', 'comment', 'missing_comment', 'missing_port', 'user')`,
    ),
  ],
);

export const missingPort = sqliteTable(
  "missing_port",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    game: text("game").notNull(),
    platform: text("platform").notNull(),
    url: text("url"),
    notes: text("notes"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    status: text("status", { enum: ["open", "done", "hidden"] })
      .default("open")
      .notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("missing_port_status_createdAt_idx").on(table.status, table.createdAt),
    check("missing_port_status_check", sql`${table.status} in ('open', 'done', 'hidden')`),
  ],
);

export const missingPortComment = sqliteTable(
  "missing_port_comment",
  {
    id: text("id").primaryKey(),
    missingPortId: text("missing_port_id")
      .notNull()
      .references(() => missingPort.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    parentId: text("parent_id").references((): AnySQLiteColumn => missingPortComment.id, {
      onDelete: "cascade",
    }),
    body: text("body").notNull(),
    status: text("status", { enum: ["visible", "hidden"] }).default("visible").notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("missing_port_comment_missingId_status_createdAt_idx").on(
      table.missingPortId,
      table.status,
      table.createdAt,
    ),
    index("missing_port_comment_parentId_idx").on(table.parentId),
    check(
      "missing_port_comment_status_check",
      sql`${table.status} in ('visible', 'hidden')`,
    ),
  ],
);

export const rateLimit = sqliteTable("rate_limit", {
  key: text("key").primaryKey(),
  windowStart: integer("window_start").notNull(),
  count: integer("count").notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  comments: many(comment),
  reports: many(report),
  missingPorts: many(missingPort),
  missingPortComments: many(missingPortComment),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const commentRelations = relations(comment, ({ one, many }) => ({
  user: one(user, {
    fields: [comment.userId],
    references: [user.id],
  }),
  reports: many(report),
}));

export const reportRelations = relations(report, ({ one }) => ({
  comment: one(comment, {
    fields: [report.commentId],
    references: [comment.id],
  }),
  user: one(user, {
    fields: [report.userId],
    references: [user.id],
  }),
}));

export const missingPortRelations = relations(missingPort, ({ one, many }) => ({
  user: one(user, {
    fields: [missingPort.userId],
    references: [user.id],
  }),
  comments: many(missingPortComment),
}));

export const missingPortCommentRelations = relations(missingPortComment, ({ one }) => ({
  missingPort: one(missingPort, {
    fields: [missingPortComment.missingPortId],
    references: [missingPort.id],
  }),
  user: one(user, {
    fields: [missingPortComment.userId],
    references: [user.id],
  }),
  parent: one(missingPortComment, {
    fields: [missingPortComment.parentId],
    references: [missingPortComment.id],
    relationName: "missing_port_comment_replies",
  }),
}));
