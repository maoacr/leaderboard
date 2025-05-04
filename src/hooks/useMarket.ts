import { useState, useEffect } from "react";
import { MarketResponse } from "../types";

export function useMarket() {
  const [data, setData] = useState<MarketResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api-game.bloque.app/game/market");
        if (!response.ok) throw new Error("Failed to fetch market data");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching market data"
        );

        try {
          const cache = await caches.open("api-cache");
          const cachedResponse = await cache.match(
            "https://api-game.bloque.app/game/market"
          );

          if (cachedResponse) {
            const cachedData = await cachedResponse.json();
            setData(cachedData);
            setError(null);
          }
        } catch (cacheErr) {
          console.error("Failed to get cached market data:", cacheErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
