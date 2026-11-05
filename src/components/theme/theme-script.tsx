import { themeInitializer } from "./theme";

/**
 * Inline script that runs before the first paint so the theme class is set with
 * no flash of the wrong theme. Rendered as a plain script inside the document
 * head; `next/script` is not needed for a synchronous inline snippet.
 */
export function ThemeScript() {
  return (
    <script
      id="theme-init"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeInitializer }}
    />
  );
}
