import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateTodo } from '../Redux/todos/todos.api';
import { getTodoId } from '../Redux/todos/todos.api';

export const EditPage = () => {

  const params = useParams();
  console.log(params)
  
  const dispatch = useDispatch()
  //  useEffect(() =>{
  //     dispatch(getTodoId(params.id))
  //  },[params])
   const todo = useSelector((state) => state.todos.todo)
   console.log(todo)
   const isLoading = useSelector((state) => state.todos.isLoading)
  console.log(todo.formData.title)
  const [formData, setFormData] = useState({
    title: todo.formData.title,
    description: todo.formData.description,
    category: todo.formData.category,
    tags: todo.formData.tags
  });
 

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

const {title,description,category,tags} = formData;
// const payloadjson = JSON.stringify(formData);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
 dispatch(updateTodo({title,description,category,tags},todo.id))
};
{isLoading && <h1>........loading</h1>}
  return (
    <div>
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
    </div>
  )
}
