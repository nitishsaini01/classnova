const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* GET teachers */
router.get("/", (req,res)=>{
  db.query("SELECT * FROM teachers",(err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

/* ADD teacher */
router.post("/", (req,res)=>{

  const {name,email,phone,subject} = req.body;

  db.query(
    "INSERT INTO teachers (name,email,phone,subject) VALUES (?,?,?,?)",
    [name,email,phone,subject],
    (err,result)=>{
      if(err) return res.json(err);
      res.json({message:"Teacher added"});
    }
  );

});


/* DELETE teacher */

router.delete("/:id",(req,res)=>{

const id = req.params.id;

db.query(
  "DELETE FROM teachers WHERE id=?",
  [id],
  (err,result)=>{

    if(err) return res.json(err);

    res.json({message:"Teacher deleted"});

  }
);

});


module.exports = router;