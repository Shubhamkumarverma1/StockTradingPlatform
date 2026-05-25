# 📈 Stock Trading Platform

> A full-stack simulated stock trading platform with real-time market data, portfolio tracking, and complete transaction history.

---

## 📌 About the Project

**Stock Trading Platform** is a full-stack web application that simulates a real stock trading experience. Users can search for stocks, view live market prices, simulate buying and selling shares, and track their portfolio performance — all in real time.

Built as part of my MCA final year to explore real-time data handling, REST API integration, and building complex, data-driven dashboards.

---

## ✨ Features

- 📊 **Live Stock Prices** — Fetches real-time stock data from a market API
- 💹 **Buy & Sell Simulation** — Simulate trades with a virtual wallet balance
- 🗂️ **Portfolio Dashboard** — Track all holdings, current value, and profit/loss
- 📋 **Transaction History** — Complete log of all buy/sell activity
- 🔍 **Stock Search** — Search any stock by name or ticker symbol
- 📉 **Interactive Charts** — Visualize price trends over time
- 👤 **User Authentication** — Secure login and registration with JWT
- 📱 **Responsive UI** — Works on both desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, JavaScript, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB / SQL |
| Stock Data | Alpha Vantage API / Yahoo Finance API |
| Charts | Chart.js / Recharts |
| Auth | JWT (JSON Web Tokens) |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```
stock-trading-platform/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       │   ├── Navbar.js
│       │   ├── StockCard.js
│       │   ├── PortfolioChart.js
│       │   └── TransactionTable.js
│       ├── pages/           # Page-level components
│       │   ├── Home.js
│       │   ├── Dashboard.js
│       │   ├── StockDetail.js
│       │   └── Login.js
│       ├── context/         # Auth and wallet state
│       └── App.js
├── server/                  # Node.js backend
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── stocks.js
│   │   └── portfolio.js
│   ├── models/              # MongoDB/SQL models
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth middleware
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) or a SQL database (MySQL/PostgreSQL)
- A free API key from [Alpha Vantage](https://www.alphavantage.co/) for stock data

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhamkumarverma/stock-trading-platform.git
   cd stock-trading-platform
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `/server` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STOCK_API_KEY=your_alpha_vantage_api_key
   ```

5. **Run the application**

   Start the backend:
   ```bash
   cd server
   npm run dev
   ```

   Start the frontend (in a new terminal):
   ```bash
   cd client   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```



---

## 💡 How It Works

1. **Register / Login** — Create an account and receive a virtual wallet balance (e.g. ₹1,00,000)
2. **Search Stocks** — Look up any stock by name or ticker symbol
3. **View Live Data** — See real-time price, change percentage, and historical chart
4. **Buy / Sell** — Execute simulated trades; balance and holdings update instantly
5. **Track Portfolio** — Monitor current value, total investment, and profit/loss in real time
6. **Transaction History** — View a complete log of all your past trades

---
