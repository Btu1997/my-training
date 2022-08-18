const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema( 
        
    {    

        author_id :{ type:Number,
                     require:true  
                     },
        author_name:String,
        age:Number,
        address:String
    } 
)

module.exports = mongoose.model('Author', AuthorSchema)
//const userSchema = new mongoose.Schema( {
    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
    // // isIndian: Boolean,
    // // parentsInfo: {
    // //     motherName: String,
    // //     fatherName: String,
    // //     siblingName: String
    // // },
    // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array