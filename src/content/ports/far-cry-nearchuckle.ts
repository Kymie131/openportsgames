import type { Port } from "@/lib/ports/schema";

export const farCryNearChuckle: Port = {
  schema: "port",
  id: "far-cry-nearchuckle",
  title: "NearChuckle (Far Cry)",
  game: "Far Cry",
  developers: ["Player124413"],
  publisher: "Ubisoft",
  originalYear: 2004,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/NearChuckle-android-edition"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Far Cry is an anthology franchise of first-person shooter games published by Ubisoft. The first game, Far Cry, was developed by Crytek to premiere their CryEngine software, and released in March 2004. Subsequently, Ubisoft obtained the rights to the franchise and the bulk of the development is handled by Ubisoft Montreal with assistance from other Ubisoft satellite studios. The following games in the series have used a Ubisoft-modified version of the CryEngine, the Dunia Engine, allowing for open world gameplay.",
  summaryEs: "Far Cry es una serie de videojuegos de acción en primera persona creada por Crytek y distribuido por Ubisoft. El primer juego de la serie fue Far Cry, desarrollado en Alemania por Crytek y distribuido por Ubisoft en 2004 para Microsoft Windows. Debido al éxito que obtuvo se desarrollaron varias secuelas con el mismo título: Far Cry 2, Far Cry 3, Far Cry 4, Far Cry 5 y Far Cry 6. También se han lanzado expansiones e historias alternas como: Far Cry Instincts, Far Cry 3: Blood Dragon, Far Cry Primal y Far Cry New Dawn.",
  notes:
    "Android and Linux port of Far Cry (CryEngine 1) via SDL3, based on NearChuckle and using Mesa Zink for OpenGL over Vulkan. Note: it relies on the leaked Far Cry source and needs the game itself.",
  notesEs:
    "Port a Android y Linux de Far Cry (CryEngine 1) mediante SDL3, basado en NearChuckle y usando Mesa Zink para OpenGL sobre Vulkan. Aviso: se apoya en la fuente filtrada de Far Cry y necesita el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a5/Far_Cry_1_boxshot.jpg",
    alt: "Far Cry (box art)",
    credit: "Wikipedia",
  },
};
