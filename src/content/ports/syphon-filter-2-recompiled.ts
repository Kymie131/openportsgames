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
  sources: ["https://github.com/alexbeavs-ps1-ports/syphon-filter-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Syphon Filter 2 is a 2000 third-person shooter video game developed by Eidetic and published by Sony Computer Entertainment for the PlayStation. It is the second installment in the Syphon Filter franchise and a sequel to 1999 Syphon Filter. It is the last game in the series to be released by 989 Studios in North America. In 2022, it was added to the premium collection for PlayStation Plus.",
  summaryEs: "Syphon Filter 2 es un videojuego perteneciente al género de disparos y sigilo en tercera persona para la consola PlayStation 1, realizado por \"989 Studios\". Éste es el segundo juego de la saga Syphon Filter, e inicia exactamente donde terminó el primer videojuego Syphon Filter.",
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
