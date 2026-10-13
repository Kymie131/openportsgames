import type { Port } from "@/lib/ports/schema";

export const TokyoBusGuide: Port = {
  schema: "port",
  id: "tokyo-bus-guide",
  title: "Tokyo Bus Guide",
  game: "Tokyo Bus Guide",
  developers: ["lhsazevedo"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lhsazevedo/tbg-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Dreamcast",
};
