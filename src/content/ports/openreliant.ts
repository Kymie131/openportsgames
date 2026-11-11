import type { Port } from "@/lib/ports/schema";

export const openreliant: Port = {
  schema: "port",
  id: "openreliant",
  title: "OpenReliant",
  game: "StarLancer",
  developers: ["OpenReliant"],
  publisher: "Microsoft",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.21.0", date: "2026-10-29" },
  sources: ["https://github.com/OpenReliant/openreliant"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "StarLancer is a space combat simulation developed by Digital Anvil and published by Microsoft in 2000. It follows a volunteer squadron fighting a war against the Coalition.",
  summaryEs:
    "StarLancer es una simulación de combate espacial desarrollada por Digital Anvil y publicada por Microsoft en 2000. Sigue a un escuadrón de voluntarios que lucha contra la Coalición.",
  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-linux-x86_64.tar.gz",
      size: "10.0 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-windows-x86_64.zip",
      size: "9.7 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-linux-aarch64.tar.gz",
      size: "9.4 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-macos-x86_64.tar.gz",
      size: "9.4 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-macos-aarch64.tar.gz",
      size: "9.0 MB",
    },
    {
      label: "Windows arm64",
      url: "https://github.com/OpenReliant/openreliant/releases/download/v1.0.0/openreliant-v1.0.0-windows-aarch64.zip",
      size: "8.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openreliant.svg",
    alt: "StarLancer (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "An open-source reimplementation of StarLancer's engine, written in Zig on SDL3. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto del motor de StarLancer, escrita en Zig sobre SDL3. Necesitas tu propia copia del juego.",
};
