const mongoose = require('mongoose');
//const objectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema({
    
    name: String,
    headQuarter: String
    

})
module.exports = mongoose.model('NewPublisher', publisherSchema)