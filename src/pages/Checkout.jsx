import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      address,
      city,
      pincode,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cart,
      total,
      date: new Date().toLocaleDateString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, order])
    );

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 shadow rounded"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
            rows="3"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded w-full"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-5 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-3" />

          <h3 className="text-xl font-bold">
            Total: ₹{total}
          </h3>
        </div>
      </div>
    </div>
  );
}