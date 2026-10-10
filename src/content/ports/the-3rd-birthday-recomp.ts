import type { Port } from "@/lib/ports/schema";

export const the3rdBirthdayRecomp: Port = {
  schema: "port",
  id: "the-3rd-birthday-recomp",
  title: "The 3rd Birthday Recompiled",
  game: "The 3rd Birthday",
  developers: ["BasedYuki"],
  publisher: "Square Enix",
  originalYear: 2010,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BasedYuki/the-3rd-birthday-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation Portable",
  notes:
    "Native PC port of The 3rd Birthday (PSP) through static recompilation. It includes no game data and needs your own ISO.",
  notesEs:
    "Port nativo para PC de The 3rd Birthday (PSP) mediante recompilación estática. No incluye datos del juego y necesita tu propia ISO.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/The_3rd_Birthday_Cover.png",
    alt: "The 3rd Birthday (box art)",
    credit: "Wikipedia",
  },
};
