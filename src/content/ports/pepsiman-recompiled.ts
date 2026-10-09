import type { Port } from "@/lib/ports/schema";

export const pepsimanRecompiled: Port = {
  schema: "port",
  id: "pepsiman-recompiled",
  title: "Pepsiman Recompiled",
  game: "Pepsiman",
  developers: ["kem0x"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/kem0x/RepsiMan"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Pepsiman (PS1) that runs in the browser through WebAssembly, using the PSXRecomp runtime. You bring your own copy of the game; it adds 60 FPS, widescreen or a 4:3 option, browser saves and offline play as a PWA.",
  notesEs:
    "Recompilación de Pepsiman (PS1) que corre en el navegador vía WebAssembly, con el runtime de PSXRecomp. Aportas tu propia copia del juego; añade 60 FPS, widescreen u opción 4:3, guardado en el navegador y modo offline como PWA.",
};
