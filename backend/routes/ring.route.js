const express = require('express');
const { RingModel } = require("../model/ring.model")
const ringRouter = express.Router()


ringRouter.get("/", async (req, res) => {
    try {
        const ring = await RingModel.find()
        res.status(200).send(ring)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


// ringRouter.post("/add", async (req, res) => {
//     try {
//         const ring = await new RingModel()
//         res.status(200).send({"msg":"new data added successfully!"})
//     } catch (err) {
//         res.status(400).send({ "err": err.message })
//     }
// })







module.exports = {
    ringRouter
}