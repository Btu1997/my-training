const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{ type: String, 
        require: true
    },
    authorName: String, 

    tags: ["nodejs","mongoose","javascripts"],
    
    isPublished: Boolean,
    totalPages: Number,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
