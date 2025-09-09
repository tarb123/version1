import mysql from "mysql2/promise";
import withCors from "../../utils/withCors";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, code, password } = req.body;

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    const [rows] = await db.execute(
      "SELECT * FROM userinfo WHERE email = ? AND reset_code = ?",
      [email, code]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or code" });
    }

    if (new Date(rows[0].reset_code_expiry) < new Date()) {
      return res.status(400).json({ message: "Reset code expired" });
    }

    await db.execute(
      "UPDATE userinfo SET password = ?, reset_code = NULL, reset_code_expiry = NULL WHERE email = ?",
      [password, email]
    );

    return res.status(200).json({ message: "Password reset successfully!" });
  } catch (err) {
    console.error("❌ Error:", err);
    return res.status(500).json({ message: "Failed to update password" });
  }
}

export default withCors(handler);
