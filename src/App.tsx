import { useState } from "react";
import { Leaderboard } from "./components/Leaderboard";
import { Market } from "./components/Market";
import { OfflineIndicator } from "./components/OfflineIndicator";

function App() {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "market">(
    "leaderboard"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="fixed top-0 w-full bg-gray-800 shadow-md py-8">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold">Game Dashboard</h1>
          <OfflineIndicator />
        </div>
      </header>

      <main className="container mx-auto p-4 max-w-4xl flex-grow mt-24 mb-24">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 ${
              activeTab === "leaderboard"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("leaderboard")}
          >
            Leaderboard
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "market"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("market")}
          >
            Market
          </button>
        </div>

        {/* Dynamic Content */}
        {activeTab === "leaderboard" ? <Leaderboard /> : <Market />}
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-800 text-center text-gray-400 py-12">
        <p>Game Leaderboard & Market | Technical Test</p>
      </footer>
    </div>
  );
}

export default App;
