"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const NAV_ITEMS = [
  { href: "/", key: "home" as const },
  { href: "/ports", key: "ports" as const },
  { href: "/pc", key: "pc" as const },
  { href: "/android", key: "android" as const },
  { href: "/testing", key: "testing" as const },
];

const MORE_ITEMS = [
  { href: "/guides", key: "guides" as const },
  { href: "/submit", key: "submit" as const },
  { href: "/support", key: "support" as const },
  { href: "/about", key: "about" as const },
  { href: "/legal", key: "legal" as const },
];

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gradient text-base font-semibold tracking-tight">
            OpenPortsGames
          </Link>
          <nav aria-label={t.common.mainNav} className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground",
                    active &&
                      "bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-accent",
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
                  {t.nav.more}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={6}
                  className="z-50 min-w-40 rounded-md border border-border bg-background p-1 shadow-md"
                >
                  {MORE_ITEMS.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <DropdownMenu.Item
                        key={item.href}
                        asChild
                        className="outline-none"
                      >
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
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-nav"
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground md:hidden"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>
      {open && (
        <nav
          id="site-nav"
          aria-label={t.common.mainNav}
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-2">
            {[...NAV_ITEMS, ...MORE_ITEMS].map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
                    active && "text-foreground",
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}