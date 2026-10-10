import type { Port } from "@/lib/ports/schema";

export const armyOfTwoRecomp: Port = {
  schema: "port",
  id: "army-of-two-recomp",
  title: "Army of Two Recompiled",
  game: "Army of Two",
  developers: ["nikolaygorb"],
  publisher: "Electronic Arts",
  originalYear: 2008,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/ArmyOfTwoRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Army of Two (Xbox 360) with the ReXGlue SDK to native Windows and Linux. It offers Vulkan or Direct3D 12 output and a 60 FPS option, and requires your own game data.",
  notesEs:
    "Recompilación estática de Army of Two (Xbox 360) con el SDK ReXGlue a Windows y Linux nativos. Ofrece salida Vulkan o Direct3D 12 y una opción de 60 FPS, y requiere tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/72/ArmyofTwo_front-1-.jpg",
    alt: "Army of Two (box art)",
    credit: "Wikipedia",
  },
};
