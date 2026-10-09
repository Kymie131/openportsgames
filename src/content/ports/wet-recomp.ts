import type { Port } from "@/lib/ports/schema";

export const wetRecomp: Port = {
  schema: "port",
  id: "wet-recomp",
  title: "WetRecomp",
  game: "Wet",
  developers: ["nikolaygorb"],
  publisher: "Bethesda Softworks",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/WetRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of WET (2009, Xbox 360) with the ReXGlue SDK. Fully playable: video, audio, gameplay, achievements and progression.",
  notesEs:
    "Recompilación estática de WET (2009, Xbox 360) con el SDK ReXGlue. Completamente jugable: vídeo, audio, gameplay, logros y progresión.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/98/Wet_game.jpg",
    alt: "Wet (box art)",
    credit: "Wikipedia",
  },
};
