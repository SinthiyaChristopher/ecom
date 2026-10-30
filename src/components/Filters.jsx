import React from "react";

const Filters = ({
  search,
  setSearch,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Filter Products
      </h2>

            
      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="All">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Max Price: ₹{maxPrice}
        </label>

        <input
          type="range"
          min="1000"
          max="150000"
          step="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Sorting */}
      <div>
        <label className="block mb-1 font-medium">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;