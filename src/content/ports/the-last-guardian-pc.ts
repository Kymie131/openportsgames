import type { Port } from "@/lib/ports/schema";

export const theLastGuardianPc: Port = {
  schema: "port",
  id: "the-last-guardian-pc",
  title: "The Last Guardian (PC)",
  game: "The Last Guardian",
  developers: ["HayatoG"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2016,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "2026.10.27-4825a99", date: "2026-10-27" },
  sources: ["https://github.com/HayatoG/tlg_pc"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["PlayStation 4"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Last_Guardian_cover_art.jpg",
    alt: "The Last Guardian (box art)",
    credit: "Wikipedia",
  },
  summary: "The Last Guardian is a 2016 action-adventure game developed by Japan Studio and GenDesign and published by Sony Interactive Entertainment for the PlayStation 4. Players control a boy who befriends a giant legendary creature named Trico; the two must work together to escape the dangerous ruins of an ancient civilization.",
  summaryEs: "The Last Guardian , referido previamente bajo el nombre provisional Project Trico, es un videojuego perteneciente al género de acción-aventura desarrollado por el SIE Japan Studio y publicado por Sony Interactive Entertainment en exclusiva para la consola PlayStation 4. En el juego, los jugadores controlan a un niño que se hace amigo de una criatura gigante mitad pájaro, mitad mamífero, llamada Trico. The Last Guardian se lanzó en todo el mundo en diciembre del año 2016.",
  notes: "The Last Guardian (genDESIGN, 2016) running on Windows and Linux through a runtime layer, with mouse/keyboard, optional 60 fps and SMAA/CAS filters. Latest release: v2026.10.27-4825a99. You need your own copy of the game; no game or firmware files are included.",
  notesEs: "The Last Guardian (genDESIGN, 2016) en Windows y Linux mediante capa de ejecución, con ratón/teclado, 60 fps opcional y filtros SMAA/CAS. Última release: v2026.10.27-4825a99. Necesitas tu propia copia del juego; no incluye archivos del juego ni firmware.",
  features: [
    "Native Windows and Linux builds.",
    "Mouse and keyboard support, optional 60 fps.",
    "Requires your own PS4 game dump.",
  ],
  featuresEs: [
    "Builds nativas para Windows y Linux.",
    "Soporte de ratón y teclado, 60 fps opcional.",
    "Necesita tu propio volcado de PS4.",
  ],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/HayatoG/tlg_pc/releases/download/v2026.10.27-4825a99/tlg-windows-x86_64.zip",
    },
    {
      label: "Linux",
      url: "https://github.com/HayatoG/tlg_pc/releases/download/v2026.10.27-4825a99/tlg-linux-x86_64.tar.gz",
    },
  ],
};
