import type { Port } from "@/lib/ports/schema";

export const Klonoa2LunateasVeil: Port = {
  schema: "port",
  id: "klonoa-2-lunateas-veil",
  title: "Klonoa 2: Lunatea's Veil",
  game: "Klonoa 2: Lunatea's Veil",
  developers: ["entriphy"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/entriphy/kl2_lv_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
