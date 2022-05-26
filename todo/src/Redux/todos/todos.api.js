import axios from "axios";
import { v4 } from "uuid";
import { addTodoRequest, addTodoSuccess, addTodoError, updateTodoById, getTodoByTodo, getTodoByProgress, getTodoByDone } from "./todos.action";
import {getTodoRequest,getTodoSuccess,getTodoError,getTodoById} from "./todos.action";

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

export const getTodoId = (id) =>(dispatch) =>{
  dispatch(getTodoRequest());
  axios
  .get(`https://todo-create-app.herokuapp.com/todos/${id}`)
  .then((r) => {
    console.log("get data"+ r);
    dispatch(getTodoById(r.data));
  })
  .catch((error) => {
    dispatch(getTodoError(error));
    console.log(error);
  });
}

export const updateTodo = (formData,id) =>(dispatch) =>{
  axios
  .put(`https://todo-create-app.herokuapp.com/todos/${id}`, {
    formData: formData
  })
  .then((r) => {
    console.log(r.data);
    dispatch(updateTodoById(r.data));
  })
  .catch((error) => {
    dispatch(addTodoError(error));
    console.log(error);
  });
}

export const getTodosTodo = () => (dispatch) =>{
  axios
  .get(`https://todo-create-app.herokuapp.com/todos?formData.category=todo`)
  .then((r) => {
    console.log("get data"+ r);
    dispatch(getTodoByTodo(r.data));
  })
  .catch((error) => {
    dispatch(getTodoError(error));
    console.log(error);
  });
}
export const getTodosProgress = () => (dispatch) =>{
  axios
  .get(`https://todo-create-app.herokuapp.com/todos?formData.category=In-Progess`)
  .then((r) => {
    console.log("get data"+ r);
    dispatch(getTodoByProgress(r.data));
  })
  .catch((error) => {
    dispatch(getTodoError(error));
    console.log(error);
  });
}
export const getTodosDone = () => (dispatch) =>{
  axios
  .get(`https://todo-create-app.herokuapp.com/todos?formData.category=Done`)
  .then((r) => {
    console.log("get data"+ r);
    dispatch(getTodoByDone(r.data));
  })
  .catch((error) => {
    dispatch(getTodoError(error));
    console.log(error);
  });
}

