import { describe, expect, it } from "vitest";

import {
  COMMENT_BODY_MAX_LENGTH,
  PAGE_LIMIT_DEFAULT,
  PAGE_LIMIT_MAX,
  REPORT_REASON_MAX_LENGTH,
  commentBodySchema,
  createCommentSchema,
  decodeCursor,
  encodeCursor,
  parseLimit,
  reportReasonSchema,
  sanitizeText,
  stripControlChars,
} from "../src/lib/comments";

const UUID = "123e4567-e89b-12d3-a456-426614174000";

describe("commentBodySchema", () => {
  it("accepts and trims a valid body", () => {
    const parsed = commentBodySchema.safeParse("  hello there  ");
    expect(parsed.success).toBe(true);
    expect(parsed.success && parsed.data).toBe("hello there");
  });

  it("accepts a body exactly at the limit", () => {
    const parsed = commentBodySchema.safeParse("a".repeat(COMMENT_BODY_MAX_LENGTH));
    expect(parsed.success).toBe(true);
  });

  it("rejects bodies longer than the limit", () => {
    expect(commentBodySchema.safeParse("a".repeat(COMMENT_BODY_MAX_LENGTH + 1)).success).toBe(
      false,
    );
  });

  it("rejects empty and whitespace-only bodies", () => {
    for (const bad of ["", "   ", "\t", "\n\n", "  \r\n "]) {
      expect(commentBodySchema.safeParse(bad).success).toBe(false);
    }
  });

  it("rejects non-string input", () => {
    for (const bad of [null, undefined, 42, {}, []]) {
      expect(commentBodySchema.safeParse(bad).success).toBe(false);
    }
  });

  it("strips control characters", () => {
    expect(sanitizeText("hel\u0000lo\u001fworld\u007f")).toBe("helloworld");
    expect(stripControlChars("a\u0007b\u000bc")).toBe("abc");
  });

  it("preserves newlines and tabs", () => {
    expect(sanitizeText("line one\nline two\tend")).toBe("line one\nline two\tend");
  });

  it("rejects a body made only of control characters", () => {
    expect(commentBodySchema.safeParse("\u0000\u0001\u0002").success).toBe(false);
  });
});

describe("createCommentSchema", () => {
  it("requires a turnstile token", () => {
    expect(createCommentSchema.safeParse({ body: "hi" }).success).toBe(false);
    expect(
      createCommentSchema.safeParse({ body: "hi", turnstileToken: "tok" }).success,
    ).toBe(true);
  });

  it("accepts an optional review sentiment", () => {
    expect(
      createCommentSchema.safeParse({ body: "hi", turnstileToken: "tok", sentiment: "positive" })
        .success,
    ).toBe(true);
    expect(
      createCommentSchema.safeParse({ body: "hi", turnstileToken: "tok", sentiment: "negative" })
        .success,
    ).toBe(true);
    expect(
      createCommentSchema.safeParse({ body: "hi", turnstileToken: "tok", sentiment: "mixed" })
        .success,
    ).toBe(false);
  });
});

describe("reportReasonSchema", () => {
  it("accepts and trims a valid reason", () => {
    const parsed = reportReasonSchema.safeParse("  spam  ");
    expect(parsed.success && parsed.data).toBe("spam");
  });

  it("rejects empty, whitespace-only and over-long reasons", () => {
    expect(reportReasonSchema.safeParse("").success).toBe(false);
    expect(reportReasonSchema.safeParse("   ").success).toBe(false);
    expect(
      reportReasonSchema.safeParse("a".repeat(REPORT_REASON_MAX_LENGTH + 1)).success,
    ).toBe(false);
  });
});

describe("cursor encode/decode", () => {
  it("round-trips a (createdAt, id) tuple", () => {
    const cursor = encodeCursor(1_700_000_000_000, UUID);
    expect(decodeCursor(cursor)).toEqual({ createdAt: 1_700_000_000_000, id: UUID });
  });

  it("produces a URL-safe token without padding", () => {
    const cursor = encodeCursor(1_700_000_000_000, UUID);
    expect(cursor).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(cursor).not.toContain("+");
    expect(cursor).not.toContain("/");
    expect(cursor).not.toContain("=");
  });

  it("rejects tampered or malformed cursors", () => {
    const b64 = (s: string) => btoa(s);
    const bad = [
      undefined,
      null,
      "",
      "   ",
      "not base64 !!",
      b64(`1700000000000`), // missing separator
      b64(`|${UUID}`), // missing timestamp
      b64(`abc|${UUID}`), // non-numeric timestamp
      b64(`1700000000000|not-a-uuid`), // bad id
      b64(`1700000000000|${UUID}|extra`), // extra field
      b64(`-1|${UUID}`), // negative timestamp
      "a".repeat(201),
    ];
    for (const value of bad) {
      expect(decodeCursor(value as string | null | undefined)).toBeNull();
    }
  });
});

describe("parseLimit", () => {
  it("defaults to 20 for missing or invalid values", () => {
    for (const value of [undefined, null, "", "0", "-3", "abc", "1.5"]) {
      expect(parseLimit(value)).toBe(PAGE_LIMIT_DEFAULT);
    }
  });

  it("clamps to the maximum", () => {
    expect(parseLimit("10")).toBe(10);
    expect(parseLimit(String(PAGE_LIMIT_MAX))).toBe(PAGE_LIMIT_MAX);
    expect(parseLimit("1000")).toBe(PAGE_LIMIT_MAX);
  });
});
