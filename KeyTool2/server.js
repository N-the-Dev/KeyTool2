import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/getkey", (req, res) => {
  const { password } = req.body;
  if (password !== process.env.MASTER_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized - invalid password" });
  }

  const keys = process.env.VIP_KEYS?.split(",") || [];
  if (keys.length === 0) return res.status(404).json({ error: "No VIP keys found" });

  res.json({
    status: "success",
    count: keys.length,
    vip_keys: keys,
    issued_at: new Date().toISOString()
  });
});

app.listen(PORT, () => console.log(`VIP API running on port ${PORT}`));
