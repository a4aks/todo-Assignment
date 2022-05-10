import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/auth/auth.api";

export const Login = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isLoading, error, isUserLoggedIn } = authState;

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);

    // fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    //   method: "POST",
    //   body: JSON.stringify(login),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setlogin(res.token);
    //     setLogin(login);
    //   })
    //   .catch((err) => console.log(err));
    dispatch(login({username,password}))
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
