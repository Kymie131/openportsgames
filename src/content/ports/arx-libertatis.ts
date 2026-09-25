import type { Port } from "@/lib/ports/schema";

export const arxLibertatis: Port = {
  schema: "port",
  id: "arx-libertatis",
  title: "Arx Libertatis",
  game: "Arx Fatalis",
  developers: ["Arkane Studios"],
  publisher: "JoWooD Productions",
  originalYear: 2002,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.2.1", date: "2022-04-10" },
  sources: ["https://github.com/arx/ArxLibertatis"],
  website: "https://arx-libertatis.org/",
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://wiki.arx-libertatis.org/images/e/e1/Castle.jpg",
      alt: "Castle of Arx explored in the Arx Libertatis port",
      credit: "Arx Libertatis",
    },
    {
      src: "https://wiki.arx-libertatis.org/images/1/1b/Main-menu.jpg",
      alt: "Main menu of Arx Fatalis running on Arx Libertatis",
      credit: "Arx Libertatis",
    },
  ],
  notes:
    "Cross-platform source port of the first-person RPG Arx Fatalis. A free playable experience is possible using the game demo.",
};
