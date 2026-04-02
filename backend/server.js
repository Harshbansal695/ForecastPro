const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/forecast", require("./routes/forecast"));
app.use("/api/dashboard", require("./routes/dashboard"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // Function to update UI with Analytics
// async function fetchAnalytics() {
//     const statusEl = document.getElementById('status-indicator');
//     statusEl.innerText = "Analyzing Trends...";

//     try {
//         const response = await fetch('http://127.0.0.1:5000/api/analytics');
//         const data = await response.json();

//         // Populate your Chart.js or D3.js chart here
//         renderMyChart(data);

//         statusEl.innerText = "Forecast Ready";
//         statusEl.className = "text-success";
//     } catch (err) {
//         statusEl.innerText = "Backend Offline";
//         statusEl.className = "text-danger";
//     }
// }
