import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./todos.actionType";
import { v4 } from "uuid";

export const getTodoRequest = () => ({
    type: GET_TODO_REQUEST,
  });
  
  export const getTodoSuccess = (payload) => ({
    type: GET_TODO_SUCCESS,
    payload,
  });
  
  export const getTodoError = (error) => ({
    type: GET_TODO_ERROR,
    payload: error,
  });
export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
});

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

export const addTodoError = (error) => ({
  type: ADD_TODO_ERROR,
  payload: error,
});

// export const addTodo =  (value) =>( {
//     type:ADD_TODO,
//     payload :{
//         id : v4(),
//         value,
//     },
// });


