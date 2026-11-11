import type { Port } from "@/lib/ports/schema";

export const nvdemuApeescaperecompMacwindowslinux: Port = {
  schema: "port",
  id: "nvdemu-apeescaperecomp-macwindowslinux",
  title: "Ape Escape Recompiled",
  game: "Ape Escape",
  developers: ["nvd123-YT"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nvd123-YT/ApeEscapeRecompiled"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-23",
  originalSystems: ["PlayStation"],
  downloads: [
    {
      label: "macOS x64",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-macos-x86_64.dmg",
      size: "78.0 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-macos-arm64.dmg",
      size: "69.1 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-macos-x86_64.zip",
      size: "56.5 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-macos-arm64.zip",
      size: "47.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-linux-x86_64.AppImage",
      size: "47.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/nvd123-YT/ApeEscapeRecompiled/releases/download/macos-nightly/ApeEscapeRecomp-v2.0.0-windows-x64.zip",
      size: "44.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ape%20Escape%20(USA).png",
    alt: "Ape Escape (box art)",
    credit: "Box art",
  },
  summary: "Ape Escape is a series of video games developed primarily by Japan Studio and published and owned by Sony Interactive Entertainment. The series incorporates ape-related humour, unique gameplay, and a wide variety of pop culture references. The first game in the series is the first to require the DualShock or Dual Analog controller to play.",
  summaryEs: "Ape Escape es un videojuego de plataformas.",
  notes: "Ape Escape Recompiled: static recompilation for Windows, macOS and Linux, with nightly builds. Bring your own Ape Escape disc image.",
  notesEs: "Ape Escape Recompiled: recompilación estática para Windows, macOS y Linux, con builds nocturnos. Aporta tu propia imagen de disco de Ape Escape.",
};
