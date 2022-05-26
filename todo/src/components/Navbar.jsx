import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {logout} from "../Redux/auth/auth.action";

export const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const log = () =>{
    dispatch(logout())
    navigate("/")
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        gap: "30px",
        // width:"200px",
        // height:"100vh",
        border: "1px solid black"
      }}
    >
      <NavLink to="/">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to = "/summary">Summary</NavLink>
      <NavLink to = "/todo">Create Todo</NavLink>
      <NavLink to="/home">Home</NavLink>


      {isUserLoggedIn && (
        <button onClick={() => log()}>Logout</button>
      )}
    </div>
  );
};
