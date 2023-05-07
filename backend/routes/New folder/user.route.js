const express = require('express');
const { UserModel } = require("../model/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter = express.Router()



userRouter.post("/register", async (req, res) => {
    //Logic
    const { fname, lname, email, type, password, gender, mobile } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            const user = new UserModel({ fname, lname, email, type, gender, mobile, password: hash })
            await user.save()
            res.status(200).send({ "msg": "New user has been registered" })
        });

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})



userRouter.post("/login", async (req, res) => {
    //Logic
    const { mobile, password } = req.body
    try {
        const user = await UserModel.findOne({ mobile })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                // result == true
                if (result) {
                    const token = jwt.sign({ userID: user._id, email: user.email }, "project");
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
    userRouter
}