import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants"

export const IncrementCounter =()=>{
    return{
        type:INCREMENT
    }
}
export const DecrementCounter =()=>{
    return{
        type:DECREMENT
    }
}
export const ResetCounter =()=>{
    return{
        type:RESET
    }
}