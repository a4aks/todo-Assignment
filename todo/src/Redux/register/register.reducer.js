import {
 REGISTRATION_SUCCESS,
} from "./register.actionType";
import { initialState } from "./register.constants";

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case REGISTRATION_SUCCESS: {    
      return {
        ...state,
        error:payload.error,
        message:payload.message
      };
    }

    // case USER_LOGIN_ERROR: {
    //   updateValue("token", payload.token);
    //   return {
    //     ...state,
    //     isUserLoggedIn: false,
    //     isLoading:false,
    //     error:true,
    //   };
    // }

    // case USER_LOGOUT: {
    //     updateValue("token","");
    //     return {
    //       ...state,
    //       isUserLoggedIn: false,
    //       token: "",
    //     };
    //   }
    default:
      return state;
  }
};

export { registerReducer };
