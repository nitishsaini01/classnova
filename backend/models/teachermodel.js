const db = require("../config/db");

// Create a table if not exists (optional, run once in MySQL)
const createTeacherTable = `
CREATE TABLE IF NOT EXISTS teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(100)
)
`;

db.query(createTeacherTable, (err, result) => {
  if (err) {
    console.log("Error creating teachers table:", err);
  } else {
    console.log("Teachers table ready");
  }
});

// Get all teachers
const getAllTeachers = (callback) => {
  const query = "SELECT * FROM teachers";
  db.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Add a new teacher
const addTeacher = (teacher, callback) => {
  const query = "INSERT INTO teachers (name, email, phone, subject) VALUES (?, ?, ?, ?)";
  const values = [teacher.name, teacher.email, teacher.phone, teacher.subject];
  db.query(query, values, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = {
  getAllTeachers,
  addTeacher
};