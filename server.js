import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";    

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "192.168.18.62",  user: "root",  password: "cs123", database: "user_management",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection error:", err);
    return;
  }
console.log(" Connected to 🅼🆈🆂🆀🅻 🅳🅰🆃🅰🅱🅰🆂🅴 ✅");

});

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API Server is running");
});

// ==================== SIGNUP ====================
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO userinfo (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).send("Database error.");
    }
    res.send({ message: "User registered successfully!" });
  });
});

// ==================== LOGIN ====================
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const sql = "SELECT * FROM userinfo WHERE name = ?";
  db.query(sql, [name], (err, result) => {
    if (err) return res.status(500).send("Database error.");
    if (result.length === 0) return res.status(404).send("User not found.");

    const user = result[0];
    if (user.password !== password) return res.status(401).send("Invalid credentials.");

    const token = jwt.sign({ id: user.id, name: user.name }, "secretkey", { expiresIn: "1h" });
    res.send({ message: "Login successful!", token });
  });
});

// ==================== SEND RESET CODE ====================
app.post("/send-code", (req, res) => {
  const { email } = req.body;
  const resetCode = Math.floor(100000 + Math.random() * 900000);
  const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  const sqlCheck = "SELECT * FROM userinfo WHERE email = ?";
  db.query(sqlCheck, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (results.length === 0) return res.status(404).json({ message: "User not found." });

    const sqlUpdate = "UPDATE userinfo SET reset_code = ?, reset_code_expiry = ? WHERE email = ?";
    db.query(sqlUpdate, [resetCode, expiry, email], (err) => {
      if (err) return res.status(500).json({ message: "Error saving reset code." });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "tarbmohsin18@gmail.com",
          pass: "vrinwtirhpsajyzi", // ⚠️ use App Password, not Gmail password
        },
      });

      const mailOptions = {
        from: "tarbmohsin18@gmail.com",
        to: email,
        subject: "🔐 Your Reset Code",
        text: `Your reset code is: ${resetCode}\nIt will expire in 1 hour.\n\nReset here: http://localhost:3000/ResetPassword`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) return res.status(500).json({ message: "Email send failed." });
        res.status(200).json({ message: "Reset code sent to your email." });
      });
    });
  });
});

// ==================== VERIFY RESET CODE ====================
app.post("/verify-code", (req, res) => {
  const { email, code, password } = req.body;
  const sql = "SELECT * FROM userinfo WHERE email = ? AND reset_code = ?";

  db.query(sql, [email, code], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (results.length === 0) return res.status(400).json({ message: "Invalid email or code." });

    const user = results[0];
    if (new Date(user.reset_code_expiry) < new Date()) {
      return res.status(400).json({ message: "Reset code expired." });
    }

    const sqlUpdate = "UPDATE userinfo SET password = ?, reset_code = NULL, reset_code_expiry = NULL WHERE email = ?";
    db.query(sqlUpdate, [password, email], (err) => {
      if (err) return res.status(500).json({ message: "Failed to update password." });
      res.status(200).json({ message: "Password reset successfully!" });
    });
  });
});

// ==================== GOOGLE LOGIN ====================
app.post("/google-login", (req, res) => {
  const { name, email, googleId } = req.body;
  const sqlCheck = "SELECT * FROM userinfo WHERE email = ?";

  db.query(sqlCheck, [email], (err, result) => {
    if (err) return res.status(500).send("Database error.");

    if (result.length > 0) {
      const token = jwt.sign({ id: result[0].id, name: result[0].name }, "secretkey", { expiresIn: "1h" });
      return res.send({ message: "Login successful!", token });
    } else {
      const sqlInsert = "INSERT INTO userinfo (name, email, google_id) VALUES (?, ?, ?)";
      db.query(sqlInsert, [name, email, googleId], (err, result) => {
        if (err) return res.status(500).send("Database error.");
        const token = jwt.sign({ id: result.insertId, name }, "secretkey", { expiresIn: "1h" });
        res.send({ message: "User registered via Google!", token });
      });
    }
  });
});

// ==================== START SERVER ====================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});