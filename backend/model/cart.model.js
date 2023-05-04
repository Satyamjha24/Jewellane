
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    size: { type: Number, required: true },
    category: { type: String, required: true },
    userID: { type: String, required: true },
    email: { type: String, required: true }
}, {
    versionKey: false
})


const CartModel = mongoose.model('cart', cartSchema)

module.exports = {
    CartModel
}
