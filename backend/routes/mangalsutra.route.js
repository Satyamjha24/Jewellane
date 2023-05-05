const express = require('express');
const { MangalsutraModel } = require("../model/mangalsutra.model")
const mangalsutraRouter = express.Router()


mangalsutraRouter.get("/", async (req, res) => {
    const { query } = req.query
    try {
        const mangalsutra = await MangalsutraModel.find(query)
        res.status(200).send(mangalsutra)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

mangalsutraRouter.post("/add", async (req, res) => {
    try {
        const mangalsutra = new MangalsutraModel(req.body)
        await mangalsutra.save()
        res.status(200).send({ "msg": "new data added successfully!", "data": mangalsutra })
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


mangalsutraRouter.patch("/update/:mangalsutraID", async (req, res) => {
    const { mangalsutraID } = req.params;
    try {
        await MangalsutraModel.findByIdAndUpdate({ _id: mangalsutraID }, req.body)
        res.status(200).send(`The product with id:${mangalsutraID} has been updated`)

    } catch (err) {
        res.status(400).send(err)
    }

})


mangalsutraRouter.delete("/delete/:mangalsutraID", async (req, res) => {
    const { mangalsutraID } = req.params;
    try {
        await MangalsutraModel.findByIdAndDelete({ _id: mangalsutraID })
        res.status(200).send(`The product with id:${mangalsutraID} has been deleted`)

    } catch (err) {
        res.status(400).send(err)
    }

})




module.exports = {
    mangalsutraRouter
}