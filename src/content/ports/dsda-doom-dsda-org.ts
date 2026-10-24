import type { Port } from "@/lib/ports/schema";

export const DsdaDoomDsdaOrg: Port = {
  schema: "port",
  id: "dsda-doom-dsda-org",
  title: "DSDA-Doom",
  game: "DSDA-Doom",
  developers: ["dsda-org"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dsda-org/dsda-doom"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "DSDA may refer to:Defence Storage and Distribution Agency, a previous executive agency of the Government of the United Kingdom under the Ministry of Defence (MoD). Dual SIM Dual Active, a dual SIM phone that can use two SIM cards at the same time. Doom Speed Demo Archive, an archive for Doom speedruns.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://openportsgames.com/covers/generated/dsda-doom.svg",
    alt: "DSDA-Doom (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "This is a successor of prboom+ with extra tooling for demo recording and playback, with a focus on speedrunning and quality of life.",
  notesEs:
    "Sucesor de prboom+ con herramientas para grabar y reproducir demos, centrado en speedrunning.",
};
