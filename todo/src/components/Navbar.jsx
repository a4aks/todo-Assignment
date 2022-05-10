import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import {logout} from "../Redux/auth/auth.action";

export const Navbar = () => {
  // const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  // const dispatch = useDispatch();

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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>

      {/* {isUserLoggedIn && (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )} */}
    </div>
  );
};
