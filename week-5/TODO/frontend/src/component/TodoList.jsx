// import React from 'react'
import {Link} from 'react-router-dom'
const TodoList = ({todos,updateStatus,handleDelete}) => {
    console.log('todos',todos)
  return (
    <div>
    {todos.map((todo) => (
      <div key={todo.id} style={{ display: "flex",flexDirection:'column', margin: 10 }}>
        <Link to={`/todos/${todo.id}`}>
          <div>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
          </div>
        </Link>
        
        <div onClick={(e)=>e.stopPropagation()} style={{margin:10}}>
          <button onClick={() => {
          
            updateStatus(todo.id, todo.status);
          }}>{todo.status}</button>
          <button onClick={() => {
          
            handleDelete(todo.id);
          }}>Delete</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default TodoList