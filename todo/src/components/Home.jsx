import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import { getTodo } from "../Redux/todos/todos.api";
import styles from "./Home.module.css"
import { Home1 } from "./Home1";
import { Home2 } from "./Home2";
import { Home3 } from "./Home3";

export const Home = () => {
  
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo())
  }, [])

  return (
    <div className={styles.home}>
      {/* {todos.map((todo) =>{
        return(
          <div key = {todo.id}>
             <h3>{todo.formData.title}</h3>
             <h3>{todo.formData.description}</h3>
          </div>
        )
      })}
      <div>Home Page</div> */}
      <Home1 />
      <Home2/>
      <Home3 />
    </div>
  );
};
