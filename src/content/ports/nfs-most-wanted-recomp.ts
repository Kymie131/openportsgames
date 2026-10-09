import type { Port } from "@/lib/ports/schema";

export const nfsMostWantedRecomp: Port = {
  schema: "port",
  id: "nfs-most-wanted-recomp",
  title: "NFSMW Recompiled",
  game: "Need for Speed: Most Wanted (2005)",
  developers: ["madelrandel-blip"],
  publisher: "Electronic Arts",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/madelrandel-blip/NFSMW-Recompiled",
    "https://github.com/StevensND/nfsmw-nx",
    "https://github.com/victorgbd/NFSMW-Recompiled-Mobile",
  ],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of the Xbox 360 version of Need for Speed: Most Wanted (2005) built on the ReXGlue SDK. The PowerPC code of your own default.xex is translated to C++ and rendered with a native Vulkan renderer; it is not an emulator and ships no game files. Community ports extend it to Nintendo Switch (nfsmw-nx) and Android (NFSMW-Recompiled-Mobile); the PC build needs the PAL Spain disc, while the console and mobile builds cover more editions.",
  notesEs:
    "Recompilación estática de la versión de Xbox 360 de Need for Speed: Most Wanted (2005), construida sobre el SDK ReXGlue. El código PowerPC de tu propio default.xex se traduce a C++ y se renderiza con un renderizador Vulkan nativo; no es un emulador y no incluye archivos del juego. Ports comunitarios lo llevan a Nintendo Switch (nfsmw-nx) y Android (NFSMW-Recompiled-Mobile); la build de PC necesita el disco PAL España, mientras que las de consola y móvil cubren más ediciones.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg",
    alt: "Need for Speed: Most Wanted (2005) (box art)",
    credit: "Wikipedia",
  },
};
