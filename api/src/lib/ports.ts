import portIds from "../port-ids.json";

const PORT_IDS = new Set<string>(portIds as string[]);

export function isValidPortId(id: string): boolean {
  return PORT_IDS.has(id);
}
