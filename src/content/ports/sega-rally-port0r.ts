import type { Port } from "@/lib/ports/schema";

export const segaRallyPort0r: Port = {
  schema: "port",
  id: "sega-rally-port0r",
  title: "Sega Rally (Port0r)",
  game: "Sega Rally Championship",
  developers: ["jacquesdupontd"],
  publisher: "Sega",
  originalYear: 1994,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch", "android", "linux", "macos"],
  status: "beta",
  release: { version: "0.5.3", date: "2026-10-08" },
  sources: ["https://github.com/jacquesdupontd/port0r"],
  website: "https://port0r.com",
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Arcade"],
  notes:
    "Sega Rally Championship (Sega, 1994) ported natively to Switch, Android, Linux and macOS from the arcade original. You need your own ROM.",
  notesEs:
    "Sega Rally Championship (Sega, 1994) portado de forma nativa a Switch, Android, Linux y macOS desde el arcade. Necesitas tu propia ROM.",
};
