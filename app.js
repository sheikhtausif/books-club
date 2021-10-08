require('dotenv').config()
const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT
const connect = require('./src/Configs/db')
const userController = require('./src/Controllers/user.controller')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', userController)


app.listen(PORT, async () => {
    await connect()
    console.log("connection has been established with hackathon");
    console.log(`App listening at port http://localhost:${PORT}`)
})