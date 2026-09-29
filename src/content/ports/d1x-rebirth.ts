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
  aiDisclosure: false,
  verified: false,
  notes:
    "Source port of Descent from the same project as DXX-Rebirth, covering the first game rather than Descent II. Published as tagged builds without GitHub releases.",
};
