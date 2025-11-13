import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
 
// --- Helper: create DB connection ---
async function connectDB() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
   });
}

// --- Handle POST ---
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, googleId } = body;

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    const db = await connectDB();

    // ✅ Check if user exists
    const [rows] = await db.execute("SELECT * FROM userinfo WHERE email = ?", [email]);
    let userId;

    if (rows.length > 0) {
      // Existing user
      userId = rows[0].id;
    } 
    else {
      // New user → insert
      const [result] = await db.execute(
        "INSERT INTO userinfo (name, email, google_id) VALUES (?, ?, ?)",
        [name, email, googleId]
      );
      userId = result.insertId;
    }

    // ✅ Issue JWT
    const token = jwt.sign({ id: userId, name }, process.env.JWT_SECRET || "default_secret", {
      expiresIn: "1h",
    });

    return new Response(
      JSON.stringify({
        message: rows.length > 0 ? "Login successful!" : "User registered via Google!",
        token,
      }),
      { status: 200 }
    );
  } 
  catch (err) 
  {
    console.error("❌ Database error:", err);
    return new Response(JSON.stringify({ message: "Database error" }), { status: 500 });
  }
} 