import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext = ()=>
{
    const context = useContext(WorkoutsContext)


if(!context){
    throw Error('useWorkoutscontext must be inside WorkoutsContextProvider')
}

return context

}