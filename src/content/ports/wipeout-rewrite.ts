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
  originalSystem: "PlayStation",
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
