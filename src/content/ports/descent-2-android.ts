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
  release: { version: "0.12", date: "2026-10-29" },
  sources: ["https://github.com/wootbeer/Descent2-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Descent II is a 1996 first-person shooter game developed by Parallax Software and first published for MS-DOS by Interplay Productions. A version for the PlayStation was released under the title Descent Maximum. It is the second installment in the Descent video game series and the sequel to Descent.",
  summaryEs: "Descent II es un videojuego de disparos publicado por Interplay Entertainment en 1996.",
  notes:
    "Source port of Descent II (MS-DOS) for Android, with touch controls, add-on mission packs and optional redbook music support. It needs the player's own copy of the game files.",
  notesEs:
    "Port del código fuente de Descent II (MS-DOS) para Android, con controles táctiles, paquetes de misiones adicionales y soporte opcional de la música redbook. Necesita los archivos del juego original del jugador.",
  downloads: [
    {
      label: "Android x64",
      url: "https://github.com/wootbeer/Descent2-Android/releases/download/v0.12/Descent2-Android-0.12-x86_64-release.apk",
      size: "852 KB",
    },
    {
      label: "Android x86",
      url: "https://github.com/wootbeer/Descent2-Android/releases/download/v0.12/Descent2-Android-0.12-x86-release.apk",
      size: "830 KB",
    },
    {
      label: "Android arm64",
      url: "https://github.com/wootbeer/Descent2-Android/releases/download/v0.12/Descent2-Android-0.12-arm64-v8a-release.apk",
      size: "823 KB",
    },
    {
      label: "Android armv7",
      url: "https://github.com/wootbeer/Descent2-Android/releases/download/v0.12/Descent2-Android-0.12-armeabi-v7a-release.apk",
      size: "780 KB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Descent%20II%20(1996).png",
    alt: "Descent II (box art)",
    credit: "Box art",
  },
};
