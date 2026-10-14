export type Env = {
  DB: D1Database;
  SITE_ORIGIN: string;
  ENVIRONMENT: string;
  BETTER_AUTH_SECRET?: string;
  BETTER_AUTH_URL?: string;
  COOKIE_DOMAIN?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  DISCORD_CLIENT_ID?: string;
  DISCORD_CLIENT_SECRET?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
  TURNSTILE_SECRET?: string;
};
