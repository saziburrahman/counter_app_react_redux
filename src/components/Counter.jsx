import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { IncrementCounter } from '../Redux/actions/CounterActions'

const Counter = () => {
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(IncrementCounter())
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
