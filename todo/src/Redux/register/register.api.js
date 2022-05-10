
import axios from "axios";
import { registrationSuccess} from "./register.action";

export const registration = (params) => (dispatch) => {
    // dispatch(loginRequest())
    axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", params)
    .then((r) =>{
        console.log("r.data", r.data);
        dispatch(registrationSuccess(r.data))
    })
    .catch((error) =>{
        // dispatch(loginError(error))
        console.log(error);
    });
}; 