import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../Redux/register/register.api";

export const Register = () => {

  const data = useSelector((state) => state.register.data);
  // const { error } = registerState;

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
    // console.log(formData);
    dispatch(registration(formData))
    console.log(data);
    if(data.error=== false){
          navigate('/login')
    }else{
       setUser(data.message)
    }
  }

  // useEffect(() =>{
  //   if(!error){
  //     navigate('/login')
  //   }

  // }, [registerState])
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
       <h1>{user}</h1>
    </div>
  );
};
