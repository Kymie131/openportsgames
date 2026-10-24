import type { Port } from "@/lib/ports/schema";

export const seriousSamAndroid: Port = {
  schema: "port",
  id: "serious-sam-android",
  title: "Serious Sam (Android)",
  game: "Serious Sam: The First Encounter",
  developers: ["Skyrimus"],
  publisher: "Croteam",
  originalYear: 2001,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Skyrimus/Serious-Sam-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Serious Sam: The First Encounter is a 2001 first-person shooter game developed by Croteam and published by Gathering of Developers. It is the first in the Serious Sam series. The game follows the soldier Sam \"Serious\" Stone, who is sent back in time to ancient Egypt in 1378 BCE to uncover information about the technologically advanced civilisation of the Sirians that could help humanity survive the attacks of extraterrestrial forces in the 22nd century.",
  summaryEs: "Serious Sam: The First Encounter es un videojuego de disparos publicado por Gathering of Developers en 2001.",
  notes:
    "Android port of Serious Sam: The First Encounter and The Second Encounter, built on the released Serious Engine source. It needs the original game files.",
  notesEs:
    "Port a Android de Serious Sam: The First Encounter y The Second Encounter, construido sobre el código liberado del motor Serious Engine. Necesita los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b4/Serious_Sam_-_The_First_Encounter.jpg",
    alt: "Serious Sam: The First Encounter (box art)",
    credit: "Wikipedia",
  },
};
