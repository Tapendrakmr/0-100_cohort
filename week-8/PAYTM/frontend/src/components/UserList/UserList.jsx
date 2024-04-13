import {useEffect,useState} from 'react'
import axios from '../../Network/axios'

const UserList = () => {
    const [userList,setUserList]=useState([])
    const fetchAllUser=async ()=>{
        const token=localStorage.getItem('token')
        const response=await axios.get('/user/list',{headers:{'Authorization':`${token}`}})
        console.log("user list",response)
        if(response.status===200){
            setUserList(response.data.data)
        }
    }
    useEffect(()=>{
        fetchAllUser()
    },[])
  return (
    <div>
        {userList.length<1?(<h1>No User Found</h1>):
        (
            userList.map((user)=>{
                return(
                    <div key={user._id} className='p-5 m-5 border border-success rounded bg-slate-200'>
                        <h1> First Name : {user.firstName}</h1>
                        <h1> Last Name : {user.lastName}</h1>
                        <h1> Email Name : {user.email}</h1>
                    </div>
                )
            })
        ) }
    </div>
  )
}

export default UserList