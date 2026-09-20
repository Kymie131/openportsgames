import type { Locale } from "./locales";

const en = {
  common: {
    skipToContent: "Skip to content",
  },
  theme: {
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
  },
  language: {
    label: "Language",
    english: "English",
    spanish: "Español",
  },
  nav: {
    home: "Home",
  },
  brand: {
    tagline:
      "A curated catalog of native game ports: decompilations, recompilations and engine reimplementations for PC and Android.",
  },
  footer: {
    about:
      "A non-profit catalog of native game ports. It links only to official project sources and hosts no downloadable files.",
    licenses: "Code is MIT licensed. Catalog data is CC BY 4.0.",
    notAffiliated: "Not affiliated with any video game company.",
    editOnGitHub: "Edit this page on GitHub",
  },
};

export type Messages = typeof en;

const es: Messages = {
  common: {
    skipToContent: "Saltar al contenido",
  },
  theme: {
    switchToDark: "Cambiar a tema oscuro",
    switchToLight: "Cambiar a tema claro",
  },
  language: {
    label: "Idioma",
    english: "English",
    spanish: "Español",
  },
  nav: {
    home: "Inicio",
  },
  brand: {
    tagline:
      "Un catálogo curado de ports nativos de videojuegos: decompilaciones, recompilaciones y reimplementaciones de motor para PC y Android.",
  },
  footer: {
    about:
      "Un catálogo sin fines de lucro de ports nativos. Enlaza solo a fuentes oficiales de los proyectos y no aloja archivos descargables.",
    licenses: "Código bajo licencia MIT. Datos del catálogo bajo CC BY 4.0.",
    notAffiliated: "Sin afiliación con ninguna compañía de videojuegos.",
    editOnGitHub: "Editar esta página en GitHub",
  },
};

export const dictionaries: Record<Locale, Messages> = { en, es };
export const defaultLocale: Locale = "en";