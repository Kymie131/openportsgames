import type { Port } from "@/lib/ports/schema";

export const PizzaTower: Port = {
  schema: "port",
  id: "pizza-tower",
  title: "Pizza Tower",
  game: "Pizza Tower",
  developers: ["setupwitch"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/setupwitch/Pizza-Tower-EXtracted"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
