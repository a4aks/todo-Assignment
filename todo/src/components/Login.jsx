import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,NavLink} from 'react-router-dom';
import { login } from "../Redux/auth/auth.api";

export const Login = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isLoading, error, isUserLoggedIn } = authState;
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const[status,setlogin] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login)
    dispatch(login({username,password}))
    if(error){
      console.log("Register YourSelf")
      setlogin(error)
    }else{
      navigate("/register")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN FORM</h1>
          <input
            type="string"
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.currentTarget.value)}
          />
        <div>
        <input type = "submit" value = "Login" />
        </div>
      </form>
    </div>
  );
};
