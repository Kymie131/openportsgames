import type { Port } from "@/lib/ports/schema";

export const inotia3Vita: Port = {
  schema: "port",
  id: "inotia-3-vita",
  title: "Inotia 3 (PS Vita)",
  game: "Inotia 3: Children of Carnia",
  developers: ["MetalSyntax"],
  publisher: "Com2uS",
  originalYear: 2009,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "1.02", date: "2026-10-18" },
  sources: ["https://github.com/MetalSyntax/Inotia3-vita"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Inotia 3: Children of Carnia is a role-playing game published by Com2uS for Other, released in 2009.",
  summaryEs: "Inotia 3: Children of Carnia es un videojuego de rol publicado por Com2uS para Other, lanzado en 2009.",
  summaryGenerated: true,
  notes:
    "Inotia 3: Children of Carnia (Com2uS, 2009), originally an Android RPG, ported natively to PS Vita through a runtime loader. You need the game data.",
  notesEs:
    "Inotia 3: Children of Carnia (Com2uS, 2009), un RPG de Android, portado de forma nativa a PS Vita con un cargador de runtime. Necesitas sus datos.",
};
