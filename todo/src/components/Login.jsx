import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom';

export const Login = () => {
 
  // const [login, setLogin] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setLogin({
  //     ...login,
  //     [id]: value,
  //   });
  // };
  // const { username, password } = login;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(login);

  //   fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
  //     method: "POST",
  //     body: JSON.stringify(login),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setlogin(res.token);
  //       setLogin(login);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <h2>LOGIN PAGE</h2>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <Link to = {`/home/${login.username}`}> LOGIN</Link>
      </form> */}
      <h1>Login</h1>
    </div>
  );
};
