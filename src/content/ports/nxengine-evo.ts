import type { Port } from "@/lib/ports/schema";

export const nxEngine: Port = {
  schema: "port",
  id: "nxengine-evo",
  title: "NxEngine-Evo",
  game: "Cave Story",
  developers: ["Studio Pixel"],
  publisher: "Studio Pixel",
  originalYear: 2004,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "2.6.5-1", date: "2021-07-08" },
  sources: ["https://github.com/nxengine/nxengine-evo"],
  discord: "https://discord.gg/jnwmA7DhQh",
  license: {
    spdx: "GPL-3.0",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/nxengine/nxengine-evo/master/screenshot.png",
      alt: "Cave Story in NxEngine-Evo",
      credit: "NxEngine-Evo",
    },
  ],
  notes:
    "Refactored continuation of NxEngine, a native engine recreation of the freeware original Cave Story. The repository's official release predates recent commits; builds also track master.",
  notesEs:
    "Continuación refactorizada de NxEngine, una recreación nativa del motor gratuito original de Cave Story. La release oficial del repositorio es anterior a commits recientes; las builds también siguen master.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Cave_Story_title_screen.png",
    alt: "Cave Story (box art)",
    credit: "Wikipedia",
  },
};
