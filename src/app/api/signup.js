import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    await db.execute("INSERT INTO userinfo (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      password,
    ]);

    res.status(200).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("❌ Database error:", err);
    res.status(500).json({ message: "Database error" });
  }
}
