
import { createContext, useReducer } from "react"

export const WorkoutsContext = createContext()

export const workoutsReducer = (state,action) => {
    switch(action.type)
    {
        //returning a new value that we want the state to be 
        case 'SET_WORKOUTS':
            return{
                //action.payload is a array of all of the workouts
                workouts:action.payload
            }
            case 'CREATE_WORKOUT':
                return{
                    workouts: [action.payload,...state.workouts]
                }
            case 'DELETE_WORKOUT':
              return{
                     workouts: state.workouts.filter((w)=>
                     w._id != action.payload._id
                     )
              }
                default:
                    return state  //returning state to useReducer
    }

}
//providing that context to our application component tree
 
 export const WorkoutsContextProvider = ({children}) =>
 {
    //usereducer updates the properties of state
    //use-reducer uses returned state and initial state
    //and updates state & dispatch ku khali kre
    const [state,dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })

    return (
        //make it wrap the root app component
        //...state means the key-value pair in state will copied to new object
        <WorkoutsContext.Provider value={{...state,dispatch}} >
        {children}
        </WorkoutsContext.Provider>
    )
 }