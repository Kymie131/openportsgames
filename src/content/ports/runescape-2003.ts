import type { Port } from "@/lib/ports/schema";

export const Runescape2003: Port = {
  schema: "port",
  id: "runescape-2003",
  title: "Runescape (2003)",
  game: "Runescape (2003)",
  developers: ["2003scape"],
  publisher: "Unknown",
  originalYear: 2003,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/2003scape/rsc-c"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "RuneScape is a fantasy massively multiplayer online role-playing game (MMORPG) developed and published by Jagex. Created by Andrew Gower with assistance from his brother Paul Gower, it was first released on 4 January 2001 as a Java-based browser game; the original Java client was later largely replaced by the standalone C++ NXT client in 2016. The game is set in the medieval fantasy world of Gielinor, where players control customisable avatars and pursue open-ended activities such as questing, combat, skill training, trading, socialising, minigames and cooperative play.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/2003scape/rsc-c/releases/download/mudclient177-rev1/mudclient177-windows-x86_64.zip",
      size: "2.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/2003scape/rsc-c/releases/download/mudclient177-rev1/mudclient177-linux-x86_64.tar.gz",
      size: "1.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/runescape-2003.svg",
    alt: "Runescape (2003) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "🍫 runescape classic client ported to C.",
  notesEs: "Cliente de RuneScape Classic de 2003 portado a C.",
};
