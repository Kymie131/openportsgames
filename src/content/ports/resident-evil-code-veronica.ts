import type { Port } from "@/lib/ports/schema";

export const ResidentEvilCodeVeronica: Port = {
  schema: "port",
  id: "resident-evil-code-veronica",
  title: "Resident Evil - Code: Veronica",
  game: "Resident Evil - Code: Veronica",
  developers: ["fmil95"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/fmil95/recv-dc-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
