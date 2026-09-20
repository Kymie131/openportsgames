"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
];

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
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
                    active && "text-foreground",
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
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
            {NAV_ITEMS.map((item) => {
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