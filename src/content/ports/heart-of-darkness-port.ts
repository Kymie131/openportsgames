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
  notes:
    "Heart of Darkness (Infogrames, 1998) reimplemented with SDL2 for Windows, Linux, macOS, Switch, Wii, Android, PS Vita, PSP and Xbox. Menus are still missing.",
  notesEs:
    "Heart of Darkness (Infogrames, 1998) reimplementado con SDL2 para Windows, Linux, macOS, Switch, Wii, Android, PS Vita, PSP y Xbox. Aún faltan los menús.",
};
