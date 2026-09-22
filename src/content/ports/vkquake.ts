import type { Port } from "@/lib/ports/schema";

export const vkQuake: Port = {
  schema: "port",
  id: "vkquake",
  title: "vkQuake",
  game: "Quake",
  developers: ["id Software"],
  publisher: "GT Interactive",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.36.0", date: "2026-08-29" },
  sources: ["https://github.com/Novum/vkQuake"],
  license: {
    spdx: "GPL-2.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Vulkan port of QuakeSpasm based on id Software's GPL-2.0 Quake source release. Requires Quake gamedata (shareware episode freely available).",
};