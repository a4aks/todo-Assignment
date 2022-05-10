import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";
import { useEffect } from "react";
import { getTodo } from "../Redux/todos/todos.api";

export const Todos = () => {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo)
  }, [])

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo todo ={todo}/>
          </div>
        );
      })}
    </div>
  );
};
