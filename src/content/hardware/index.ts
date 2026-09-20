import type { HardwareProfile } from "@/lib/ports/schema";

export const hardwareProfiles: HardwareProfile[] = [
  {
    schema: "hardware",
    id: "pc-primary",
    label: "Primary PC",
    kind: "pc",
    specs: {
      cpu: "AMD Ryzen 7 7445HS (6 cores / 12 threads)",
      gpu: "NVIDIA GeForce RTX 4050 Laptop (6 GB)",
      ram: "16 GB",
      storage: "512 GB NVMe SSD",
      os: "Windows 11 Home (build 26200)",
      display: "1920 x 1080, 144 Hz",
    },
    tester: "Kymie131",
    updatedAt: "2026-09-19",
  },
  {
    schema: "hardware",
    id: "android-primary",
    label: "Primary Android phone",
    kind: "android",
    specs: {
      cpu: "MediaTek Helio G99 Ultra (8 cores)",
      gpu: "Mali-G57 MC2",
      ram: "12 GB",
      os: "Android 15 (HyperOS 2)",
      display: "6.67 in AMOLED, 1080p, 120 Hz",
    },
    tester: "Kymie131",
    updatedAt: "2026-09-19",
  },
];