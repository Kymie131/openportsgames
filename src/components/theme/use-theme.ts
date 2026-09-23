"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type Theme } from "./theme";

function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.remove("dark", "light");
  el.classList.add(theme);
  el.setAttribute("data-theme", theme);
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable, fall back to default */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

const listeners = new Set<() => void>();
let theme = getInitialTheme();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return theme;
}

function setTheme(next: Theme) {
  theme = next;
  applyTheme(next);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((listener) => listener());
}

export function useTheme(): { theme: Theme; setTheme: (theme: Theme) => void } {
  const current: Theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark");

  return { theme: current, setTheme };
}
