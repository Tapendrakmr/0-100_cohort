// import React from 'react'

const TodoList = ({todos,updateStatus,handleDelete}) => {
    console.log('todos',todos)
  return (
    <div>{todos.map((todo)=>{
        return( 
        <div key={todo.id} style={{display:"flex",justifyContent:"space-between",margin:10}}>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
            <button onClick={()=>{
              updateStatus(todo.id,todo.status)
            }}>{todo.status}</button>
             <button onClick={()=>{
              handleDelete(todo.id)
            }}>Delete</button>
        </div>
        
        )
    })}
    </div>
  )
}

export default TodoList