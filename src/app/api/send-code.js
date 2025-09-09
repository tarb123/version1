import mysql from "mysql2/promise";
import nodemailer from "nodemailer";
import withCors from "../../utils/withCors";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  const resetCode = Math.floor(100000 + Math.random() * 900000);
  const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    const [rows] = await db.execute("SELECT * FROM userinfo WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await db.execute(
      "UPDATE userinfo SET reset_code = ?, reset_code_expiry = ? WHERE email = ?",
      [resetCode, expiry, email]
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "🔐 Your Reset Code",
      text: `Your reset code is: ${resetCode}\nIt will expire in 1 hour.\n\nReset here: https://your-frontend-domain.com/ResetPassword`,
    });

    return res.status(200).json({ message: "Reset code sent to your email." });
  } catch (err) {
    console.error("❌ Error:", err);
    return res.status(500).json({ message: "Error sending reset code" });
  }
}

export default withCors(handler);
