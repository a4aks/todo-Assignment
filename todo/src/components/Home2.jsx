import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosProgress } from '../Redux/todos/todos.api'
import { Tododata } from './Tododata'

export const Home2 = () => {

const progress = useSelector((state) =>state.todos.progress)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getTodosProgress())
  },[])

  return (
    <div>
        <h3>IN PROGRESS</h3>
        {progress.map((todo) =>{
            return(
                <Tododata key = {todo.id} todo = {todo}/>
            )
        })}
    
    </div>
  )
}
