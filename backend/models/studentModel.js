const db = require("../config/db");

const getStudents = (callback) => {
  db.query("SELECT * FROM students", callback);
};

const addStudent = (data, callback) => {
  const sql = "INSERT INTO students (name, roll, email, phone, course) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [data.name, data.roll, data.email, data.phone, data.course], callback);
};

const deleteStudent = (id, callback) => {
  db.query("DELETE FROM students WHERE id = ?", [id], callback);
};

module.exports = {
  getStudents,
  addStudent,
  deleteStudent
};