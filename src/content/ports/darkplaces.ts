import type { Port } from "@/lib/ports/schema";

export const darkPlaces: Port = {
  schema: "port",
  id: "darkplaces",
  title: "DarkPlaces",
  game: "Quake",
  developers: ["Lord Lam"],
  publisher: "id Software",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/DarkPlacesEngine/DarkPlaces"],
  discord: "https://discord.com/invite/ZHT9QeW",
  website: "https://icculus.org/twilight/darkplaces/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Quake engine with client-server multiplayer and a fullscreen console. The newest tag, v20140513, is a dated build stamp rather than a semantic version, so no release version is recorded.",
  notesEs:
    "Motor de Quake con multijugador cliente-servidor y consola a pantalla completa. La etiqueta más reciente, v20140513, es una marca de build fechada y no una versión semántica, así que no se registra versión de release.",
};
