const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlnitish01",
  database: "classnova"
});

/* LOGIN */

router.post("/login", async (req, res) => {

  const { name, email, roll } = req.body;

  try {

    /* CHECK TEACHER LOGIN */

    if (name && email) {

      const [teachers] = await pool.query(
        "SELECT * FROM teachers WHERE name=? AND email=?",
        [name, email]
      );

      if (teachers.length > 0) {

        return res.json({
          success: true,
          role: "teacher",
          user: teachers[0]
        });

      }

    }

    /* CHECK STUDENT LOGIN */

    if (name && roll) {

      const [students] = await pool.query(
        "SELECT * FROM students WHERE name=? AND roll=?",
        [name, roll]
      );

      if (students.length > 0) {

        return res.json({
          success: true,
          role: "student",
          user: students[0]
        });

      }

    }

    res.status(401).json({ success:false, message:"Invalid login" });

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Server error" });

  }

});

module.exports = router;