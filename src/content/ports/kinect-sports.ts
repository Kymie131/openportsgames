import type { Port } from "@/lib/ports/schema";

export const KinectSports: Port = {
  schema: "port",
  id: "kinect-sports",
  title: "Kinect Sports",
  game: "Kinect Sports",
  developers: ["SebaaMG"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SebaaMG/Kinect-Sports-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
};
