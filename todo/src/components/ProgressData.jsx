import React from 'react'

export const ProgressData = ({todo}) => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
    <div> Title : {todo.formData.title}</div>
    <div>Description: {todo.formData.description}</div>
</div>
  )
}
