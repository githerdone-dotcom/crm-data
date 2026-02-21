const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors({
  origin: "https://githerdone-dotcom.github.io"
}));
app.use(express.json());

// Load your CRM data
const DATA_FILE = "./data.json";

// Read data
app.get("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// Health check (optional but useful)
app.get("/", (req, res) => {
  res.send("CRM API is running");
});

// Required for Render hosting
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
