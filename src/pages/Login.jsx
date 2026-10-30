import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    const result = login(email, password);

    if (result.success) {
      alert(result.message);
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="login-container">

      {/* Left Side Image */}
      <div className="login-image-section">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200"
          alt="Shopping"
        />
      </div>

      {/* Right Side Form */}
      <div className="login-form-section">

        <div className="login-card">

          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Login to continue shopping
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter Password"
              />
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}