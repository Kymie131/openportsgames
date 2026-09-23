import type { Port } from "@/lib/ports/schema";

export const triAevum: Port = {
  schema: "port",
  id: "triaevum",
  title: "TriAevum",
  game: "The Legend of Zelda: Ocarina of Time 3D",
  developers: ["Grezzo", "Nintendo"],
  publisher: "Nintendo",
  originalYear: 2011,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.6.0-alpha.2c", date: "2026-09-12" },
  sources: ["https://github.com/coccofresco/TriAevum"],
  license: { spdx: "GPL-3.0-or-later" },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 3DS",
  features: [
    "NRI/Vulkan renderer with cel shading and outlines",
    "60/90 FPS interpolation of the 30 Hz game state",
    "Single-screen Head-Up Display reimplementation",
    "Controller-free setup from a decrypted 3DS ROM",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/default-kokiri-forest.png",
      alt: "Kokiri Forest in the default build of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/default-title.png",
      alt: "Title screen of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/alpha2-kokiri.png",
      alt: "Kokiri Forest in the alpha 2 build of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/alpha2-mounted-linux.png",
      alt: "Riding Epona on Linux in the alpha 2 build of TriAevum",
      credit: "TriAevum",
    },
  ],
  notes:
    "Native recompilation of The Legend of Zelda: Ocarina of Time 3D from the Nintendo 3DS version. The README states the project's development is entirely AI-assisted under human direction. The follow-up 0.6.0-alpha.3b release was withdrawn by the author; the catalog lists the last usable release. Requires a decrypted ROM from a copy the player owns.",
};
