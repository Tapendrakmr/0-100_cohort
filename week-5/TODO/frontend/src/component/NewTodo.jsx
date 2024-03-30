// import React from 'react'

import React from "react"


const NewTodo = ({onSubmit}) => {
  const [title,setTitle]=React.useState("")
  const [description,setDescription]=React.useState("") 

  const handleSubmit=()=>{
    
    const todo={
      title:title,
      description:description,
      status:'pending'
    }
    onSubmit(todo)
    setTitle("")
    setDescription("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new todo" onChange={(e)=>setTitle(e.target.value)} value={title} style={{ padding:5,margin:2}}/>
      <input type="text" placeholder="Add description of task"  onChange={(e)=>setDescription(e.target.value)} value={description} style={{ padding:5,margin:2}}/>
      <button type="submit"  style={{ padding:5,margin:2}}>Add todo</button>
      </form>
      
    </div>
  )
}

export default NewTodo