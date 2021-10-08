require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_LOCAL_URI

const connect = async () => {
    return await mongoose.connect(MONGO_URI)
}

module.exports = connect