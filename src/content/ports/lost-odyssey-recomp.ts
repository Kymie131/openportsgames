import type { Port } from "@/lib/ports/schema";

export const lostOdysseyRecomp: Port = {
  schema: "port",
  id: "lost-odyssey-recomp",
  title: "Lost Odyssey Recompiled",
  game: "Lost Odyssey",
  developers: ["freefrank"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/freefrank/LostOdysseyRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Lost Odyssey is a role-playing video game developed by Mistwalker and Feelplus and published by Microsoft Game Studios for the Xbox 360. Additionally, the game can be purchased from the Xbox digital store and played on Xbox One and Xbox Series consoles through the Xbox backwards compatibility program.",
  summaryEs: "Lost Odyssey es un RPG desarrollado por Mistwalker, junto con Feelplus, para Xbox 360.",
  notes:
    "Native recompilation of Lost Odyssey (Xbox 360). Builds for Windows x64, Linux x64, macOS arm64 and Android arm64, with Direct3D 12, Vulkan or Metal.",
  notesEs:
    "Recompilación nativa de Lost Odyssey (Xbox 360). Builds para Windows x64, Linux x64, macOS arm64 y Android arm64, con Direct3D 12, Vulkan o Metal.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/09/Lost_Odyssey_cover.jpg",
    alt: "Lost Odyssey (box art)",
    credit: "Wikipedia",
  },
};
