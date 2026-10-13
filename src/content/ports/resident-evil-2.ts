import type { Port } from "@/lib/ports/schema";

export const ResidentEvil2: Port = {
  schema: "port",
  id: "resident-evil-2",
  title: "Resident Evil 2",
  game: "Resident Evil 2",
  developers: ["OpenBiohazard2"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenBiohazard2/OpenBiohazard2"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
