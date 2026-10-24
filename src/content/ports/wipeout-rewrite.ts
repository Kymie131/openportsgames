import type { Port } from "@/lib/ports/schema";

export const wipeoutRewrite: Port = {
  schema: "port",
  id: "wipeout-rewrite",
  title: "wipeout-rewrite",
  game: "wipEout",
  developers: ["Philip Rebohle"],
  publisher: "Psygnosis",
  originalYear: 1995,
  genre: "racing",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/phoboslab/wipeout-rewrite"],
  license: {
    spdx: "NOASSERTION",
    note: "no project license file found in the repository",
  },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Wipeout 3 is a 1999 racing video game developed by Psygnosis and published by Sony Computer Entertainment for the PlayStation. It is the fourth game and third main instalment in the Wipeout series, following Wipeout 64 (1998), and the third on PlayStation following Wipeout 2097 (1996). It is the first game in the series to be released on neither a Sega or Nintendo console nor personal computers. Players control anti-gravity ships and use weapons to force other contenders out of the race.",
  summaryEs: "El término Wipeout puede referirse a:",
  notes:
    "Rewritten version of the classic PlayStation wipEout. No license file and no tagged releases are published, so no version is recorded.",
  notesEs:
    "Versión reescrita del clásico wipEout de PlayStation. No se publican archivo de licencia ni releases etiquetadas, así que no se registra versión.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/WipEout%20(USA).png",
    alt: "wipEout (box art)",
    credit: "Box art",
  },
};
