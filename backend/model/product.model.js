
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    mrp: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: String, required: true },
    category: { type: String, required: true }
}, {
    versionKey: false
})


const ProductModel = mongoose.model('product', productSchema)

module.exports = {
    ProductModel
}
