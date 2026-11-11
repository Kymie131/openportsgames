import type { Port } from "@/lib/ports/schema";

export const ResidentEvil4DreamcastPortRe4dc: Port = {
  schema: "port",
  id: "resident-evil-4-dreamcast-port-re4dc",
  title: "Resident Evil 4 (Dreamcast port, re4dc)",  game: "Resident Evil 4",
  developers: ["lamb2k"],  publisher: "Capcom",  originalYear: 2005,
  portType: "source-port",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lamb2k/re4dc"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  wip: true,
  sourceVerified: true,  originalSystems: ["GameCube"],  summary: "Resident Evil 4 is a 2005 survival horror game developed and published by Capcom. Special agent Leon S. Kennedy is sent to a remote European village to rescue the US president's daughter from a cult infected by a parasite.",  summaryEs: "Resident Evil 4 es un juego de terror y supervivencia de 2005 desarrollado y publicado por Capcom. El agente especial Leon S. Kennedy viaja a un remoto pueblo europeo para rescatar a la hija del presidente de un culto infectado por un parásito.",  cover: {
    src: "https://openportsgames.com/covers/generated/resident-evil-4-dreamcast-port-re4dc.svg",
    alt: "Resident Evil 4 (Dreamcast port, re4dc) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Work-in-progress Resident Evil 4 port for Sega Dreamcast, with native PowerVR rendering, VMU saves and Flycast-tested play builds.",
  notesEs:
    "Port de Resident Evil 4 para Sega Dreamcast, en desarrollo, con renderizado PowerVR nativo y guardados en VMU.",
};
