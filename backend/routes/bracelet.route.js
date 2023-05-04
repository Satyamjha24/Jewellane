const express = require('express');
const { BraceletModel } = require("../model/bracelet.model")
const braceletRouter = express.Router()


braceletRouter.get("/", async (req, res) => {
    try {
        const cart = await BraceletModel.find()
        res.status(200).send(cart)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


// braceletRouter.post("/add", async (req, res) => {
//     try {
//         const bracelet = await new BraceletModel()
//         res.status(200).send({ "msg": "new data added successfully!" })
//     } catch (err) {
//         res.status(400).send({ "err": err.message })
//     }
// })







module.exports = {
    braceletRouter
}