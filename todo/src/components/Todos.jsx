import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";
import { useEffect } from "react";
import { getTodo } from "../Redux/todos/todos.api";
import { useLocation,useNavigate } from "react-router-dom";
import { getTodoId } from '../Redux/todos/todos.api';
import { EditPage } from "./EditPage";

export const Todos = () => {
  const todos = useSelector((state) => state.todos.data);
  const isLoading = useSelector((state) => state.todos.isLoading)
  const dispatch = useDispatch();
 

  
  const [isEditModeOn, setisEditModeOn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getTodo)
  }, [])

  const onEditItem  = (todo) =>{
    dispatch(getTodoId(todo.id))
    navigate(`/todo/${todo.id}`)
    // setisEditModeOn(!isEditModeOn)
  }

  {isLoading && <h1>........loading</h1>}
  return (
    <>
      <h1>Todos</h1>
      <TodoInput />
      <table>
              <thead>
                <th>S.No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Tags</th>
                {/* <th>Actions</th> */}
              </thead>
      {todos.map((todo) => {
        return (
          <tbody key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.formData.title}</td>
            <td>{todo.formData.description}</td>
            <td>{todo.formData.category}</td>
            <td>{todo.formData.tags}</td>
          </tbody>
        );
      })}
       </table>
    </>
  );
};
