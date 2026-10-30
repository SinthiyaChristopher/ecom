import { useEffect, useState } from "react";
import defaultProducts from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const savedProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  setProducts([
    ...defaultProducts,
    ...savedProducts,
  ]);
}, []);
  

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-20 text-center">
        <h1 className="text-5xl font-bold">
          Big Sale 50% OFF
        </h1>

        <p className="mt-3 text-xl">
          Best Deals Available
        </p>
      </div>

      <h2 className="text-3xl font-bold p-5">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 gap-5 p-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}