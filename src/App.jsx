import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Products */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* Product Details */}
            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            {/* Cart */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* Checkout */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

            {/* Login */}
            <Route
              path="/login"
              element={<Login />}
            />

            {/* Register */}
            <Route
              path="/register"
              element={<Register />}
            />

            {/* Profile */}
            <Route
              path="/profile"
              element={<Profile />}
            />

            {/* Orders */}
            <Route
              path="/orders"
              element={<Orders />}
            />

            {/* Admin */}
            <Route
              path="/admin"
              element={<Admin />}
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="text-center mt-20">
                  <h1 className="text-4xl font-bold">
                    404
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Page Not Found
                  </p>
                </div>
              }
            />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;