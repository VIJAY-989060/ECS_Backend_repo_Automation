const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend Successfully deployed! -07-12-2025" });
});

app.listen(8080, () => {
  console.log("Backend running on port 8080");
});

