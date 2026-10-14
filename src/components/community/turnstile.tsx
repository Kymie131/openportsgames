"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileOptions = {
  sitekey: string;
  theme?: "auto" | "light" | "dark";
  size?: "normal" | "flexible" | "compact";
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

/** Load the Turnstile script once, on demand, and resolve when it is ready. */
function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");

    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => {
        scriptPromise = null;
        reject(new Error("turnstile_script_failed"));
      },
      { once: true },
    );

    if (!existing) {
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });

  return scriptPromise;
}

/**
 * Cloudflare Turnstile widget.
 *
 * The script is fetched only when the widget mounts. `resetKey` lets the owner
 * reset the challenge after a submit by bumping an integer.
 */
export function Turnstile({
  siteKey,
  onVerify,
  onExpire,
  onError,
  resetKey = 0,
  className,
}: {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  resetKey?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const callbacks = useRef({ onVerify, onExpire, onError });
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    callbacks.current = { onVerify, onExpire, onError };
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || widgetIdRef.current) return;
        const container = containerRef.current;
        const turnstile = window.turnstile;
        if (!container || !turnstile) return;
        widgetIdRef.current = turnstile.render(container, {
          sitekey: siteKey,
          theme: "auto",
          callback: (token) => callbacks.current.onVerify(token),
          "expired-callback": () => callbacks.current.onExpire?.(),
          "error-callback": () => callbacks.current.onError?.(),
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      const turnstile = window.turnstile;
      if (widgetIdRef.current && turnstile) {
        try {
          turnstile.remove(widgetIdRef.current);
        } catch {
          /* widget already gone */
        }
      }
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch {
        /* widget already gone */
      }
    }
  }, [resetKey]);

  if (!siteKey) return null;
  if (failed) return null;

  return <div ref={containerRef} className={className} />;
}
