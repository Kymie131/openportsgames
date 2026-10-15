/* eslint-disable @next/next/no-before-interactive-script-outside-document -- App Router supports beforeInteractive in a root layout; the rule targets the Pages Router. */
import Script from "next/script";
import { themeInitializer } from "./theme";

/**
 * Inline script that runs before the first paint so the theme class is set with
 * no flash of the wrong theme. Uses `next/script` (beforeInteractive) instead of
 * a bare `<script>` element, which React warns about when rendering on the
 * client.
 */
export function ThemeScript() {
  return (
    <Script
      id="theme-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: themeInitializer }}
    />
  );
}
