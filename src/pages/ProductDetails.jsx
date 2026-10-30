import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-10">
        Product Not Found
      </div>
    );
  }

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity,
    };

    addToCart(item);

    alert("Added to Cart");
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold mb-3">
            {product.name}
          </h1>

          <p className="text-yellow-500 text-lg mb-3">
            ⭐ {product.rating}
          </p>

          <p className="text-3xl font-bold text-green-600 mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p className="mb-6">
            <strong>Stock:</strong>{" "}
            {product.stock}
          </p>

          {/* Quantity */}
          <div className="mb-6">
            <label className="font-semibold mr-3">
              Quantity:
            </label>

            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Number(e.target.value)
                )
              }
              className="border p-2 w-24 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Add To Cart
            </button>

            <button
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}