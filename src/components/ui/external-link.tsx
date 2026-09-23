import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ExternalLink as ExternalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** Screen-reader-only hint, localized by the caller. */
  hint?: string;
}

/**
 * Anchor that opens an external official source in a new tab.
 * Every outgoing link in the data layer is validated; this component only
 * adds the standard "external" affordance and never a download target.
 */
export function ExternalLink({
  children,
  hint = "Opens an external site",
  className,
  href,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-link underline-offset-4 hover:text-link-hover hover:underline",
        className,
      )}
      {...props}
    >
      {children}
      <ExternalIcon size={13} aria-hidden="true" className="shrink-0 opacity-70" />
      <span className="sr-only">{hint}</span>
    </a>
  );
}
