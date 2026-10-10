import type { Port } from "@/lib/ports/schema";

export const marathonAndroid: Port = {
  schema: "port",
  id: "marathon-android",
  title: "Marathon (Android)",
  game: "Marathon",
  developers: ["daniele-rapagnani"],
  publisher: "Bungie",
  originalYear: 1994,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/daniele-rapagnani/alephone-android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Macintosh",
  notes:
    "Android port of the Aleph One engine, used to run the Marathon games with their original data. It builds on the open-source Aleph One codebase.",
  notesEs:
    "Port a Android del motor Aleph One, usado para ejecutar los juegos Marathon con sus datos originales. Se basa en el código abierto de Aleph One.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/87/Marathon_%28video_game%29.jpg",
    alt: "Marathon (box art)",
    credit: "Wikipedia",
  },
};
