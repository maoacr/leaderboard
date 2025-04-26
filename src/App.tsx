import { useState } from "react";
import { Leaderboard } from "./components/Leaderboard";
import { Market } from "./components/Market";
import { OfflineIndicator } from "./components/OfflineIndicator";
import Icon from "./assets/bloque-icon.svg";
import RefreshIcon from "./assets/refresh-icon.svg";

function App() {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "market">(
    "leaderboard"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="fixed top-0 w-full bg-gray-800 shadow-md px-4 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={Icon} alt="bloque-icon" className="w-16 pr-4" />
            <h1 className="text-2xl font-bold">Game Dashboard</h1>
          </div>
          <OfflineIndicator />
        </div>
      </header>

      <main className="container mx-auto p-4 max-w-4xl flex-grow mt-36 mb-24">
        {/* Tab Navigation */}
        <div className="flex justify-between mb-6">
          <div id="tabs" className="border-b border-gray-700">
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
          <button
            {...(activeTab === "market" ? { disabled: true } : {})}
            className="px-4 py-2 bg-blue-400 text-white rounded-md disabled:opacity-20"
            onClick={() => setActiveTab("leaderboard")}
          >
            <img src={RefreshIcon} alt="refresh-icon" className="w-4" />
          </button>
        </div>

        {/* Dynamic Content */}
        {activeTab === "leaderboard" ? <Leaderboard /> : <Market />}
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-800 text-center text-gray-400 py-12">
        <p>Made with 💚 by @maoacr | Technical Test</p>
      </footer>
    </div>
  );
}

export default App;
