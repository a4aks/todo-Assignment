import React from 'react'
import { useParams } from 'react-router-dom'

export const EditPage = () => {

  const params = useParams();
  console.log(params)
  return (
    <div>EditPagee</div>
  )
}
