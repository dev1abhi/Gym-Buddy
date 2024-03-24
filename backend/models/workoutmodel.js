
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

//creating  a Workout model . its a collection.
module.exports = mongoose.model('Workout', workoutSchema)

//would find all the workouts in the Workout collection for us
//Workout.find()