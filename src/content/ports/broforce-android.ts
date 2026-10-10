import type { Port } from "@/lib/ports/schema";

export const broforceAndroid: Port = {
  schema: "port",
  id: "broforce-android",
  title: "Broforce (Android)",
  game: "Broforce",
  developers: ["BelmanteGu"],
  publisher: "Free Lives",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BelmanteGu/BroforceAndroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android port of Broforce designed for gamepads. It ships no game files and needs your own Steam copy.",
  notesEs:
    "Port no oficial para Android de Broforce pensado para mandos. No incluye archivos del juego y necesita tu propia copia de Steam.",
};
