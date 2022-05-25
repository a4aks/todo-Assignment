import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
import { registration } from "../Redux/register/register.api";

export const Register = () => {

  const {error,message} = useSelector((state) => state.register);
  console.log(error)
  console.log(message)

 
  const[user,setUser] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });
  const handleChange = (e) => {
    const { id, value} = e.target;
    setFormData({
        ...formData,
      [id]: value,
    });
  };
  const {name,email,password,username,mobile,description} = formData;
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registration(formData))
    if(error){
     navigate("/login")
    }else{
     setUser(message)
    }
  }

 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>REGISTERATION FORM</h2>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
        />
         <br />
        <input
          type="text"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          id="mobile"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          id="description"
          placeholder="Enter Description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <input type = "submit" value = "submit" />
      </form>
      {/* {error ? navigate("/login") :{message}} */}
    </div>
  );
};
