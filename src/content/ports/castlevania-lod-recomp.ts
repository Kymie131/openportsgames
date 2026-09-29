import type { Port } from "@/lib/ports/schema";

export const castlevaniaLodRecomp: Port = {
  schema: "port",
  id: "castlevania-lod-recomp",
  title: "Castlevania: Legacy of Darkness Recompiled",
  game: "Castlevania: Legacy of Darkness",
  developers: ["Konami"],
  publisher: "Konami",
  originalYear: 1999,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.27", date: "2026-09-28" },
  sources: ["https://github.com/fliperama86/cvlod_recomp"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Aspect ratio modes (Original, Expand, Manual) cycled with F6",
    "Anti-aliasing up to 8x MSAA, cycled with F7",
    "Configurable gamepad controls through controls.json",
  ],
  notes:
    "Static recompilation of Castlevania: Legacy of Darkness with N64Recomp. The player supplies their own legally dumped cartridge. macOS builds target Apple Silicon and link against Homebrew SDL2.",
};
