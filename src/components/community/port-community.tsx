"use client";

import { HeartRating } from "./heart-rating";
import { CommentsSection } from "./comments-section";
import { ReviewSummaryBlock } from "./review-summary";

/** Community block shown under every port detail: rating plus comments. */
export function PortCommunity({ portId }: { portId: string }) {
  return (
    <div className="flex flex-col gap-8 border-t border-border pt-8">
      <HeartRating portId={portId} />
      <ReviewSummaryBlock portId={portId} />
      <CommentsSection portId={portId} />
    </div>
  );
}


