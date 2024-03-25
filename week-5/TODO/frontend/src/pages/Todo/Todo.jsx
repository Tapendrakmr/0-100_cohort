import { useEffect, useState } from 'react'

import NewTodo from '../../component/NewTodo'
import TodoList from '../../component/TodoList'
const Todo = () => {
    const [todos,setTodos]=useState([])
    useEffect(()=>{
       
        fetchData()
    },[])
    const fetchData=async()=>{
      const result= await fetch('http://localhost:3000/todo/list')
      const data=await result.json()
      console.log('data',data.data)
      setTodos(data.data)
    }
  const handleCreate =async (newTodo)=>{
    try{
      await fetch('http://localhost:3000/todo/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newTodo)
      })
      fetchData()
    }catch(err){
      console.log('err',err)
    }
  }
  const handleStatus=async (id,value)=>{
    try{
      console.log('complete',id,value)
      let finalStatus=value=='completed'?'pending':'completed'
      console.log(finalStatus)
      await fetch(`http://localhost:3000/todo/status/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({status:finalStatus})
      })
      fetchData()
    }catch(err){
      console.log('err',err)
    }
  }
  const handleDelete=async (id)=>{
    try{
     
      await fetch(`http://localhost:3000/todo/${id}`,{
        method:'Delete',
        headers:{
          'Content-Type':'application/json'
        },
      })
      fetchData()
    }catch(err){
      console.log('err',err)
    }
  }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
    {/* <center> */}
      <h1>To Do App</h1>
      {/* </center> */}
    <div className='new_to_do'>
      <NewTodo onSubmit={handleCreate}/>
    </div>
    <div className='to_do_list'>
      <TodoList todos={todos} updateStatus={handleStatus} handleDelete={handleDelete} />
    </div>
      
    </div>
  )
}

export default Todo