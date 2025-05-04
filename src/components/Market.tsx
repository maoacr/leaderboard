import { useMarket } from "../hooks/useMarket";

export function Market() {
  const { data, loading, error } = useMarket();

  if (loading)
    return <div className="text-center py-5">Loading market items...</div>;
  if (error)
    return <div className="text-center py-5 text-red-500">Error: {error}</div>;
  if (!data?.items)
    return <div className="text-center py-5">No market items available</div>;

  const getItemTypeColor = (type: string) => {
    switch (type) {
      case "fishing_rod":
        return "bg-blue-100 text-blue-800";
      case "poison_leveling":
        return "bg-purple-100 text-purple-800";
      case "poison_delay":
        return "bg-red-100 text-red-800";
      case "poison_recovery":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
        Market
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.items.map((item) => (
          <div key={item.id} className="bg-gray-700 rounded-lg p-4 shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-white">{item.name}</h3>
              <span className="font-mono text-yellow-400">
                {item.cost.toLocaleString()} gold
              </span>
            </div>
            <div className="mt-1">
              <span
                className={`inline-block px-2 py-1 text-xs rounded ${getItemTypeColor(
                  item.type
                )}`}
              >
                {item.type.replace("_", " ")}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
