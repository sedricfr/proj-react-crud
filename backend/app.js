const express = require('express')
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000
//require("dotenv").config();
const mongoose=require("mongoose")
const route = require ("./router/route")
const cookieParser = require("cookie-parser")

app.use(cors({ origin: 'https://cosmic-khapse-c57675.netlify.app' }))
app.use(express.json())
// app.use(cookieParser())


mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>{
    console.log(err.message);
})


app.use('/',route)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
