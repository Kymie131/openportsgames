import type { Port } from "@/lib/ports/schema";

export const descentAndroid: Port = {
  schema: "port",
  id: "descent-android",
  title: "Descent (Android)",
  game: "Descent",
  developers: ["wootbeer"],
  publisher: "Interplay Productions",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/Descent-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  notes:
    "Source port of Descent (MS-DOS) for Android, forked from Descent Mobile, with on-screen touch controls, gyro support and add-on mission packs. It needs the player's own copy of the game files.",
  notesEs:
    "Port del código fuente de Descent (MS-DOS) para Android, fork de Descent Mobile, con controles táctiles en pantalla, soporte de giroscopio y paquetes de misiones adicionales. Necesita los archivos del juego original del jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Descent%20(1995).png",
    alt: "Descent (box art)",
    credit: "Box art",
  },
};
