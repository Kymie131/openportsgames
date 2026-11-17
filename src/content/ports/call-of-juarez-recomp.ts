import type { Port } from "@/lib/ports/schema";

export const callOfJuarezRecomp: Port = {
  schema: "port",
  id: "call-of-juarez-recomp",
  title: "Call of Juarez Recompiled",
  game: "Call of Juarez",
  developers: ["rexelflip2-sudo"],
  publisher: "Ubisoft",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rexelflip2-sudo/Call-of-Juarez-Xbox-360-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["Xbox 360"],
  summary:
    "Call of Juarez is a 2006 first-person shooter developed by Techland and published by Ubisoft. Set in the American Old West, it alternates between the gunslinger Ray and the fugitive Billy in a hunt for a legendary treasure.",
  summaryEs:
    "Call of Juarez es un shooter en primera persona de 2006 desarrollado por Techland y publicado por Ubisoft. Ambientado en el Salvaje Oeste, alterna entre el pistolero Ray y el fugitivo Billy en la búsqueda de un tesoro legendario.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/rexelflip2-sudo/Call-of-Juarez-Xbox-360-Recomp/releases/download/Converter/ISO_Converter.rar",
      size: "95 KB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020/header.jpg?t=1729249870",
    alt: "Call of Juarez (Steam header)",
    credit: "Steam",
  },
  notes: "Call of Juarez Recompiled: native recompilation of Call of Juarez for windows. Bring your own copy of the game.",
  notesEs: "Call of Juarez Recompiled: recompilación nativo de Call of Juarez para windows. Aporta tu propia copia del juego.",
};
