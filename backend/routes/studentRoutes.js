const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/students", controller.getStudents);
router.post("/students", controller.addStudent);
router.delete("/students/:id", controller.deleteStudent);

module.exports = router;