import type { Port } from "@/lib/ports/schema";

export const heartOfDarknessPort: Port = {
  schema: "port",
  id: "heart-of-darkness-port",
  title: "Heart of Darkness (SDL port)",
  game: "Heart of Darkness",
  developers: ["MaximLopez"],
  publisher: "Infogrames",
  originalYear: 1998,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "switch", "wii", "android", "psvita", "psp", "xbox"],
  status: "beta",
  release: { version: "0.2.9", date: "2020-08-03" },
  sources: ["https://github.com/MaximLopez/HeartOfDarkness-SDL"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows", "PlayStation"],
  summary: "Heart of Darkness is a cinematic platform video game developed by French developer Amazing Studio for the PlayStation and Microsoft Windows.",
  summaryEs: "Heart of Darkness es un videojuego de Amazing Studio, publicado en 1998 por Infogrames e Interplay para Microsoft Windows en PC y PlayStation. Para Game Boy Advance se anunció en 2001, pero nunca fue lanzado. Es el primer juego que tuvo una orquesta para hacer la banda sonora; pero, debido a los retrasos, no logró ser el primero en ser lanzado con esta novedad. A pesar de que su público principal son niños, el juego muestra varias escenas de muerte y, además, es considerado uno de los juegos más difíciles.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Blackwood%27s_Magazine_-_1899_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    alt: "Heart of Darkness (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Heart of Darkness (Infogrames, 1998) reimplemented with SDL2 for Windows, Linux, macOS, Switch, Wii, Android, PS Vita, PSP and Xbox. Menus are still missing.",
  notesEs:
    "Heart of Darkness (Infogrames, 1998) reimplementado con SDL2 para Windows, Linux, macOS, Switch, Wii, Android, PS Vita, PSP y Xbox. Aún faltan los menús.",
};
