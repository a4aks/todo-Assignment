import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Todo = ({ todo }) => {

    const navigate = useNavigate()

    const onEditItem  = (todo) =>{
      navigate(`/todo/${todo.id}`)
    }
    return (
        <>
            <td>{todo.id}</td>
            <td>{todo.formData.title}</td>
            <td>{todo.formData.description}</td>
            <td>{todo.formData.category}</td>
            <td>{todo.formData.tags}</td>
            <td><button onClick={() => onEditItem(todo)}>Edit</button></td>
        </>
    )
}
