import type { Port } from "@/lib/ports/schema";

export const unrealTournamentAndroid: Port = {
  schema: "port",
  id: "unreal-tournament-android",
  title: "Unreal Tournament (Android)",
  game: "Unreal Tournament",
  developers: ["Andiweli"],
  publisher: "Epic Games",
  originalYear: 1999,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Andiweli/UT99-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android port of Unreal Tournament 99 (v400) for 32 and 64-bit devices, playable with a controller, touchscreen or keyboard and mouse. It needs the original game files.",
  notesEs:
    "Port a Android de Unreal Tournament 99 (v400) para dispositivos de 32 y 64 bits, jugable con mando, pantalla táctil o teclado y ratón. Necesita los archivos del juego original.",
};
