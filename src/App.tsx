import { useState } from 'react';
import { Leaderboard } from './components/Leaderboard';
import { Market } from './components/Market';
import { OfflineIndicator } from './components/OfflineIndicator';

function App() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'market'>('leaderboard');
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-center">Game Dashboard</h1>
      </header>
      
      <main className="container mx-auto p-4 max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 ${activeTab === 'leaderboard' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            Leaderboard
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'market' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('market')}
          >
            Market
          </button>
        </div>
        
        {/* Dynamic Content */}
        {activeTab === 'leaderboard' ? <Leaderboard /> : <Market />}
      </main>
      
      <footer className="p-4 mt-8 bg-gray-800 text-center text-gray-400 text-sm">
        <p>Game Leaderboard & Market | Technical Test</p>
      </footer>
      
      {/* Offline Indicator */}
      <OfflineIndicator />
    </div>
  );
}

export default App;