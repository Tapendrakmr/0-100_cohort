import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from '../../Network/axios'

import BottomWarning from "../../components/BottomWarning"
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import InputBox from "../../components/InputBox"
import Subheading from "../../components/Subheading"

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem("token")
      if(token){
        navigate('/dashboard')
        return
      }
  },[])


  const handleSubmit=async (e)=>{
    e.preventDefault();
    const signUpBody={
      email:email,
      password:password
    }
    const response =await axios.post('/user/signIn',signUpBody)
    console.log('response',response)
    if(response.status===200){
      localStorage.setItem('token',response.data.token)
      setEmail("")
      setPassword("")
      navigate('/dashboard')
    }
  }
  return (
    <div className="signup_Page bg-slate-300 h-screen flex justify-center">
      <div className="signup_Form flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <div className="header">
            <Heading label="Sign In" />
            <Subheading label="Enter your credentials to access your account"/>
          </div>
          <div className="signinForm">
            <InputBox label="Email" placeholder="tapendra@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            <InputBox label="Password" placeholder="Abc@12345" onChange={(e)=>setPassword(e.target.value)}/>
            <Button lable="SignIn" onClick={handleSubmit}/>
          </div>
          <div className="bottom">
            <BottomWarning label="Don't have an account? " buttontext="Sign Up" to="/signup"/>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Signin