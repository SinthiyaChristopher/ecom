export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full max-w-3xl p-4 rounded-xl border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-700"
      />
    </div>
  );
}