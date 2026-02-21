const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

// allow any frontend (important)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

const DATA_FILE = "./data.json";

// GET all data
app.get("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// basic health check
app.get("/", (req, res) => {
  res.send("CRM API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
