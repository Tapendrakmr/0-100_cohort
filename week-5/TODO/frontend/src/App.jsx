// import Todo from "./pages/Todo"
// import Wrapper from "./pages/Wrapper/Wrapper"
import React,{Suspense} from "react"
const Todo = React.lazy(()=>import( "./pages/Todo/Todo"))
const  TodoDetail = React.lazy(()=> import('./pages/Todo/TodoDetails'));
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recoil from "./pages/Recoil/Recoil";

function App() {
  return (
    <>
    {/* <Todo/> */}
      {/* <Wrapper/> */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/todos/:todoId" element ={<TodoDetail/>} />
          <Route exact path="/recoil" element ={<Recoil/>} />
          
         <Route exact path="/" element={<Todo/>} /> 
          
        </Routes>
        </Suspense>
       
      </Router>
    </>
  )
}

export default App
