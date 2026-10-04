import type { Port } from "@/lib/ports/schema";

export const openage: Port = {
  schema: "port",
  id: "openage",
  title: "openage",
  game: "Age of Empires II",
  developers: ["Ensemble Studios"],
  publisher: "Microsoft",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.0", date: "2024-11-26" },
  sources: ["https://github.com/SFTtech/openage"],
  website: "https://openage.dev",
  license: {
    spdx: "GPL-3.0-or-later",
  },
  verified: false,
  notes:
    "Volunteer project recreating the Genie engine used by Age of Empires, Age of Empires II and Star Wars: Galactic Battlegrounds. The last tagged release is 0.6.0, although development continues.",
  notesEs:
    "Proyecto voluntario que recrea el motor Genie usado por Age of Empires, Age of Empires II y Star Wars: Galactic Battlegrounds. La última release etiquetada es 0.6.0, aunque el desarrollo continúa.",
};
