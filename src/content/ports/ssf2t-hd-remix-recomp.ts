import type { Port } from "@/lib/ports/schema";

export const ssf2tHdRemixRecomp: Port = {
  schema: "port",
  id: "ssf2t-hd-remix-recomp",
  title: "Super Street Fighter II Turbo HD Remix Recompiled",
  game: "Super Street Fighter II Turbo HD Remix",
  developers: ["saulob"],
  publisher: "Capcom",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-10-18" },
  sources: ["https://github.com/saulob/ssf2t-hd-remix-recompiled"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9b/SSF_HD_Remix_Boxart.jpg",
    alt: "Super Street Fighter II Turbo HD Remix (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Super Street Fighter II Turbo HD Remix (Capcom, 2008) running natively on Windows and Linux through static recompilation. Bring your own game package.",
  notesEs:
    "Super Street Fighter II Turbo HD Remix (Capcom, 2008) en Windows y Linux de forma nativa mediante recompilación estática. Aporta tu propio paquete.",
};
