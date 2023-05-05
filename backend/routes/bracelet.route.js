const express = require('express');
const { BraceletModel } = require("../model/bracelet.model")
const braceletRouter = express.Router()


braceletRouter.get("/", async (req, res) => {
    const { query } = req.query
    try {
        const cart = await BraceletModel.find(query)
        res.status(200).send(cart)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


braceletRouter.post("/add", async (req, res) => {
    try {
        const bracelet = new BraceletModel(req.body)
        await bracelet.save()
        res.status(200).send({ "msg": "new data added successfully!", "data": bracelet })
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

braceletRouter.patch("/update/:braceletID", async (req, res) => {
    const { braceletID } = req.params;
    try {
        await BraceletModel.findByIdAndUpdate({ _id: braceletID }, req.body)
        res.status(200).send(`The product with id:${braceletID} has been updated`)

    } catch (err) {
        res.status(400).send(err)
    }

})


braceletRouter.delete("/delete/:braceletID", async (req, res) => {
    const { braceletID } = req.params;
    try {
        await BraceletModel.findByIdAndDelete({ _id: braceletID })
        res.status(200).send(`The product with id:${braceletID} has been deleted`)

    } catch (err) {
        res.status(400).send(err)
    }

})







module.exports = {
    braceletRouter
}