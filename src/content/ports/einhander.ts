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
  originalSystem: "PlayStation",
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
