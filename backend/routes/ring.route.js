const express = require('express');
const { RingModel } = require("../model/ring.model")
const ringRouter = express.Router()


ringRouter.get("/", async (req, res) => {
    const { query } = req.query
    try {
        const ring = await RingModel.find(query)
        res.status(200).send(ring)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


ringRouter.post("/add", async (req, res) => {
    try {
        const ring = await new RingModel()
        res.status(200).send({ "msg": "new data added successfully!", "data": ring })
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

ringRouter.patch("/update/:ringID", async (req, res) => {
    const { ringID } = req.params;
    try {
        await RingModel.findByIdAndUpdate({ _id: ringID }, req.body)
        res.status(200).send(`The product with id:${ringID} has been updated`)

    } catch (err) {
        res.status(400).send(err)
    }

})


ringRouter.delete("/delete/:ringID", async (req, res) => {
    const { ringID } = req.params;
    try {
        await RingModel.findByIdAndUpdate({ _id: ringID })
        res.status(200).send(`The product with id:${ringID} has been deleted`)

    } catch (err) {
        res.status(400).send(err)
    }

})





module.exports = {
    ringRouter
}