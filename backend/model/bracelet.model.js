
const mongoose = require('mongoose')

const braceletSchema = mongoose.Schema({
    title: { type: String, required: true },
    imglink: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: String, required: true },
    category: { type: String, required: true },
    details: { type: String },
    video: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    dimension: { type: String },
    weight: { type: String },
    purity: { type: String },
    diamondtype: { type: String },
    settingtype: { type: String },
    totalnum: { type: String },
    totalweight: { type: String },
    reviews: { type: String },
    rating: { type: Number }
}, {
    versionKey: false
})






const BraceletModel = mongoose.model('bracelet', braceletSchema)

module.exports = {
    BraceletModel
}
