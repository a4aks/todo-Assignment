import React from 'react'
import { useDispatch } from 'react-redux'


export const Todo = ({todo}) => {

  const dispatch = useDispatch();
  return (
    <div>
      <p>{todo.value}</p>
      <button>
        Delete 
      </button>
      </div>
  )
}
