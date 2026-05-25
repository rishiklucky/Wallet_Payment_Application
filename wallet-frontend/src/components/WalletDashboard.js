import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/walletDashboard.css";
import { walletAPI, authAPI, transactionAPI } from "../services/api";

const WalletDashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [addAmount, setAddAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);

  const imageurl =
    "https://static.wixstatic.com/media/4526cf_695fcce7fa68430f875150ef0060ff7b~mv2.png/v1/fit/w_2500,h_1330,al_c/4526cf_695fcce7fa68430f875150ef0060ff7b~mv2.png";

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const userData = localStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          console.log("Stored user data:", parsedUser);

          // Get upiId - might need to fetch from profile if not in stored data
          let upiId = parsedUser.upiId || parsedUser.upi_id || parsedUser.upiID;
          
          if (!upiId && parsedUser.id) {
            console.log("UPI ID not in stored data, fetching from profile...");
            const profileResponse = await authAPI.getProfile(parsedUser.id);
            console.log("Profile response:", profileResponse.data);
            upiId = profileResponse.data?.upiId || profileResponse.data?.data?.upiId || profileResponse.data?.upi_id;
            
            // Update stored user data with upiId
            if (upiId) {
              parsedUser.upiId = upiId;
              localStorage.setItem("user", JSON.stringify(parsedUser));
            }
          }

          console.log("Final UPI ID:", upiId);

          if (!upiId) {
            setError("Unable to get UPI ID. Please login again.");
            return;
          }

          const response = await walletAPI.getBalance(upiId);
          console.log("Full wallet response:", response.data);
          
          // Extract balance from the correct location
          const balance = response.data?.data?.balance || response.data?.balance || 0;
          console.log("Balance extracted:", balance);
          setBalance(balance);
        }
      } catch (err) {
        console.error("Wallet fetch error:", err);
        setError("Failed to load wallet. Please try again.");
        if (err.response?.status === 401) {
          navigate("/");
        }
      }
    };

    fetchBalance();
  }, [navigate]);

  const handleAddMoney = async () => {
    setError("");
    setSuccess("");

    if (!addAmount || parseInt(addAmount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    const userData = localStorage.getItem("user");
    const parsedUser = userData ? JSON.parse(userData) : null;
    const upiId = parsedUser?.upiId || parsedUser?.upi_id || parsedUser?.upiID;

    if (!upiId) {
      setError("Unable to get UPI ID");
      return;
    }

    setLoading(true);
    try {
      const response = await walletAPI.addMoney(upiId, parseInt(addAmount));
      console.log("Add money response:", response.data);
      
      // Extract new balance from response
      const newBalance = response.data?.data?.balance || response.data?.newBalance || response.data?.balance || balance;
      setBalance(newBalance);
      setAddAmount("");
      setSuccess("Money added successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Add money error:", err);
      setError(
        err.response?.data?.message || "Failed to add money. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendMoney = async () => {
    setError("");
    setSuccess("");

    if (!recipient || !sendAmount) {
      setError("Please fill in all fields");
      return;
    }

    if (parseInt(sendAmount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    if (parseInt(sendAmount) > balance) {
      setError("Insufficient balance");
      return;
    }

    const userData = localStorage.getItem("user");
    const parsedUser = userData ? JSON.parse(userData) : null;
    const senderUpi = parsedUser?.upiId || parsedUser?.upi_id || parsedUser?.upiID;

    if (!senderUpi) {
      setError("Unable to get your UPI ID");
      return;
    }

    setLoading(true);
    try {
      const response = await transactionAPI.sendMoney(
        senderUpi,
        recipient,
        parseInt(sendAmount)
      );
      console.log("Send money response:", response.data);
      
      // Extract new balance from response
      const newBalance = response.data?.data?.balance || response.data?.newBalance || response.data?.balance || balance;
      setBalance(newBalance);
      setRecipient("");
      setSendAmount("");
      setSuccess("Money sent successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Send money error:", err);
      setError(
        err.response?.data?.message || "Failed to send money. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authAPI.logout();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="topbar">
        <img src={imageurl} height="30px" width="30px" alt="MRU Pay" />
        MRU Pay
        <button
          className="btn btn-sm btn-danger"
          onClick={handleLogout}
          style={{ marginLeft: "auto" }}
        >
          Logout
        </button>
      </div>

      {user && (
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #dee2e6",
          }}
        >
          <p style={{ margin: 0 }}>
            Welcome, <strong>{user.fullName}</strong>
          </p>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="card-box">
        <h6>Wallet Balance</h6>
        <div className="wallet-balance">₹{balance}</div>

        <div className="add-money">
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
            disabled={loading}
          />
          <button
            className="btn-phonepe"
            onClick={handleAddMoney}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Money"}
          </button>
        </div>
      </div>

      <div className="card-box">
        <h6>Send Money</h6>

        <div className="send-form">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient ID / UPI"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            disabled={loading}
          />

          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            disabled={loading}
          />

          <button
            className="btn-phonepe w-100"
            onClick={handleSendMoney}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
