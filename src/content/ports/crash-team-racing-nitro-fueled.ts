import type { Port } from "@/lib/ports/schema";

export const crashTeamRacingNitroFueled: Port = {
  schema: "port",
  id: "crash-team-racing-nitro-fueled",
  title: "Crash Team Racing: Nitro-Fueled (PC)",
  game: "Crash Team Racing: Nitro-Fueled",
  developers: ["T3CHNOLOG1C", "GetLostIn"],
  publisher: "Activision",
  originalYear: 2019,
  portType: "runtime-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/T3CHNOLOG1C/SacredFire",
    "https://github.com/GetLostIn/CTR-NitroFueled-PC",
  ],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 4"],
  notes:
    "Unofficial native port of Crash Team Racing: Nitro-Fueled (PS4, CUSA13795 v1.21). It runs the game's original x86-64 code directly on the CPU with a small runtime based on bbport, and translates the PS4 graphics to Vulkan through components derived from shadPS4; it is not a conventional emulator. Linux builds come from SacredFire and the Windows fork from GetLostIn. Requires your own decrypted copy of the base game and update 1.21.",
  notesEs:
    "Port nativo no oficial de Crash Team Racing: Nitro-Fueled (PS4, CUSA13795 v1.21). Ejecuta el código x86-64 original del juego directamente en la CPU con un runtime pequeño basado en bbport, y traduce los gráficos de PS4 a Vulkan mediante componentes derivados de shadPS4; no es un emulador convencional. Las builds de Linux vienen de SacredFire y la bifurcación de Windows, de GetLostIn. Requiere tu propia copia descifrada del juego base y la actualización 1.21.",
  requirements: {
    minimum:
      "Windows 10/11 or Linux with a Vulkan-capable GPU, plus your own decrypted CUSA13795 copy with update 1.21.",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/36/Crash_Team_Racing_Nitro-Fueled_cover_art.jpg",
    alt: "Crash Team Racing: Nitro-Fueled (box art)",
    credit: "Wikipedia",
  },
};
