import type { Port } from "@/lib/ports/schema";

export const Unvanquished: Port = {
  schema: "port",
  id: "unvanquished",
  title: "Unvanquished",
  game: "Unvanquished",
  developers: ["Unvanquished"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Unvanquished/Unvanquished"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes:
    "Unvanquished is a free and open source FPS/RTS hybrid game powered by the Daemon game engine. Historically based on Tremulous as a continuation with decades of work over it.",
  notesEs:
    "Unvanquished es un juego FPS/RTS híbrido libre y de código abierto sobre el motor Daemon. Nació como continuación de Tremulous y lleva años de trabajo encima.",
};
