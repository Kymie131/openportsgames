import { SystemMark } from "@/components/platforms/system-mark";
import { consoleLogoForSystem } from "@/content/ports/console-logos";
import { cn } from "@/lib/utils";

/**
 * Text-only placeholder used when a port has no art or its remote image fails
 * to load: gradient, console logo/name, game name and status. No third-party
 * artwork, nothing that can 404 into a broken image.
 */
export function PortImageFallback({
  game,
  system,
  statusLabel,
  className,
}: {
  game: string;
  system?: string;
  statusLabel?: string;
  className?: string;
}) {
  const logo = consoleLogoForSystem(system);
  return (
    <div
      data-testid="port-image-fallback"
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-surface-2 to-surface",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_8%,transparent)_0%,transparent_70%)]" />
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="relative z-10 max-h-11 max-w-[70%] rounded-md bg-white/95 px-3 py-1.5 object-contain shadow-xs"
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 px-3 text-center">
          {system && (
            <span className="inline-flex items-center rounded-full border border-border bg-surface/80 px-2 py-0.5">
              <SystemMark
                system={system}
                glyphClassName="size-3.5"
                labelClassName="text-[0.65rem] font-mono font-medium tracking-wider text-muted uppercase"
              />
            </span>
          )}
          <span className="line-clamp-3 text-sm font-semibold leading-snug text-foreground/70">
            {game}
          </span>
          {statusLabel && (
            <span className="rounded-full border border-border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-muted">
              {statusLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
