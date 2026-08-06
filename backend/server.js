const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080
require('dotenv').config(); 
app.use(express.json())
const {setServers} = require("node:dns/promises")
setServers(["1.1.1.1", "8.8.8.8"]);
app.use(cors({
    origin: "https://emsbackendapp.netlify.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
// db call
const connectDB = require('./db/connectDB.js')
const auth = require('./controllers/auth.js')
connectDB()


app.use('/',auth)
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})