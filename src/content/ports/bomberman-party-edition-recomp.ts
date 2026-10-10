import type { Port } from "@/lib/ports/schema";

export const bombermanPartyEditionRecomp: Port = {
  schema: "port",
  id: "bomberman-party-edition-recomp",
  title: "Bomberman Party Edition Recompiled",
  game: "Bomberman Party Edition",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Bomberman Party Edition (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Bomberman Party Edition (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20-%20Party%20Edition%20(USA).png",
    alt: "Bomberman Party Edition (box art)",
    credit: "Box art",
  },
};
