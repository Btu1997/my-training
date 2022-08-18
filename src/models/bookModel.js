const mongoose = require('mongoose');
//const { stringify } = require('querystring');

const bookSchema = new mongoose.Schema( 
    { 
        name: {type:String,
                require:true},
                author_id:{type:Number,
                    require: true
                  } ,
                  price:Number,
                  ratings:Number,
    })

   


 //users
module.exports = mongoose.model('book', bookSchema)