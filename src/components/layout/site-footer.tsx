"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/use-i18n";
import { Container } from "./container";

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="max-w-sm space-y-2">
          <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
            OpenPortsGames
          </Link>
          <p className="text-sm leading-6 text-muted">{t.footer.about}</p>
        </div>
        <div className="space-y-2 text-sm leading-6 text-muted">
          <p>{t.footer.licenses}</p>
          <p>{t.footer.notAffiliated}</p>
          <p>
            <a
              href="https://github.com/Kymie131/openportsgames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link underline-offset-4 hover:text-link-hover hover:underline"
            >
              {t.footer.editOnGitHub}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}