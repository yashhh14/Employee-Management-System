const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB connected successfully");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;