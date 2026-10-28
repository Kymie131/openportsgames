import { z } from "zod";
import type { DrizzleD1Database } from "drizzle-orm/d1";

import * as schema from "../db/schema";
import {
  MODERATION_ACTIONS,
  MODERATION_TARGET_TYPES,
  type ModerationAction,
  type ModerationTargetType,
} from "../db/schema";
import { sanitizeText } from "./comments";

type Database = DrizzleD1Database<typeof schema>;

/** Upper bound for a moderator note, after sanitization. */
export const MODERATION_NOTE_MAX_LENGTH = 500;

export const reportStatusSchema = z.enum(["open", "dismissed", "resolved"]);
export type ReportStatus = z.infer<typeof reportStatusSchema>;

export const reportStatusFilterSchema = z.enum([
  "open",
  "dismissed",
  "resolved",
  "all",
]);

export const moderationNoteSchema = z
  .string()
  .max(MODERATION_NOTE_MAX_LENGTH * 2)
  .transform(sanitizeText)
  .pipe(z.string().max(MODERATION_NOTE_MAX_LENGTH))
  .transform((value) => (value.length > 0 ? value : null))
  .nullable()
  .optional();

export const updateReportSchema = z.object({
  status: reportStatusSchema,
  note: moderationNoteSchema,
});

export const updateCommentModerationSchema = z.object({
  status: z.enum(["visible", "hidden"]),
  note: moderationNoteSchema,
});

const dateOnlySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .transform((value, ctx) => {
    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime())) {
      ctx.addIssue({ code: "custom", message: "invalid_date" });
      return z.NEVER;
    }
    return date;
  });

export const reportFilterSchema = z.object({
  status: reportStatusFilterSchema.default("open"),
  reason: z
    .string()
    .max(200)
    .transform(sanitizeText)
    .transform((value) => (value.length > 0 ? value : undefined))
    .optional(),
  from: dateOnlySchema.optional(),
  to: dateOnlySchema.optional(),
});

export const auditFilterSchema = z.object({
  action: z.enum([...MODERATION_ACTIONS]).optional(),
  targetType: z.enum([...MODERATION_TARGET_TYPES]).optional(),
});

/** Turns an inclusive date-only `to` bound into the end of that day. */
export function endOfDay(date: Date): Date {
  return new Date(date.getTime() + 24 * 60 * 60 * 1000 - 1);
}

export async function recordModeration(
  db: Database,
  entry: {
    actorId: string;
    action: ModerationAction;
    targetType: ModerationTargetType;
    targetId: string;
    note?: string | null;
    createdAt?: Date;
  },
): Promise<void> {
  await db.insert(schema.moderationLog).values({
    id: crypto.randomUUID(),
    actorId: entry.actorId,
    action: entry.action,
    targetType: entry.targetType,
    targetId: entry.targetId,
    note: entry.note ?? null,
    createdAt: entry.createdAt ?? new Date(),
  });
}
