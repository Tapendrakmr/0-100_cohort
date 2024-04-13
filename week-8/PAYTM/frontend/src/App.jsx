import './App.css'
import {BrowserRouter  as Router, Routes,Route} from "react-router-dom"
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import Dashboard from './pages/Dashboard/Dashboard'
import SendMoney from './pages/SendMoney/SendMoney'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/sendMoney" element={<SendMoney/>}/>
        </Routes>
      </Router>       
    </>
  )
}

export default App
