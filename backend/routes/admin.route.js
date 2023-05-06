const express = require('express');
const { AdminModel } = require("../model/admin.model")
const { UserModel } = require("../model/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { adminauth } = require('../middleware/adminauth.middleware');
const adminRouter = express.Router()


adminRouter.post("/register", async (req, res) => {
    //Logic
    const { name, email, image, password, type } = req.body

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            const user = new AdminModel({ name, email, image, type, password: hash })
            await user.save()
            res.status(200).send({ "msg": "New user has been registered" })
        });

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})

adminRouter.post("/login", async (req, res) => {
    //Logic
    const { email, password } = req.body
    try {
        const user = await AdminModel.findOne({ email })
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

adminRouter.use(adminauth)

adminRouter.get("/", async (req, res) => {
    try {
        if (req.body.adminType == "admin") {
            const admin = await AdminModel.find()
            res.status(200).send(admin)
        } else {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        }
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

adminRouter.get("/users", async (req, res) => {
    try {
        if (req.body.adminType == "admin") {
            const users = await UserModel.find()
            res.status(200).send(users)
        } else {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        }
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


adminRouter.delete("/delete/:adminID", async (req, res) => {
    const { adminID } = req.params;
    try {
        if (req.body.adminType !== "admin") {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await AdminModel.findByIdAndDelete({ _id: adminID })
            res.status(200).send(`The admin with id:${adminID} has been deleted`)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})



module.exports = {
    adminRouter
}