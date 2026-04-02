const studentModel = require("../models/studentModel");

exports.getStudents = (req, res) => {
  studentModel.getStudents((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addStudent = (req, res) => {
  studentModel.addStudent(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student added successfully" });
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  studentModel.deleteStudent(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student deleted" });
  });
};