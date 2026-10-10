import type { Port } from "@/lib/ports/schema";

export const rTypeDeltaRecomp: Port = {
  schema: "port",
  id: "r-type-delta-recomp",
  title: "R-Type Delta Recompiled",
  game: "R-Type Delta",
  developers: ["alexbeavs"],
  publisher: "Irem",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/r-type-delta-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Bare recompilation of R-Type Delta (PlayStation) from the PSXRecomp toolkit. It builds for Windows, Linux and macOS and needs your own disc plus a BIOS.",
  notesEs:
    "Recompilación básica de R-Type Delta (PlayStation) con el kit PSXRecomp. Compila para Windows, Linux y macOS y necesita tu propio disco y una BIOS.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/R-Type%20Delta%20(Europe).png",
    alt: "R-Type Delta (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/R-Type%20Delta%20(Europe).png",
      alt: "R-Type Delta (screenshot)",
      credit: "Libretro",
    },
  ],
};
