// import mysql from "mysql2/promise";
// export const db = mysql.createPool({
//   host: "192.168.18.62",
//   user: "root",
//   password: "cs123",
//   database: "user_management",
// });

import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "user_management",
  port: Number(process.env.DB_PORT) || 3306,
});
