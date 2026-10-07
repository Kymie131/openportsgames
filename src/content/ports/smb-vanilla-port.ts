import type { Port } from "@/lib/ports/schema";

export const smbVanillaPort: Port = {
  schema: "port",
  id: "smb-vanilla-port",
  title: "SMB Vanilla",
  game: "Super Mario Bros.",
  developers: ["nukep"],
  publisher: "Nintendo",
  originalYear: 1985,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nukep/smb-vanilla-port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Decompilation-based native port of Super Mario Bros. (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Super Mario Bros. (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20Bros.%20(World).png",
    alt: "Super Mario Bros. (box art)",
    credit: "Box art",
  },
};
