"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  API_URL,
  apiFetch,
  type RatingSummaryItem,
  type RatingSummaryResponse,
} from "@/lib/api";

type RatingMap = Record<string, RatingSummaryItem>;

const RatingSummaryContext = createContext<RatingMap>({});

let ratingsCache: RatingMap | null = null;
let ratingsRequest: Promise<RatingMap> | null = null;

function loadRatingSummary(): Promise<RatingMap> {
  if (ratingsCache) return Promise.resolve(ratingsCache);
  if (ratingsRequest) return ratingsRequest;

  ratingsRequest = apiFetch<RatingSummaryResponse>("/ratings/summary")
    .then(({ items }) => {
      const next: RatingMap = {};
      for (const item of items) next[item.portId] = item;
      ratingsCache = next;
      return next;
    })
    .catch((error: unknown) => {
      ratingsRequest = null;
      throw error;
    });

  return ratingsRequest;
}

/**
 * Fetches the public rating aggregate once and shares it with every port card.
 * One request per page load keeps the Worker request budget predictable.
 */
export function RatingSummaryProvider({ children }: { children: ReactNode }) {
  const [ratings, setRatings] = useState<RatingMap>(() => ratingsCache ?? {});

  useEffect(() => {
    if (!API_URL || ratingsCache) return;
    let active = true;
    loadRatingSummary()
      .then((next) => {
        if (active) setRatings(next);
      })
      .catch(() => {
        /* ratings are decoration: keep the site usable without the API */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <RatingSummaryContext.Provider value={ratings}>{children}</RatingSummaryContext.Provider>
  );
}

export function usePortRating(portId: string): RatingSummaryItem | undefined {
  return useContext(RatingSummaryContext)[portId];
}
