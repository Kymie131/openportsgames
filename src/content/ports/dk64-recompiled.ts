import type { Port } from "@/lib/ports/schema";

export const dk64Recompiled: Port = {
  schema: "port",
  id: "dk64-recompiled",
  title: "DK64 Recompiled",
  game: "Donkey Kong 64",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.2", date: "2026-09-02" },
  sources: ["https://github.com/Rainchus/Donkey-Kong-64-Recompiled"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Windows, Linux (x86-64/ARM64/Flatpak) and macOS ARM64 builds",
    "High refresh rates without affecting gameplay",
    "Widescreen and ultrawide with a repositionable HUD",
    "In-game config menus and instant saves",
  ],
  notes:
    "Native recompilation of Donkey Kong 64 produced with N64Recomp. The player loads their own legally obtained N64 ROM; the port recompiles the game code instead of emulating it.",
};