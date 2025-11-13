import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, code } = body;

    if (!email || !code) {
      return new Response(JSON.stringify({ message: "Email and code are required" }), { status: 400 });
    }

    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 3306,
    });

    const [rows] = await db.execute(
      "SELECT reset_code, reset_code_expiry FROM userinfo WHERE email = ?",
      [email]
    );

    if (!rows || rows.length === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    const { reset_code, reset_code_expiry } = rows[0];

    if (reset_code !== code) {
      return new Response(JSON.stringify({ message: "Invalid code" }), { status: 400 });
    }

    if (new Date() > new Date(reset_code_expiry)) {
      return new Response(JSON.stringify({ message: "Code expired" }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: "Code verified successfully" }), { status: 200 });
  } catch (err) {
    console.error("❌ Error verifying code:", err);
    return new Response(JSON.stringify({ message: "Error verifying code" }), { status: 500 });
  }
}
