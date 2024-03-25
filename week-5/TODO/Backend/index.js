const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
function generateRandomString(length) {
    return Math.random().toString(36).substr(2, length);
  }
let todosList=[
    {
        id:generateRandomString(10),
        title:'todo1',
        description:'todo1 description',
        status:'pending'
    }
]

app.post('/todo/add',(req,res)=>{
   const todo=req.body
   todo['id'] =generateRandomString(10)
    todosList.push(todo)
    return res.json({
        data:todosList,
        message:"Todos add successfully"
    })
})
app.put('/todo/status/:id',(req,res)=>{
    const id=req.params.id
    const status=req.body.status
     const todoIndex=todosList.findIndex(todo=>todo.id==`${id}`)
     for(let i=0;i<todosList.length;i++){
         if(todosList[i].id==id){
             todosList[i].status=status
         }
     }
     return res.json({
         data:todosList,
         message:"Todos add successfully"
     })
 })
 app.get('/todoDetails/:id',(req,res)=>{
    const id=req.params.id
    console.log('id',id)
     const todoIndex=todosList.findIndex(todo=>todo.id==`${id}`)
    if(todoIndex==-1){
        return res.json({
            message:"Todo not found"
        })
    }
     return res.json({
         data:todosList[todoIndex],
         message:"Todos detail fetch successfully"
     })
 })
 app.delete('/todo/:id',(req,res)=>{
    const id=req.params.id
    todosList=todosList.filter(todo=>todo.id!==id)
     return res.json({
         data:todosList,
         message:"Todos add successfully"
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