import { PortTileSkeleton } from "@/components/catalog/port-tile";

export default function PortsLoading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <PortTileSkeleton key={index} className="w-full" />
      ))}
    </div>
  );
}
