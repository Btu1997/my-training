//const { count } = require("console")
//const BookModel= require("../models/bookModel")
const authormodel= require("../models/authormodel")
const bookModel = require("../models/bookModel")
//problem-1   ----------------------------------------------------------------------------------------------------------
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req,res){

    let Data = req.body
    let savedData= await authormodel.create(Data)
    res.send({msg:savedData})
}
//problem -2  ==========================================================================================================
const getbooks= async function(req,res){
    let id= await authormodel.findOne({author_name:"Chetan Bhagat"}).select({_id:0, author_id:1})
//console.log(id)
    let aId = id.author_id
    let bookDetails= await bookModel.find({author_id: aId}).select({author_id: 1, name: 1, _id:0})//author_id:id,author_id:{$eq:id}
    res.send({msg:bookDetails})
}
// problem 3 ===========================================================================================================
const getauthors = async function (req,res){
   let authorId = await bookModel.findOneAndUpdate({name : "Two states"}, {$set:{price:100}},{new:true}).select({_id:0,author_id:1})
   let id= authorId.author_id
   let updateprice = await bookModel.find({name:"Two states"}).select({_id:0,price:1})
  let newPrice= updateprice[0]
 let auth = await authormodel.find({author_id:{$eq:id}}).select({_id:0,author_name:1})
res.send({msg: auth,newPrice})
}

//problem 4 ============================================================================================================


const getbooklist = async function(req, res){
let range = await bookModel.find({price: {$gte:50,$lte:100}})
let a= range.map(x=>x.author_id)
//let newrange = await authormodel.find({author_id:a}).select({author_name:1,_id:0})
//let b = newrange.map(x=>x.author_name)
let Aid = await bookModel.find({price: {$gte:50,$lte:100}}).select({_id:0,name:1,author_id:1})

   // const allbooks = await bookModel.find({ price : { $gte: 50, $lte: 100} }).select({_id:0,name:1,author_id:1})
    //.select({ author_id :1, _id:0})
    //let authorname = await authormodel.find()
    res.send({msg: Aid })
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getbooks= getbooks
module.exports.getauthors = getauthors
module.exports.getbooklistwithauthor = getbooklist
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
  //   )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
