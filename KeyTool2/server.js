import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/key", (req, res) => {
  const { password } = req.query;
  if (password === process.env.PASSWORD) {
    return res.json({ key: process.env.VIP_KEY });
  } else {
    return res.status(403).json({ error: "Access denied" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
