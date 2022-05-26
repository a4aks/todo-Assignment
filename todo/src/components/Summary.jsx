import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getTodosTodo } from '../Redux/todos/todos.api'
import { getTodosProgress } from '../Redux/todos/todos.api'
import { getTodosDone } from '../Redux/todos/todos.api'
import styles from "./Summary.module.css"

export const Summary = () => {

    const todos = useSelector((state) =>state.todos.todos)
    const progress = useSelector((state) =>state.todos.progress)
    const done = useSelector((state) =>state.todos.done)
    const authState = useSelector((state) => state.auth);
    const { isLoading, error, isUserLoggedIn } = authState;

    const navigate = useNavigate()

    const dispatch = useDispatch()
    useEffect (() =>{
        dispatch(getTodosTodo())
        dispatch(getTodosProgress())
        dispatch(getTodosDone())
    },[])
  return (
    <>
    {isUserLoggedIn ? ( <div className={styles.summary}>
        <div>
            Todo: {todos.length}
        </div>
        <div>
           In-Progress :{progress.length}
        </div>
        <div>
           Done: {done.length}
        </div>
    </div>) : navigate('/')}
   
    </>
  )
}
