const express = require("express");
const router = express.Router();

// Simple hardcoded admin login
const ADMIN = {
  username: "admin",
  password: "1234"
};

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if(username === ADMIN.username && password === ADMIN.password){
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Invalid login" });

});

module.exports = router;