import { useLeaderboard } from '../hooks/useLeaderboard';

export function Leaderboard() {
  const { data, loading, error } = useLeaderboard();
  
  if (loading) return <div className="text-center py-5">Loading leaderboard...</div>;
  if (error) return <div className="text-center py-5 text-red-500">Error: {error}</div>;
  if (!data?.players) return <div className="text-center py-5">No leaderboard data available</div>;
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="py-2 px-3">Rank</th>
              <th className="py-2 px-3">Player</th>
              <th className="py-2 px-3">Level</th>
              <th className="py-2 px-3">XP</th>
              <th className="py-2 px-3">Gold</th>
            </tr>
          </thead>
          <tbody>
            {data.players.map((player) => (
              <tr key={player.username} className="border-t border-gray-700 text-gray-200">
                <td className="py-2 px-3">{player.rank}</td>
                <td className="py-2 px-3 font-medium">{player.username}</td>
                <td className="py-2 px-3">{player.level}</td>
                <td className="py-2 px-3">{player.xp}</td>
                <td className="py-2 px-3">{player.gold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}