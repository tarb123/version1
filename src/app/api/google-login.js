import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import withCors from "../../utils/withCors";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, googleId } = req.body;

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    // ✅ Check if user exists
    const [rows] = await db.execute("SELECT * FROM userinfo WHERE email = ?", [email]);

    if (rows.length > 0) {
      // Existing user → issue token
      const token = jwt.sign({ id: rows[0].id, name: rows[0].name }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful!", token });
    } else {
      // New user → insert then issue token
      const [result] = await db.execute(
        "INSERT INTO userinfo (name, email, google_id) VALUES (?, ?, ?)",
        [name, email, googleId]
      );
      const token = jwt.sign({ id: result.insertId, name }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "User registered via Google!", token });
    }
  } catch (err) {
    console.error("❌ Database error:", err);
    return res.status(500).json({ message: "Database error" });
  }
}

export default withCors(handler);
