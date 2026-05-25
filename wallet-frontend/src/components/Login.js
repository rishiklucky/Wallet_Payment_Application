import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    setError("");

    if (!phoneNumber || !pin) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    console.log("Attempting login with:", { phoneNumber, pin });
    
    try {
      const response = await authAPI.login({
        phoneNumber,
        pin,
      });

      console.log("Full login response:", response);
      console.log("Response data:", response.data);
      
      // Extract user data - backend returns: { success, message, data: { id, name, phoneNumber, upiId, pin } }
      const user = response.data?.data || response.data?.user || response.data;
      
      console.log("Extracted user:", user);
      
      if (user && (user.upiId || user.id)) {
        // Store only the user data (not the entire response)
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Login successful, navigating...");
        navigate("/wallet-dashboard");
      } else {
        console.log("Invalid user data in response");
        setError("Login failed. Invalid response from server.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo">PhonePe</div>
        <div className="l">Login</div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            className="btn-phonepe w-100"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="switch-text">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
