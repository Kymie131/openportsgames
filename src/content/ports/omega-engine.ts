import type { Port } from "@/lib/ports/schema";

export const OmegaEngine: Port = {
  schema: "port",
  id: "omega-engine",
  title: "OmegA-engine",
  kind: "tool",
  game: "OpenArena",
  developers: ["Bishop-333"],
  publisher: "OpenArena Team",
  originalYear: 2005,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "3.4.1", date: "2026-09-05" },
  sources: ["https://github.com/Bishop-333/OmegA-engine"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "OmegA-engine is an OpenArena engine based on Quake3e, maintained by Bishop-333. It aims to be fast and secure while remaining compatible with existing OpenArena mods.",
  summaryEs:
    "OmegA-engine es un motor de OpenArena basado en Quake3e, mantenido por Bishop-333. Busca ser rápido y seguro sin perder compatibilidad con los mods existentes de OpenArena.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/Bishop-333/OmegA-engine/releases/download/v3.4.1/omega-engine-macos-universal2.dmg",
      size: "11.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Bishop-333/OmegA-engine/releases/download/v3.4.1/omega-engine-windows-x86_64.zip",
      size: "4.6 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/Bishop-333/OmegA-engine/releases/download/v3.4.1/omega-engine-linux-arm64.tar.gz",
      size: "2.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Bishop-333/OmegA-engine/releases/download/v3.4.1/omega-engine-linux-x86_64.tar.gz",
      size: "2.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Bishop-333/OmegA-engine/releases/download/v3.4.1/omega-engine_3.4.1_amd64.deb",
      size: "1.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/omega-engine.svg",
    alt: "OmegA-engine (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Modern OpenArena engine based on Quake3e.",
  notesEs: "Motor moderno de OpenArena basado en Quake3e.",
};
