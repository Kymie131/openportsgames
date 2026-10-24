import type { Port } from "@/lib/ports/schema";

export const einhanderRecomp: Port = {
  schema: "port",
  id: "einhander",
  title: "Einhander Recompiled",
  game: "Einhander",
  developers: ["strider973"],
  publisher: "Square",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/strider973/Einhander-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Einhänder is a 1997 scrolling shooter video game developed and published by Square for the PlayStation. It was released in Japan on November 20, 1997, and in North America on May 5, 1998, by Sony Computer Entertainment. It was also re-released for the Japanese PlayStation Network on June 25, 2008. The name Einhänder is German and denotes a type of sword that is wielded with one hand, here used to refer to the single manipulator arm possessed by the player's spacecraft.",
  summaryEs: "Einhänder es un videojuego desarrollado por Square para la consola PlayStation de Sony. Fue puesto a la venta el 20 de noviembre de 1997 en Japón y el 30 de abril de 1998 en Estados Unidos. Posteriormente, se volvió a publicar en 2008 y 2012 en la plataforma PlayStation Network de Japón para su descarga vía Internet.",
  notes:
    "Static recompilation of Einhander (PS1, USA) built on PSXRecomp. It requires your own disc image; it uses OpenBIOS for generation unless you supply your own SCPH BIOS. The project is still a scaffold, with no published release.",
  notesEs:
    "Recompilación estática de Einhander (PS1, USA) sobre PSXRecomp. Requiere tu propia imagen de disco; usa OpenBIOS para la generación salvo que aportes tu propia BIOS SCPH. El proyecto todavía está en fase de armazón, sin release publicado.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0c/Einhander.JPG",
    alt: "Einhander (box art)",
    credit: "Wikipedia",
  },
};
