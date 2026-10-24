import type { Port } from "@/lib/ports/schema";

export const Contra: Port = {
  schema: "port",
  id: "contra",
  title: "Contra",
  game: "Contra",
  developers: ["vermiceli"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vermiceli/nes-contra-us"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Super Contra, known as Super Contra: The Alien Strikes Back in Japan, is a run and gun video game developed and published by Konami for arcades. After location testing in December 1987, it had a wide release in January 1988. It is the sequel to Contra and part of the Contra series. The game stars Bill Rizer and Lance Bean as they are sent to thwart another alien invasion from the vicious Red Falcon.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "An annotated disassembly with supplemental materials of the Contra (US) and Probotector NES game.",
  notesEs: "Desensamblado anotado, con material adicional, de Contra (US) y Probotector para NES.",
};
