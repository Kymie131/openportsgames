"use client";

import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  Globe,
  LoaderCircle,
  LogIn,
  LogOut,
  MessageCircle,
  Pencil,
  Trash2,
} from "lucide-react";
import { authClient, useSessionUser } from "@/lib/auth-client";
import { apiFetch, getAuthConfig } from "@/lib/api";
import { useT } from "@/lib/i18n/use-i18n";
import { GithubMark } from "@/components/platforms/github-mark";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
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
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [nicknameOpen, setNicknameOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameSaving, setNicknameSaving] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [enabled, setEnabled] = useState<Record<Provider, boolean> | null>(null);

  useEffect(() => {
    let cancelled = false;
    getAuthConfig()
      .then((config) => {
        if (!cancelled) setEnabled(config.providers);
      })
      .catch(() => {
        if (!cancelled) setEnabled({ google: true, discord: true, github: true });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const providers = PROVIDERS.filter((provider) => !enabled || enabled[provider.id]);

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

  /** Delete the account on the server, then drop the local session. */
  async function deleteAccount() {
    setDeleteError(null);
    setDeleting(true);
    try {
      await apiFetch<{ ok: boolean }>("/me", { method: "DELETE" });
    } catch {
      setDeleteError(t.community.login.deleteError);
      setDeleting(false);
      return;
    }
    setDeleteOpen(false);
    setDeleting(false);
    try {
      await authClient.signOut();
    } catch {
      /* The server already cleared the session cookie; a reload also works. */
    }
  }

  async function saveNickname() {
    const value = nickname.trim();
    setNicknameError(null);
    if (value.length < 2 || value.length > 40) {
      setNicknameError(t.community.login.nicknameError);
      return;
    }
    setNicknameSaving(true);
    try {
      const { error: updateError } = await authClient.updateUser({ name: value });
      if (updateError) {
        setNicknameError(t.community.login.nicknameError);
        setNicknameSaving(false);
        return;
      }
      setNicknameOpen(false);
      window.location.reload();
    } catch {
      setNicknameError(t.community.login.nicknameError);
      setNicknameSaving(false);
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
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className={triggerClass}>
          <button
            type="button"
            aria-label={user ? t.community.login.menu : t.community.login.signIn}
          >
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
                <DropdownMenu.Item
                  onSelect={() => {
                    setNickname(user.name);
                    setNicknameError(null);
                    setNicknameOpen(true);
                  }}
                  disabled={busy}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors hover:bg-surface-2 focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
                >
                  <Pencil className="size-4" aria-hidden="true" />
                  {t.community.login.nickname}
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => {
                    setDeleteError(null);
                    setDeleteOpen(true);
                  }}
                  disabled={busy}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm text-danger outline-none transition-colors hover:bg-surface-2 focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                  {t.community.login.deleteAccount}
                </DropdownMenu.Item>
              </>
            ) : providers.length === 0 ? (
              <p className="px-2.5 py-1.5 text-xs text-muted">{t.community.login.unavailable}</p>
            ) : (
              providers.map((provider) => (
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
      <Dialog
        open={deleteOpen}
        onOpenChange={(open) => {
          if (!deleting) setDeleteOpen(open);
        }}
        title={t.community.login.deleteTitle}
        description={t.community.login.deleteDescription}
      >
        {deleteError && (
          <p role="alert" className="mb-3 text-sm text-danger">
            {deleteError}
          </p>
        )}
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setDeleteOpen(false)}
            disabled={deleting}
          >
            {t.community.login.deleteCancel}
          </Button>
          <Button
            size="sm"
            className="bg-danger text-accent-contrast hover:bg-danger/90"
            onClick={() => void deleteAccount()}
            disabled={deleting}
          >
            {deleting ? t.community.login.deleteWorking : t.community.login.deleteConfirm}
          </Button>
        </div>
      </Dialog>
      <Dialog
        open={nicknameOpen}
        onOpenChange={(open) => {
          if (!nicknameSaving) setNicknameOpen(open);
        }}
        title={t.community.login.nicknameTitle}
        description={t.community.login.nicknameDescription}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="opg-nickname" className="sr-only">
            {t.community.login.nicknamePlaceholder}
          </label>
          <input
            id="opg-nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            maxLength={40}
            placeholder={t.community.login.nicknamePlaceholder}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          {nicknameError && (
            <p role="alert" className="text-sm text-danger">
              {nicknameError}
            </p>
          )}
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setNicknameOpen(false)}
              disabled={nicknameSaving}
            >
              {t.community.login.deleteCancel}
            </Button>
            <Button size="sm" onClick={() => void saveNickname()} disabled={nicknameSaving}>
              {nicknameSaving
                ? t.community.login.nicknameSaving
                : t.community.login.nicknameSave}
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
