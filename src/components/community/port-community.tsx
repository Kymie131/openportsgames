"use client";

import { FavoriteButton } from "./favorite-button";
import { HeartRating } from "./heart-rating";
import { CommentsSection } from "./comments-section";
import { ReviewSummaryBlock } from "./review-summary";

/** Community block shown under every port detail: favorites, rating plus comments. */
export function PortCommunity({ portId }: { portId: string }) {
  return (
    <div className="flex flex-col gap-8 border-t border-border pt-8">
      <FavoriteButton portId={portId} />
      <HeartRating portId={portId} />
      <ReviewSummaryBlock portId={portId} />
      <CommentsSection portId={portId} />
    </div>
  );
}


