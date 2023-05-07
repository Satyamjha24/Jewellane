const express = require('express');
const { BraceletModel } = require("../model/bracelet.model")
const braceletRouter = express.Router()


// braceletRouter.get("/", async (req, res) => {
//     const  query  = req.query
//     try {
//         const bracelet = await BraceletModel.find(query)
//         res.status(200).send(bracelet)
//     } catch (err) {
//         res.status(400).send({ "err": err.message })
//     }
// })


braceletRouter.get("/", async (req, res) => {
    const { sort } = req.query;
    const query = req.query.q;
    const queries = req.query;

    try {
        let bracelet;
        if (query && sort == "asc") {
            bracelet = await BraceletModel.find({ "title": { "$regex": query, "$options": "i" } }).sort({ price: 1 })
        } else if (query && sort == "desc") {
            bracelet = await BraceletModel.find({ "title": { "$regex": query, "$options": "i" } }).sort({ price: -1 })
        } else if (sort === "asc") {
            bracelet = await BraceletModel.find().sort({ price: 1 })
        } else if (sort === "desc") {
            bracelet = await BraceletModel.find().sort({ price: -1 })
        } else if (query) {
            bracelet = await BraceletModel.find({ "title": { "$regex": query, "$options": "i" } })
        } else {
            bracelet = await BraceletModel.find(queries)
        }
        res.status(200).send(bracelet)
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