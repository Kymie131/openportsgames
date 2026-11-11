import type { Port } from "@/lib/ports/schema";

export const alabasterDawnAndroid: Port = {
  schema: "port",
  id: "alabaster-dawn-android",
  title: "Alabaster Dawn (Android)",
  game: "Alabaster Dawn",
  developers: ["moronigranja"],
  publisher: "Radical Fish Games",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: "0.9.0", date: "2026-10-15" },
  sources: ["https://github.com/moronigranja/alabaster-android"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "Android",
      url: "https://github.com/moronigranja/alabaster-android/releases/download/v0.9.0/RadicalFishPorts-Android-0.9.0.apk",
      size: "1.2 MB",
    },
  ],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/3110760/header.jpg",
    alt: "Alabaster Dawn (cover art)",
    credit: "Steam",
  },
  summary: "Alabaster Dawn is a role-playing game published by Radical Fish Games in 2026.",
  summaryEs: "Alabaster Dawn es un videojuego de rol publicado por Radical Fish Games en 2026.",
  notes: "Unofficial Android WebView port of Alabaster Dawn (Radical Fish Games) plus a desktop controller fix. No game files included: you need your own copy. Latest release: v0.9.0.",
  notesEs: "Port no oficial para Android mediante WebView de Alabaster Dawn (Radical Fish Games) más un arreglo de mando en escritorio. No incluye archivos del juego: necesitas tu propia copia. Última release: v0.9.0.",
};
