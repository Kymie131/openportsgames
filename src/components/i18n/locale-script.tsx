import { LOCALE_STORAGE_KEY } from "@/lib/i18n/locales";

/**
 * Inline script that sets the document language before first paint using the
 * stored preference or, on a first visit, the browser language. Mirrors the
 * detection logic in LocaleProvider so the two never disagree.
 */
export function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
try {
  var stored = localStorage.getItem('${LOCALE_STORAGE_KEY}');
  var lang = stored === 'es' || stored === 'en'
    ? stored
    : (navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
  document.documentElement.lang = lang;
} catch (e) {}
`,
      }}
    />
  );
}
