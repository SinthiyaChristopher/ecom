import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  const addProduct = (e) => {
  e.preventDefault();

  if (!name || !price || !image) {
    alert("Please fill all fields");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    price: Number(price),
    image,
    category: "Laptop",
    rating: 4.5,
  };

  const updatedProducts = [
    ...products,
    newProduct,
  ];

  setProducts(updatedProducts);

  localStorage.setItem(
    "products",
    JSON.stringify(updatedProducts)
  );

  setName("");
  setPrice("");
  setImage("");

  alert("Product Added Successfully");
};


  const deleteProduct = (id) => {
    setProducts(
      products.filter(
        (product) => product.id !== id
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Admin Dashboard
      </h1>

      {/* Add Product Form */}
      <div className="bg-white max-w-3xl mx-auto rounded-2xl shadow-lg p-8 mb-10">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Product
        </h2>

        <form
          onSubmit={addProduct}
          className="space-y-5"
        >

          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter Product Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              placeholder="Enter Product Price"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Product Image URL
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              placeholder="Enter Image URL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add Product
          </button>

        </form>

      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">
          Product List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-green-600 text-lg font-semibold">
                  ₹ {product.price}
                </p>

                <button
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                  className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Delete Product
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}