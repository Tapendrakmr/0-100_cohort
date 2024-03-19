const express=require('express')
const app=express()
app.use(express.json())

const todosList=[]

app.post('/todo/add',(req,res)=>{
   const todo=req.body
    todosList.push(todo)
    return res.json({
        data:todo,
        message:"Todos add successfully"
    })
})
app.put('/todo/:todoId',(req,res)=>{
    const todoId=req.params
     
     return res.json({
         data:todoId,
         message:"Todos updated successfully"
     })
 })
app.get('/todo/list',(req,res)=>{
    return res.json({
        data:todosList,
        message:"Todos list fetch successfully"
    })
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})