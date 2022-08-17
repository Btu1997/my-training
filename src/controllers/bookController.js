const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksList= async function (req, res) {

     let allBooks= await BookModel.find().select( {bookName:1,authorName:1,_id:0})//.count() // COUNT
     res.send({msg: allBooks})
    }
    
    const getBooksInYear = async function (req, res) {
        let useryear = req.body.useryear

        let data = await bookModel.find({year:{$eq:useryear}})
        res.send({msg: data})
    }
  const getXINRBooks = async function (req, res){

    let Inrbooks =  await bookModel.find({"price.indianprice":{$in:["100INR","200INR","300INR"]}}).count()
        res.send({msg: Inrbooks})
  }

const getRandomBooks = async function (req, res){
    let data = await bookModel.find({$or:[{stockAvailable:true},{totalpages:{$gt:500}}]}).count()
 res.send({msg: data})
}
   const getParticularBooks = async function (req, res) {
let userdata = req.body
    let data = await bookModel.find({userdata})
       res.send({msg: data})
   }

  

module.exports.createBook = createBook
module.exports.getBooksList = getBooksList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks  = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBooks = getParticularBooks