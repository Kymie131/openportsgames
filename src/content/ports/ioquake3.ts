import type { Port } from "@/lib/ports/schema";

export const ioquake3: Port = {
  schema: "port",
  id: "ioquake3",
  title: "ioquake3",
  game: "Quake III Arena",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/ioquake/ioq3"],
  website: "https://www.ioquake3.org/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  notes:
    "Community source port of Quake III Arena, actively maintained by the ioquake3 team. Distributed as a rolling 'latest' release from the official website. Requires the original game files.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/903791/152968830-dd08737b-55c6-4ac6-9610-31121ea0e8c6.png",
      alt: "ioquake screenshot",
      credit: "ioquake",
    },
  ],
};
