import type { Port } from "@/lib/ports/schema";

export const ringRacersAndroid: Port = {
  schema: "port",
  id: "ring-racers-android",
  title: "Dr. Robotnik's Ring Racers (Android)",
  game: "Dr. Robotnik's Ring Racers",
  developers: ["bitten2up"],
  publisher: "Kart Krew",
  originalYear: 2024,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "freeware",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/bitten2up/RingRacers"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android build of Dr. Robotnik's Ring Racers, the free kart racer from Kart Krew based on Sonic Robo Blast 2. It is a standalone fangame with no original assets.",
  notesEs:
    "Build para Android de Dr. Robotnik's Ring Racers, el juego de karts gratuito de Kart Krew basado en Sonic Robo Blast 2. Es un fangame independiente y sin recursos originales.",
};
