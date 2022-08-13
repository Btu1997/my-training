const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController");




router.post("/createNewBook", bookController.createNewBook )

router.get("/getBookList", bookController.getBookList)


module.exports = router;