import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'


function RegisterPage() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault()
        const userObject ={
            username:userName,
            password:password
        }

        try{
            await axios.post(`http://localhost:3001/register`, userObject).then((data)=>{
              if(data.statusText == "Created"){
                navigate(`/login`);
              }  
              
        
            })
         } catch(err){
           console.error(err)
         }
        }
    


  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
            setUsername(e.target.value)
        }}
        />
        <label>Password</label>
        <input type="text" onChange={(e)=>{
            setPassword(e.target.value)
        }}
        />
        <button type="Submit">Submit </button>
      </form>

    </div>
  );
}

export default RegisterPage;