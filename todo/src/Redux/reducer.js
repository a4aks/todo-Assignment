
import { combineReducers } from "redux";
// import {todosReducer}  from "./todos/todos.reducer";
import {authReducer} from "./auth/auth.reducer";
import { registerReducer } from "./register/register.reducer";

export default combineReducers({
    // todos: todosReducer,
    auth:authReducer,
    register: registerReducer
})