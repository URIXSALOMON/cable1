import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});

export default pool;
import db from "./db.js";

db.query("SELECT NOW()").then(res => {
  console.log("✅ DB Connected at:", res.rows[0].now);
}).catch(err => {
  console.error("❌ DB Connection Error:", err);
});
