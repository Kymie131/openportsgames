"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              className="hidden h-7 w-auto dark:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/logos/brand/openportsgames-dark.png")}
              alt=""
              className="block h-7 w-auto dark:hidden"
            />
          </Link>

          <nav aria-label={t.common.mainNav} className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground",
                    active && "bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-accent",
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
          <LanguageSwitcher />
          <ThemeToggle />
          {SUPPORT_PAYPAL_URL && (
            <a
              href={SUPPORT_PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted transition-colors duration-150 hover:text-foreground md:inline-flex"
            >
              {t.nav.support}
            </a>
          )}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground md:hidden"
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
              <Dialog.Overlay className="fixed inset-0 z-40 bg-background/70 md:hidden" />
              <Dialog.Content className="opg-drawer-content fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background focus:outline-none md:hidden">
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
                            "flex min-h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
                            active && "text-foreground",
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
