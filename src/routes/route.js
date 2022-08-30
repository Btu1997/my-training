const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const mw= require("../middleware/auth")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createUsers", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", mw.auth2, userController.getUserData)

router.put("/users/:userId",mw.auth2 ,userController.updateUser)
router.delete("/deleteuser/:userId",mw.auth2, userController.deleteuser)
module.exports = router;