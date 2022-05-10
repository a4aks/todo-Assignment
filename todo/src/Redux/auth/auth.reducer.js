import { updateValue } from "../../utils/localstorage";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./auth.actionType";
import { initialState } from "./auth.constants";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Auth
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading:true,
        error:false,
      };
    }

    case USER_LOGIN_SUCCESS: {
      updateValue("token", payload.token);
      return {
        ...state,
        isUserLoggedIn: true,
        isLoading:false,
        error:false,
        ...payload,
      };
    }

    case USER_LOGIN_ERROR: {
      updateValue("token", payload.token);
      return {
        ...state,
        isUserLoggedIn: false,
        isLoading:false,
        error:true,
      };
    }

    case USER_LOGOUT: {
        updateValue("token","");
        return {
          ...state,
          isUserLoggedIn: false,
          token: "",
        };
      }
    default:
      return state;
  }
};

export { authReducer };
