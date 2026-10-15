import type { Port } from "@/lib/ports/schema";

export const descent2Android: Port = {
  schema: "port",
  id: "descent-2-android",
  title: "Descent II (Android)",
  game: "Descent II",
  developers: ["wootbeer"],
  publisher: "Interplay Productions",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/Descent2-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "MS-DOS",
  notes:
    "Source port of Descent II (MS-DOS) for Android, with touch controls, add-on mission packs and optional redbook music support. It needs the player's own copy of the game files.",
  notesEs:
    "Port del código fuente de Descent II (MS-DOS) para Android, con controles táctiles, paquetes de misiones adicionales y soporte opcional de la música redbook. Necesita los archivos del juego original del jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Descent%20II%20(1996).png",
    alt: "Descent II (box art)",
    credit: "Box art",
  },
};
