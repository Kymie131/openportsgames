import type { Port } from "@/lib/ports/schema";

export const area51Source: Port = {
  schema: "port",
  id: "area-51-source",
  title: "Area 51 (Source Restoration)",
  game: "Area 51",
  developers: ["ProjectDreamland"],
  publisher: "Midway Games",
  originalYear: 2005,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ProjectDreamland/area51"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Preservation project working to make the leaked Area 51 (2005) PC source buildable on modern systems. Note: it uses the leaked source, is not yet playable, and needs the retail game data.",
  notesEs:
    "Proyecto de preservación que busca hacer compilable en sistemas modernos la fuente filtrada de Area 51 (2005) para PC. Aviso: usa la fuente filtrada, todavía no es jugable y necesita los datos del juego comercial.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/Area_51_cover_art.jpg",
    alt: "Area 51 (box art)",
    credit: "Wikipedia",
  },
};
