import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import LoginRegister from '../../components/LoginRegister/LoginRegister';


function RegisterPage() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

 
    


  return (
    <div>
      <LoginRegister />
      {/* <h1>RegisterPage</h1>
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
      </form> */}

    </div>
  );
}

export default RegisterPage;