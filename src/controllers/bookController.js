const bookModels= require("../models/bookModels")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModels.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allBooks = await bookModels.find()
    res.send({msg: allBooks})
}

module.exports.createNewBook= createNewBook
module.exports.getBookList= getBookList