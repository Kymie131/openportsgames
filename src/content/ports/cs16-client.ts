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
  originalSystems: ["Windows"],
  summary: "Counter-Strike (CS) is a series of multiplayer tactical first-person shooter video games, in which opposing teams attempt to complete various objectives. The series began on Windows in 1999 with the release of the first game, Counter-Strike. It was initially released as a mod for Half-Life that was designed by Minh Le and Jess Cliffe before the rights to the mod's intellectual property were acquired by Valve, the developers of Half-Life, who then turned Counter-Strike into a retail product released in 2000.",
  summaryEs: "Counter-Strike (CS) es una serie de videojuegos multijugador de disparos en primera persona tácticos en los que equipos de terroristas luchan para perpetrar un acto de terror mientras que los antiterroristas intentan prevenirlo. La serie comenzó en Windows en 1999 con el lanzamiento del primer videojuego, Counter-Strike.",
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
