import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import withCors from "../../utils/withCors";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, password } = req.body;

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    const [rows] = await db.execute("SELECT * FROM userinfo WHERE name = ?", [name]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error("❌ Database error:", err);
    return res.status(500).json({ message: "Database error" });
  }
}

export default withCors(handler);
