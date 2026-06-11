const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: "https://salespunch360.com",
  credentials: true
}));
app.use(express.json());

/* =========================
   HEALTH CHECK
========================= */
app.get("/", (req, res) => {
  res.send("SalesPunch360 API Running");
});

/* =========================
   LOGIN API (NEW)
========================= */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // demo credentials (later we connect DB)
  if (username === "admin" && password === "1234") {
    return res.json({
      success: true,
      message: "Login successful"
    });
  }

  return res.json({
    success: false,
    message: "Invalid credentials"
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
