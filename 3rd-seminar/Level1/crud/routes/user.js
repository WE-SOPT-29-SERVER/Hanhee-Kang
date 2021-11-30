const express = require("express");
const users = require("../dbMockup/user");
const router = express.Router();

router.post("/singup", (req, res) => {
  const { id, name, password, email } = req.body;
if(!id||!name||!)
    
  const newUser = { id, name, password, email };

  users.push(newUser);

  res.status(200).send(newUser);
});

module.exports = router;
