import axios from "../../Network/axios"
import { useEffect,useState } from "react"
import {useNavigate} from 'react-router-dom'

import UserList from "../../components/UserList/UserList"
const Dashboard = () => {
  const [loggedInUser,setLoggedInUser]=useState(null)
  const navigate=useNavigate()

  const fetchData=async ()=>{
    try{
      const token=localStorage.getItem("token")
      if(!token){
        navigate('/signin')
        return
      }
      const response =await axios.get("/user/profile",{
        headers:{
          Authorization:`${token}`
        }
      })
      setLoggedInUser(response.data.data[0])
      console.log("response",response)
      console.log("loggedIn",loggedInUser)
    }catch(err){
      console.log("error",err)
    }
  }
  useEffect(()=>{
 
  fetchData()
  },[])
   
  const logout=(e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    navigate('/signin')
  }
  return (
    <div>
      {!loggedInUser?(
        <div>Loading...</div>
      ):(
        <div className="dashboard">
          <div className="header flex justify-between mx-4 py-3 bg-gray-200">
            <div className="userDetails">
                Hello {loggedInUser.firstName} {loggedInUser.lastName}
            </div>
            <div className="logout bg-green-300 px-3 py-1 rounded-md">
                <button onClick={logout}>Logout</button>
            </div>
          </div>
          <br></br>
          <UserList/>
        </div>
      )}
    </div>
  )
}

export default Dashboard