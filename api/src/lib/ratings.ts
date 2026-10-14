import { z } from "zod";

/** Maximum length accepted for a port id. */
export const PORT_ID_MAX_LENGTH = 80;

/** kebab-case port slug: lowercase alphanumerics joined by single dashes. */
export const portIdSchema = z
  .string()
  .max(PORT_ID_MAX_LENGTH)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "invalid_port_id");

/** A star rating must be a whole number between 1 and 5. */
export const starsSchema = z.number().int().min(1).max(5);

export const ratingBodySchema = z.object({ stars: starsSchema });

/**
 * Round a rating average to one decimal place.
 *
 * Returns `null` when there is no average (no ratings) or the value is not a
 * finite number.
 */
export function roundToOneDecimal(
  value: number | string | null | undefined,
): number | null {
  if (value === null || value === undefined) return null;
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return null;
  return Math.round(n * 10) / 10;
}
