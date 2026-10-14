"use client";

import { StarRating } from "./star-rating";
import { CommentsSection } from "./comments-section";

/** Community block shown under every port detail: rating plus comments. */
export function PortCommunity({ portId }: { portId: string }) {
  return (
    <div className="flex flex-col gap-8 border-t border-border pt-8">
      <StarRating portId={portId} />
      <CommentsSection portId={portId} />
    </div>
  );
}
