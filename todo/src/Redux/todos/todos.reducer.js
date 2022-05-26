import { initialState } from "./todos.constants";
import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_ID,
  UPDATE_TODO,
  GET_TODO_TODO,
  GET_TODO_PROGRESS,
  GET_TODO_DONE,
} from "./todos.actionType";

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST: {
      return { ...state, isLoading: true, error: false };
    }

    case GET_TODO_SUCCESS: {
      return {
        ...state,
       data: payload
      };
    }
    case GET_TODO_ERROR: {
      return { ...state, isLoading: false, error: true };
    }
    // todos
    // case ADD_TODO_REQUEST: {
    //   return { ...state, isLoading: true, error: false };
    // }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    // case ADD_TODO_ERROR: {
    //   return { ...state, isLoading: false, error: true };
    // }

    case GET_TODO_ID :{
      return {
        ...state,
        todo:payload
      }
    }
    case UPDATE_TODO :{
       return{
         ...state,
         data: payload
       }
    }

    case GET_TODO_TODO :{
      return{
        ...state,
        todos:payload
      }
    }

    case GET_TODO_PROGRESS :{
      return{
        ...state,
        progress:payload
      }
    }
    case GET_TODO_DONE :{
      return{
        ...state,
        done:payload
      }
    }
    default:
      return state;
  }
};
export { todosReducer };
