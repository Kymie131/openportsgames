import type { Port } from "@/lib/ports/schema";

export const redriver2: Port = {
  schema: "port",
  id: "redriver2",
  title: "REDRIVER2",
  game: "Driver 2",
  developers: ["Reflections Interactive"],
  publisher: "Infogrames",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "7.4-rc2", date: "2022-02-04" },
  sources: ["https://github.com/OpenDriver2/REDRIVER2"],
  website: "https://opendriver2.github.io/",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation",
  features: [
    "Game logic translated from MIPS back to C, no interpreter involved",
    "Types and function names recovered from the retail .SYM debug symbols",
    "Windows and 64-bit Linux builds",
  ],
  featuresEs: [
    "Lógica del juego traducida de MIPS a C, sin intérprete de por medio",
    "Tipos y nombres de función recuperados de los símbolos de depuración .SYM minoristas",
    "Builds para Windows y Linux de 64 bits",
  ],
  notes:
    "Driver 2 disassembled and translated to C by the OpenDriver2 team. Geometry still runs on Psy-X, which descends from an emulator, so it is not a from-scratch port. Needs the data files from your own PlayStation disc.",
  notesEs:
    "Driver 2 desensamblado y traducido a C por el equipo OpenDriver2. La geometría aún corre sobre Psy-X, que desciende de un emulador, así que no es un port desde cero. Necesita los archivos de datos de tu propio disco de PlayStation.",
  screenshots: [
    {
      src: "https://i.ibb.co/2q1pp06/red2.png",
      alt: "Driving in REDRIVER2",
      credit: "OpenDriver2",
    },
    {
      src: "https://i.ibb.co/JxfC5xX/aaa.png",
      alt: "City scene in REDRIVER2",
      credit: "OpenDriver2",
    },
    {
      src: "https://i.ibb.co/ydLsK9z/aaa.png",
      alt: "Another scene in REDRIVER2",
      credit: "OpenDriver2",
    },
  ],
};
