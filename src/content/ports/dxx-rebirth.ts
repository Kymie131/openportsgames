import type { Port } from "@/lib/ports/schema";

export const dxxRebirth: Port = {
  schema: "port",
  id: "dxx-rebirth",
  title: "DXX-Rebirth",
  game: "Descent",
  developers: ["Parallax Software"],
  publisher: "Interplay Productions",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.60.0-beta2", date: "2018-04-16" },
  sources: ["https://github.com/dxx-rebirth/dxx-rebirth"],
  website: "https://www.dxx-rebirth.com/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Source port of Descent and Descent II with OpenGL rendering and modern hardware support. The last official release was published in 2018, when the project originator retired.",
  notesEs:
    "Port de código fuente de Descent y Descent II con renderizado OpenGL y soporte de hardware moderno. La última release oficial se publicó en 2018, cuando se retiró el creador del proyecto.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a9/Descent_II_cover_art.png",
    alt: "Descent (box art)",
    credit: "Wikipedia",
  },
};
