"use client";

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "opg-theme";

/**
 * Applied by the inline head script before first paint. Defaults to dark;
 * a light system preference is honored, and an explicit choice stored in
 * localStorage always wins.
 */
export const themeInitializer = `
try {
  var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
  var theme = stored === 'light' || stored === 'dark'
    ? stored
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  var el = document.documentElement;
  el.classList.remove('dark', 'light');
  el.classList.add(theme);
  el.setAttribute('data-theme', theme);
} catch (e) {}
`;