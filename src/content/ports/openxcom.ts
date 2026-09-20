import type { Port } from "@/lib/ports/schema";

export const openXcom: Port = {
  schema: "port",
  id: "openxcom",
  title: "OpenXcom",
  game: "X-COM: UFO Defense",
  developers: ["MicroProse"],
  publisher: "MicroProse",
  originalYear: 1994,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0", date: "2014-06-13" },
  sources: ["https://github.com/SupSuper/OpenXcom"],
  website: "https://openxcom.org/",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Open source reimplementation of the original X-COM engine. The tagged v1.0 release is from 2014; current builds are distributed via openxcom.org. Requires original X-COM data.",
};