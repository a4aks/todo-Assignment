import axios from "axios";
import { v4 } from "uuid";
import { addTodoRequest, addTodoSuccess, addTodoError } from "./todos.action";
import {getTodoRequest,getTodoSuccess,getTodoError} from "./todos.action";

export const getTodo = (value) => (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("http://localhost:3000/todos")
    .then((r) => {
      console.log(r.data);
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
    .post("http://localhost:3000/todos", {
      formData:formData
    })
    .then((r) => {
      console.log(r.data);
      dispatch(addTodoSuccess(r.data));
    })
    .catch((error) => {
      dispatch(addTodoError(error));
      console.log(error);
    });
};

