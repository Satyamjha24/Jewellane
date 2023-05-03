const express = require('express')
const cors = require("cors")
const { connection } = require('./db')
const { auth } = require('./middleware/auth.middleware');
const { userRouter } = require('./routes/user.route');

// const { noteRouter } = require('./routes/Note.route');
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())



app.get("/", (req, res) => {
    res.status(200).send("Basic API Endpoint")
})

app.use("/users", userRouter)

app.use(auth)

// app.use("/notes", noteRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the DB")
    } catch (error) {
        console.log(error)
        console.log("Cannot connect to the DB")
    }
    console.log(`Server is running at port ${process.env.port}`)
})