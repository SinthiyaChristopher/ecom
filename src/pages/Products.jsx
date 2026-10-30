import { useState, useEffect } from "react";
import defaultProducts from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import "../styles/Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(120000);
  const [sort, setSort] = useState("");

 useEffect(() => {
  const savedProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  setProducts([
    ...defaultProducts,
    ...savedProducts,
  ]);
}, []);
  let filteredProducts = products.filter((product) => {
    return (
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      product.price <= maxPrice
    );
  });

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "rating") {
    filteredProducts.sort(
      (a, b) => (b.rating || 0) - (a.rating || 0)
    );
  }

  return (
    <div className="products-container">

      <h1 className="products-title">
        Our Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sort={sort}
        setSort={setSort}
      />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="no-products">
            No Products Found
          </div>
        )}
      </div>

    </div>
  );
}