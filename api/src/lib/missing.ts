import { z } from "zod";

import { commentBodySchema, sanitizeText } from "./comments";

const shortText = (min: number, max: number) =>
  z
    .string()
    .max(max * 2)
    .transform(sanitizeText)
    .pipe(z.string().min(min).max(max));

export const missingPortTitleSchema = shortText(2, 120);
export const missingPortGameSchema = shortText(2, 120);
export const missingPortPlatformSchema = shortText(2, 40);

export const missingPortNotesSchema = z
  .string()
  .max(2000)
  .transform(sanitizeText)
  .pipe(z.string().max(1000));

export const missingPortUrlSchema = z
  .string()
  .max(500)
  .url()
  .startsWith("https://", "expected an https URL");

export const createMissingPortSchema = z.object({
  title: missingPortTitleSchema,
  game: missingPortGameSchema,
  platform: missingPortPlatformSchema,
  url: missingPortUrlSchema.nullish(),
  notes: missingPortNotesSchema.nullish(),
  turnstileToken: z.string(),
});

export const createMissingPortCommentSchema = z.object({
  body: commentBodySchema,
  turnstileToken: z.string(),
  parentId: z.string().uuid().nullish(),
});

export const missingPortStatusSchema = z.enum(["open", "done", "hidden"]);
export const updateMissingPortStatusSchema = z.object({
  status: missingPortStatusSchema,
});

export type MissingPortStatus = z.infer<typeof missingPortStatusSchema>;
