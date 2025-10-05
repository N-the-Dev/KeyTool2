import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint để lấy key
app.get("/api/key", (req, res) => {
  const { password } = req.query;

  // Kiểm tra mật khẩu
  if (password !== process.env.PASSWORD) {
    return res.status(403).json({ error: "Access denied" });
  }

  // Lấy danh sách key từ biến môi trường VIP_KEYS
  let keys = [];
  try {
    keys = JSON.parse(process.env.Key_Vip);
  } catch (err) {
    return res.status(500).json({ error: "Lỗi định dạng Key Vip" });
  }

  // Trả về danh sách key dạng JSON
  res.json({ keys });
});

// Chạy server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

