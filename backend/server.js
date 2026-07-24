const express = require('express')
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 8080;
const cors = require('cors')
app.use(express.json())
app.use(cors())
// db call
const connectDB = require('./db/connectDB.js')
const auth = require('./controllers/auth.js')
connectDB()


app.use('/',auth)
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})