import type { Port } from "@/lib/ports/schema";

export const DomaDays: Port = {
  schema: "port",
  id: "doma-days",
  title: "DOMA Days",
  game: "DOMA Days",
  developers: ["iestyn129"],
  publisher: "Big Blue Bubble",
  originalYear: 2025,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.02", date: "2025-04-02" },
  sources: ["https://github.com/iestyn129/DOMADays"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows", "Macintosh"],
  summary:
    "DOMA Days is a 2025 visual novel developed and published by Big Blue Bubble. A satire set in the My Singing Monsters universe, it follows an agent of the Department of Monstrous Anomalies through a workday that turns into a time loop.",
  summaryEs:
    "DOMA Days es una novela visual de 2025 desarrollada y publicada por Big Blue Bubble. Una sátira ambientada en el universo de My Singing Monsters que sigue a un agente del Departamento de Anomalías Monstruosas en una jornada laboral que se convierte en un bucle temporal.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/iestyn129/DOMADays/releases/download/1.02/DOMADays.v1.02.zip",
      size: "194.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/doma-days.svg",
    alt: "DOMA Days (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A decompilation of the Big Blue Bubble game `DOMA Days` (v1.01).",
  notesEs: "Decompilación del juego de Big Blue Bubble «DOMA Days» (v1.01).",
};
