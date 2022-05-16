import { getValue } from "../../utils/localstorage";

export const initialState = {
        isUserLoggedIn: getValue("token") ? true : false,
        token:getValue("token"),
        error:false,
};

