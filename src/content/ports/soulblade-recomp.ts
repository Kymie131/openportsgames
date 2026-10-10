import type { Port } from "@/lib/ports/schema";

export const soulbladeRecomp: Port = {
  schema: "port",
  id: "soulblade-recomp",
  title: "SoulBlade Recompiled",
  game: "SoulBlade",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
};
