const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/Publishercontroller")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createNewAuthor", authorController.createNewauthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)


router.post("/createNewPublisher", publisherController.createNewpublisher )

router.post("/createNewBooks", bookController.createBook )

router.get("/getBooksData", bookController.getBooksData)
router.put("/books",bookController.getUpdatedBooks)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;