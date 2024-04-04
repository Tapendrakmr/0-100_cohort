
import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Profile from './pages/Profile/Profile'

import Home from './pages/Home'
import BackgroundChanger from './pages/BackgroundChanger/BackgroundChanger'
import ParaGenerator from './pages/ParaGenerator/ParaGenerator'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route  path='/profile' element={<Profile/>}/>
          <Route  path='/backgroundChanger' element={<BackgroundChanger/>}/>
          <Route  path='/paraGenerator' element={<ParaGenerator/>}/>
          <Route  path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
