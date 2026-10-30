import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-6 py-8">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold">
              BIG-Deal Shopping
            </h2>
            <p className="text-gray-400 mt-2">
              Your one-stop destination for
              quality products at affordable
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-blue-400"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="hover:text-blue-400"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Customer Service
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-400">
              📍 Salem, Tamil Nadu
            </p>

            <p className="text-gray-400">
              📧 support@eshop.com
            </p>

            <p className="text-gray-400">
              📞 +91 9876543210
            </p>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} E-Shop.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}