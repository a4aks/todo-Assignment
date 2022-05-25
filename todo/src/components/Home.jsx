import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import { getTodo } from "../Redux/todos/todos.api";

export const Home = () => {
  
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo())
  }, [])

  return (
    <div>
      {todos.map((todo) =>{
        return(
          <div key = {todo.id}>
             <h3>{todo.formData.title}</h3>
             <h3>{todo.formData.description}</h3>
          </div>
        )
      })}
      <div>Home Page</div>
    </div>
  );
};
