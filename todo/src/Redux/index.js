import { createStore,applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const thunk = store => next => action => {
//   if(typeof action === 'function'){
//     console.log("this is a function");
//         return action(store.dispatch, store.getState);
//   }else{
//     console.log("this is a object");
//     return next(action);
//   }
// }

// const thunk = (store) => (next) =>(action) =>{

//     if(typeof action === "function"){
//         console.log("this is a function")
//         return action(store.dispatch, store.getState)

//     }else{
//         console.log("this is a object")
//         return next(action);
//     }
   
// }
export const store = createStore(reducer, createComposer(applyMiddleware(thunk)));
