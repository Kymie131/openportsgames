"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useT } from "@/lib/i18n/use-i18n";
import { SITE_NAME } from "@/lib/site";
import { assetPath, cn } from "@/lib/utils";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SUPPORT_PAYPAL_URL } from "@/lib/support";

const NAV_ITEMS = [
  { href: "/ports", key: "ports" as const },
  { href: "/pc", key: "pc" as const },
  { href: "/android", key: "android" as const },
  { href: "/emulators", key: "emulators" as const },
  { href: "/guides", key: "guides" as const },
  { href: "/testing", key: "testing" as const },
];

const PROJECT_ITEMS = [
  { href: "/submit", key: "submit" as const },
  { href: "/support", key: "support" as const },
  { href: "/about", key: "about" as const },
  { href: "/legal", key: "legal" as const },
];

const HEADER_SCROLL_THRESHOLD = 8;

function isActive(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // "/" focuses the header search, matching the kbd hint.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/ports?q=${encodeURIComponent(value)}` : "/ports");
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-background/90 backdrop-blur transition-shadow duration-150 supports-[backdrop-filter]:bg-background/80",
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label={t.nav.home}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/logos/brand/openportsgames-transparent.png")}
              alt=""
              className="h-7 w-auto"
            />
          </Link>

          <nav aria-label={t.common.mainNav} className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm transition-colors duration-150",
                    active
                      ? "bg-accent text-accent-contrast hover:bg-accent-hover hover:text-accent-contrast"
                      : "text-muted hover:bg-surface-2 hover:text-foreground",
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                asChild
                className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground outline-none data-[state=open]:bg-surface-2 data-[state=open]:text-foreground"
              >
                <button type="button" className="inline-flex items-center gap-1">
                  {t.nav.project}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={6}
                  className="z-50 min-w-40 rounded-md border border-border bg-background p-1 shadow-md"
                >
                  {PROJECT_ITEMS.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <DropdownMenu.Item key={item.href} asChild className="outline-none">
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "rounded-sm px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
                            active && "text-foreground",
                          )}
                        >
                          {t.nav[item.key]}
                        </Link>
                      </DropdownMenu.Item>
                    );
                  })}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <form
            role="search"
            onSubmit={submitSearch}
            className="hidden items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs transition-colors focus-within:border-accent-hover sm:flex md:px-3 md:py-1.5"
          >
            <Search className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              aria-label={t.catalog.searchPlaceholder}
              className="w-28 bg-transparent text-xs text-foreground placeholder:text-muted focus:outline-none lg:w-40"
            />
            <kbd className="hidden rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted lg:inline-block">
              /
            </kbd>
          </form>
          <LanguageSwitcher />
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground xl:hidden"
                aria-label={t.common.openMenu}
              >
                {open ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Menu className="size-5" aria-hidden="true" />
                )}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-background/70 xl:hidden" />
              <Dialog.Content className="opg-drawer-content fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background focus:outline-none xl:hidden">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <Dialog.Title className="sr-only">{SITE_NAME}</Dialog.Title>
                  <span className="text-base font-semibold tracking-tight">{SITE_NAME}</span>
                  <Dialog.Close
                    className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                    aria-label={t.common.closeMenu}
                  >
                    <X className="size-5" aria-hidden="true" />
                  </Dialog.Close>
                </div>

                <nav
                  aria-label={t.common.mainNav}
                  className="flex flex-1 flex-col gap-4 overflow-y-auto px-3 py-4"
                >
                  <form
                    role="search"
                    onSubmit={submitSearch}
                    className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 focus-within:border-accent-hover"
                  >
                    <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
                    <input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={t.catalog.searchPlaceholder}
                      aria-label={t.catalog.searchPlaceholder}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
                    />
                  </form>
                  {SUPPORT_PAYPAL_URL && (
                    <a
                      href={SUPPORT_PAYPAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="inline-flex min-h-11 w-fit items-center rounded-md border border-accent/40 px-4 text-sm text-accent transition-colors duration-150 hover:border-accent hover:text-accent-hover"
                    >
                      {t.nav.support}
                    </a>
                  )}
                  <div className="flex flex-col gap-1">
                    {[...NAV_ITEMS, ...PROJECT_ITEMS].map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-11 items-center rounded-md px-3 text-sm transition-colors",
                            active
                              ? "bg-accent text-accent-contrast hover:bg-accent-hover hover:text-accent-contrast"
                              : "text-muted hover:bg-surface-2 hover:text-foreground",
                          )}
                        >
                          {t.nav[item.key]}
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
