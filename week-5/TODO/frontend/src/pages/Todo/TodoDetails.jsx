import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
const TodoDetails = () => {
    const {todoId} =useParams()
    console.log('todo',todoId)
    const [todo,setTodo] = useState(null)

    const fetchTodoDetails=async ()=>{
        const response=await fetch(`http://localhost:3000/todoDetails/${todoId}`)
        const data=await response.json()
        console.log(data)
        setTodo(data.data)
    }
    useEffect(()=>{
        fetchTodoDetails()
    },[todoId])
    if(!todo){
        return <h1>Loading...</h1>
    }
    console.log('todo',todo)
  return (
   <div>
    <h1>Todo Details</h1>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <p>{todo.status}</p>
   </div>
  )
}

export default TodoDetails