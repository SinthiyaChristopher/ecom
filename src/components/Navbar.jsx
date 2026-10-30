import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FaShoppingCart,
  FaUser,
  FaStore,
  FaHome,
  FaCog,
} from "react-icons/fa";

export default function Navbar() {
  const { cart } = useCart();

  return (
       <nav className="bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-wide hover:text-yellow-300 transition"
          >
            BIG-Deal Shopping 
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">

            <Link
              to="/"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <FaHome />
              Home
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <FaStore />
              Products
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <FaShoppingCart />
              Cart
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {cart.length}
              </span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <FaUser />
              Profile
            </Link>

            <Link
              to="/admin"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <FaCog />
              Admin
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}