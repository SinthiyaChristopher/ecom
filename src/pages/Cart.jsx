import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeItem,
    updateQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link
            to="/products"
            className="text-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">
                  {item.name}
                </h2>

                <p>₹{item.price}</p>
              </div>

              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Number(e.target.value)
                    )
                  }
                  className="border w-20 p-1 mr-2"
                />

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-5">
            <h2 className="text-2xl font-bold">
              Total: ₹{total}
            </h2>

            <Link
              to="/checkout"
              className="bg-green-600 text-white px-5 py-2 rounded inline-block mt-4"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}