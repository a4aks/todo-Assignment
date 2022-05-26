import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosDone } from '../Redux/todos/todos.api'
import { ProgressData } from './ProgressData'

export const Home3 = () => {
const done = useSelector((state) =>state.todos.done)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getTodosDone())
  },[])

  return (
    <div>
    <h3>DONE</h3>
    {done.map((todo) =>{
        return(
           <ProgressData key ={todo.id} todo = {todo}/>
        )
    })}

</div>
  )
}
