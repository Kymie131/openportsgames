import type { Port } from "@/lib/ports/schema";

export const rockbotDreamcast: Port = {
  schema: "port",
  id: "rockbot-dreamcast",
  title: "Rockbot (Dreamcast)",
  game: "Rockbot",
  developers: ["arcadenea"],
  publisher: "Upperland Studio",
  originalYear: 2010,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["dreamcast"],
  status: "beta",
  release: { version: "1.1.0", date: "2016-01-30" },
  sources: ["https://github.com/arcadenea/rockbot"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Rockbot is an American music group from Richmond, Virginia, with a sound self-defined as \"Atari rock\", combining synth pop, video game sound effects, and heavy metal music. As bassist Jonathan Sullivan, formerly with the group Jack's Mannequin, and guitarist Clark Fraley joined to form the band, they wished to feature a female singer, and were introduced to New York-based Apollo Smile. Reinforced by Bryan Stiglich on drums, Adam Thomas on Moog synthesizer, and guitarist Steve Burner, Rockbot went on to record debut extended play Joystick in 2002.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "rockbot-v1.1-data-dc",
      url: "https://github.com/arcadenea/rockbot/releases/download/1.1.0/rockbot-v1.1-data-dc.zip",
      size: "2.5 MB",
    },
    {
      label: "rockbot-v1.1-dc",
      url: "https://github.com/arcadenea/rockbot/releases/download/1.1.0/rockbot-v1.1-dc.zip",
      size: "11.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/rockbot.svg",
    alt: "Rockbot (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Rockbot (Upperland Studio, 2010) running on dreamcast through source port. Latest release: 1.1.0. The original game is free software, so no commercial copy is needed.",
  notesEs: "Rockbot (Upperland Studio, 2010) en dreamcast mediante port de código. Última release: 1.1.0. El juego original es software libre, así que no hace falta una copia comercial.",
};
