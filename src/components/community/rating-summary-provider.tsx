"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  API_URL,
  apiFetch,
  type RatingStats,
  type RatingSummaryItem,
  type RatingSummaryResponse,
} from "@/lib/api";

type RatingMap = Record<string, RatingSummaryItem>;
type RatingStatus = "loading" | "summary" | "per-port";

type RatingContextValue = {
  ratings: RatingMap;
  status: RatingStatus;
  loadPortRating: (portId: string) => void;
};

const RatingSummaryContext = createContext<RatingContextValue>({
  ratings: {},
  status: "loading",
  loadPortRating: () => {},
});

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
 * Until `/ratings/summary` is deployed, it falls back to the per-port endpoint
 * so cards can still show their hearts.
 */
export function RatingSummaryProvider({ children }: { children: ReactNode }) {
  const [ratings, setRatings] = useState<RatingMap>(() => ratingsCache ?? {});
  const [status, setStatus] = useState<RatingStatus>(() =>
    ratingsCache ? "summary" : "loading",
  );
  const ratingsRef = useRef(ratings);
  const pending = useRef(new Set<string>());

  useEffect(() => {
    ratingsRef.current = ratings;
  }, [ratings]);

  useEffect(() => {
    if (!API_URL || ratingsCache) return;
    let active = true;
    loadRatingSummary()
      .then((next) => {
        if (!active) return;
        setRatings(next);
        setStatus("summary");
      })
      .catch(() => {
        if (active) setStatus("per-port");
      });
    return () => {
      active = false;
    };
  }, []);

  const loadPortRating = useCallback((portId: string) => {
    if (!API_URL) return;
    if (ratingsRef.current[portId] || pending.current.has(portId)) return;
    pending.current.add(portId);

    apiFetch<RatingStats>(`/ratings/${encodeURIComponent(portId)}`)
      .then((stats) => {
        const item: RatingSummaryItem = {
          portId,
          average: stats.average ?? 0,
          count: stats.count,
        };
        setRatings((current) => ({ ...current, [portId]: item }));
      })
      .catch(() => {
        /* keep the card without hearts if this port cannot be read */
      })
      .finally(() => {
        pending.current.delete(portId);
      });
  }, []);

  return (
    <RatingSummaryContext.Provider value={{ ratings, status, loadPortRating }}>
      {children}
    </RatingSummaryContext.Provider>
  );
}

export function usePortRating(portId: string): RatingSummaryItem | undefined {
  const { ratings, status, loadPortRating } = useContext(RatingSummaryContext);

  useEffect(() => {
    if (status === "per-port") loadPortRating(portId);
  }, [status, portId, loadPortRating]);

  return ratings[portId];
}
