import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todos/todos.api";
import { getTodo } from "../Redux/todos/todos.api";

export const TodoInput = () => {
  // const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
  });
  useEffect(() => {
    dispatch(getTodo)
  }, [])

  const handleChange = (e) => {
      console.log(e.target.id);
      console.log(e.target.value);
    const { id, value, checked, type } = e.target;
    console.log(id, value);
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };
  const dispatch = useDispatch();

  const {title,description,category,tags} = formData;
  // const payloadjson = JSON.stringify(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   dispatch(addTodo({title,description,category,tags}))
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      id="title"
      placeholder="Enter title"
      value={title}
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
    <label>
     Category:
      <select id="category" onChange={handleChange} value={category}>
        <option value="">Select Category</option>
        <option value="todo">Todo</option>
        <option value="In-Progess">In-Progress</option>
        <option value="Done">Done</option>
      </select>
      <br />
    </label>
    <label>
     Tags:
      <select id="tags" onChange={handleChange} value={tags}>
        <option value="">Select Tag</option>
        <option value="Official">Official</option>
        <option value="Personal">Personal</option>
        <option value="others">Others</option>
      </select>
      <br />
    </label>
    <br />
    <input type="submit" value="Submit" />
  </form>
  );
};
