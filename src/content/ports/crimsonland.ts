import type { Port } from "@/lib/ports/schema";

export const Crimsonland: Port = {
  schema: "port",
  id: "crimsonland",
  title: "Crimsonland",
  game: "Crimsonland",
  developers: ["banteg"],
  publisher: "Reflexive Entertainment",
  originalYear: 2003,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.24.0", date: "2026-10-31" },
  sources: ["https://github.com/banteg/crimson"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "crimsonland-0.24.0",
      url: "https://github.com/banteg/crimson/releases/download/v0.24.0/crimsonland-0.24.0.tar.gz",
      size: "725 KB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2f/Crimsonland.jpg",
    alt: "Crimsonland (box art)",
    credit: "Wikipedia",
  },
  summary: "Crimsonland is a top-down arena shooter video game with role-playing elements. It was developed by Finnish studio 10tons Entertainment and published by Reflexive Entertainment in 2003. In 2014 a re-release through digital distribution followed.",
  summaryEs: "Crimsonland es un videojuego de género matamarcianos, lanzado el 22 de abril de 2003. El jugador debe defenderse contra miles de extraterrestres que lo rodean. Este objetivo se logra utilizando una variedad de armas, extras y bonficaciones.",
  notes: "a faithful rewrite of crimsonland (2003).",
  notesEs: "Reescritura fiel de Crimsonland (2003).",
};
