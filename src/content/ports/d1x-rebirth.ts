import type { Port } from "@/lib/ports/schema";

export const d1xRebirth: Port = {
  schema: "port",
  id: "d1x-rebirth",
  title: "D1X-Rebirth",
  game: "Descent",
  developers: ["Parallax Software"],
  publisher: "Interplay Productions",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/dxx-rebirth/dxx-rebirth"],
  license: {
    spdx: "GPL-3.0",
    note: "Parallax license relicensed to GPLv3 with an additional permission exception.",
  },
  verified: false,
  summary: "Descent 3 is a first-person shooter video game developed by Outrage Entertainment and published by Interplay Entertainment. It was originally released for Microsoft Windows in North America on June 17, 1999. Descent 3 is the third game in the Descent video game series and a sequel to Descent II. The game takes place in a science fiction setting of the Solar System where the player is cast as Material Defender, a mercenary who must help an organization known as the Red Acropolis Research Team to stop robots infected by an alien virus.",
  summaryEs: "El término inglés descent puede referirse a:",
  notes:
    "Source port of Descent from the same project as DXX-Rebirth, covering the first game rather than Descent II. Published as tagged builds without GitHub releases.",
  notesEs:
    "Port de código fuente de Descent del mismo proyecto que DXX-Rebirth, centrado en el primer juego en lugar de Descent II. Se publica como builds etiquetadas sin releases en GitHub.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/Descent_cover.png",
    alt: "Descent (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
