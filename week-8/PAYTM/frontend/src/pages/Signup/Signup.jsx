import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from '../../Network/axios'
import BottomWarning from "../../components/BottomWarning"
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import InputBox from "../../components/InputBox"
import Subheading from "../../components/Subheading"


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  useEffect(()=>{
    const token=localStorage.getItem("token")
      if(token){
        navigate('/dashboard')
        return
      }
  },[])
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signUpBody={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    console.log('signUpBody',signUpBody)
    const response =await axios.post('/user/signup',signUpBody)
    console.log('response',response)
    if(response.status===200){
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      navigate('/signin')
     
    }
  }
  return (
    <div className="signup_Page bg-slate-300 h-screen flex justify-center">
      <div className="signup_Form flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <div className="header">
            <Heading label="Sign up" />
            <Subheading label="Enter your information to create an account"/>
          </div>
          <div className="signupForm">
            <InputBox label="First Name" placeholder="John" onChange={(e)=>setFirstName(e.target.value)}/>
            <InputBox label="Last Name" placeholder="Kumar" onChange={(e)=>setLastName(e.target.value)}/>
            <InputBox label="Email" placeholder="tapendra@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            <InputBox label="Password" placeholder="Abc@12345" onChange={(e)=>setPassword(e.target.value)}/>
            <Button lable=" Signup" onClick={handleSubmit}/>
          </div>
          <div className="bottom">
            <BottomWarning label="Already have an account? " buttontext=" Sign in" to="/signin"/>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Signup