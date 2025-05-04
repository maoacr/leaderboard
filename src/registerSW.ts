import { registerSW as registerVitePWA } from "virtual:pwa-register";

export function registerSW() {
  if ("serviceWorker" in navigator) {
    registerVitePWA({
      onRegisteredSW(swUrl: string) {
        console.log(`Service Worker registered at: ${swUrl}`);
      },
      onOfflineReady() {
        console.log("App ready to work offline");
      },
    });

    const cacheEndpoints = async () => {
      try {
        const cache = await caches.open("api-cache");
        await cache.addAll([
          "https://api-game.bloque.app/game/leaderboard",
          "https://api-game.bloque.app/game/market",
        ]);
        console.log("Initial API endpoints cached");
      } catch (err) {
        console.error("Failed to cache API endpoints:", err);
      }
    };

    cacheEndpoints();
  }
}
