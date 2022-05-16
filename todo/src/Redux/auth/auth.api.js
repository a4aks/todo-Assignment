
import axios from "axios";
import {loginRequest , loginSuccess, loginError} from "./auth.action";

export const login = (params) => (dispatch) => {
    dispatch(loginRequest())
    axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", params)
    .then((r) =>{
        console.log("r.message", r.message);
        dispatch(loginSuccess(r.data))
    })
    .catch((error) =>{
        console.log(error.message);
        dispatch(loginError(error.message))
    });
}; 