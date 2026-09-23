import { themeInitializer } from "./theme";

/**
 * Inline script rendered in the head so the theme class is set before the
 * first paint and there is no flash of the wrong theme.
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />;
}
