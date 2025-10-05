import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/key", (req, res) => {
  const { password } = req.query;
  if (password !== process.env.PASSWORD) {
    return res.status(403).json({ error: "Access denied" });
  }

  let keys;
  try {
    keys = JSON.parse(process.env.VIP_KEYS);
  } catch {
    keys = [];
  }

  res.json({ keys });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
