import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log detailed error information for debugging
    console.error("API Error:", {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      data: error.response?.data,
      endpoint: error.config?.url,
      method: error.config?.method,
    });

    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  register: (data) => api.post("/api/users/register", data),
  login: (data) => api.post("/api/users/login", data),
  getProfile: (upiId) => api.get(`/api/users/profile/${upiId}`),
};

// Wallet API endpoints
export const walletAPI = {
  getBalance: (upiId) => {
    if (upiId) {
      return api.get(`/api/wallet/${upiId}`);
    }
    // Get from stored user data if no upiId provided
    const user = localStorage.getItem("user");
    const userData = user ? JSON.parse(user) : null;
    return api.get(`/api/wallet/${userData?.upiId || ""}`);
  },
  addMoney: (upiId, amount) => api.post("/api/wallet/add", { upiId, amount }),
  getSmsProfile: (upiId) => api.get(`/api/wallet/${upiId}`),
};

// Transaction API endpoints
export const transactionAPI = {
  sendMoney: (senderUpi, receiverUpi, amount) =>
    api.post("/api/transaction/send", { senderUpi, receiverUpi, amount }),
  getHistory: (upiId) => api.get(`/api/transaction/history/${upiId}`),
};

// Logout method
authAPI.logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};

export default api;
