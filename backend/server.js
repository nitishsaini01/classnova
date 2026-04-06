const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const teacherRoutes = require("./routes/teacherroutes");

const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve uploaded profile pics
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* -------- API ROUTES -------- */

// AUTH LOGIN
app.use("/api/auth", authRoutes);

// STUDENTS
app.use("/api", studentRoutes);

// COURSES
app.use("/api/courses", courseRoutes);

// TEACHERS
app.use("/api/teachers", teacherRoutes);

/* -------- FRONTEND -------- */

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Default route -> open login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login.html"));
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});