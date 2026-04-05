const express = require("express");
const router = express.Router();
const Teacher = require("../models/teachermodel");

// Get all teachers
router.get("/", (req, res) => {
  Teacher.getAllTeachers((err, teachers) => {
    if (err) return res.status(500).json({ error: err });
    res.json(teachers);
  });
});

// Add new teacher
router.post("/", (req, res) => {
  const { name, email, phone, subject } = req.body;
  if (!name || !email || !subject) {
    return res.status(400).json({ error: "Name, email, and subject are required" });
  }

  Teacher.addTeacher({ name, email, phone, subject }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Teacher added successfully", id: result.insertId });
  });
});

module.exports = router;