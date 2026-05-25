# 🏦 Wallet Payment Application

A full-stack **UPI-based Digital Wallet System** that simulates modern payment platform functionality similar to PhonePe. This project demonstrates end-to-end development of a secure, scalable payment system with real-world application design patterns.

---

## 🎯 Project Overview

**Wallet Payment Application** is a comprehensive digital wallet solution featuring:
- **Secure User Authentication & Registration** with password encryption
- **Real-time Wallet Management** (Add/Withdraw Money, Balance Tracking)
- **P2P Money Transfer** between registered users
- **Transaction History** with detailed logs and timestamps
- **RESTful APIs** with comprehensive Swagger documentation
- **Responsive Web Interface** with modern UI/UX

This project showcases industry-standard practices including REST API design, database modeling, security best practices, and modern frontend development.

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     WALLET PAYMENT SYSTEM                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐              ┌──────────────────┐    │
│  │   React Frontend │◄────────────►│  Spring Boot     │    │
│  │   (Port 3000)    │   REST APIs  │  Backend         │    │
│  │                  │              │  (Port 8080)     │    │
│  └──────────────────┘              └──────────────────┘    │
│         │ UI/UX                             │               │
│         └─────────────────────┬─────────────┘               │
│                               │                             │
│                        ┌──────▼──────┐                      │
│                        │   MySQL DB  │                      │
│                        │ (phonepay_  │                      │
│                        │     db)     │                      │
│                        └─────────────┘                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Tech Stack

### Backend
- **Framework:** Spring Boot 3.2.0
- **Language:** Java 17
- **Database:** MySQL
- **API Documentation:** Swagger/OpenAPI 3.0
- **Build Tool:** Maven
- **ORM:** Spring Data JPA/Hibernate

### Frontend
- **Framework:** React 19.2.4
- **Styling:** Bootstrap 5.3.8 + Custom CSS
- **HTTP Client:** Axios
- **Routing:** React Router v7
- **Icons:** React Icons

### Development Tools
- **IDE:** IntelliJ IDEA / VS Code
- **Version Control:** Git
- **API Testing:** Postman / Swagger UI

---

## ✨ Key Features

### 👤 User Management
- **Registration:** Secure user registration with email validation
- **Login:** JWT-based or Session-based authentication
- **Password Security:** Encrypted password storage using BCrypt
- **User Profile:** View and manage user details

### 💰 Wallet Operations
- **Add Money:** Deposit funds to wallet
- **Withdraw Money:** Transfer funds out of wallet
- **View Balance:** Real-time wallet balance display
- **Transaction History:** Complete audit trail of all transactions

### 🔄 P2P Transactions
- **Send Money:** Transfer funds to other registered users
- **Request Money:** Request payment from other users
- **Transaction Status:** Real-time transaction status tracking
- **Instant Notifications:** Transaction confirmations

### 📊 Analytics & Reporting
- **Transaction Reports:** Detailed transaction history with filters
- **Analytics Dashboard:** Visual representation of spending patterns
- **Export Data:** Download transaction history

---

## 📁 Project Structure

```
wallet-backend/
├── src/
│   ├── main/
│   │   ├── java/com/phonepe/phonepe_Wallet/
│   │   │   ├── controller/          # REST API Controllers
│   │   │   │   ├── UserController.java
│   │   │   │   ├── WalletController.java
│   │   │   │   └── TransactionController.java
│   │   │   ├── service/             # Business Logic Layer
│   │   │   ├── repository/          # Data Access Layer (JPA)
│   │   │   ├── entity/              # JPA Entities
│   │   │   │   ├── User.java
│   │   │   │   ├── Wallet.java
│   │   │   │   └── Transaction.java
│   │   │   ├── dto/                 # Data Transfer Objects
│   │   │   │   ├── UserRegistrationRequest.java
│   │   │   │   ├── LoginRequest.java
│   │   │   │   ├── SendMoneyRequest.java
│   │   │   │   └── ApiResponse.java
│   │   │   ├── config/              # Configuration Classes
│   │   │   │   └── SwaggerConfig.java
│   │   │   └── PhonepeWalletBackendApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/                        # Unit Tests
├── pom.xml                          # Maven Configuration
└── HELP.md

wallet-frontend/
├── public/
├── src/
│   ├── components/                  # React Components
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── WalletDashboard.js
│   ├── services/
│   │   └── api.js                   # API Integration Service
│   ├── styles/                      # Component Styles
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   └── walletDashboard.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/logout` | User logout |

### Wallet Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/wallet/balance` | Get wallet balance |
| `POST` | `/api/wallet/add-money` | Add money to wallet |
| `POST` | `/api/wallet/withdraw` | Withdraw from wallet |

### Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/transaction/send-money` | Send money to user |
| `GET` | `/api/transaction/history` | Get transaction history |
| `GET` | `/api/transaction/{id}` | Get transaction details |

### User Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/user/profile` | Get user profile |
| `PUT` | `/api/user/profile` | Update user profile |

**Swagger UI:** http://localhost:8080/swagger-ui.html

---

## 🛠️ Setup & Installation

