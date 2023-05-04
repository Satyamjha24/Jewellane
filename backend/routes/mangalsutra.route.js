const express = require('express');
const { MangalsutraModel } = require("../model/mangalsutra.model")
const mangalsutraRouter = express.Router()


mangalsutraRouter.get("/", async (req, res) => {
    try {
        const mangalsutra = await MangalsutraModel.find()
        res.status(200).send(mangalsutra)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

// mangalsutraRouter.post("/add", async (req, res) => {
//     try {
//         const mangalsutra = await new MangalsutraModel()
//         res.status(200).send({ "msg": "new data added successfully!" })
//     } catch (err) {
//         res.status(400).send({ "err": err.message })
//     }
// })





module.exports = {
    mangalsutraRouter
}