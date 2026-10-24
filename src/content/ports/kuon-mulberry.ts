import type { Port } from "@/lib/ports/schema";

export const KuonMulberry: Port = {
  schema: "port",
  id: "kuon-mulberry",
  title: "Kuon (Mulberry)",
  game: "Kuon (Mulberry)",
  developers: ["weirdbeardgame"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/weirdbeardgame/Mulberry"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Kuon is a 2004 survival horror video game developed by FromSoftware for the PlayStation 2. Published by FromSoftware in Japan, it was released in North America by Agetec, and in Europe by Nobilis and Indie Games Productions in 2006. The narrative takes place in Japan's Heian period, and follows the actions of three protagonists during an outbreak of monsters at Fujiwara Manor in Kyoto; Utsuki, daughter of the onmyōji Ashiya Doman, Doman's apprentice Sakuya, and the veteran onmyōji Abe no Seimei.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://openportsgames.com/covers/generated/kuon-mulberry.svg",
    alt: "Kuon (Mulberry) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Decompilation of Kuon (PlayStation 2) through the Mulberry project. The repository is public and hosts the source code.",
  notesEs:
    "Decompilación de Kuon (PlayStation 2) mediante el proyecto Mulberry. El repositorio es público y aloja el código fuente.",
};
