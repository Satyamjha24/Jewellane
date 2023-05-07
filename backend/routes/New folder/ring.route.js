const express = require('express');
const { RingModel } = require("../model/ring.model")
const ringRouter = express.Router()


ringRouter.get("/", async (req, res) => {
    const { sort } = req.query;
    const query = req.query.q;
    const queries = req.query;

    try {
        let ring;
        if (query && sort == "asc") {
            ring = await RingModel.find({ "title": { "$regex": query, "$options": "i" } }).sort({ price: 1 })
        } else if (query && sort == "desc") {
            ring = await RingModel.find({ "title": { "$regex": query, "$options": "i" } }).sort({ price: -1 })
        } else if (sort === "asc") {
            ring = await RingModel.find().sort({ price: 1 })
        } else if (sort === "desc") {
            ring = await RingModel.find().sort({ price: -1 })
        } else if (query) {
            ring = await RingModel.find({ "title": { "$regex": query, "$options": "i" } })
        } else {
            ring = await RingModel.find(queries)
        }
        res.status(200).send(ring)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


ringRouter.post("/add", async (req, res) => {
    try {
        const ring = new RingModel(req.body)
        await ring.save()
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
        await RingModel.findByIdAndDelete({ _id: ringID })
        res.status(200).send(`The product with id:${ringID} has been deleted`)

    } catch (err) {
        res.status(400).send(err)
    }

})





module.exports = {
    ringRouter
}