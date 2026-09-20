import type { Locale } from "./locales";

const en = {
  common: {
    skipToContent: "Skip to content",
    mainNav: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
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
    ports: "Ports",
    pc: "PC",
    android: "Android",
  },
  platforms: {
    windows: "Windows",
    linux: "Linux",
    macos: "macOS",
    android: "Android",
    pc: "PC",
    androidScope: "Android",
  },
  catalog: {
    title: "Catalog",
    subtitle:
      "Browse native ports: decompilations, recompilations and engine reimplementations.",
    subtitlePc: "Native ports for PC: Windows, Linux and macOS.",
    subtitleAndroid: "Native ports compiled for Android.",
    searchPlaceholder: "Search by port, game or developer…",
    filterPlatform: "Platform",
    filterStatus: "Status",
    filterState: "State",
    filterAll: "All",
    statusStable: "Stable",
    statusBeta: "Beta",
    statusAlpha: "Alpha",
    stateVerified: "Verified",
    stateUnverified: "Not verified",
    sortLabel: "Sort",
    sortRelevance: "Relevance",
    sortTitle: "Title",
    sortNewest: "Newest",
    showing: "Showing",
    of: "of",
    labels: { one: "port", other: "ports" },
    empty: "No ports match the current filters.",
    clearFilters: "Clear filters",
    tested: "Tested",
    version: "Version",
    officialSource: "Official source",
    openSource: "Open source",
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
    mainNav: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
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
    ports: "Puertos",
    pc: "PC",
    android: "Android",
  },
  platforms: {
    windows: "Windows",
    linux: "Linux",
    macos: "macOS",
    android: "Android",
    pc: "PC",
    androidScope: "Android",
  },
  catalog: {
    title: "Catálogo",
    subtitle:
      "Explora los ports nativos: decompilaciones, recompilaciones y reimplementaciones de motor.",
    subtitlePc: "Ports nativos para PC: Windows, Linux y macOS.",
    subtitleAndroid: "Ports nativos compilados para Android.",
    searchPlaceholder: "Busca por port, juego o desarrollador…",
    filterPlatform: "Plataforma",
    filterStatus: "Estado",
    filterState: "Estado de verificación",
    filterAll: "Todos",
    statusStable: "Estable",
    statusBeta: "Beta",
    statusAlpha: "Alfa",
    stateVerified: "Verificado",
    stateUnverified: "No verificado",
    sortLabel: "Ordenar",
    sortRelevance: "Relevancia",
    sortTitle: "Título",
    sortNewest: "Más reciente",
    showing: "Mostrando",
    of: "de",
    labels: { one: "port", other: "ports" },
    empty: "Ningún port coincide con los filtros actuales.",
    clearFilters: "Limpiar filtros",
    tested: "Probado",
    version: "Versión",
    officialSource: "Fuente oficial",
    openSource: "Código abierto",
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