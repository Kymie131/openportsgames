import type { Port } from "@/lib/ports/schema";

export const nfsiise: Port = {
  schema: "port",
  id: "nfsiise",
  title: "NFSIISE",
  game: "Need for Speed II SE",
  developers: ["zaps166"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "runtime-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/zaps166/NFSIISE"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Need for Speed II is a 1997 racing video game released for PlayStation and Microsoft Windows. It is the second installment in the Need for Speed series, a sequel Need for Speed III: Hot Pursuit was released in 1998.",
  summaryEs: "Need for Speed II es un videojuego de carreras de autos, que fue lanzado en 1997; desarrollado por EA Canadá y publicado por Electronic Arts. Forma parte de la serie Need for Speed, siendo su segundo lanzamiento, es decir, la secuela de The Need for Speed, primer videojuego de la serie. A diferencia de su predecesor, Need for Speed II no tenía el mismo realismo, pero presentaba una importante mejora gráfica.",
  notes:
    "Cross-platform wrapper that runs Need for Speed II SE with 3D acceleration and TCP networking, using the original game files. It builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Envoltorio multiplataforma que ejecuta Need for Speed II SE con aceleración 3D y red TCP, usando los archivos del juego original. Compila para Windows, Linux, macOS y Android.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7b/NFS_II_%28PC%2C_US%29_cover_art.jpg",
    alt: "Need for Speed II SE (cover)",
    credit: "Wikipedia",
  },
};
