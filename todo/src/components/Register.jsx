import React, {useState} from "react";

export const Register = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   username: "",
  //   mobile: "",
  //   description: "",
  // });
  // const handleChange = (e) => {
  //   const { id, value} = e.target;
  //   setFormData({
  //       ...formData,
  //     [id]: value,
  //   });
  // };
  // const {name,email,password,username,mobile,description} = formData;
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(formData);

  //   fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       // console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
      <h1>Registration Page</h1>
    </div>
  );
};
