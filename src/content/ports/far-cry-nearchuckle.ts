import type { Port } from "@/lib/ports/schema";

export const farCryNearChuckle: Port = {
  schema: "port",
  id: "far-cry-nearchuckle",
  title: "NearChuckle (Far Cry)",
  game: "Far Cry",
  developers: ["Player124413"],
  publisher: "Ubisoft",
  originalYear: 2004,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/NearChuckle-android-edition"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android and Linux port of Far Cry (CryEngine 1) via SDL3, based on NearChuckle and using Mesa Zink for OpenGL over Vulkan. Note: it relies on the leaked Far Cry source and needs your own copy of the game.",
  notesEs:
    "Port a Android y Linux de Far Cry (CryEngine 1) mediante SDL3, basado en NearChuckle y usando Mesa Zink para OpenGL sobre Vulkan. Aviso: se apoya en la fuente filtrada de Far Cry y necesita tu propia copia del juego.",
};
