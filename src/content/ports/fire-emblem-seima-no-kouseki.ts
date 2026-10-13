import type { Port } from "@/lib/ports/schema";

export const FireEmblemSeimaNoKouseki: Port = {
  schema: "port",
  id: "fire-emblem-seima-no-kouseki",
  title: "Fire Emblem: Seima no Kouseki",
  game: "Fire Emblem: Seima no Kouseki",
  developers: ["laqieer"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/laqieer/fireemblem8j"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
