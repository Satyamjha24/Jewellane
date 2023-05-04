const express = require('express');
const { AdminModel } = require("../model/admin.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { adminauth } = require('../middleware/adminauth.middleware');
const adminRouter = express.Router()


adminRouter.post("/register", async (req, res) => {
    //Logic
    const { name, email, password, type } = req.body

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            const user = new AdminModel({ name, email, type, password: hash })
            await user.save()
            res.status(200).send({ "msg": "New user has been registered" })
        });

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})

adminRouter.use(adminauth)

adminRouter.post("/login", async (req, res) => {
    //Logic
    const { email, password } = req.body
    try {
        const user = await AdminModel   .findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                // result == true
                if (result) {
                    const token = jwt.sign({ adminEmail: user.email, adminType: user.type }, "admin");
                    res.status(200).send({ "msg": "Login Succesfull", token })
                } else {
                    res.status(200).send({ "msg": "Wrong Credentials!!!" })
                }
            });

        } else {
            res.status(200).send({ "msg": "Wrong Credentials!!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": err.message })
    }
})





module.exports = {
    adminRouter
}