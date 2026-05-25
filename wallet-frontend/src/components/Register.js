import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { authAPI } from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    upiId: "",
    pin: "",
    confirmPin: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (Object.values(formData).some((field) => !field)) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.pin !== formData.confirmPin) {
      setError("PINs do not match");
      return;
    }

    if (formData.pin.length < 4) {
      setError("PIN must be at least 4 digits");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.register({
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        upiId: formData.upiId,
        pin: formData.pin,
      });

      console.log("Register response:", response.data);
      
      // Since backend doesn't return token on register, just store user data
      const user = response.data?.user || response.data?.data?.user || response.data;
      
      if (user) {
        // Store user data (token will be obtained on login)
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User registered successfully, redirecting to login...");
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError("Registration failed. No user data received.");
      }
    } catch (err) {
      console.error("Register error:", err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo">PhonePe</div>
        <div className="l">Register</div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter your UPI ID (e.g name@paytm)"
              name="upiId"
              value={formData.upiId}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Create PIN"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm PIN"
              name="confirmPin"
              value={formData.confirmPin}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <button
            className="btn-phonepe w-100"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="switch-text">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
