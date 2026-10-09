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
  originalSystem: "Microsoft Windows",
  notes:
    "Android port of Serious Sam: The First Encounter and The Second Encounter, built on the released Serious Engine source. It needs the original game files.",
  notesEs:
    "Port a Android de Serious Sam: The First Encounter y The Second Encounter, construido sobre el código liberado del motor Serious Engine. Necesita los archivos del juego original.",
};
