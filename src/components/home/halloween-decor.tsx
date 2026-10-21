/**
 * Purely decorative Halloween dressing for the home hero: two corner webs and
 * a spider that lowers itself on a thread and then sways. It is hidden from
 * assistive technology, ignores pointer events and disables its motion through
 * the global `prefers-reduced-motion` rule.
 */
export function HalloweenDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <Cobweb className="absolute -left-10 -top-12 h-44 w-44 text-foreground/10 sm:h-56 sm:w-56" />
      <Cobweb className="absolute -right-10 -top-12 h-36 w-36 scale-x-[-1] text-foreground/10 sm:h-48 sm:w-48" />
      <div className="absolute right-8 top-0 hidden sm:right-16 sm:block">
        <div className="opg-spider-drop flex flex-col items-center">
          <span className="h-20 w-px bg-foreground/25 sm:h-24" />
          <Spider className="opg-spider-sway -mt-px size-7 text-foreground/70" />
        </div>
      </div>
    </div>
  );
}

function Cobweb({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      className={className}
    >
      <path d="M0 0 118 30M0 0 92 64M0 0 56 92M0 0 20 116" opacity="0.55" />
      <path d="M16 4c18 12 30 27 38 47M6 22c16 13 27 27 34 45M3 44c13 12 22 25 28 41M2 68c9 10 15 21 19 34" />
      <path d="M38 6c14 10 25 24 33 43M10 40c11 9 20 21 26 36M20 10c13 12 24 26 31 45" opacity="0.7" />
    </svg>
  );
}

function Spider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M20 25 8 18M20 28 5 28M20 31 8 38M28 25l12-7M28 28l15 0M28 31l12 7" />
        <path d="M21 21 12 10M27 21l9-11M21 35 12 44M27 35l9 9" opacity="0.7" />
      </g>
      <ellipse cx="24" cy="29" rx="7" ry="8.5" fill="currentColor" />
      <circle cx="24" cy="20" r="4.6" fill="currentColor" />
      <circle cx="22.4" cy="19" r="1" fill="var(--background)" opacity="0.8" />
      <circle cx="25.6" cy="19" r="1" fill="var(--background)" opacity="0.8" />
      <path d="M24 25.5 22.5 31 25.5 31Z" fill="var(--background)" opacity="0.55" />
    </svg>
  );
}
