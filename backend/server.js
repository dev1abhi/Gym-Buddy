require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')

const app = express() //creates the express app


//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
console.log(req.path, req.method)
next()
})


//routes
//grabs all the routes in workouts.js, when we fire a request to '/api/workouts' , then only it uses the routes
app.use('/api/workouts',workoutRoutes)   


//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listens for requests
    app.listen(process.env.PORT, (req,res)=>
    {
        console.log('connected to db & listening on port',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})








