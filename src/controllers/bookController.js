const { updateMany } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
//problem 3 ===========================================================================================================

const createBook= async function (req, res) {
    let book = req.body
//3.a ===========================================================================================================
    if(!book.author)
    {return res.send({data: "Author is mendatory , Please enter Author_Id"})}
// 3 .b==============================================================================================
   let authorId= await authorModel.findById(book.author)
   if (!authorId){
    return res.send({data: " author is not present."})
   }
    //3.c =====================================================================================================
   if (!book.publisher){return res.send({data:"publishar detail is required"})}
   // 3.d ==========================================================================================

   let PId= await publisherModel.findById(book.publisher)
   if (!PId)
   {return res.send({data: " publisher is not present."})}

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
    
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})}
// }
// problem 4 =============================================================================================================
const getBooksData = async function (req, res) {
 let specificBook = await bookModel.find().populate('author publisher')
 res.send({data: specificBook})
 }

 //problem 5.a ============================================================================================================

 const getUpdatedBooks= async function(req,res){

    let Books = await bookModel.updateMany(
        {publisher:{$in:["6300c1f51205166d261d2246","62ff742c10cc715bca1b1d59"]}},
        {$set:{isHardCover:true}},
        {new: true}
    )   
    
    // problem 5.b ======================================================================================================
   
    // for(let i=0; i<= authors.length;i++) 
    // {var Aid= authors[i]
    //     console.log(Aid)
    //    let p= Aid._id
    // UpdatePrice = await bookModel.updateMany(
    //   {author:{$eq:[p]}},
    //     {$inc:{price:10}},
    //   {new:true}

    //  )}
    let authors= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
   let Aid= authors.map(x=>x._id)
   let UpdatePrice= await bookModel.updateMany(
    {author:{$in:Aid}},
       {$inc:{price: +10}},
     {new:true}
   )

     
    res.send({data:UpdatePrice}) 
 }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getUpdatedBooks= getUpdatedBooks
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
