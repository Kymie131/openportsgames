import type { Port } from "@/lib/ports/schema";

export const SexyParodius: Port = {
  schema: "port",
  id: "sexy-parodius",
  title: "Sexy Parodius",
  game: "Sexy Parodius",
  developers: ["NJH-1001"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NJH-1001/SexyParoRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
