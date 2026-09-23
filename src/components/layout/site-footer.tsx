"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/use-i18n";
import { Container } from "./container";

const FOOTER_GROUPS = [
  {
    group: "catalog" as const,
    items: [
      { href: "/", key: "home" as const },
      { href: "/ports", key: "ports" as const },
      { href: "/pc", key: "pc" as const },
      { href: "/android", key: "android" as const },
    ],
  },
  {
    group: "project" as const,
    items: [
      { href: "/testing", key: "testing" as const },
      { href: "/guides", key: "guides" as const },
      { href: "/submit", key: "submit" as const },
    ],
  },
  {
    group: "site" as const,
    items: [
      { href: "/support", key: "support" as const },
      { href: "/about", key: "about" as const },
      { href: "/legal", key: "legal" as const },
    ],
  },
] as const;

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-2">
            <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
              OpenPortsGames
            </Link>
            <p className="text-sm leading-6 text-muted">{t.footer.about}</p>
          </div>
          <div className="flex flex-wrap gap-10">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.group} className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {t.footer.groups[group.group]}
                </p>
                <nav aria-label={t.footer.groups[group.group]} className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-fit text-sm leading-6 text-link underline-offset-4 hover:text-link-hover hover:underline"
                    >
                      {t.nav[item.key]}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 border-t border-border pt-6 text-xs leading-5 text-muted">
          <p>{t.footer.licenses}</p>
          <p>{t.footer.notAffiliated}</p>
          <a
            href="https://github.com/Kymie131/openportsgames"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-link underline-offset-4 hover:text-link-hover hover:underline"
          >
            {t.footer.editOnGitHub}
          </a>
        </div>
      </Container>
    </footer>
  );
}
