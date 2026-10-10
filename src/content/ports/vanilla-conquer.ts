import type { Port } from "@/lib/ports/schema";

export const vanillaConquer: Port = {
  schema: "port",
  id: "vanilla-conquer",
  title: "Vanilla Conquer",
  game: "Command & Conquer",
  developers: ["The Assembly Armada"],
  publisher: "Westwood Studios",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheAssemblyArmada/Vanilla-Conquer"],
  discord: "https://discord.gg/UnWK2Tw",
  license: {
    spdx: "NOASSERTION",
    note: "project-specific license terms, not an OSI license",
  },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for the original Command & Conquer. The single GitHub release is a prerelease.",
  notesEs:
    "Reimplementación del motor del Command & Conquer original. La única release de GitHub es preliminar.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Command%20and%20Conquer%20(1995).png",
    alt: "Command & Conquer (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Command%20and%20Conquer%20(1995).png",
      alt: "Command & Conquer (screenshot)",
      credit: "Libretro",
    },
  ],
};
