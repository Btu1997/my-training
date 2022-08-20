const publishermodel= require ("../models/publisherModel")
// problem 2 ============================================================================================================
const createpublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publishermodel.create(publisher)
    res.send({data: publisherCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createNewpublisher = createpublisher
//module.exports.getAuthorsData= getAuthorsData