import { useState, useEffect } from "react";
import { LeaderboardResponse } from "../types";

export function useLeaderboard() {
  const [data, setData] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-game.bloque.app/game/leaderboard"
        );
        if (!response.ok) throw new Error("Failed to fetch leaderboard");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching leaderboard"
        );

        // Try to get data from cache when fetch fails
        try {
          const cache = await caches.open("api-cache");
          const cachedResponse = await cache.match(
            "https://api-game.bloque.app/game/leaderboard"
          );

          if (cachedResponse) {
            const cachedData = await cachedResponse.json();
            setData(cachedData);
            setError(null);
          }
        } catch (cacheErr) {
          console.error("Failed to get cached leaderboard:", cacheErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
