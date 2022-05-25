import axios from "axios";
import { v4 } from "uuid";
import { addTodoRequest, addTodoSuccess, addTodoError } from "./todos.action";
import {getTodoRequest,getTodoSuccess,getTodoError} from "./todos.action";

export const getTodo =() => (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("https://todo-create-app.herokuapp.com/todos")
    .then((r) => {
      console.log("get data"+ r);
      dispatch(getTodoSuccess(r.data));
    })
    .catch((error) => {
      dispatch(getTodoError(error));
      console.log(error);
    });
};

export const addTodo = (formData) => (dispatch) => {
  dispatch(addTodoRequest());
  axios
    .post("https://todo-create-app.herokuapp.com/todos", {
      formData: formData
    })
    .then((r) => {
      // console.log(r.data);
      dispatch(addTodoSuccess(r.data));
    })
    .catch((error) => {
      dispatch(addTodoError(error));
      console.log(error);
    });
};

export const getTodoById = (id) =>(dispatch) =>{
  axios
  .get(`https://todo-create-app.herokuapp.com/todos/${id}`)
  .then((r) => {
    console.log("get data"+ r);
    dispatch(getTodoSuccess(r.data));
  })
  .catch((error) => {
    dispatch(getTodoError(error));
    console.log(error);
  });
}

