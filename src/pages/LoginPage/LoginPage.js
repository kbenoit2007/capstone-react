import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import axios from 'axios'




function LoginPage() {
  const [loginUserName, setLoginUserName] = useState("")
const [loginPassword, setLoginPassword] = useState("")
const navigate = useNavigate();

  async function handleSubmit(event){
    event.preventDefault()
  //  console.log(event)
 //   console.log(loginUserName)
    const userObject ={
        username:loginUserName,
        password:loginPassword
    } 

    console.log(userObject)

    try{
        await axios.post(`http://localhost:3001/user`, userObject).then((data)=>{
          console.log(data)
          console.log(JSON.stringify(data.data[0].id))
          navigate(`../user/${data.data[0].id}`);
        //  navigate('/warehouses');
        })
     } catch(err){
       console.error(err)
     }
    }



  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
            setLoginUserName(e.target.value)
        }}
        />
        <label>Password</label>
        <input type="text" onChange={(e)=>{
            setLoginPassword(e.target.value)
        }}
        />
        <button type="Submit">Submit </button>
      </form>
      {/* <Link to="/user/777">
        <h1>The Profile is here</h1>
      
      </Link> */}
    </div>
  );
}

export default LoginPage;