const { useState } = require("react")
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


const { Form } = require("react-router-dom")

const WorkoutForm = () => {
    const {dispatch}=useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)
    const [emptyFields,setEmptyFields]= useState([])
   

       const handleSubmit=async(e)=>
       {
        e.preventDefault()

        const workout ={title,load,reps}
        const response=await fetch('https://gym-buddy-dno8.onrender.com/api/workouts',{

        method:'POST',
        body:JSON.stringify(workout), //we are turning it to json then sending it
        headers:{
            'Content-Type':'application/json'
        }
        })
        const json = await response.json()

        if (!response.ok)
        {
               setError(json.error)
               setEmptyFields(json.emptyFields)
        }
        if(response.ok)
        {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout created')
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
       }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>
                Add a new workout
            </h3>

            <label> Exercise Title:</label>
             <input  //self closing
             type="text"
             onChange={(e)=>setTitle(e.target.value)}
             value={title}
             className={emptyFields.includes('title')?'error':''}
             />
             
             <label> Load (KG):</label>
             <input  //self closing
             type="number"
             onChange={(e)=>setLoad(e.target.value)}
             value={load}
             className={emptyFields.includes('load')?'error':''}

             />


             <label> Reps:</label>
             <input  //self closing
             type="number"
             onChange={(e)=>setReps(e.target.value)}
             value={reps}
             className={emptyFields.includes('reps')?'error':''}
             />
             
             <button>Add Workout</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}


export default WorkoutForm