"use client";

import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};

/** Active from October 1 to November 2, local time. */
function isHalloweenSeason(date: Date) {
  const month = date.getMonth();
  return month === 9 || (month === 10 && date.getDate() <= 2);
}

/**
 * Temporary Halloween dressing for the home hero: moon, cobwebs, spider, bats,
 * ghosts, pumpkins, fog and floating embers. Purely decorative (hidden from
 * assistive tech, no pointer events) and disabled outside the season. All
 * motion is neutralized by the global prefers-reduced-motion rule.
 */
export function HalloweenDecor() {
  const active = useSyncExternalStore(
    noSubscribe,
    () => isHalloweenSeason(new Date()),
    () => false,
  );

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <div className="opg-halloween-moon absolute right-2 top-2 size-28 rounded-full sm:right-8 sm:top-4 sm:size-36" />

      <Cobweb className="absolute -left-10 -top-12 h-44 w-44 text-orange-200/15 sm:h-56 sm:w-56" />
      <Cobweb className="absolute -right-10 -top-12 h-36 w-36 scale-x-[-1] text-orange-200/15 sm:h-48 sm:w-48" />

      <div className="absolute right-8 top-0 hidden sm:right-16 sm:block">
        <div className="opg-spider-drop flex flex-col items-center">
          <span className="h-20 w-px bg-foreground/25 sm:h-24" />
          <Spider className="opg-spider-sway -mt-px size-7 text-foreground/70" />
        </div>
      </div>

      <Bat className="opg-bat opg-bat-1" />
      <Bat className="opg-bat opg-bat-2" />
      <Bat className="opg-bat opg-bat-3" />

      <Ghost className="opg-ghost opg-ghost-1 hidden sm:block" />
      <Ghost className="opg-ghost opg-ghost-2 hidden md:block" />

      <Pumpkin className="opg-pumpkin absolute bottom-0 left-1 h-20 w-20 sm:left-4 sm:h-24 sm:w-24" />
      <Pumpkin className="opg-pumpkin absolute bottom-0 right-2 hidden h-16 w-16 scale-x-[-1] sm:block" />

      <div className="opg-halloween-fog opg-halloween-fog-a" />
      <div className="opg-halloween-fog opg-halloween-fog-b" />

      <div className="absolute inset-x-0 bottom-0 h-2/3">
        {Array.from({ length: 12 }, (_, index) => {
          const style = {
            left: `${6 + ((index * 37) % 88)}%`,
            animationDelay: `${(index * 0.73) % 7}s`,
            animationDuration: `${6 + ((index * 1.3) % 5)}s`,
            "--ember-size": `${2 + (index % 3)}px`,
          } as React.CSSProperties;
          return <span key={index} className="opg-halloween-ember" style={style} />;
        })}
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

function Bat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M32 12c-2-3-5-4-8-3-4 2-5 6-9 7 1-4-1-7-4-9 5 1 8 0 11-3-3 0-6-2-7-5 4 2 8 2 11 0 2 2 4 3 6 3s4-1 6-3c3 2 7 2 11 0-1 3-4 5-7 5 3 3 6 4 11 3-3 2-5 5-4 9-4-1-5-5-9-7-3-1-6 0-8 3z" />
      <circle cx="28" cy="12" r="1" fill="var(--background)" />
      <circle cx="36" cy="12" r="1" fill="var(--background)" />
    </svg>
  );
}

function Ghost({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 80" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 76V38c0-14 9-24 20-24s20 10 20 24v38l-6-5-5 5-5-5-4 5-5-5-5 5-6-5-4 5z" />
      <circle cx="25" cy="38" r="3" fill="var(--background)" />
      <circle cx="39" cy="38" r="3" fill="var(--background)" />
      <ellipse cx="32" cy="49" rx="4" ry="5" fill="var(--background)" opacity="0.8" />
    </svg>
  );
}

function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 72" className={className} aria-hidden="true">
      <path d="M40 20c-4-5-3-11 1-15 2 5 3 9 1 14z" fill="#4d7c2f" />
      <path
        d="M40 18c16 0 30 10 30 25S56 68 40 68 10 58 10 43s14-25 30-25z"
        fill="#ea580c"
      />
      <path
        d="M40 18c-6 0-11 11-11 25s5 25 11 25 11-11 11-25-5-25-11-25z"
        fill="#f97316"
        opacity="0.55"
      />
      <path d="M18 40l7-6 2 8 6-4-2 9H20z" fill="#431407" />
      <path d="M62 40l-7-6-2 8-6-4 2 9h13z" fill="#431407" />
      <path d="M26 54c5 4 10 6 14 6s9-2 14-6c-3 8-8 11-14 11s-11-3-14-11z" fill="#431407" />
    </svg>
  );
}

