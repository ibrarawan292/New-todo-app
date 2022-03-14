import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



const Detail = () => {

  let { title } = useParams()


  const [listItems, setListItems] = useState()

  



  const todo = listItems.find(todo => todo.title === title)

  return (
    <div className='container'>

      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p className={`badge bg-${todo.status === 'completed' ? 'success' : 'danger'}`}>{todo.status}</p>
      <p>{todo.author}</p>

    </div>
  )
}

export default Detail