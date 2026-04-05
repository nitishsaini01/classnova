const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/authMiddleware");

/* -------------------- GET COURSES -------------------- */
router.get("/", auth, (req, res) => {
  db.query("SELECT * FROM courses", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* -------------------- ADD COURSE -------------------- */
router.post("/", auth, (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Course name required" });

  db.query("INSERT INTO courses (name) VALUES (?)", [name], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Course added", id: result.insertId });
  });
});

/* -------------------- DELETE COURSE -------------------- */
router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM courses WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted" });
  });
});

module.exports = router;