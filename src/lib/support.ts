const raw = process.env.NEXT_PUBLIC_SUPPORT_PAYPAL_URL ?? "";

export function buildSupportUrl(value: string): string {
  const url = value.trim();
  if (!url) return "";
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error("NEXT_PUBLIC_SUPPORT_PAYPAL_URL must be an absolute URL");
  }
  if (parsed.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SUPPORT_PAYPAL_URL must be an https URL");
  }
  return parsed.toString();
}

export const SUPPORT_PAYPAL_URL = buildSupportUrl(raw);
