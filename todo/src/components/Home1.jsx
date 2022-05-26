import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosTodo } from '../Redux/todos/todos.api'
import { Tododata } from './Tododata'

export const Home1 = () => {

const todos = useSelector((state) =>state.todos.todos)

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTodosTodo())
  },[])
  return (
    <div>
        <h3>Todos</h3>
        {todos.map((todo) =>{
            return(
                <Tododata key = {todo.id} todo = {todo}/>
            )
        })}
    </div>
  )
}
