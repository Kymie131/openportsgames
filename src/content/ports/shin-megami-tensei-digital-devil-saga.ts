import type { Port } from "@/lib/ports/schema";

export const ShinMegamiTenseiDigitalDevilSaga: Port = {
  schema: "port",
  id: "shin-megami-tensei-digital-devil-saga",
  title: "Shin Megami Tensei: Digital Devil Saga",
  game: "Shin Megami Tensei: Digital Devil Saga",
  developers: ["Megami-Decomps"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Megami-Decomps/dds-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
