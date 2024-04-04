
import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Profile from './pages/Profile/Profile'

import Home from './pages/Home'
import BackgroundChanger from './pages/BackgroundChanger/BackgroundChanger'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route  path='/profile' element={<Profile/>}/>
          <Route  path='/backgroundChanger' element={<BackgroundChanger/>}/>
          <Route  path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
