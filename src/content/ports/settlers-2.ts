import type { Port } from "@/lib/ports/schema";

export const settlers2: Port = {
  schema: "port",
  id: "settlers-2",
  title: "Return to the Roots",
  game: "The Settlers II",
  developers: ["Return to the Roots community"],
  publisher: "Blue Byte",
  originalYear: 1996,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.9.5", date: "2022-02-28" },
  sources: ["https://github.com/Return-To-The-Roots/s25client"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: ["Cross-platform desktop builds", "Extended scenario and scripting support"],
  notes: "Open source reimplementation of The Settlers II engine.",
  screenshots: [
    {
      src: "https://github.com/Return-To-The-Roots/s25client/workflows/Unit%20tests/badge.svg",
      alt: "GHA Unit tests",
      credit: "Return-To-The-Roots",
    },
    {
      src: "https://github.com/Return-To-The-Roots/s25client/workflows/Static%20analysis/badge.svg",
      alt: "Static analysis",
      credit: "Return-To-The-Roots",
    },
    {
      src: "https://coveralls.io/repos/github/Return-To-The-Roots/s25client/badge.svg?branch=master",
      alt: "Coverage Status Coveralls",
      credit: "Return-To-The-Roots",
    },
  ],
};
