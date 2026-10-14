const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteVerifyResponse = {
  success?: boolean;
};

/**
 * Verify a Cloudflare Turnstile token against the siteverify endpoint.
 *
 * Returns `false` for a missing token, a missing secret, a non-OK response, a
 * `success: false` payload, or any network/parse error. Never throws.
 */
export async function verifyTurnstile(
  token: string | undefined | null,
  secret: string | undefined | null,
  ip?: string | null,
): Promise<boolean> {
  if (!token || !secret) return false;

  try {
    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token);
    if (ip) body.set("remoteip", ip);

    const res = await fetch(SITEVERIFY_URL, { method: "POST", body });
    if (!res.ok) return false;

    const data = (await res.json()) as SiteVerifyResponse;
    return data.success === true;
  } catch {
    return false;
  }
}
