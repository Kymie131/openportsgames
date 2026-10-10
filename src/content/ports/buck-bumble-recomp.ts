import type { Port } from "@/lib/ports/schema";

export const buckBumbleRecomp: Port = {
  schema: "port",
  id: "buck-bumble-recomp",
  title: "Buck Bumble Recompiled",
  game: "Buck Bumble",
  developers: ["PortsDR"],
  publisher: "Ubisoft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Buck%20Bumble%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Buck Bumble (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Buck%20Bumble%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Buck Bumble (screenshot)",
      credit: "Libretro",
    },
  ],
};
