import type { Port } from "@/lib/ports/schema";

export const therapyWithDrAlbertKruegerAndroid: Port = {
  schema: "port",
  id: "therapy-with-dr-albert-krueger-android",
  title: "Therapy With Dr. Albert Krueger (Android)",
  game: "Therapy With Dr. Albert Krueger",
  developers: ["Unkzittys"],
  publisher: "dino999z",
  originalYear: 2020,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.0.2", date: "2025-04-15" },
  sources: ["https://github.com/Unkzittys/TherapyWithDrAlbertKrueger_AndroidPort"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Therapy With Dr. Albert Krueger is a role-playing game.",
  summaryEs: "Therapy With Dr. Albert Krueger es un videojuego de rol.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/Unkzittys/TherapyWithDrAlbertKrueger_AndroidPort/releases/download/1.0.2/TherapyWithDrAlbertKrueger.apk",
      size: "90.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/therapy-with-dr-albert-krueger.svg",
    alt: "Therapy With Dr. Albert Krueger (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Android version of the Ren'Py horror RPG Therapy With Dr. Albert Krueger, made with the original creator's and Ren'Py's open-source engine. Latest release: 1.0.2.",
  notesEs: "Versión para Android del RPG de terror Therapy With Dr. Albert Krueger, hecho con el motor Ren'Py y con permiso del creador original. Última release: 1.0.2.",
};
