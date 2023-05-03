const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },
    mobile: { type: Number, required: true }
}, {
    versionKey: false
})

const UserModel = mongoose.model('user', userSchema)

module.exports = {
    UserModel
}