import type { Port } from "@/lib/ports/schema";

export const downpourRecomp: Port = {
  schema: "port",
  id: "downpour-recomp",
  title: "Downpour Recompilation",
  game: "Silent Hill: Downpour",
  developers: ["Vatra Games"],
  publisher: "Konami Digital Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.1.8", date: "2026-09-02" },
  sources: ["https://github.com/LittleBitUA/DownpourRecomp"],
  license: { spdx: "BSD-3-Clause" },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-19",
  originalSystem: "Xbox 360",
  features: [
    "Native 60 FPS at 1080p (scales with your display)",
    "Keyboard and mouse controls",
    "Steam Deck support",
    "DLL-based mod framework",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-yard-twilight.png",
      alt: "Silent Hill: Downpour outdoors at twilight in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-bedroom-ua.png",
      alt: "Silent Hill: Downpour inside a lit bedroom in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-silent-hill-sign.png",
      alt: "The Silent Hill welcome sign in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
    {
      src: "https://raw.githubusercontent.com/LittleBitUA/DownpourRecomp/main/docs/screenshots/v1-preview-rusty-key.png",
      alt: "Picking up a rusty key in Downpour Recompilation",
      credit: "Downpour Recompilation",
    },
  ],
  notes:
    "Native Windows port of the Xbox 360 version of Silent Hill: Downpour, produced by statically recompiling the PowerPC binary into x64 code. Requires you to dump the game partition from your own legally owned disc or digital copy — the launcher does the extraction. The developers named it 'Downpour Recompilation' and confirmed the extensive use of AI-assisted tooling (Claude Code) during development.",
};
