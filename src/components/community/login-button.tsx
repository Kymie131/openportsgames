"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Globe, LoaderCircle, LogIn, LogOut, MessageCircle } from "lucide-react";
import { authClient, useSessionUser } from "@/lib/auth-client";
import { useT } from "@/lib/i18n/use-i18n";
import { GithubMark } from "@/components/platforms/github-mark";
import { cn } from "@/lib/utils";
import { UserAvatar } from "./user-avatar";

type Provider = "google" | "discord" | "github";

const PROVIDERS: Array<{ id: Provider; labelKey: "withGoogle" | "withDiscord" | "withGitHub" }> = [
  { id: "google", labelKey: "withGoogle" },
  { id: "discord", labelKey: "withDiscord" },
  { id: "github", labelKey: "withGitHub" },
];

function ProviderMark({ provider }: { provider: Provider }) {
  if (provider === "github") return <GithubMark className="size-4" aria-hidden="true" />;
  if (provider === "discord") return <MessageCircle className="size-4" aria-hidden="true" />;
  return <Globe className="size-4" aria-hidden="true" />;
}

/** Avatar with an initial fallback when the provider has no picture. */
function Avatar({ name, image }: { name: string; image?: string | null }) {
  return <UserAvatar name={name} image={image} className="size-6" />;
}

/** Sign-in dropdown when logged out; account menu with logout when logged in. */
export function LoginButton({ className }: { className?: string }) {
  const t = useT();
  const { user, isPending } = useSessionUser();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const triggerClass = cn(
    "inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-surface px-2 text-sm text-foreground transition-colors duration-150 hover:bg-surface-2",
    "outline-none data-[state=open]:bg-surface-2",
    className,
  );

  async function signIn(provider: Provider) {
    setError(null);
    setBusy(true);
    try {
      const { error: signInError } = await authClient.signIn.social({
        provider,
        callbackURL: window.location.href,
      });
      if (signInError) {
        setError(t.community.login.error);
        setBusy(false);
      }
    } catch {
      setError(t.community.login.error);
      setBusy(false);
    }
  }

  async function signOut() {
    setError(null);
    setBusy(true);
    try {
      await authClient.signOut();
    } catch {
      setError(t.community.login.error);
    } finally {
      setBusy(false);
    }
  }

  if (isPending) {
    return (
      <span
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-sm text-muted",
          className,
        )}
        aria-hidden="true"
      >
        <LoaderCircle className="size-4 animate-spin" />
      </span>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={triggerClass}>
        <button type="button" aria-label={user ? t.community.login.menu : t.community.login.signIn}>
          {busy ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : user ? (
            <Avatar name={user.name} image={user.image} />
          ) : (
            <LogIn className="size-4" aria-hidden="true" />
          )}
          <span className="hidden max-w-28 truncate sm:inline">
            {user ? user.name : t.community.login.signIn}
          </span>
          <ChevronDown className="size-3.5 text-muted" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="z-50 min-w-52 rounded-md border border-border bg-background p-1 shadow-md"
        >
          {user ? (
            <>
              <p className="truncate px-2.5 py-1.5 text-xs text-muted">
                {t.community.login.signedInAs(user.name)}
              </p>
              <DropdownMenu.Item
                onSelect={(event) => {
                  event.preventDefault();
                  void signOut();
                }}
                disabled={busy}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors hover:bg-surface-2 focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
              >
                <LogOut className="size-4" aria-hidden="true" />
                {t.community.login.signOut}
              </DropdownMenu.Item>
            </>
          ) : (
            PROVIDERS.map((provider) => (
              <DropdownMenu.Item
                key={provider.id}
                onSelect={(event) => {
                  event.preventDefault();
                  void signIn(provider.id);
                }}
                disabled={busy}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors hover:bg-surface-2 focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
              >
                <ProviderMark provider={provider.id} />
                {t.community.login[provider.labelKey]}
              </DropdownMenu.Item>
            ))
          )}
          {error && (
            <p role="alert" className="px-2.5 py-1.5 text-xs text-danger">
              {error}
            </p>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
