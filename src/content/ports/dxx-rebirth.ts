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
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Source port of Descent and Descent II with OpenGL rendering and modern hardware support. The last official release was published in 2018, when the project originator retired.",
};
