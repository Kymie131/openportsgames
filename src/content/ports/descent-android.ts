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
  summary: "Descent 3 is a first-person shooter video game developed by Outrage Entertainment and published by Interplay Entertainment. It was originally released for Microsoft Windows in North America on June 17, 1999. Descent 3 is the third game in the Descent video game series and a sequel to Descent II. The game takes place in a science fiction setting of the Solar System where the player is cast as Material Defender, a mercenary who must help an organization known as the Red Acropolis Research Team to stop robots infected by an alien virus.",
  summaryEs: "El término inglés descent puede referirse a:",
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
