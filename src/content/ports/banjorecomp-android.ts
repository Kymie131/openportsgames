import type { Port } from "@/lib/ports/schema";

export const BanjorecompAndroid: Port = {
  schema: "port",
  id: "banjorecomp-android",
  title: "BanjoRecomp Android",  game: "Banjo-Kazooie",
  developers: ["AurelioB"],  publisher: "Nintendo",  originalYear: 1998,
  portType: "recompilation",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",  platforms: ["android"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-06-14" },
  sources: ["https://github.com/AurelioB/BanjoRecomp-Android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Nintendo 64"],  summary: "Banjo-Kazooie is a 1998 platform game developed by Rare and published by Nintendo for the Nintendo 64. The bear Banjo and the bird Kazooie explore Gruntilda's lair to rescue Banjo's sister Tooty.",  summaryEs: "Banjo-Kazooie es un juego de plataformas de 1998 desarrollado por Rare y publicado por Nintendo para Nintendo 64. El oso Banjo y la pájara Kazooie recorren la guarida de Gruntilda para rescatar a Tooty, la hermana de Banjo.",  downloads: [
    {
      label: "Android",
      url: "https://github.com/AurelioB/BanjoRecomp-Android/releases/download/android-v0.1.1/BanjoRecompiled-v0.1.1-Android-ARM64.apk",
      size: "8.3 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Banjo_Kazooie_Cover.png",
    alt: "Banjo-Kazooie (box art)",
    credit: "Wikipedia",
  },
  notes: "Android Port of Banjo-Kazooie made using N64: Recompiled.",
  notesEs: "Port para Android de Banjo-Kazooie hecho con N64: Recompiled.",
};
