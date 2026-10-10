import type { Port } from "@/lib/ports/schema";

export const cs16Client: Port = {
  schema: "port",
  id: "cs16-client",
  title: "CS16Client",
  game: "Counter-Strike",
  developers: ["Velaron", "a1batross"],
  publisher: "Valve",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Velaron/cs16-client"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Reverse-engineered client for Counter-Strike 1.6 aimed at mobile and other unsupported platforms. It runs the original game data and ships builds for Android, Windows and Linux.",
  notesEs:
    "Cliente reversado de Counter-Strike 1.6 pensado para móviles y otras plataformas no soportadas. Ejecuta los datos del juego original e incluye builds para Android, Windows y Linux.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/67/Counter-Strike_Box.jpg",
    alt: "Counter-Strike (box art)",
    credit: "Wikipedia",
  },
};
