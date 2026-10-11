import type { Port } from "@/lib/ports/schema";

export const settlers2: Port = {
  schema: "port",
  id: "settlers-2",
  title: "Return to the Roots",
  game: "The Settlers II",
  developers: ["Return to the Roots community"],
  publisher: "Blue Byte",
  originalYear: 1996,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.9.5", date: "2022-02-28" },
  sources: ["https://github.com/Return-To-The-Roots/s25client"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: ["Cross-platform desktop builds", "Extended scenario and scripting support"],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Soporte ampliado de escenarios y scripting",
  ],
  notes: "Open source reimplementation of The Settlers II engine.",
  notesEs: "Reimplementación de código abierto del motor de The Settlers II.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Settlers%20II%2C%20The%20(Gold%20Edition)%20(1997).png",
    alt: "The Settlers II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Settlers%20II,%20The%20(Gold%20Edition)%20(1997).png",
      alt: "The Settlers II (screenshot)",
      credit: "Libretro",
    },
  ],
};
