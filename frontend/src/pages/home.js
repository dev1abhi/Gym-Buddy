import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useEffect } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {
    //workouts=...state from WorkoutContext
  const {workouts,dispatch}= useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://gym-buddy-dno8.onrender.com/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type:'SET_WORKOUTS',payload:json})
      }
    }
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
      {workouts && workouts.map(workout =>  //workouts is a object having key value pairs
       (
          <WorkoutDetails workout={workout} key={workout._id} />
          ))
        }
  </div>

<WorkoutForm/>
    </div>
  )
}

export default Home