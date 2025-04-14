import express from "express";
import db from "../db.js";

const router = express.Router();

// Get all cables
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM cables");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new cable
router.post("/", async (req, res) => {
  const { type, length, start_point, end_point, status, core_count } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO cables (type, length, start_point, end_point, status, core_count)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [type, length, start_point, end_point, status, core_count]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
