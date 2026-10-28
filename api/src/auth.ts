import { betterAuth, type BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";

import * as schema from "./db/schema";
import type { Env } from "./env";

const DAY_IN_SECONDS = 60 * 60 * 24;

function buildSocialProviders(env: Env): NonNullable<BetterAuthOptions["socialProviders"]> {
  const providers: NonNullable<BetterAuthOptions["socialProviders"]> = {};

  if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
    providers.google = {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    };
  }
  if (env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET) {
    providers.discord = {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    };
  }
  if (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
    providers.github = {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    };
  }

  return providers;
}

/**
 * Build a Better Auth instance for the current request.
 *
 * Bindings (D1, secrets) only exist per request, so the instance is created
 * per call instead of once at module scope.
 */
export function createAuth(env: Env) {
  const trustedOrigins = [env.SITE_ORIGIN];
  if (env.ENVIRONMENT === "dev") {
    trustedOrigins.push(
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:3001",
      "http://127.0.0.1:3002",
    );
  }

  const db = drizzle(env.DB, { schema });

  return betterAuth({
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, { provider: "sqlite", schema }),
    trustedOrigins,
    socialProviders: buildSocialProviders(env),
    user: {
      additionalFields: {
        role: {
          type: "string",
          required: false,
          defaultValue: "user",
          input: false,
        },
      },
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => {
            const name = typeof user.name === "string" ? user.name.trim() : "";
            return {
              data: {
                ...user,
                name: name.length >= 2 ? name.slice(0, 40) : "Player",
              },
            };
          },
        },
        update: {
          before: async (user) => {
            const data = { ...user };

            if (user.name !== undefined) {
              const name = typeof user.name === "string" ? user.name.trim() : "";
              if (name.length < 2 || name.length > 40) return false;
              data.name = name;
            }

            if (user.image !== undefined) {
              if (user.image === null || user.image === "") {
                data.image = null;
              } else {
                let url: URL;
                try {
                  url = new URL(String(user.image));
                } catch {
                  return false;
                }
                if (url.protocol !== "https:" || url.href.length > 500) return false;
                data.image = url.href;
              }
            }

            return { data };
          },
        },
      },
    },
    session: {
      expiresIn: DAY_IN_SECONDS * 7,
      updateAge: DAY_IN_SECONDS,
    },
    advanced: {
      useSecureCookies: env.ENVIRONMENT !== "dev",
      ...(env.COOKIE_DOMAIN
        ? {
            crossSubDomainCookies: {
              enabled: true,
              domain: env.COOKIE_DOMAIN,
            },
          }
        : {}),
    },
  });
}
