const express = require('express')
const app = express()


//reguler middleware
app.use(express.json())
const morgan = require("morgan")
app.use(morgan('dev'))
require('dotenv').config()

//DB connection and Port
require('./config/Db')()
const PORT = process.env.PORT||3000;

//import all routes

app.use("/api/v1/user",require('./router/user'))



// app.get("/",(req,res)=>{
//     console.log(req.protocol);
//     console.log(req.get('host'));

// })

app.listen(PORT,()=>console.log(`Server Running on ${PORT} 🚀 🚀`))