### Prerequisites
- **Java 17** or higher
- **MySQL 8.0** or higher
- **Node.js 18+** & npm
- **Git**
- **Maven** (comes with Spring Boot)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishiklucky/Wallet_Payment_Application.git
   cd wallet-backend
   ```

2. **Configure Database**
   - Create MySQL database:
     ```sql
     CREATE DATABASE phonepay_db;
     ```
   - Update `src/main/resources/application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/phonepay_db
     spring.datasource.username=root
     spring.datasource.password=YOUR_PASSWORD
     spring.jpa.hibernate.ddl-auto=update
     ```

3. **Build the project**
   ```bash
   mvn clean install
   ```

4. **Run the application**
   ```bash
   mvn spring-boot:run
   ```
   Or use your IDE (IntelliJ/VS Code) to run the main application class.

5. **Access the APIs**
   - API Base URL: `http://localhost:8080/api`
   - Swagger UI: `http://localhost:8080/swagger-ui.html`
   - API Docs: `http://localhost:8080/v3/api-docs`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd wallet-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Base URL**
   - Update `src/services/api.js`:
     ```javascript
     const API_BASE_URL = 'http://localhost:8080/api';
     ```

4. **Start the development server**
   ```bash
   npm start
   ```
   - Application runs on: `http://localhost:3000`

---

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone_number VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Wallets Table
```sql
CREATE TABLE wallets (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT UNIQUE NOT NULL,
  balance DECIMAL(15, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  from_user_id BIGINT,
  to_user_id BIGINT NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  transaction_type VARCHAR(50),
  status VARCHAR(50),
  description VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (from_user_id) REFERENCES users(id),
  FOREIGN KEY (to_user_id) REFERENCES users(id)
);
```

---

## 🧪 Testing

### Unit Tests
```bash
# Backend
cd wallet-backend
mvn test

# Frontend
cd wallet-frontend
npm test
```

### API Testing
- Use Postman or cURL to test APIs
- Swagger UI provides interactive endpoint testing
- Example cURL request:
  ```bash
  curl -X POST http://localhost:8080/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"user@example.com","password":"password"}'
  ```

---

## 🔒 Security Features

✅ **Password Encryption** - BCrypt hashing for secure password storage  
✅ **Input Validation** - DTOs with JSR-303 validation annotations  
✅ **CORS Configuration** - Secure cross-origin requests  
✅ **Transaction Atomicity** - Database transactions for financial operations  
✅ **Error Handling** - Comprehensive exception handling and logging  
✅ **API Rate Limiting** - Prevents abuse (can be implemented with Spring Cloud)  

---

## 📈 Performance Optimizations

- **Database Indexing** - Indexed foreign keys and frequently queried fields
- **Connection Pooling** - HikariCP for optimal database connections
- **Lazy Loading** - JPA eager/lazy loading strategies
- **Response Caching** - Frontend caching for static assets
- **Async Processing** - For non-blocking operations

---

## 🤝 Design Patterns Used

- **MVC Pattern** - Separation of concerns across layers
- **Repository Pattern** - Data access abstraction
- **DTO Pattern** - Data transfer between layers
- **Singleton Pattern** - Spring Bean management
- **Factory Pattern** - Object creation
- **Dependency Injection** - Loose coupling with Spring

---

## 🚦 Git Workflow

```bash
# Clone the repository
git clone https://github.com/rishiklucky/Wallet_Payment_Application.git
cd Wallet_Payment_Application

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature description"

# Push to remote
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

---

## 📝 Future Enhancements

- [ ] **Multi-language Support** - i18n for multiple languages
- [ ] **Notifications** - Email/SMS notifications for transactions
- [ ] **OTP Verification** - Two-factor authentication
- [ ] **Payment Gateway Integration** - Real payment processing
- [ ] **Admin Dashboard** - Admin panel for user management
- [ ] **Mobile App** - React Native mobile application
- [ ] **Advanced Analytics** - Machine learning for fraud detection
- [ ] **Invoice Generation** - PDF invoice creation
- [ ] **Recurring Payments** - Subscription/recurring transactions
- [ ] **Kubernetes Deployment** - Container orchestration

---

## 📚 Learning Outcomes

This project demonstrates proficiency in:

✅ **Full-Stack Development** - Backend and frontend implementation  
✅ **Database Design** - Schema design, relationships, and optimization  
✅ **RESTful API Design** - Proper HTTP methods, status codes, and best practices  
✅ **Spring Boot Development** - Application context, beans, and configurations  
✅ **React Development** - Components, state management, and lifecycle  
✅ **Security** - Password encryption, authentication concepts  
✅ **Git Version Control** - Branching, committing, and collaboration  
✅ **Problem Solving** - Debugging, testing, and optimization  
✅ **Software Architecture** - Layered architecture and design patterns  

---

## 🤖 Troubleshooting

### Backend Issues

**Issue:** Application fails to start with database connection error
```bash
# Solution: Ensure MySQL is running and credentials are correct
mysql -u root -p
SHOW DATABASES;  # Verify phonepay_db exists
```

**Issue:** Port 8080 already in use
```bash
# Solution: Change port in application.properties
server.port=8081
```

### Frontend Issues

**Issue:** npm start throws module not found error
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Cannot connect to backend API
```bash
# Solution: Verify backend is running and API URL is correct
# Check browser console for CORS errors
```

---

## 📞 Contact & Support

- **GitHub:** [@rishiklucky](https://github.com/rishiklucky)
- **Issues:** Please create an issue on the GitHub repository
- **Email:** Open to collaboration and feedback!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Show Your Support

If you found this project helpful, please give it a star on GitHub! It helps other developers discover this resource.

```bash
# Clone and explore
git clone https://github.com/rishiklucky/Wallet_Payment_Application.git

# Share your feedback
# Your suggestions help improve this project!
```

---

**Built with ❤️ by Rishik | Full-Stack Developer**

*Last Updated: May 2026*
