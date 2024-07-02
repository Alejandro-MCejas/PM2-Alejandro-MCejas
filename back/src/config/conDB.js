require("dotenv").config();

const mongoose = require("mongoose");

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mbhl2l8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Henry`;

const conDB = async () => {
    const connection = await mongoose.connect(URL);
}

module.exports = conDB;

