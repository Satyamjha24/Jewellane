const express = require('express');
const { CartModel } = require("../model/cart.model")
const cartRouter = express.Router()


cartRouter.get("/", async (req, res) => {
    try {
        const cart = await CartModel.find({ userID: req.body.userID })
        res.status(200).send(cart)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})



cartRouter.post("/add", async (req, res) => {
    try {
        const note = new CartModel(req.body)
        await note.save()
        res.status(200).send({ 'msg': 'New Product has been added in the Cart' })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})



cartRouter.patch("/update/:cartID", async (req, res) => {
    const { cartID } = req.params;
    const cart = await CartModel.findOne({ _id: cartID })
    try {
        if (req.body.userID !== cart.userID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await CartModel.findByIdAndUpdate({ _id: cartID }, req.body)
            res.status(200).send(`The cart with id:${cartID} has been updated`)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})


cartRouter.delete("/delete/:cartID", async (req, res) => {
    const { cartID } = req.params;
    const cart = await CartModel.findOne({ _id: cartID })
    try {
        if (req.body.userID !== cart.userID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await CartModel.findByIdAndDelete({ _id: cartID })
            res.status(200).send(`The cart with id:${cartID} has been deleted`)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})




module.exports = {
    cartRouter
}