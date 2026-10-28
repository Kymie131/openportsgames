import { describe, expect, it } from "vitest";

import {
  MODERATION_NOTE_MAX_LENGTH,
  auditFilterSchema,
  endOfDay,
  moderationNoteSchema,
  reportFilterSchema,
  reportStatusSchema,
  updateCommentModerationSchema,
  updateReportSchema,
} from "../src/lib/moderation";

describe("moderation schemas", () => {
  it("accepts the report resolution states and rejects others", () => {
    for (const status of ["open", "dismissed", "resolved"] as const) {
      expect(reportStatusSchema.safeParse(status).success).toBe(true);
    }
    expect(reportStatusSchema.safeParse("hidden").success).toBe(false);
  });

  it("requires a status when updating a report", () => {
    expect(updateReportSchema.safeParse({ note: "seen" }).success).toBe(false);
    expect(updateReportSchema.safeParse({ status: "resolved" }).success).toBe(true);
  });

  it("trims and bounds moderator notes", () => {
    expect(moderationNoteSchema.parse("  looked into it  ")).toBe("looked into it");
    expect(moderationNoteSchema.parse("   ")).toBeNull();
    expect(moderationNoteSchema.parse(null)).toBeNull();
    expect(moderationNoteSchema.parse(undefined)).toBeUndefined();
    expect(
      moderationNoteSchema.safeParse("a".repeat(MODERATION_NOTE_MAX_LENGTH + 1)).success,
    ).toBe(false);
  });

  it("accepts a note alongside a comment status", () => {
    const parsed = updateCommentModerationSchema.safeParse({
      status: "hidden",
      note: "spam",
    });
    expect(parsed.success).toBe(true);
    expect(updateCommentModerationSchema.safeParse({ status: "removed" }).success).toBe(
      false,
    );
  });

  it("defaults report filters to open reports", () => {
    expect(reportFilterSchema.parse({})).toEqual({ status: "open" });
  });

  it("parses and trims a reason search", () => {
    expect(reportFilterSchema.parse({ reason: "  spam  " }).reason).toBe("spam");
    expect(reportFilterSchema.parse({ reason: "   " }).reason).toBeUndefined();
  });

  it("rejects malformed date filters", () => {
    expect(reportFilterSchema.safeParse({ from: "2026-13-01" }).success).toBe(false);
    expect(reportFilterSchema.safeParse({ to: "yesterday" }).success).toBe(false);
    expect(reportFilterSchema.safeParse({ from: "2026-10-27" }).success).toBe(true);
  });

  it("turns a date-only bound into the end of that day", () => {
    const end = endOfDay(new Date("2026-10-27T00:00:00.000Z"));
    expect(end.toISOString()).toBe("2026-10-27T23:59:59.999Z");
  });

  it("validates audit filters", () => {
    expect(auditFilterSchema.safeParse({ action: "comment.hide" }).success).toBe(true);
    expect(auditFilterSchema.safeParse({ targetType: "user" }).success).toBe(true);
    expect(auditFilterSchema.safeParse({ action: "comment.shout" }).success).toBe(false);
  });
});
