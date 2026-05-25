import React from "react";
import "../styles/dashboard.css";
import {
  FaPaperPlane,
  FaMobileAlt,
  FaMoneyBillWave,
  FaUniversity
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Top Bar */}
      <div className="topbar">
        <h5>PhonePe</h5>
        <div className="profile">R</div>
      </div>

      {/* Balance */}
      <div className="balance-card">
        <p>Available Balance</p>
        <h2>₹12,450</h2>
      </div>

      {/* Quick Actions */}
      <div className="actions">
        <div className="action-card">
          <div className="action-icon"><FaPaperPlane /></div>
          <p>Send</p>
        </div>

        <div className="action-card">
          <div className="action-icon"><FaMobileAlt /></div>
          <p>Recharge</p>
        </div>

        <div className="action-card">
          <div className="action-icon"><FaMoneyBillWave /></div>
          <p>Pay Bills</p>
        </div>

        <div className="action-card">
          <div className="action-icon"><FaUniversity /></div>
          <p>Bank</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions">
        <h6>Recent Transactions</h6>

        <div className="transaction-card">
          <span>Amazon</span>
          <span className="debit">- ₹899</span>
        </div>

        <div className="transaction-card">
          <span>Salary</span>
          <span className="credit">+ ₹20,000</span>
        </div>

        <div className="transaction-card">
          <span>Recharge</span>
          <span className="debit">- ₹299</span>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
