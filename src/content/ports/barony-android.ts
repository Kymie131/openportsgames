import type { Port } from "@/lib/ports/schema";

export const baronyAndroid: Port = {
  schema: "port",
  id: "barony-android",
  title: "Barony Android Port",
  game: "Barony",
  developers: ["DifferentNet"],
  publisher: "Turning Wheel LLC",
  originalYear: 2015,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DifferentNet/barony-android-port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android fork of the Barony source, published with the developer's permission. The APK contains engine code only and needs an owned Barony v5.0.2 installation for its data.",
  notesEs:
    "Fork para Android del código de Barony, publicado con permiso de sus desarrolladores. El APK solo contiene el motor y necesita una instalación propia de Barony v5.0.2 para los datos.",
};
