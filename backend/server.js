const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))
// db call
const connectDB = require('./db/connectDB.js')
const auth = require('./controllers/auth.js')
connectDB()


app.use('/',auth)
app.listen(PORT,()=>{
    console.log(`server is running in http://localhost${PORT}`);
})