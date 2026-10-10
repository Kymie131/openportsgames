import type { Port } from "@/lib/ports/schema";

export const syphonFilter2Recompiled: Port = {
  schema: "port",
  id: "syphon-filter-2-recompiled",
  title: "Syphon Filter 2 Recompiled",
  game: "Syphon Filter 2",
  developers: ["Alexbeav"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2000,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Alexbeav/syphon-filter-2-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Experimental recompilation of Syphon Filter 2 (PS1, USA, two discs, SCUS-94451) with PSXRecomp. A build-it-yourself Windows kit: a SETUP.bat detects the disc, downloads the tools and compiles, with no need for Visual Studio or Git. It is still an alpha (v0.1.2).",
  notesEs:
    "Recompilación experimental de Syphon Filter 2 (PS1, USA, dos discos, SCUS-94451) con PSXRecomp. Kit de compilación propia en Windows: un SETUP.bat detecta el disco, descarga las herramientas y compila, sin necesidad de Visual Studio ni Git. Todavía es una alpha (v0.1.2).",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Syphon%20Filter%202%20(Europe)%20(Rev%201).png",
    alt: "Syphon Filter 2 (box art)",
    credit: "Box art",
  },
};
